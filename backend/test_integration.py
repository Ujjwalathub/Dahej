"""Test the integrated startup valuation API"""
import sys
from app.services.startup_prediction_service import get_startup_valuation_service

print("="*80)
print("TESTING INTEGRATED STARTUP VALUATION API")
print("="*80)

print("\n1. Testing Service Loading...")
try:
    service = get_startup_valuation_service()
    if service and service.is_loaded():
        print(f"   SUCCESS: Service loaded - {service.best_model_name}")
        scores = (service.models_package.get('metrics_usd')
                  or service.models_package.get('test_scores') or {})
        r2 = scores.get(service.best_model_name, {}).get('R2', 0.0)
        print(f"   R2 Score: {r2:.4f}")
    else:
        print("   FAILED: Service not loaded")
        sys.exit(1)
except Exception as e:
    print(f"   FAILED: {e}")
    sys.exit(1)

print("\n2. Testing Prediction...")
test_data = {
    'monthly_recurring_revenue': 150000, 'annual_recurring_revenue': 1800000,
    'revenue_growth_rate': 120, 'gross_margin': 75, 'burn_rate': 80000,
    'runway_months': 18, 'total_funding_raised': 5000000,
    'last_round_valuation': 20000000, 'funding_rounds': 3,
    'patents_granted': 8, 'patents_pending': 3, 'trademarks': 2,
    'customer_count': 250, 'customer_growth_rate': 80,
    'customer_acquisition_cost': 5000, 'lifetime_value': 25000,
    'ltv_cac_ratio': 5.0, 'churn_rate': 8, 'retention_rate': 92,
    'team_size': 45, 'founder_experience_years': 8,
    'technical_team_pct': 60, 'years_in_operation': 5.5,
    'monthly_active_users': 15000, 'nps_score': 42,
    'infrastructure_value': 500000, 'fleet_value': 0,
    'liquid_cash_reserves': 1500000, 'business_model': 'B2B_Enterprise',
    'tech_sector': 'SaaS_Enterprise', 'brand_reputation': 'Established',
    'revenue_model': 'Subscription', 'has_pending_litigation': 'no',
    'is_first_acquisition': 'yes'
}

try:
    result = service.predict_single(test_data)
    val = result['predicted_valuation_usd']
    lo = result['confidence_interval']['lower_bound_usd']
    hi = result['confidence_interval']['upper_bound_usd']
    print(f"   SUCCESS: Prediction complete")
    print(f"   Valuation: ${val:,.0f}")
    print(f"   Range: ${lo:,.0f} - ${hi:,.0f}")
except Exception as e:
    print(f"   FAILED: {e}")
    sys.exit(1)

print("\n" + "="*80)
print("ALL TESTS PASSED - BACKEND IS READY")
print("="*80)
print("\nThe fixed startup valuation model is now integrated!")
print("Start the API: python run.py")
print("="*80)
