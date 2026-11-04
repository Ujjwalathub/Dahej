"""
API Endpoint Tests

Tests for all API endpoints using pytest.

Contract (startup-valuation platform):
- Startup payloads  -> USD acquisition valuation (predicted_valuation_usd)
- Legacy dowry payloads -> INR equal-weightage valuation
  (predicted_acquisition_price_inr)

The TestClient is used as a context manager so the FastAPI lifespan hook
runs and both services (startup + dowry) are loaded into app.state —
without it the endpoints fall back to the lazy singleton and startup
payloads would (correctly) be rejected by the dowry service.
"""

import pytest
from fastapi.testclient import TestClient
from app.main import app


@pytest.fixture(scope="module")
def client():
    with TestClient(app) as c:
        yield c


class TestHealthEndpoints:
    """Test health check and info endpoints."""

    def test_ping(self, client):
        """Test simple ping endpoint."""
        response = client.get("/ping")
        assert response.status_code == 200
        assert response.json() == {"status": "pong"}

    def test_health_check(self, client):
        """Test health check endpoint."""
        response = client.get("/health")
        assert response.status_code == 200
        data = response.json()
        assert "status" in data
        assert "model_loaded" in data
        assert "version" in data

    def test_root(self, client):
        """Test root endpoint."""
        response = client.get("/")
        assert response.status_code == 200
        data = response.json()
        assert "message" in data
        assert "version" in data
        assert "endpoints" in data


class TestModelEndpoints:
    """Test model-related endpoints."""

    def test_model_info(self, client):
        """Test model information endpoint.

        /model/info now serves the startup valuation model
        (log-target ensemble trained on the 10k acquisition dataset),
        not the legacy dowry equal-weightage model.
        """
        response = client.get("/model/info")
        assert response.status_code == 200
        data = response.json()
        assert "model_type" in data
        assert "features" in data
        assert "training_samples" in data
        assert data["features"] == 34
        assert data["training_samples"] == 10000
        assert data["r2_score"] > 0.9  # sanity: v2 model quality


class TestPredictionEndpoints:
    """Test prediction endpoints."""

    def get_sample_startup_data(self):
        """Full 34-feature startup payload matching the trained model."""
        return {
            "monthly_recurring_revenue": 150000,
            "annual_recurring_revenue": 1800000,
            "revenue_growth_rate": 120,
            "gross_margin": 75,
            "burn_rate": 80000,
            "runway_months": 18.75,
            "total_funding_raised": 5000000,
            "last_round_valuation": 20000000,
            "funding_rounds": 3,
            "patents_granted": 8,
            "patents_pending": 3,
            "trademarks": 2,
            "customer_count": 250,
            "customer_growth_rate": 80,
            "customer_acquisition_cost": 5000,
            "lifetime_value": 25000,
            "ltv_cac_ratio": 5.0,
            "churn_rate": 8,
            "retention_rate": 92,
            "team_size": 45,
            "founder_experience_years": 8,
            "technical_team_pct": 60,
            "years_in_operation": 5.5,
            "monthly_active_users": 15000,
            "nps_score": 42,
            "infrastructure_value": 500000,
            "fleet_value": 0,
            "liquid_cash_reserves": 1500000,
            "business_model": "B2B_Enterprise",
            "brand_reputation": "Established",
            "tech_sector": "SaaS_Enterprise",
            "revenue_model": "Subscription",
            "has_pending_litigation": "no",
            "is_first_acquisition": "yes",
        }

    def get_sample_dowry_data(self):
        """Legacy dowry payload for the equal-weightage model."""
        return {
            "boy_height": 170.0,
            "boy_income": 500000,
            "boy_job": "Engineer",
            "boy_first_marriage": "yes",
            "boy_father_income": 300000,
            "boy_area": "Urban",
            "boy_skin_colour": "Fair",
            "boy_caste": "General",
            "boy_religion": "Hindu",
            "boy_age": 28,
            "boy_physical_disability": "no",
            "boy_job_stability": "high",
            "girl_height": 160.0,
            "girl_income": 200000,
            "girl_job": "Teacher",
            "girl_first_marriage": "yes",
            "girl_father_income": 200000,
            "girl_area": "Urban",
            "girl_skin_colour": "Fair",
            "girl_caste": "General",
            "girl_religion": "Hindu",
            "girl_age": 25,
            "girl_physical_disability": "no",
            "intercaste_interreligion": "no",
        }

    def test_startup_prediction_success(self, client):
        """Startup payload returns a USD valuation + empirical interval."""
        data = self.get_sample_startup_data()
        response = client.post("/predict", json=data)

        assert response.status_code == 200
        result = response.json()
        assert result["success"] is True
        assert "data" in result
        d = result["data"]
        assert "predicted_valuation_usd" in d
        assert d["predicted_valuation_usd"] > 0
        assert "confidence_interval" in d
        ci = d["confidence_interval"]
        assert "lower_bound_usd" in ci and "upper_bound_usd" in ci
        assert 0 <= ci["lower_bound_usd"] <= ci["upper_bound_usd"]

    def test_startup_prediction_sanity(self, client):
        """A stronger business must not be valued below a weaker one."""
        strong = self.get_sample_startup_data()
        weak = self.get_sample_startup_data()
        weak.update(
            {
                "monthly_recurring_revenue": 40000,
                "annual_recurring_revenue": 480000,
                "revenue_growth_rate": 15,
                "gross_margin": 55,
                "burn_rate": 100000,
                "liquid_cash_reserves": 300000,
                "total_funding_raised": 500000,
                "last_round_valuation": 3000000,
                "customer_count": 30,
                "customer_growth_rate": 10,
                "monthly_active_users": 2000,
                "nps_score": 10,
                "team_size": 8,
                "brand_reputation": "Emerging",
            }
        )

        r_strong = client.post("/predict", json=strong)
        r_weak = client.post("/predict", json=weak)
        assert r_strong.status_code == 200
        assert r_weak.status_code == 200
        v_strong = r_strong.json()["data"]["predicted_valuation_usd"]
        v_weak = r_weak.json()["data"]["predicted_valuation_usd"]
        assert v_strong > v_weak > 0

    def test_startup_pending_lawsuits_alias(self, client):
        """Legacy field name pending_lawsuits maps to has_pending_litigation."""
        data = self.get_sample_startup_data()
        data.pop("has_pending_litigation")
        data["pending_lawsuits"] = "no"

        response = client.post("/predict", json=data)
        assert response.status_code == 200
        assert response.json()["data"]["predicted_valuation_usd"] > 0

    def test_startup_missing_field(self, client):
        """Strictness: missing required fields are rejected (422)."""
        data = self.get_sample_startup_data()
        del data["monthly_recurring_revenue"]

        response = client.post("/predict", json=data)
        assert response.status_code == 422

    def test_startup_invalid_revenue_model(self, client):
        """Test with invalid revenue model."""
        data = self.get_sample_startup_data()
        data["revenue_model"] = "InvalidModel"

        response = client.post("/predict", json=data)
        assert response.status_code == 422

    def test_startup_invalid_tech_sector(self, client):
        """Test with a sector the trained model has no level for."""
        data = self.get_sample_startup_data()
        data["tech_sector"] = "Other"

        response = client.post("/predict", json=data)
        assert response.status_code == 422

    def test_startup_invalid_years_range(self, client):
        """Test with years out of valid range (>100)."""
        data = self.get_sample_startup_data()
        data["years_in_operation"] = 150.0

        response = client.post("/predict", json=data)
        assert response.status_code == 422

    def test_dowry_prediction_success(self, client):
        """Legacy dowry payload returns an INR valuation."""
        data = self.get_sample_dowry_data()
        response = client.post("/predict", json=data)

        assert response.status_code == 200
        result = response.json()
        assert result["success"] is True
        d = result["data"]
        assert "predicted_acquisition_price_inr" in d
        assert 0 < d["predicted_acquisition_price_inr"] <= 10000000
        assert "confidence_score" in d
        assert "prediction_range" in d

    def test_dowry_prediction_clipped_to_ceiling(self, client):
        """Out-of-distribution income is clipped to the safety ceiling.

        90M passes the schema bound (<=100M) but is far beyond the
        training dataset, so the service must clip the prediction to
        MAX_DOWRY_AMOUNT (1 Crore) instead of extrapolating.
        """
        data = self.get_sample_dowry_data()
        data["boy_income"] = 90000000
        data["girl_father_income"] = 90000000

        response = client.post("/predict", json=data)
        assert response.status_code == 200
        assert (
            response.json()["data"]["predicted_acquisition_price_inr"]
            <= 10000000
        )

    def test_dowry_missing_field(self, client):
        """Dowry payloads are strict too: missing fields -> 422."""
        data = self.get_sample_dowry_data()
        del data["boy_income"]

        response = client.post("/predict", json=data)
        assert response.status_code == 422

    def test_empty_payload_rejected(self, client):
        """{} must never reach a model with silent defaults."""
        response = client.post("/predict", json={})
        assert response.status_code == 422

    def test_batch_prediction_success(self, client):
        """Mixed startup + dowry batch."""
        data = {
            "items": [
                self.get_sample_startup_data(),
                self.get_sample_startup_data(),
                self.get_sample_dowry_data(),
            ]
        }

        response = client.post("/predict/batch", json=data)

        assert response.status_code == 200
        result = response.json()
        assert result["success"] is True
        assert "data" in result
        assert result["data"]["total_count"] == 3
        assert len(result["data"]["predictions"]) == 3
        preds = result["data"]["predictions"]
        assert any("predicted_valuation_usd" in p for p in preds)
        assert any("predicted_acquisition_price_inr" in p for p in preds)
        # Aggregate averages (per-domain).
        assert "average_valuation_usd" in result["data"]
        assert "average_acquisition_price" in result["data"]

    def test_batch_prediction_legacy_startups_alias(self, client):
        """The legacy `startups` key still works."""
        startups = [self.get_sample_startup_data() for _ in range(3)]
        data = {"startups": startups}

        response = client.post("/predict/batch", json=data)

        assert response.status_code == 200
        result = response.json()
        assert result["data"]["total_count"] == 3
        assert len(result["data"]["predictions"]) == 3

    def test_batch_prediction_empty(self, client):
        """Empty batch -> 422."""
        data = {"items": []}
        response = client.post("/predict/batch", json=data)
        assert response.status_code == 422

    def test_batch_prediction_missing_items(self, client):
        """No items/startups key at all -> 422."""
        response = client.post("/predict/batch", json={})
        assert response.status_code == 422

    def test_batch_prediction_too_many(self, client):
        """More than 100 items -> 400."""
        startups = [self.get_sample_startup_data() for _ in range(101)]
        data = {"startups": startups}

        response = client.post("/predict/batch", json=data)
        assert response.status_code == 400


if __name__ == "__main__":
    pytest.main([__file__, "-v"])
