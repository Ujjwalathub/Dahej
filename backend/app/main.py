"""
Main Application - UPDATED to use Startup Valuation Model
"""

from fastapi import FastAPI, Request, status
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from fastapi.exceptions import RequestValidationError
from contextlib import asynccontextmanager
import logging
from pathlib import Path
import sys

# Windows consoles default to cp1252, which cannot encode the ✓/⚠/✅ glyphs
# used across this project's log and status output. Without this, ANY
# Unicode glyph reaching a cp1252 stream raises UnicodeEncodeError inside
# the lifespan and the whole app fails to start on Windows.
# -X utf8 / PYTHONIOENCODING also fix this, but should not be required.
for _stream in (sys.stdout, sys.stderr):
    try:
        _stream.reconfigure(errors="replace")
    except (AttributeError, ValueError):
        pass

from app.core.config import settings
from app.api.endpoints import router
from app.schemas.response import ErrorResponse

# Configure logging
logging.basicConfig(
    level=getattr(logging, settings.LOG_LEVEL),
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


@asynccontextmanager
async def lifespan(app: FastAPI):
    """Startup/shutdown lifespan - loads PROPER startup valuation model."""

    # --- Startup Phase ---
    logger.info("INITIALIZING STARTUP VALUATION API")

    try:
        # Try loading NEW startup valuation service (proper model)
        from app.services.startup_prediction_service import get_startup_valuation_service
        service = get_startup_valuation_service()

        if service and service.is_loaded():
            app.state.prediction_service = service
            app.state.models_healthy = True
            app.state.model_type = 'startup_valuation'
            info = service.get_model_info() or {}
            r2 = float(info.get('r2_score', 0.0))
            logger.info("STARTUP VALUATION MODEL LOADED")
            logger.info("  Model: %s", service.best_model_name)
            logger.info("  R2 Score: %.4f", r2)
            logger.info("  Features: 28 numerical + 6 categorical (REAL business metrics)")
            logger.info("  NO FEATURE MAPPING - Direct startup features")
            print("\n" + "=" * 80)
            print("STARTUP VALUATION MODEL ACTIVE")
            print("   Model: %s" % service.best_model_name)
            print("   R2 Score: %.4f" % r2)
            print("   Using REAL business features (NO mapping)")
            print("=" * 80 + "\n")
        else:
            raise Exception("Startup valuation models not available")
            
    except Exception as e1:
        logger.warning("Startup valuation model unavailable: %s", str(e1))
        logger.warning("Falling back to LEGACY model (DEPRECATED)")
        print("\n" + "=" * 80)
        print("WARNING: USING LEGACY MODEL")
        print("=" * 80)

        # Fall back to old model with WARNING
        try:
            from app.services.prediction_service import PredictionService
            app.state.prediction_service = PredictionService()
            app.state.models_healthy = True
            app.state.model_type = 'legacy_proxy'
            logger.warning("Using LEGACY model with feature mapping")
            logger.warning("This model has LIMITED VALIDITY for startup valuations")
            print("LEGACY model loaded (uses feature mapping)")
            print("LIMITED VALIDITY - Please retrain with proper data")
            print("Run: cd backend/scripts && python generate_startup_dataset.py && python train_startup_model.py")
            print("=" * 80 + "\n")
        except Exception as e2:
            logger.error(f"CRITICAL: No models available. {str(e2)}")
            print(f"CRITICAL: Failed to load any models. {str(e2)}")
            app.state.prediction_service = None
            app.state.models_healthy = False
            app.state.model_type = None

    logger.info("="*80)
    logger.info("API STARTUP COMPLETE")
    logger.info("="*80)

    yield  # App runs here

    # --- Shutdown Phase ---
    logger.info("Shutting down...")
    app.state.prediction_service = None
    app.state.models_healthy = False


# Create FastAPI application
app = FastAPI(
    title=settings.API_TITLE,
    description=settings.API_DESCRIPTION,
    version=settings.API_VERSION,
    docs_url="/docs",
    redoc_url="/redoc",
    openapi_url="/openapi.json",
    lifespan=lifespan,
)

# Configure CORS
_cors_origins = ["*"] if settings.ALLOW_ALL_ORIGINS else settings.ALLOWED_ORIGINS
app.add_middleware(
    CORSMiddleware,
    allow_origins=_cors_origins,
    allow_credentials=("*" not in _cors_origins),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(router)


# Exception handlers
@app.exception_handler(Exception)
async def global_exception_handler(request: Request, exc: Exception):
    """Catch-all exception handler."""
    logger.error(f"Unhandled exception: {str(exc)}", exc_info=True)
    error_detail = str(exc) if settings.DEBUG else "An internal server error occurred."
    return JSONResponse(
        status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
        content={
            "success": False,
            "error": "Internal Server Error",
            "message": error_detail
        }
    )


@app.exception_handler(RequestValidationError)
async def validation_exception_handler(request: Request, exc: RequestValidationError):
    """Handle validation errors."""
    errors = []
    for error in exc.errors():
        errors.append({
            "field": ".".join(str(loc) for loc in error["loc"]),
            "message": error["msg"],
            "type": error["type"]
        })
    
    logger.warning(f"Validation error: {errors}")
    
    return JSONResponse(
        status_code=status.HTTP_422_UNPROCESSABLE_ENTITY,
        content={
            "success": False,
            "error": "ValidationError",
            "message": "Invalid input data",
            "details": errors
        }
    )


@app.get("/ping")
async def ping():
    """Simple ping endpoint."""
    return {"status": "pong"}


if __name__ == "__main__":
    import uvicorn
    
    logger.info(f"Starting server on {settings.API_HOST}:{settings.API_PORT}")
    
    uvicorn.run(
        "app.main:app",
        host=settings.API_HOST,
        port=settings.API_PORT,
        reload=settings.DEBUG,
        log_level=settings.LOG_LEVEL.lower()
    )
