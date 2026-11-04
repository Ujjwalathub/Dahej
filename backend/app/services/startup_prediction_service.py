"""
Startup Acquisition Valuation Prediction Service
================================================

Serves the corrected startup valuation model (v2 artifact from
``scripts/train_startup_model.py``):

- Every stored estimator exposes ``predict`` -> USD (log1p target inverse).
- The shipped predictor is either the best single model or a
  performance-weighted log-space ensemble.
- Confidence intervals use the stored *empirical multiplicative residual*
  quantiles (95% test coverage verified at training time) instead of the
  fake ``pred +/- MAE`` band of v1.

Also loads the legacy v1 artifact format (``best_model``/``test_scores``)
for backward compatibility, with best-effort MAPE-based intervals.
"""

import logging
from datetime import datetime, timezone
from pathlib import Path
from typing import Any, Dict, List, Optional

import joblib
import numpy as np
import pandas as pd

logger = logging.getLogger(__name__)


class StartupValuationService:
    """Service for predicting startup acquisition valuations (USD)."""

    # Required features (must match training data exactly, in this order)
    NUMERICAL_FEATURES = [
        'monthly_recurring_revenue', 'annual_recurring_revenue',
        'revenue_growth_rate', 'gross_margin', 'burn_rate', 'runway_months',
        'total_funding_raised', 'last_round_valuation', 'funding_rounds',
        'patents_granted', 'patents_pending', 'trademarks',
        'customer_count', 'customer_growth_rate', 'customer_acquisition_cost',
        'lifetime_value', 'ltv_cac_ratio', 'churn_rate', 'retention_rate',
        'team_size', 'founder_experience_years', 'technical_team_pct',
        'years_in_operation', 'monthly_active_users', 'nps_score',
        'infrastructure_value', 'fleet_value', 'liquid_cash_reserves'
    ]

    CATEGORICAL_FEATURES = [
        'business_model', 'tech_sector', 'brand_reputation',
        'revenue_model', 'has_pending_litigation', 'is_first_acquisition'
    ]

    # Derived metrics: optional at request time, computed from their sources
    DERIVED = {'annual_recurring_revenue', 'runway_months',
               'ltv_cac_ratio', 'retention_rate'}
    OPTIONAL = {'fleet_value'} | DERIVED

    # Valid categorical values (must match the training dataset levels)
    VALID_BUSINESS_MODELS = ['B2B_Enterprise', 'B2C_Consumer', 'B2B_SMB', 'Hybrid']
    VALID_TECH_SECTORS = ['AI_DeepTech', 'SaaS_Enterprise', 'SaaS_SMB',
                          'Fintech', 'E_commerce', 'Healthcare']
    VALID_BRAND_REPUTATIONS = ['Industry_Leader', 'Established',
                               'Emerging', 'Controversial']
    VALID_REVENUE_MODELS = ['Subscription', 'Transaction',
                            'Advertising', 'Marketplace']

    def __init__(self, model_path: str = None, preprocessor_path: str = None):
        self.model_path = model_path or 'models/startup_trained_models.pkl'
        self.preprocessor_path = preprocessor_path or 'models/startup_preprocessor.pkl'

        self.models_package: Dict[str, Any] = {}
        self.best_model = None
        self.best_model_name: Optional[str] = None
        self.ensemble_members: Optional[List[str]] = None
        self.ensemble_weights: Optional[List[float]] = None
        self.interval: Dict[str, Any] = {}

        self._load_models()

    # ------------------------------------------------------------------------
    # Artifact loading
    # ------------------------------------------------------------------------
    def _load_models(self):
        model_path = Path(self.model_path)
        if not model_path.exists():
            raise FileNotFoundError(f"Model file not found: {model_path.resolve()}")
        self.models_package = joblib.load(model_path)

        preprocessor_path = Path(self.preprocessor_path)
        if not preprocessor_path.exists():
            raise FileNotFoundError(
                f"Preprocessor file not found: {preprocessor_path.resolve()}"
            )
        self.preprocessor = joblib.load(preprocessor_path)

        pkg = self.models_package
        if 'model_name' in pkg:
            # v2 artifact contract (log-target, ships interval quantiles)
            self.best_model_name = pkg['model_name']
            models: Dict[str, Any] = pkg.get('models', {})
            if self.best_model_name == 'Ensemble' and pkg.get('ensemble'):
                self.ensemble_members = pkg['ensemble']['members']
                self.ensemble_weights = pkg['ensemble']['weights']
                self.best_model = models
            else:
                self.best_model = models.get(self.best_model_name)
                if self.best_model is None:
                    raise KeyError(
                        f"v2 artifact ships model '{self.best_model_name}' "
                        f"but 'models' contains only {list(models)}"
                    )
            self.interval = pkg.get('interval', {}) or {}
            if (
                self.interval.get('method') ==
                'empirical_multiplicative_residual_quantiles'
                and 'lower_multiplier' in self.interval
            ):
                self._interval = ('empirical',
                                  float(self.interval['lower_multiplier']),
                                  float(self.interval['upper_multiplier']))
            else:
                self._interval = ('mape', None, None)
        else:
            # v1 legacy artifact (raw dollar model, no interval contract)
            self.best_model_name = pkg.get('best_model_name', 'best_model')
            self.best_model = pkg.get('best_model')
            self._interval = ('mape', None, None)
            if self.best_model is None:
                raise KeyError("Artifact contains neither 'model_name' nor 'best_model'")

        self._test_scores = pkg.get('metrics_usd') or pkg.get('test_scores') or {}
        dataset = pkg.get('dataset', {}) or {}
        self._training_samples = int(dataset.get('records', 0)) or None
        logger.info("Loaded startup valuation model: %s (interval: %s)",
                    self.best_model_name, self._interval[0])

    # ------------------------------------------------------------------------
    # Input validation (strict - the old zero-filling produced garbage)
    # ------------------------------------------------------------------------
    def _validate_input(self, data: Dict[str, Any]) -> Dict[str, Any]:
        if not isinstance(data, dict):
            raise ValueError("Startup payload must be a JSON object")

        # Alias compatibility: 'pending_lawsuits' -> 'has_pending_litigation'
        if 'has_pending_litigation' not in data and 'pending_lawsuits' in data:
            data = {**data, 'has_pending_litigation': data['pending_lawsuits']}

        missing = [
            f for f in self.NUMERICAL_FEATURES + self.CATEGORICAL_FEATURES
            if (f not in data or data[f] is None) and f not in self.OPTIONAL
        ]
        if missing:
            raise ValueError(f"Missing required startup features: {missing}")

        validated: Dict[str, float] = {}
        for feature in self.NUMERICAL_FEATURES:
            value = data.get(feature)
            if value is None:
                if feature == 'annual_recurring_revenue':
                    value = float(data.get('monthly_recurring_revenue', 0)) * 12
                elif feature == 'fleet_value':
                    value = 0.0
                elif feature == 'runway_months':
                    burn = float(data.get('burn_rate', 0) or 0)
                    cash = float(data.get('liquid_cash_reserves', 0) or 0)
                    value = cash / burn if burn > 0 else 999.0
                elif feature == 'ltv_cac_ratio':
                    ltv = float(data.get('lifetime_value', 0) or 0)
                    cac = float(data.get('customer_acquisition_cost', 0) or 0)
                    value = ltv / cac if cac > 0 else 0.0
                elif feature == 'retention_rate':
                    value = 100.0 - float(data.get('churn_rate', 0) or 0)
                else:
                    continue  # already rejected above
            try:
                validated[feature] = float(value)
            except (TypeError, ValueError):
                raise ValueError(f"Feature '{feature}' must be numeric, got {value!r}")

        allowed = {
            'business_model': self.VALID_BUSINESS_MODELS,
            'tech_sector': self.VALID_TECH_SECTORS,
            'brand_reputation': self.VALID_BRAND_REPUTATIONS,
            'revenue_model': self.VALID_REVENUE_MODELS,
        }
        for feature, choices in allowed.items():
            value = str(data.get(feature, '')).strip()
            if value not in choices:
                raise ValueError(
                    f"Feature '{feature}' must be one of {choices}, got {value!r}"
                )
            validated[feature] = value

        for feature in ['has_pending_litigation', 'is_first_acquisition']:
            raw = str(data.get(feature, 'no')).strip().lower()
            validated[feature] = (
                'yes' if raw in ('yes', 'y', 'true', '1') else
                'no' if raw in ('no', 'n', 'false', '0') else
                None
            )
            if validated[feature] is None:
                raise ValueError(
                    f"Feature '{feature}' must be 'yes' or 'no', got {data.get(feature)!r}"
                )

        return validated

    # ------------------------------------------------------------------------
    # Prediction internals
    # ------------------------------------------------------------------------
    def _prepare_dataframe(self, validated: Dict[str, Any]) -> pd.DataFrame:
        df = pd.DataFrame([validated])
        return df[self.NUMERICAL_FEATURES + self.CATEGORICAL_FEATURES]

    def _predict(self, X_processed) -> np.ndarray:
        """Single-model or weighted log-space ensemble prediction."""
        if self.ensemble_members is not None:
            log_preds = np.vstack([
                np.log1p(np.asarray(self.best_model[m].predict(X)).ravel())
                for m in self.ensemble_members
            ])
            w = np.asarray(self.ensemble_weights, dtype=float)
            w = w / w.sum()
            return np.expm1(w @ log_preds)
        return np.asarray(self.best_model.predict(X_processed)).ravel()

    def _confidence_interval(self, prediction: float) -> Dict[str, Any]:
        kind, lo, hi = self._interval
        if kind == 'empirical':
            lower = max(0.0, prediction * lo)
            upper = prediction * hi
            method = 'empirical_multiplicative_residual_quantiles'
        else:
            # Legacy artifact fallback: multiplicative MAPE band (honest
            # approximation of the out-of-sample relative error scale).
            mape = float(
                self._test_scores.get(self.best_model_name, {}).get('MAPE', 25.0)
            )
            band = max(mape, 15.0) / 100.0
            lower = max(0.0, prediction * (1 - 1.96 * band))
            upper = prediction * (1 + 1.96 * band)
            method = 'mape_based_band'
        return {
            'lower_bound_usd': float(lower),
            'upper_bound_usd': float(upper),
            'confidence_level': 0.95,
            'method': method,
        }

    # ------------------------------------------------------------------------
    # Public API
    # ------------------------------------------------------------------------
    def predict_single(self, startup_data: Dict[str, Any]) -> Dict[str, Any]:
        """Predict an acquisition valuation (USD) with an honest 95% interval."""
        try:
            validated = self._validate_input(startup_data)
            X = self._prepare_dataframe(validated)
            X_processed = self.preprocessor.transform(X)
            prediction = float(np.asarray(self._predict(X_processed)).ravel()[0])

            prediction = float(np.clip(prediction, 50000.0, 2_000_000_000.0))

            test_scores = self._test_scores.get(self.best_model_name, {})
            return {
                'predicted_valuation_usd': prediction,
                'predicted_acquisition_price_usd': prediction,
                'confidence_interval': self._confidence_interval(prediction),
                'model_info': {
                    'model_name': self.best_model_name,
                    'r2_score': float(test_scores.get('R2', 0.0)),
                    'mae_usd': float(test_scores.get('MAE', 0.0)),
                    'rmse_usd': float(test_scores.get('RMSE', 0.0)),
                    'mape_percent': float(test_scores.get('MAPE', 0.0)),
                },
                'prediction_metadata': {
                    'timestamp': datetime.now(timezone.utc).isoformat(),
                    'features_used': len(self.NUMERICAL_FEATURES) + len(self.CATEGORICAL_FEATURES),
                    'target_unit': 'USD',
                },
            }
        except ValueError:
            raise
        except Exception as e:
            logger.error(f"Prediction failed: {str(e)}", exc_info=True)
            raise

    def predict_batch(self, startups: List[Dict[str, Any]]) -> Dict[str, Any]:
        """Batch predictions with a summary conforming to the API response."""
        results = []
        for i, startup_data in enumerate(startups):
            try:
                pred = self.predict_single(startup_data)
                pred['startup_index'] = i
                results.append(pred)
            except Exception as e:
                logger.error(f"Batch item {i} failed: {str(e)}")
                results.append({
                    'startup_index': i,
                    'predicted_valuation_usd': None,
                    'error': str(e),
                })

        vals = [r['predicted_valuation_usd'] for r in results
                if r.get('predicted_valuation_usd') is not None]
        total = float(sum(vals)) if vals else 0.0
        return {
            'predictions': results,
            'total_count': len(startups),
            'successful_count': len(vals),
            'failed_count': len(startups) - len(vals),
            'average_valuation_usd': (total / len(vals)) if vals else 0.0,
            'total_portfolio_valuation_usd': total,
        }

    def get_model_info(self) -> Dict[str, Any]:
        scores = self._test_scores
        chosen = scores.get(self.best_model_name, {})

        if self.ensemble_members is not None:
            components = list(self.ensemble_members)
        elif isinstance(self.best_model, dict):
            components = list(self.best_model.keys())
        else:
            components = list(scores.keys()) or [self.best_model_name]

        return {
            'model_type': 'Startup Acquisition Valuation (log-target ensemble)',
            'components': components,
            'r2_score': round(float(chosen.get('R2', 0.0)), 4),
            'mae': int(chosen.get('MAE', 0)),
            'rmse': int(chosen.get('RMSE', 0)),
            'training_samples': self._training_samples or 0,
            'features': len(self.NUMERICAL_FEATURES) + len(self.CATEGORICAL_FEATURES),
            'best_model': self.best_model_name,
            'target_unit': 'USD',
            'target_transform': 'log1p',
            'confidence_interval': {
                'method': self._interval[0],
                'confidence_level': 0.95,
                'lower_multiplier': self._interval[1],
                'upper_multiplier': self._interval[2],
            },
            'feature_names': {
                'numerical': self.NUMERICAL_FEATURES,
                'categorical': self.CATEGORICAL_FEATURES,
            },
            'test_scores': self._test_scores,
        }

    def is_loaded(self) -> bool:
        return self.best_model is not None and self.preprocessor is not None


# Singleton instance
_service_instance: Optional[StartupValuationService] = None


def get_startup_valuation_service() -> Optional[StartupValuationService]:
    """Get or create the startup valuation service instance.

    Returns None when the model artifacts are unavailable so callers can
    degrade gracefully instead of crashing at startup.
    """
    global _service_instance
    if _service_instance is None:
        try:
            _service_instance = StartupValuationService()
        except Exception as e:
            logger.error(f"Failed to initialize startup valuation service: {str(e)}")
            return None
    return _service_instance
