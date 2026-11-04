"""
Response Schemas

Pydantic models for API responses. A single ``PredictionData`` shape
covers both serving paths:

- Dowry payloads -> ``predicted_acquisition_price_inr`` /
  ``predicted_dowry_amount_inr`` + MAE-based ``prediction_range`` (INR)
- Startup payloads -> ``predicted_valuation_usd`` + empirical
  ``confidence_interval`` (USD)

Exactly one domain must be present (enforced by ``_at_least_one_domain``).
"""

from pydantic import BaseModel, ConfigDict, Field, model_validator
from typing import Any, Dict, List, Optional
from datetime import datetime


class PredictionRange(BaseModel):
    """Prediction range with confidence intervals (dowry, INR)."""

    lower_bound: int = Field(..., description="Lower bound of prediction (MAE-based, INR)")
    upper_bound: int = Field(..., description="Upper bound of prediction (MAE-based, INR)")


class ConfidenceInterval(BaseModel):
    """95% confidence interval for startup valuations (USD)."""

    lower_bound_usd: float = Field(..., description="Lower bound of valuation (USD)")
    upper_bound_usd: float = Field(..., description="Upper bound of valuation (USD)")
    confidence_level: float = Field(..., description="Confidence level (e.g. 0.95)")
    method: Optional[str] = Field(None, description="Interval estimation method")


class PredictionData(BaseModel):
    """Single prediction result data (dowry INR or startup USD)."""

    # Dowry (INR) fields
    predicted_acquisition_price_inr: Optional[int] = Field(
        None,
        description="Predicted acquisition price in INR (dowry path)"
    )
    predicted_dowry_amount_inr: Optional[int] = Field(
        None,
        description="Predicted dowry valuation in INR (dowry path)"
    )
    prediction_range: Optional[PredictionRange] = Field(
        None,
        description="MAE-based prediction range (INR, dowry path)"
    )

    # Startup (USD) fields
    predicted_valuation_usd: Optional[float] = Field(
        None,
        description="Predicted acquisition valuation in USD (startup path)"
    )
    predicted_acquisition_price_usd: Optional[float] = Field(
        None,
        description="Alias of predicted_valuation_usd (startup path)"
    )
    confidence_interval: Optional[ConfidenceInterval] = Field(
        None,
        description="95% confidence interval (USD, startup path)"
    )

    # Shared
    confidence_score: Optional[float] = Field(
        None, ge=0.0, le=1.0,
        description="Model confidence (R2 score), when reported"
    )
    model_info: Optional[Dict[str, Any]] = Field(
        None, description="Model metadata (startup path)"
    )
    prediction_metadata: Optional[Dict[str, Any]] = Field(
        None, description="Serving metadata (startup path)"
    )
    startup_index: Optional[int] = Field(
        None, description="Item index within a batch (startup path)"
    )
    error: Optional[str] = Field(
        None, description="Per-item error message (batch path)"
    )

    @model_validator(mode="after")
    def _at_least_one_domain(self):
        has_inr = any(
            getattr(self, f) is not None
            for f in ("predicted_acquisition_price_inr", "predicted_dowry_amount_inr")
        )
        has_usd = any(
            getattr(self, f) is not None
            for f in ("predicted_valuation_usd", "predicted_acquisition_price_usd")
        )
        if not (has_inr or has_usd) and self.error is None:
            raise ValueError(
                "PredictionData requires an INR or USD valuation (or an error message)"
            )
        return self

    model_config = ConfigDict(
        json_schema_extra={
            "example": {
                "predicted_valuation_usd": 45000000.0,
                "confidence_interval": {
                    "lower_bound_usd": 34070000.0,
                    "upper_bound_usd": 59400000.0,
                    "confidence_level": 0.95,
                    "method": "empirical_multiplicative_residual_quantiles",
                },
                "model_info": {
                    "model_name": "LightGBM",
                    "r2_score": 0.9724,
                    "mae_usd": 9353013.0,
                    "mape_percent": 11.87,
                },
            }
        }
    )


class PredictionResponse(BaseModel):
    """Standard response for single prediction."""

    success: bool = Field(..., description="Whether the request was successful")
    data: Optional[PredictionData] = Field(None, description="Prediction result")
    message: str = Field(..., description="Response message")
    timestamp: datetime = Field(
        default_factory=lambda: datetime.now().astimezone(),
        description="Response timestamp"
    )


class BatchPredictionData(BaseModel):
    """Batch prediction result data."""

    predictions: List[PredictionData] = Field(
        ...,
        description="List of predictions for each item"
    )
    total_count: int = Field(..., description="Total number of items")
    average_acquisition_price: Optional[int] = Field(
        None,
        description="Average INR price across dowry items (0 when none)"
    )
    average_valuation_usd: Optional[float] = Field(
        None,
        description="Average USD valuation across startup items (0 when none)"
    )

    # Coerce per-item dicts into PredictionData instances
    @model_validator(mode="before")
    @classmethod
    def _coerce_items(cls, data):
        if isinstance(data, dict) and isinstance(data.get("predictions"), list):
            preds = data["predictions"]
            data = {**data, "predictions": [
                p if isinstance(p, BaseModel) else PredictionData(**p)
                for p in preds
            ]}
        return data


class BatchPredictionResponse(BaseModel):
    """Response for batch predictions."""

    success: bool = Field(..., description="Whether the request was successful")
    data: Optional[BatchPredictionData] = Field(None, description="Batch prediction results")
    message: str = Field(..., description="Response message")
    timestamp: datetime = Field(
        default_factory=lambda: datetime.now().astimezone(),
        description="Response timestamp"
    )


class HealthResponse(BaseModel):
    """Health check response."""

    status: str = Field(..., description="Service status")
    model_loaded: bool = Field(..., description="Whether ML model is loaded")
    timestamp: datetime = Field(
        default_factory=lambda: datetime.now().astimezone(),
        description="Check timestamp"
    )
    version: str = Field(..., description="API version")


class ModelInfo(BaseModel):
    """Model information response."""

    model_type: str = Field(..., description="Type of ML model")
    components: List[str] = Field(..., description="Model components")
    r2_score: float = Field(..., description="Model R2 score on test set")
    mae: int = Field(..., description="Mean Absolute Error on test set")
    rmse: int = Field(..., description="Root Mean Squared Error on test set")
    training_samples: int = Field(..., description="Number of training samples")
    features: int = Field(..., description="Number of features")
    best_model: Optional[str] = Field(None, description="Shipped/primary model name")
    target_unit: Optional[str] = Field(None, description="Prediction unit (USD or INR)")
    target_transform: Optional[str] = Field(None, description="Target transform, if any")
    confidence_interval: Optional[Dict[str, Any]] = Field(
        None, description="Interval specification"
    )
    feature_names: Optional[Dict[str, Any]] = Field(
        None, description="Feature name lists"
    )
    test_scores: Optional[Dict[str, Any]] = Field(None, description="Per-model test scores")

    model_config = ConfigDict(
        json_schema_extra={
            "example": {
                "model_type": "Startup Acquisition Valuation (log-target ensemble)",
                "components": ["LightGBM"],
                "r2_score": 0.9724,
                "mae": 9353013,
                "rmse": 20220445,
                "training_samples": 10000,
                "features": 34,
                "best_model": "LightGBM",
                "target_unit": "USD",
            }
        }
    )


class ErrorResponse(BaseModel):
    """Error response."""

    success: bool = Field(False, description="Always False for errors")
    error: str = Field(..., description="Error type")
    message: str = Field(..., description="Error message")
    details: Optional[Any] = Field(None, description="Additional error details")
    timestamp: datetime = Field(
        default_factory=lambda: datetime.now().astimezone(),
        description="Error timestamp"
    )
