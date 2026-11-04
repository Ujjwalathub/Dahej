import sys
sys.path.insert(0, 'e:/Dowry/backend')
from app.services.startup_prediction_service import StartupValuationService

# Initialize service
service = StartupValuationService()
print('Model loaded:', service.best_model_name)
_scores = (service.models_package.get('metrics_usd')
           or service.models_package.get('test_scores') or {})
print('R2 Score:', _scores.get(service.best_model_name, {}).get('R2', 0.0))

# Test prediction
test_data = {
    'monthly_recurring_revenue': 150000,
    'annual_recurring_revenue': 1800000,
    'revenue_growth_rate': 120,
    'gross_margin': 75,
    'burn_rate': 80000,
    'runway_months': 18.75,
    'total_funding_raised': 5000000,
    'last_round_valuation': 20000000,
    'funding_rounds': 3,
    'patents_granted': 8,
    'patents_pending': 3,
    'trademarks': 2,
    'customer_count': 250,
    'customer_growth_rate': 80,
    'customer_acquisition_cost': 5000,
    'lifetime_value': 25000,
    'ltv_cac_ratio': 5.0,
    'churn_rate': 8,
    'retention_rate': 92,
    'team_size': 45,
    'founder_experience_years': 8,
    'technical_team_pct': 60,
    'years_in_operation': 5.5,
    'monthly_active_users': 15000,
    'nps_score': 42,
    'infrastructure_value': 500000,
    'fleet_value': 0,
    'liquid_cash_reserves': 1500000,
    'business_model': 'B2B_Enterprise',
    'tech_sector': 'SaaS_Enterprise',
    'brand_reputation': 'Established',
    'revenue_model': 'Subscription',
    'has_pending_litigation': 'no',
    'is_first_acquisition': 'yes'
}

result = service.predict_single(test_data)
print('\n=== PREDICTION SUCCESSFUL ===')
print(f'Predicted Valuation: ${result["predicted_valuation_usd"]:,.0f}')
print(f'Lower Bound: ${result["confidence_interval"]["lower_bound_usd"]:,.0f}')
print(f'Upper Bound: ${result["confidence_interval"]["upper_bound_usd"]:,.0f}')
print(f'Model: {result["model_info"]["model_name"]}')
