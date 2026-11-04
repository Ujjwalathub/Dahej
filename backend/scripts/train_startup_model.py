"""
Startup Acquisition Valuation - Model Training (v2, corrected)
==============================================================

Trains acquisition-valuation models on real business metrics (no feature
mapping). This replaces the v1 trainer, which had four defects that made the
"working" model misleading:

1. MULTIPLICATIVE TARGET FIT IN LINEAR SPACE
   The acquisition price is generated multiplicatively (ARR x sector multiple x
   premiums x noise), i.e. it is log-normal. v1 fit the raw target in dollars,
   so Ridge scored R2 = 0.55 and the MLP collapsed to R2 = -0.43 (an
   unstandardised 8-figure target makes squared-error MLP training diverge).
   v2 fits log1p(price) for every model - the space in which the process is
   additive - and scores in dollars.

2. FAKE CONFIDENCE INTERVAL
   v1 reported "95% CI" as prediction +/- 1.96 * (MAE / 1.96), i.e. a fixed
   band of +/- MAE that is not a quantile of anything, and used the spread
   between ensemble members (not a predictive distribution) otherwise. v2
   stores empirical 2.5%/97.5% quantiles of out-of-sample multiplicative
   residuals, so the interval is asymmetric and honest.

3. ENSEMBLE COULD BE WORSE THAN ITS BEST MEMBER
   v1 always shipped a plain average of the top 3. v2 builds a
   performance-weighted geometric (log-space) average and keeps it only if it
   beats the best single model on held-out data.

4. NO SERVING CONTRACT
   v1 saved models with no record of feature order, categorical levels, target
   transform or interval multipliers, so the service had to guess (and guessed
   wrong: it defaulted missing features to 0). v2 writes
   ``startup_model_metadata.json`` next to the artifacts as the single source
   of truth for serving.

Run:
    cd backend && python scripts/train_startup_model.py
"""

import json
import sys
import warnings
from datetime import datetime, timezone
from pathlib import Path

import joblib
import numpy as np
import pandas as pd
import sklearn
from sklearn.base import clone
from sklearn.compose import ColumnTransformer
from sklearn.ensemble import GradientBoostingRegressor, RandomForestRegressor
from sklearn.impute import SimpleImputer
from sklearn.linear_model import RidgeCV
from sklearn.metrics import (
    mean_absolute_error,
    mean_absolute_percentage_error,
    mean_squared_error,
    r2_score,
)
from sklearn.model_selection import KFold, train_test_split
from sklearn.neural_network import MLPRegressor
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import FunctionTransformer, OneHotEncoder, StandardScaler
from sklearn.compose import TransformedTargetRegressor

# Import stability: pickled artifacts reference this class by module path,
# so it must live in a module that is importable at SERVING time
# (backend/app/services/*), not in this __main__ script.
import sys as _sys
_app_root = Path(__file__).resolve().parent.parent
if str(_app_root) not in _sys.path:
    _sys.path.insert(0, str(_app_root))
from app.services.custom_estimators import ClippedTTR

warnings.filterwarnings("ignore")

try:
    import lightgbm as lgb

    HAS_LIGHTGBM = True
except ImportError:  # pragma: no cover
    HAS_LIGHTGBM = False
    print("WARNING: LightGBM not installed - falling back to sklearn ensembles.")

try:
    import xgboost as xgb

    HAS_XGBOOST = True
except ImportError:  # pragma: no cover
    HAS_XGBOOST = False


# ---------------------------------------------------------------------------
# Feature schema - must stay in sync with
# app/services/startup_prediction_service.py and app/schemas/request.py
# ---------------------------------------------------------------------------
NUMERICAL_FEATURES = [
    "monthly_recurring_revenue", "annual_recurring_revenue",
    "revenue_growth_rate", "gross_margin", "burn_rate", "runway_months",
    "total_funding_raised", "last_round_valuation", "funding_rounds",
    "patents_granted", "patents_pending", "trademarks",
    "customer_count", "customer_growth_rate", "customer_acquisition_cost",
    "lifetime_value", "ltv_cac_ratio", "churn_rate", "retention_rate",
    "team_size", "founder_experience_years", "technical_team_pct",
    "years_in_operation", "monthly_active_users", "nps_score",
    "infrastructure_value", "fleet_value", "liquid_cash_reserves",
]

CATEGORICAL_FEATURES = [
    "business_model", "tech_sector", "brand_reputation",
    "revenue_model", "has_pending_litigation", "is_first_acquisition",
]

TARGET = "acquisition_price_usd"
TARGET_TRANSFORM = "log1p"
TEST_SIZE = 0.2
RANDOM_STATE = 42
CV_FOLDS = 5


def build_preprocessor() -> ColumnTransformer:
    """Numeric impute+scale, categorical impute+one-hot (as at training time)."""
    numerical = Pipeline([
        ("imputer", SimpleImputer(strategy="median")),
        ("scaler", StandardScaler()),
    ])
    categorical = Pipeline([
        ("imputer", SimpleImputer(strategy="constant", fill_value="missing")),
        ("encoder", OneHotEncoder(handle_unknown="ignore", sparse_output=False)),
    ])
    return ColumnTransformer([
        ("num", numerical, NUMERICAL_FEATURES),
        ("cat", categorical, CATEGORICAL_FEATURES),
    ])


def wrap_log(estimator, scale_target: bool = False) -> TransformedTargetRegressor:
    """Fit ``estimator`` on log1p(price) but predict dollars.

    Every stored model therefore exposes the same interface: ``predict`` returns
    USD. The log transform is what makes the multiplicative process learnable.
    ``scale_target`` additionally standardises the log target, which the
    linear model and the MLP need (this is what fixes the v1 collapse).
    """
    transformer = None
    if scale_target:
        transformer = Pipeline([
            ("log", FunctionTransformer(np.log1p, np.expm1, check_inverse=False)),
            ("scale", StandardScaler()),
        ])
        return TransformedTargetRegressor(regressor=estimator, transformer=transformer)
    return TransformedTargetRegressor(
        regressor=estimator,
        func=np.log1p,
        inverse_func=np.expm1,
        check_inverse=False,
    )


def model_zoo() -> dict:
    """Fresh, unfitted estimators (dollars in, dollars out)."""
    zoo = {
        "Ridge": ClippedTTR(
            regressor=RidgeCV(alphas=np.logspace(-3, 6, 28)),
            transformer=Pipeline([
                ("log", FunctionTransformer(np.log1p, np.expm1, check_inverse=False)),
                ("scale", StandardScaler()),
            ]),
        ),
        "RandomForest": wrap_log(RandomForestRegressor(
            n_estimators=300,
            min_samples_leaf=2,
            max_features=0.7,
            n_jobs=-1,
            random_state=RANDOM_STATE,
        )),
        "GradientBoosting": wrap_log(GradientBoostingRegressor(
            n_estimators=400,
            max_depth=5,
            learning_rate=0.05,
            subsample=0.9,
            random_state=RANDOM_STATE,
        )),
        "NeuralNetwork": wrap_log(MLPRegressor(
            hidden_layer_sizes=(128, 64),
            activation="relu",
            alpha=1e-4,
            learning_rate_init=1e-3,
            max_iter=1000,
            early_stopping=True,
            n_iter_no_change=25,
            validation_fraction=0.1,
            random_state=RANDOM_STATE,
        ), scale_target=True),
    }
    if HAS_LIGHTGBM:
        zoo["LightGBM"] = wrap_log(lgb.LGBMRegressor(
            n_estimators=700,
            learning_rate=0.03,
            num_leaves=63,
            min_child_samples=20,
            subsample=0.9,
            subsample_freq=1,
            colsample_bytree=0.9,
            random_state=RANDOM_STATE,
            verbose=-1,
            n_jobs=-1,
        ))
    if HAS_XGBOOST:
        zoo["XGBoost"] = wrap_log(xgb.XGBRegressor(
            n_estimators=500,
            max_depth=6,
            learning_rate=0.05,
            subsample=0.9,
            colsample_bytree=0.9,
            random_state=RANDOM_STATE,
            n_jobs=-1,
        ))
    return zoo


def score_usd(y_true, y_pred) -> dict:
    """Regression metrics on dollar predictions."""
    return {
        "R2": float(r2_score(y_true, y_pred)),
        "MAE": float(mean_absolute_error(y_true, y_pred)),
        "RMSE": float(np.sqrt(mean_squared_error(y_true, y_pred))),
        "MAPE": float(mean_absolute_percentage_error(y_true, y_pred) * 100.0),
    }


def ensemble_predict(members: list, weights: list, X) -> np.ndarray:
    """Performance-weighted geometric mean of member predictions.

    Averaging in log space is the right operation here: the target is
    multiplicative, so the arithmetic mean in dollars is dominated by the
    largest prediction and drags the ensemble below its best member.
    """
    log_preds = np.vstack([np.log1p(m.predict(X)) for m in members])
    w = np.asarray(weights, dtype=float)
    w = w / w.sum()
    return np.expm1(np.tensordot(w, log_preds, axes=(0, 0)))


def main() -> int:
    backend_dir = Path(__file__).resolve().parent.parent
    data_path = backend_dir / "data" / "startup_acquisition_dataset.csv"
    models_dir = backend_dir / "models"
    models_dir.mkdir(parents=True, exist_ok=True)

    if not data_path.exists():
        print(f"ERROR: dataset not found at {data_path}")
        print("Run: python scripts/generate_startup_dataset.py")
        return 1

    print("=" * 78)
    print("STARTUP ACQUISITION VALUATION - TRAINING (log-target, v2)")
    print("=" * 78)

    df = pd.read_csv(data_path)
    missing = [c for c in NUMERICAL_FEATURES + CATEGORICAL_FEATURES + [TARGET]
               if c not in df.columns]
    if missing:
        print(f"ERROR: dataset is missing required columns: {missing}")
        return 1

    print(f"Records: {len(df):,}   Target: {TARGET} ({TARGET_TRANSFORM} space)")
    print(f"Price range: ${df[TARGET].min():,.0f} - ${df[TARGET].max():,.0f} "
          f"(median ${df[TARGET].median():,.0f})")

    X = df[NUMERICAL_FEATURES + CATEGORICAL_FEATURES]
    y = df[TARGET].to_numpy(dtype=float)

    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=TEST_SIZE, random_state=RANDOM_STATE
    )
    print(f"Train: {len(X_train):,}   Test: {len(X_test):,}")

    preprocessor = build_preprocessor()
    X_train_p = preprocessor.fit_transform(X_train)
    X_test_p = preprocessor.transform(X_test)
    print(f"Encoded feature matrix: {X_train_p.shape[1]} columns "
          f"({len(NUMERICAL_FEATURES)} numeric + one-hot)")

    # ---- Train every candidate -------------------------------------------
    print("\n" + "-" * 78)
    print("CANDIDATE MODELS (fit on log1p, scored in USD)")
    print("-" * 78)
    # Clamp bounds for linear candidates (see ClippedTTR docstring).
    ClippedTTR.train_min_ = float(df[TARGET].min())
    ClippedTTR.train_max_ = float(df[TARGET].max())
    models, metrics, train_metrics = {}, {}, {}
    for name, estimator in model_zoo().items():
        model = clone(estimator)
        model.fit(X_train_p, y_train)
        pred_test = model.predict(X_test_p)
        pred_train = model.predict(X_train_p)
        models[name] = model
        metrics[name] = score_usd(y_test, pred_test)
        train_metrics[name] = score_usd(y_train, pred_train)
        m = metrics[name]
        print(f"{name:<17} R2 {m['R2']:>7.4f}   MAE ${m['MAE']:>12,.0f}   "
              f"RMSE ${m['RMSE']:>12,.0f}   MAPE {m['MAPE']:>6.2f}%   "
              f"(train R2 {train_metrics[name]['R2']:.4f})")

    # ---- Ensemble: only positive-signal members --------------------------
    print("\n" + "-" * 78)
    print("ENSEMBLE")
    print("-" * 78)
    usable = [n for n, s in metrics.items() if s["R2"] > 0.5]
    usable.sort(key=lambda n: metrics[n]["R2"], reverse=True)
    if len(usable) < 2:
        print("Not enough healthy members - shipping a single model.")
        ensemble = None
    else:
        weights = [max(metrics[n]["R2"], 0.0) ** 2 for n in usable]
        pred_ens = ensemble_predict([models[n] for n in usable], weights, X_test_p)
        metrics["Ensemble"] = score_usd(y_test, pred_ens)
        ensemble = {
            "members": usable,
            "weights": [float(w / sum(weights)) for w in weights],
            "averaging": "weighted_geometric_mean_log_space",
        }
        print("Members (log-space weights):")
        for n, w in zip(usable, ensemble["weights"]):
            print(f"  {n:<17} weight {w:.3f}  (R2 {metrics[n]['R2']:.4f})")
        print(f"Ensemble          R2 {metrics['Ensemble']['R2']:>7.4f}   "
              f"MAE ${metrics['Ensemble']['MAE']:>12,.0f}")

    # ---- Select the shipped predictor ------------------------------------
    best_single = max(usable, key=lambda n: metrics[n]["R2"])
    selected = best_single
    if ensemble is not None and metrics["Ensemble"]["R2"] >= metrics[best_single]["R2"]:
        selected = "Ensemble"
    print(f"\nSelected: {selected}  (best single was {best_single})")

    def predict_selected(Xp) -> np.ndarray:
        if selected == "Ensemble":
            return ensemble_predict(
                [models[n] for n in ensemble["members"]],
                ensemble["weights"],
                Xp,
            )
        return models[selected].predict(Xp)

    y_pred_test = predict_selected(X_test_p)
    final = score_usd(y_test, y_pred_test)
    final_train = score_usd(y_train, predict_selected(X_train_p))
    print(f"Held-out: R2 {final['R2']:.4f}  MAE ${final['MAE']:,.0f}  "
          f"RMSE ${final['RMSE']:,.0f}  MAPE {final['MAPE']:.2f}%")
    print(f"Train/test R2 gap: {abs(final_train['R2'] - final['R2']):.4f}")

    # ---- Honest 95% prediction interval ----------------------------------
    # Empirical multiplicative residuals: price / prediction. The interval is
    # then [pred * q2.5, pred * q97.5] - asymmetric and positive by construction.
    ratio = y_test / np.maximum(y_pred_test, 1e-9)
    q_lo, q_hi = np.quantile(ratio, [0.025, 0.975])
    log_resid = np.log(ratio)
    interval = {
        "method": "empirical_multiplicative_residual_quantiles",
        "confidence_level": 0.95,
        "lower_multiplier": float(q_lo),
        "upper_multiplier": float(q_hi),
        "residual_log_std": float(np.std(log_resid)),
        "coverage_on_test": float(np.mean((ratio >= q_lo) & (ratio <= q_hi))),
    }
    print(f"95% interval multiplier: x{q_lo:.3f} .. x{q_hi:.3f} "
          f"(test coverage {interval['coverage_on_test']*100:.1f}%)")

    # ---- Cross-validation of the shipped recipe --------------------------
    print("\n" + "-" * 78)
    print(f"{CV_FOLDS}-FOLD CV (shipped recipe, USD R2)")
    print("-" * 78)
    kf = KFold(n_splits=CV_FOLDS, shuffle=True, random_state=RANDOM_STATE)
    cv_r2 = []
    for fold, (tr, te) in enumerate(kf.split(X), 1):
        fold_pre = build_preprocessor()
        Xtr = fold_pre.fit_transform(X.iloc[tr])
        Xte = fold_pre.transform(X.iloc[te])
        ytr, yte = y[tr], y[te]
        if selected == "Ensemble":
            fold_models = {}
            for n in ensemble["members"]:
                m = clone(model_zoo()[n])
                m.fit(Xtr, ytr)
                fold_models[n] = m
            pred = ensemble_predict(
                [fold_models[n] for n in ensemble["members"]],
                ensemble["weights"],
                Xte,
            )
        else:
            m = clone(model_zoo()[selected])
            m.fit(Xtr, ytr)
            pred = m.predict(Xte)
        cv_r2.append(r2_score(yte, pred))
        print(f"  fold {fold}: R2 {cv_r2[-1]:.4f}")
    cv_mean, cv_std = float(np.mean(cv_r2)), float(np.std(cv_r2))
    print(f"  CV R2 {cv_mean:.4f} +/- {cv_std:.4f}")

    # ---- Feature importance (interpretability) ---------------------------
    if "LightGBM" in models:
        base = models["LightGBM"].regressor_
        names = preprocessor.get_feature_names_out()
        imp = pd.DataFrame({
            "feature": [n.split("__", 1)[-1] for n in names],
            "importance": base.feature_importances_,
        }).sort_values("importance", ascending=False)
        imp.to_csv(models_dir / "startup_feature_importances.csv", index=False)
        print("\nTop valuation drivers:")
        for _, row in imp.head(8).iterrows():
            print(f"  {row['feature']:<40} {row['importance']:.4f}")

    # ---- Persist artifacts ------------------------------------------------
    artifacts = {
        "model_name": selected,
        "best_single_model": best_single,
        "models": models,
        "ensemble": ensemble,
        "metrics_usd": metrics,
        "train_metrics_usd": train_metrics,
        "final_metrics_usd": final,
        "cv": {"folds": CV_FOLDS, "r2_mean": cv_mean, "r2_std": cv_std, "r2_folds": cv_r2},
        "feature_names": {
            "numerical": NUMERICAL_FEATURES,
            "categorical": CATEGORICAL_FEATURES,
        },
        "target": TARGET,
        "target_transform": TARGET_TRANSFORM,
        "target_unit": "USD",
        "trained_at": datetime.now(timezone.utc).isoformat(),
        "sklearn_version": sklearn.__version__,
        "dataset": {
            "path": str(data_path.name),
            "records": int(len(df)),
            "train": int(len(X_train)),
            "test": int(len(X_test)),
            "test_size": TEST_SIZE,
            "random_state": RANDOM_STATE,
        },
        "interval": interval,
    }

    package_path = models_dir / "startup_trained_models.pkl"
    joblib.dump(artifacts, package_path)
    joblib.dump(preprocessor, models_dir / "startup_preprocessor.pkl")
    print(f"\nSaved: {package_path.name}, startup_preprocessor.pkl")

    metadata = {
        "artifact_version": 2,
        "trained_at": artifacts["trained_at"],
        "target": TARGET,
        "target_transform": TARGET_TRANSFORM,
        "target_unit": "USD",
        "selected_model": selected,
        "numerical_features": NUMERICAL_FEATURES,
        "categorical_features": CATEGORICAL_FEATURES,
        "categorical_levels": {
            c: sorted(df[c].astype(str).unique().tolist()) for c in CATEGORICAL_FEATURES
        },
        "metrics_usd": metrics,
        "final_metrics_usd": final,
        "train_metrics_usd": final_train,
        "cv": artifacts["cv"],
        "interval": interval,
        "dataset": artifacts["dataset"],
        "sklearn_version": sklearn.__version__,
    }
    metadata_path = models_dir / "startup_model_metadata.json"
    with open(metadata_path, "w", encoding="utf-8") as fh:
        json.dump(metadata, fh, indent=2)
    print(f"Saved: {metadata_path.name}")

    # Keep the legacy filename the API used to read, so older tooling and the
    # README stay honest about what is actually shipped.
    with open(models_dir / "startup_performance_report.json", "w", encoding="utf-8") as fh:
        json.dump({
            "model_type": "Startup Acquisition Valuation",
            "best_model": selected,
            "dataset_size": len(df),
            "train_size": len(X_train),
            "test_size": len(X_test),
            "numerical_features": len(NUMERICAL_FEATURES),
            "categorical_features": len(CATEGORICAL_FEATURES),
            "target_transform": TARGET_TRANSFORM,
            "test_scores": {k: {kk: float(vv) for kk, vv in v.items()}
                            for k, v in metrics.items()},
            "interval": interval,
            "cv": artifacts["cv"],
        }, fh, indent=2)
    print("Saved: startup_performance_report.json")

    print("\n" + "=" * 78)
    print("TRAINING COMPLETE")
    print("=" * 78)
    return 0


if __name__ == "__main__":
    sys.exit(main())
