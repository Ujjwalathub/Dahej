"""
API Endpoints

Defines all REST API routes for the application.

Contract (post startup-valuation pivot):
- Startup payloads (``StartupData``, 34 business features)   -> USD valuation
  served by the corrected startup model.
- Legacy dowry payloads (``DowryData``, 25 equal-weightage features)
  -> INR dowry valuation served by the Phase-4 equal-weightage model.
Dispatch happens on the *validated* payload type, so no default-fill
guesswork ever feeds the model.
"""

from fastapi import APIRouter, HTTPException, Request, status
from typing import Any, Dict, List, Optional, Union
import logging

from app.schemas.request import (
    BatchPredictionRequest,
    DowryData,
    InferredPredictItem,
    StartupData,
    PredictionRequest,
    PredictItem,
)
from app.schemas.response import (
    PredictionResponse,
    BatchPredictionResponse,
    HealthResponse,
    ModelInfo,
)
from app.services.prediction_service import get_prediction_service
from app.core.config import settings

logger = logging.getLogger(__name__)

# Create router
router = APIRouter()


def _is_loaded(svc) -> bool:
    return bool(svc is not None and (
        svc.is_loaded() if callable(getattr(svc, "is_loaded", None)) else False
    ))


def _get_service(request: Request) -> Optional[Any]:
    """Retrieve the startup/ prediction service from lifespan state.

    Prefers ``request.app.state.prediction_service`` populated by the
    lifespan handler; falls back to the module-level lazy singleton so
    TestClient usage without lifespan still works. Returns None only when
    the prediction engine is genuinely unavailable (rendered as 503).
    """
    try:
        svc = getattr(request.app.state, "prediction_service", None)
        if _is_loaded(svc):
            return svc
    except Exception:
        pass
    try:
        svc = get_prediction_service()
        return svc if _is_loaded(svc) else None
    except Exception:
        return None


def _get_service_for_payload(request: Request, payload: Union[StartupData, DowryData]) -> Any:
    """Resolve the correct service for a validated payload instance."""
    svc = _get_service(request)
    if isinstance(payload, DowryData):
        # Dowry payloads are served by the legacy equal-weightage service,
        # which lives in its own lazy singleton (secondary path).
        try:
            from app.services.prediction_service import PredictionService
            dowry = getattr(request.app.state, "dowry_service", None)
            if not _is_loaded(dowry):
                try:
                    dowry = PredictionService()
                    request.app.state.dowry_service = dowry
                except Exception as e:
                    logger.warning(f"Dowry service unavailable: {e}")
                    dowry = None
            return dowry
        except Exception as e:
            logger.warning(f"Dowry service failed to load: {e}")
            return None
    # Startup payloads use the primary service.
    return svc


@router.get(
    "/health",
    response_model=HealthResponse,
    summary="Health Check",
    description="Check if the API and ML model are running correctly",
    tags=["Health"]
)
async def health_check(request: Request) -> HealthResponse:
    """Perform health check on the API service."""
    try:
        svc = _get_service(request)
        if svc is None:
            raise HTTPException(
                status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
                detail="API is running, but machine learning models are unavailable."
            )
        return HealthResponse(
            status="healthy",
            model_loaded=True,
            version=settings.API_VERSION
        )
    except HTTPException:
        raise
    except Exception:
        logger.error("Health check failed", exc_info=True)
        raise HTTPException(
            status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
            detail="API is running, but machine learning models are unavailable."
        )


@router.get(
    "/ready",
    summary="Readiness Check",
    description="Kubernetes/Docker readiness probe endpoint",
    tags=["Health"]
)
async def readiness_check(request: Request) -> Dict:
    """Readiness probe for container orchestration."""
    try:
        svc = _get_service(request)
        if svc is None:
            raise HTTPException(
                status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
                detail="Service not ready - models not loaded"
            )
        return {"status": "ready", "model_loaded": True}
    except HTTPException:
        raise
    except Exception:
        raise HTTPException(
            status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
            detail="Service not ready"
        )


@router.get(
    "/model/info",
    response_model=ModelInfo,
    summary="Model Information",
    description="Get detailed information about the ML model",
    tags=["Model"]
)
async def get_model_info(request: Request) -> ModelInfo:
    """Get ML model metadata and performance metrics."""
    try:
        svc = _get_service(request)
        if svc is None:
            raise HTTPException(
                status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
                detail="Model not loaded"
            )

        return ModelInfo(**svc.get_model_info())

    except HTTPException:
        raise
    except Exception:
        logger.error("Failed to get model info", exc_info=True)
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to retrieve model information"
        )


@router.post(
    "/predict",
    response_model=PredictionResponse,
    summary="Single Prediction",
    description="Predict valuation for a single startup (USD) or dowry profile (INR)",
    tags=["Prediction"],
    status_code=status.HTTP_200_OK
)
async def predict_single(
    data: InferredPredictItem, request: Request
) -> PredictionResponse:
    """Predict valuation for a single profile.

    Accepts a ``StartupData`` payload (34 business features, returns USD)
    or a ``DowryData`` payload (returns INR). Empty objects {} fail with 422.
    """
    try:
        svc = _get_service_for_payload(request, data)
        if svc is None:
            raise HTTPException(
                status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
                detail="Prediction engine offline."
            )

        # mode="json" so str-enums (BusinessModel, YesNo, ...) serialize to
        # their plain string values instead of enum member objects.
        payload = data.model_dump(mode="json") if hasattr(data, "model_dump") else data
        result = svc.predict_single(payload)

        logger.info(
            "Prediction (%s): %s (confidence: %.4f)",
            type(data).__name__,
            result.get("predicted_acquisition_price_usd")
            or result.get("predicted_acquisition_price_inr")
            or result.get("predicted_valuation_usd"),
            result.get("confidence_score", result.get("model_info", {}).get("r2_score", 0.0)),
        )

        return PredictionResponse(
            success=True,
            data=result,
            message="Prediction successful"
        )

    except HTTPException:
        raise
    except ValueError as e:
        logger.warning(f"Validation error: {str(e)}")
        detail = str(e) if settings.DEBUG else "Invalid startup payload"
        raise HTTPException(
            status_code=status.HTTP_422_UNPROCESSABLE_ENTITY,
            detail=detail
        )
    except Exception:
        logger.error("Prediction failed", exc_info=True)
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Prediction failed. Please check your input data."
        )


@router.post(
    "/predict/batch",
    response_model=BatchPredictionResponse,
    summary="Batch Prediction",
    description="Predict valuations for multiple profiles (max 100)",
    tags=["Prediction"],
    status_code=status.HTTP_200_OK
)
async def predict_batch(
    payload: BatchPredictionRequest, request: Request
) -> BatchPredictionResponse:
    """Make predictions for multiple profiles (max 100, mixed types allowed)."""
    try:
        items: List[InferredPredictItem] = list(payload.items or payload.startups or [])

        if len(items) == 0:
            raise HTTPException(
                status_code=status.HTTP_422_UNPROCESSABLE_ENTITY,
                detail="Batch must contain at least 1 item"
            )
        if len(items) > 100:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Maximum 100 items allowed per batch"
            )

        predictions = []
        total_inr = 0
        total_usd = 0.0
        item: InferredPredictItem
        for item in items:
            svc = _get_service_for_payload(request, item)
            if svc is None:
                continue
            try:
                raw = item.model_dump(mode="json") if hasattr(item, "model_dump") else item
                result = svc.predict_single(raw)
                predictions.append(result)
                total_inr += int(result.get("predicted_acquisition_price_inr", 0))
                total_usd += float(result.get("predicted_valuation_usd", 0) or 0)
            except ValueError as e:
                predictions.append({"error": str(e)})
                logger.warning(f"Batch item validation error: {e}")
            except Exception as e:
                logger.error(f"Batch item prediction failed: {e}", exc_info=True)
                predictions.append({"error": "Prediction failed"})

        n_inr = sum(1 for p in predictions if "predicted_acquisition_price_inr" in p)
        n_usd = sum(1 for p in predictions if "predicted_valuation_usd" in p)

        result_block = {
            "predictions": predictions,
            "total_count": len(items),
            "average_acquisition_price": int(total_inr / n_inr) if n_inr else 0,
            "average_valuation_usd": round(total_usd / n_usd, 2) if n_usd else 0.0,
        }

        logger.info(
            "Batch prediction completed: %d items (avg INR %s / avg USD %.0f)",
            result_block["total_count"],
            result_block["average_acquisition_price"],
            result_block["average_valuation_usd"],
        )

        return BatchPredictionResponse(
            success=True,
            data=result_block,
            message=f"Batch prediction completed for {len(items)} items"
        )

    except HTTPException:
        raise
    except Exception:
        logger.error("Batch prediction failed", exc_info=True)
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Batch prediction failed. Please check your input data."
        )


@router.get(
    "/",
    summary="API Root",
    description="Welcome endpoint with API information",
    tags=["Info"]
)
async def root() -> Dict:
    """API root endpoint."""
    return {
        "message": "Startup Acquisition Valuation API",
        "version": settings.API_VERSION,
        "documentation": {
            "swagger_ui": "/docs",
            "redoc": "/redoc",
            "openapi_json": "/openapi.json"
        },
        "endpoints": {
            "health": "/health",
            "model_info": "/model/info",
            "predict": "/predict",
            "batch_predict": "/predict/batch"
        }
    }
