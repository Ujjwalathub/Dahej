# Calculate My Dahej

A machine learning system for estimating startup acquisition valuations in
**USD** from real business metrics, served through a FastAPI backend.

> **Legacy path retained:** the project began as a dowry ("dahej") valuation
> system. The existing dowry-themed frontend keeps working through the legacy
> Phase-4 equal-weightage model (Ridge + NN ensemble, R² ~0.758, MAE
> ~₹187,674, INR). Send a dowry payload to `/predict` and you get the legacy
> INR valuation; send a startup payload and you get the USD acquisition
> valuation. Dispatch happens on the *validated payload type*, never on
> silent default-fill.

## Current Production Models

### Startup Acquisition Valuation (primary)
- **Model:** LightGBM fit on `log1p(price)` (via
  `TransformedTargetRegressor`), selected against RandomForest /
  GradientBoosting / Ridge / MLP candidates on held-out data
- **Metrics:** R² ~0.972, MAE ~$9.35M, RMSE ~$20.2M, MAPE ~11.9%
- **Dataset:** 10,000 synthetic records of real business metrics
  (`backend/data/startup_acquisition_dataset.csv`)
- **Features:** 34 (28 numeric + 6 categorical; ARR, runway months, LTV/CAC
  and retention are auto-derived at request time from their source metrics)
- **Confidence interval:** honest 95% empirical multiplicative residual
  quantiles (×0.757 – ×1.320), not a fabricated ±MAE band
- **Artifacts:** `backend/models/startup_trained_models.pkl` +
  `startup_preprocessor.pkl` + `startup_model_metadata.json` +
  `startup_performance_report.json`
- **Retrain:** `cd backend && python scripts/train_startup_model.py`

### Legacy Dowry Equal-Weightage (kept for the existing frontend)
- **Model:** Ridge + Regularized NN + Voting ensemble (parity-constrained)
- **Metrics:** R² ~0.758, MAE ~₹187,674 — served in INR
- **Bounds:** predictions clipped to ₹0 – ₹1 Cr (dataset range ₹1L – ₹45.06L)
- **Artifacts:** `backend/models/trained_models.pkl` +
  `preprocessor.pkl` (LEGACY paths)

## Payload Contract

`POST /predict` routes on the validated payload type:

- **Startup payload** (`payload_type: "startup"`, or shape-inferred when the
  discriminator is omitted) → full 34-feature schema, returns
  `predicted_valuation_usd` with `confidence_interval` (USD). Legacy field
  name `pending_lawsuits` is accepted as an alias for
  `has_pending_litigation`.
- **Dowry payload** (`payload_type: "dowry"`) → 25-field equal-weightage
  schema (legacy frontend aliases like `boy_salary` are mapped
  automatically), returns `predicted_acquisition_price_inr` with a
  MAE-based `prediction_range` (INR).

Empty objects `{}` and missing required fields always fail with 422 —
nothing reaches a model zero-filled. Unknown fields fail with 422
(`extra="forbid"`), except the explicit legacy aliases.

`POST /predict/batch` accepts `{ "items": [...] }` (legacy `"startups"` key
also works, startup-only), max 100 items (mixed types allowed), and returns
per-domain aggregates: `average_valuation_usd` and
`average_acquisition_price`.

Full request examples: `backend/test_request_examples.json`.

## API Endpoints

| Method | Path | Description |
|--------|--------------------|----------------------------------------------|
| GET | `/health` | Health check (models loaded?) |
| GET | `/ready` | Readiness probe |
| GET | `/model/info` | Startup model metadata (R², MAE, features 34) |
| POST | `/predict` | Single prediction (startup USD / dowry INR) |
| POST | `/predict/batch` | Batch prediction (max 100 items) |

## Quick Start

### 1. Setup Environment

```bash
cd Dowry

# Create virtual environment
python -m venv .venv
.venv\Scripts\activate      # Windows
# source .venv/bin/activate # Linux/Mac

pip install -r backend/requirements.txt
```

### 2. (Optional) Re-train the Models

```bash
cd backend

# Startup valuation model (USD, log-target ensemble)
python scripts/train_startup_model.py

# Legacy dowry equal-weightage model
python train_model.py --equal-weightage --no-advanced-features --no-tune
```

### 3. Start API Server

```bash
cd backend
uvicorn app.main:app --reload
```

**Access:** http://localhost:8000 (docs at `/docs`, redoc at `/redoc`)

### 4. Run Frontend

```bash
cd frontend
npm install
npm run dev
```

## Project Structure

```
Dowry/
├── backend/
│   ├── app/
│   │   ├── api/              # API endpoints (payload-type dispatch)
│   │   ├── core/             # Configuration (model paths, bounds)
│   │   ├── schemas/          # StartupData (34f) / DowryData (25f) + responses
│   │   └── services/         # StartupValuationService + legacy PredictionService
│   ├── models/               # startup_*.pkl (v2) + legacy *.pkl artifacts
│   ├── data/                 # startup_acquisition_dataset.csv (10k), dowry CSVs
│   ├── scripts/
│   │   ├── train_startup_model.py       # v2 trainer (log-target, honest CI)
│   │   ├── generate_startup_dataset.py
│   │   └── ...                          # legacy dowry training scripts
│   ├── tests/                # pytest suite (20 tests, new contract)
│   └── legacy/               # Quarantined legacy helpers
├── frontend/                 # Dowry-themed web interface (uses legacy path)
├── design.md                 # System design document
└── README.md
```

## Testing

```bash
cd backend
pytest tests/
```

Direct-service check scripts (run from `backend/`):

- `python test_integration.py` — loads the startup service, predicts
- `python test_pipeline_direct.py` — legacy dowry pipeline debug
- `python test_api_manually.py` — full manual endpoint sweep against a live
  server (needs `uvicorn app.main:app` running)

## Technologies

### Backend
- **Python 3.11**
- **FastAPI** - API framework
- **LightGBM / XGBoost / scikit-learn** - Gradient boosting & linear/NN candidates
- **pandas, numpy, joblib** - Data & persistence

### Frontend
- **Vue.js 3** - UI framework
- **Vite** - Build tool
- **TailwindCSS** - Styling
- **Recharts** - Visualizations

## Troubleshooting

### Windows console crashes with UnicodeEncodeError at startup
Windows consoles default to cp1252. The app calls
`sys.stdout/stderr.reconfigure(errors="replace")` in the lifespan, so emoji
in log messages no longer crash it. If you print your own emoji from a
separate script, run Python with `-X utf8`.

### Installation
```bash
pip install xgboost lightgbm scikit-learn joblib pandas numpy
```

## License

[Your License Here]
