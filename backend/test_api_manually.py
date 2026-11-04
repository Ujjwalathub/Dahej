"""
Manual API Testing Script

Quick script to test all API endpoints without starting the server separately.

Payload contract:
- Startup payloads (full 34-feature schema) -> USD valuation
- Legacy dowry payloads -> INR valuation
"""

import json
from time import sleep

BASE_URL = "http://localhost:8000"


def _ensure_requests():
    """stdlib shim so the script runs even without third-party requests."""
    import urllib.request
    import urllib.error

    class _Resp:
        def __init__(self, raw):
            self.status_code = raw.status
            self._body = raw.read().decode("utf-8", errors="replace")

        def json(self):
            return json.loads(self._body)

    class _Session:
        @staticmethod
        def _call(method, url, body=None):
            data = json.dumps(body).encode("utf-8") if body is not None else None
            req = urllib.request.Request(url, data=data, method=method,
                                         headers={"Content-Type": "application/json"})
            try:
                with urllib.request.urlopen(req) as raw:
                    return _Resp(raw)
            except urllib.error.HTTPError as e:
                with e as raw:
                    return _Resp(raw)

        @staticmethod
        def get(url):
            return _Session._call("GET", url)

        @staticmethod
        def post(url, json=None):
            return _Session._call("POST", url, json)

    class _RequestsModule:
        class exceptions:
            class ConnectionError(Exception):
                pass

    _RequestsModule.get = _Session.get
    _RequestsModule.post = _Session.post
    import sys
    mod = _RequestsModule()
    mod.get = _Session.get
    mod.post = _Session.post
    sys.modules["requests"] = mod
    return mod


try:
    requests.get(BASE_URL + "/ping")
except Exception:
    requests = _ensure_requests()


def print_section(title):
    """Print a formatted section header."""
    print("\n" + "=" * 80)
    print(f" {title}")
    print("=" * 80)


def get_sample_startup(**overrides):
    """Full 34-feature startup payload matching the trained model."""
    data = {
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
    data.update(overrides)
    return data


def get_sample_dowry_data():
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


def test_health():
    """Test health check endpoint."""
    print_section("Testing Health Check")

    try:
        response = requests.get(f"{BASE_URL}/health")
        print(f"Status Code: {response.status_code}")
        print(f"Response: {json.dumps(response.json(), indent=2)}")
        return response.status_code == 200
    except Exception as e:
        print(f"[FAIL] Error: {str(e)}")
        return False


def test_model_info():
    """Test model info endpoint."""
    print_section("Testing Model Info")

    try:
        response = requests.get(f"{BASE_URL}/model/info")
        print(f"Status Code: {response.status_code}")
        print(f"Response: {json.dumps(response.json(), indent=2)}")
        return response.status_code == 200
    except Exception as e:
        print(f"[FAIL] Error: {str(e)}")
        return False


def test_single_prediction():
    """Test single prediction endpoint (startup -> USD)."""
    print_section("Testing Single Prediction (Startup)")

    data = get_sample_startup()

    try:
        print(f"Request Data: {json.dumps(data, indent=2)}")
        response = requests.post(f"{BASE_URL}/predict", json=data)
        print(f"\nStatus Code: {response.status_code}")
        print(f"Response: {json.dumps(response.json(), indent=2)}")

        if response.status_code == 200:
            result = response.json()
            val = result['data']['predicted_valuation_usd']
            print(f"\n[USD] Predicted Acquisition Valuation: ${val:,.0f}")
            return True
        return False
    except Exception as e:
        print(f"[FAIL] Error: {str(e)}")
        return False


def test_single_prediction_dowry():
    """Test single prediction endpoint (legacy dowry -> INR)."""
    print_section("Testing Single Prediction (Legacy Dowry)")

    data = get_sample_dowry_data()

    try:
        print(f"Request Data: {json.dumps(data, indent=2)}")
        response = requests.post(f"{BASE_URL}/predict", json=data)
        print(f"\nStatus Code: {response.status_code}")
        print(f"Response: {json.dumps(response.json(), indent=2)}")

        if response.status_code == 200:
            result = response.json()
            price = result['data']['predicted_acquisition_price_inr']
            print(f"\n[INR] Predicted Acquisition Price: Rs.{price:,}")
            return True
        return False
    except Exception as e:
        print(f"[FAIL] Error: {str(e)}")
        return False


def test_batch_prediction():
    """Test batch prediction endpoint (mixed startup + dowry)."""
    print_section("Testing Batch Prediction")

    data = {
        "items": [
            get_sample_startup(),
            get_sample_startup(
                monthly_recurring_revenue=80000,
                annual_recurring_revenue=960000,
                revenue_growth_rate=45,
                gross_margin=60,
                burn_rate=50000,
                total_funding_raised=1500000,
                last_round_valuation=6000000,
                customer_count=90,
                customer_growth_rate=30,
                monthly_active_users=6000,
                nps_score=20,
                team_size=15,
                brand_reputation="Emerging",
                business_model="B2C_Consumer",
                tech_sector="SaaS_SMB",
            ),
            get_sample_dowry_data(),
        ]
    }

    try:
        print(f"Sending {len(data['items'])} items for prediction...")
        response = requests.post(f"{BASE_URL}/predict/batch", json=data)
        print(f"\nStatus Code: {response.status_code}")
        print(f"Response: {json.dumps(response.json(), indent=2)}")

        if response.status_code == 200:
            result = response.json()
            print(f"\n[INFO] Total Predictions: {result['data']['total_count']}")
            print(f"[USD] Average Valuation: ${result['data']['average_valuation_usd']:,.2f}")
            return True
        return False
    except Exception as e:
        print(f"[FAIL] Error: {str(e)}")
        return False


def test_validation_error():
    """Test validation error handling (missing required fields)."""
    print_section("Testing Validation (Invalid Input)")

    data = {
        "monthly_recurring_revenue": 150000,
        "revenue_growth_rate": 120,
        "gross_margin": 75,
        "business_model": "B2B_Enterprise",
        "brand_reputation": "Industry_Leader",
        "tech_sector": "AI_DeepTech",
        "has_pending_litigation": "no",
        "years_in_operation": 5.5,
        "is_first_acquisition": "yes"
    }
    # Most of the 34 required features are missing -> 422
    try:
        response = requests.post(f"{BASE_URL}/predict", json=data)
        print(f"Status Code: {response.status_code}")
        print(f"Response (truncated): {json.dumps(response.json(), indent=2)[:2000]}")

        if response.status_code == 422:
            print("\n[PASS] Validation error caught successfully!")
            return True
        return False
    except Exception as e:
        print(f"[FAIL] Error: {str(e)}")
        return False


def main():
    """Run all tests."""
    print("\n" + "=" * 80)
    print(" STARTUP ACQUISITION VALUATION API - MANUAL TEST SUITE")
    print("=" * 80)
    print("\nMake sure the API server is running:")
    print("  python run.py")
    print("\nOr:")
    print("  uvicorn app.main:app --reload")
    print("\nWaiting for server to be ready...")
    sleep(2)

    results = {
        "Health Check": test_health(),
        "Model Info": test_model_info(),
        "Single Prediction (Startup)": test_single_prediction(),
        "Single Prediction (Dowry)": test_single_prediction_dowry(),
        "Batch Prediction": test_batch_prediction(),
        "Validation Error": test_validation_error()
    }

    # Summary
    print_section("TEST SUMMARY")

    passed = sum(1 for v in results.values() if v)
    total = len(results)

    for test_name, result in results.items():
        status = "[PASS]" if result else "[FAIL]"
        print(f"{test_name:30s} {status}")

    print(f"\nTotal: {passed}/{total} tests passed")

    if passed == total:
        print("\nAll tests passed! Your API is working perfectly!")
    else:
        print("\nSome tests failed. Check the output above for details.")

    print("=" * 80 + "\n")


if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        print("\n\nTests interrupted by user")
    except requests.exceptions.ConnectionError:
        print("\n\n[FAIL] ERROR: Could not connect to API server!")
        print("Make sure the server is running:")
        print("  python run.py")
        print("\nOr:")
        print("  uvicorn app.main:app --reload")
    except OSError:
        # urllib shim path (no third-party requests installed)
        print("\n\n[FAIL] ERROR: Could not connect to API server!")
        print("Make sure the server is running:")
        print("  python run.py")
        print("\nOr:")
        print("  uvicorn app.main:app --reload")
