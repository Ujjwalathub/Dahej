"""
Generate Realistic Startup Acquisition Dataset
==============================================

This script generates synthetic but realistic startup acquisition data
based on actual market patterns, industry multiples, and valuation drivers.

The data is based on:
- Real SaaS/tech company metrics
- Historical acquisition multiples
- Industry benchmarks (ARR multiples, LTV/CAC ratios)
- Geographic and sector variations
"""

import pandas as pd
import numpy as np
from datetime import datetime, timedelta
import warnings
warnings.filterwarnings('ignore')

np.random.seed(42)

class StartupDatasetGenerator:
    """Generate realistic startup acquisition dataset."""
    
    # Industry benchmarks (based on real market data)
    SECTOR_BENCHMARKS = {
        'AI_DeepTech': {
            'arr_multiple_mean': 15.0,
            'arr_multiple_std': 5.0,
            'growth_rate_mean': 150,
            'growth_rate_std': 80,
            'gross_margin_mean': 75,
            'churn_rate_mean': 5,
            'ip_importance': 'high'
        },
        'SaaS_Enterprise': {
            'arr_multiple_mean': 12.0,
            'arr_multiple_std': 4.0,
            'growth_rate_mean': 100,
            'growth_rate_std': 50,
            'gross_margin_mean': 80,
            'churn_rate_mean': 5,
            'ip_importance': 'medium'
        },
        'SaaS_SMB': {
            'arr_multiple_mean': 8.0,
            'arr_multiple_std': 3.0,
            'growth_rate_mean': 80,
            'growth_rate_std': 40,
            'gross_margin_mean': 75,
            'churn_rate_mean': 8,
            'ip_importance': 'low'
        },
        'Fintech': {
            'arr_multiple_mean': 10.0,
            'arr_multiple_std': 4.0,
            'growth_rate_mean': 120,
            'growth_rate_std': 60,
            'gross_margin_mean': 70,
            'churn_rate_mean': 6,
            'ip_importance': 'medium'
        },
        'E_commerce': {
            'arr_multiple_mean': 2.5,
            'arr_multiple_std': 1.0,
            'growth_rate_mean': 60,
            'growth_rate_std': 30,
            'gross_margin_mean': 40,
            'churn_rate_mean': 15,
            'ip_importance': 'low'
        },
        'Healthcare': {
            'arr_multiple_mean': 14.0,
            'arr_multiple_std': 5.0,
            'growth_rate_mean': 90,
            'growth_rate_std': 45,
            'gross_margin_mean': 70,
            'churn_rate_mean': 4,
            'ip_importance': 'high'
        }
    }
    
    BUSINESS_MODELS = ['B2B_Enterprise', 'B2C_Consumer', 'B2B_SMB', 'Hybrid']
    BRAND_REPUTATION = ['Industry_Leader', 'Established', 'Emerging', 'Controversial']
    REVENUE_MODELS = ['Subscription', 'Transaction', 'Advertising', 'Marketplace']
    
    def __init__(self, n_samples=10000):
        """Initialize generator.
        
        Parameters
        ----------
        n_samples : int
            Number of startup records to generate
        """
        self.n_samples = n_samples
        self.data = []
    
    def generate_base_features(self):
        """Generate base startup features."""
        print(f"\n{'='*80}")
        print("GENERATING STARTUP ACQUISITION DATASET")
        print(f"{'='*80}")
        print(f"Target samples: {self.n_samples:,}")
        
        for i in range(self.n_samples):
            if (i + 1) % 10000 == 0:
                print(f"  Generated {i+1:,} / {self.n_samples:,} samples...")
            
            # Select sector and get benchmarks
            sector = np.random.choice(list(self.SECTOR_BENCHMARKS.keys()))
            benchmarks = self.SECTOR_BENCHMARKS[sector]
            
            # Years in operation (3-10 years typical for acquisitions)
            years_in_operation = np.random.gamma(3, 1.5) + 2
            years_in_operation = np.clip(years_in_operation, 2, 15)
            
            # Annual Recurring Revenue (ARR)
            # Log-normal distribution: most startups small, few very large
            arr_base = np.random.lognormal(mean=14, sigma=1.5)  # ~$1M-$50M range
            arr = np.clip(arr_base, 100_000, 100_000_000)
            
            # Monthly Recurring Revenue
            mrr = arr / 12
            
            # Revenue growth rate (sector-dependent)
            growth_rate = np.random.normal(
                benchmarks['growth_rate_mean'],
                benchmarks['growth_rate_std']
            )
            growth_rate = np.clip(growth_rate, -20, 500)
            
            # Gross margin (sector-dependent)
            gross_margin = np.random.normal(
                benchmarks['gross_margin_mean'],
                10
            )
            gross_margin = np.clip(gross_margin, 20, 95)
            
            # Customer metrics
            # Customer count scales with ARR
            customer_count = int(arr / np.random.uniform(5000, 50000))
            customer_count = max(10, customer_count)
            
            # Customer growth rate correlates with revenue growth
            customer_growth_rate = growth_rate * np.random.uniform(0.7, 1.3)
            customer_growth_rate = np.clip(customer_growth_rate, -20, 500)
            
            # LTV/CAC ratio (healthy: >3, excellent: >5)
            ltv_cac_ratio = np.random.gamma(4, 1.2)
            ltv_cac_ratio = np.clip(ltv_cac_ratio, 0.5, 15)
            
            # Derive CAC and LTV
            cac = arr / customer_count * np.random.uniform(0.2, 0.5)
            ltv = cac * ltv_cac_ratio
            
            # Churn rate (sector-dependent, inverse of retention)
            churn_rate = np.random.normal(
                benchmarks['churn_rate_mean'],
                2
            )
            churn_rate = np.clip(churn_rate, 1, 30)
            retention_rate = 100 - churn_rate
            
            # Burn rate (function of ARR and profitability)
            if growth_rate > 100:  # High growth = higher burn
                burn_multiple = np.random.uniform(0.5, 2.0)
            else:
                burn_multiple = np.random.uniform(0.1, 0.8)
            burn_rate = arr / 12 * burn_multiple
            
            # Funding metrics
            total_funding = arr * np.random.uniform(0.5, 3.0)
            funding_rounds = int(np.random.gamma(2, 1) + 1)
            funding_rounds = np.clip(funding_rounds, 1, 8)
            
            # Last round valuation (typically 5-20x ARR for growth companies)
            last_round_multiple = np.random.uniform(5, 20)
            last_round_valuation = arr * last_round_multiple
            
            # Intellectual Property (sector-dependent)
            if benchmarks['ip_importance'] == 'high':
                patents_granted = int(np.random.gamma(3, 4))
                patents_pending = int(np.random.gamma(2, 3))
                trademarks = int(np.random.gamma(2, 2))
            elif benchmarks['ip_importance'] == 'medium':
                patents_granted = int(np.random.gamma(2, 2))
                patents_pending = int(np.random.gamma(1.5, 2))
                trademarks = int(np.random.gamma(1.5, 1.5))
            else:  # low
                patents_granted = int(np.random.gamma(1, 1))
                patents_pending = int(np.random.gamma(1, 1))
                trademarks = int(np.random.gamma(1, 1))
            
            # Team metrics
            # Team size scales with revenue
            team_size = int(arr / np.random.uniform(150_000, 400_000))
            team_size = max(5, min(team_size, 5000))
            
            founder_experience = np.random.gamma(3, 3)
            founder_experience = np.clip(founder_experience, 0, 30)
            
            technical_team_pct = np.random.beta(6, 3) * 100
            technical_team_pct = np.clip(technical_team_pct, 20, 90)
            
            # Product metrics
            mau = customer_count * np.random.uniform(1.5, 10)
            nps_score = np.random.normal(40, 20)
            nps_score = np.clip(nps_score, -100, 100)
            
            # Infrastructure & assets
            infrastructure_value = arr * np.random.uniform(0.1, 0.5)
            
            # Fleet value (only for certain sectors)
            if sector in ['E_commerce', 'Healthcare']:
                fleet_value = infrastructure_value * np.random.uniform(0.3, 0.8)
            else:
                fleet_value = 0
            
            # Cash reserves
            liquid_cash_reserves = total_funding * np.random.uniform(0.1, 0.6)
            
            # Runway (months)
            if burn_rate > 0:
                runway_months = liquid_cash_reserves / burn_rate
            else:
                runway_months = 999
            runway_months = np.clip(runway_months, 1, 999)
            
            # Categorical features
            business_model = np.random.choice(self.BUSINESS_MODELS)
            
            # Brand reputation correlates with growth and metrics
            if growth_rate > 150 and ltv_cac_ratio > 5:
                brand_weights = [0.5, 0.3, 0.15, 0.05]
            elif growth_rate > 80 and ltv_cac_ratio > 3:
                brand_weights = [0.2, 0.5, 0.25, 0.05]
            else:
                brand_weights = [0.1, 0.3, 0.5, 0.1]
            brand_reputation = np.random.choice(self.BRAND_REPUTATION, p=brand_weights)
            
            revenue_model = np.random.choice(self.REVENUE_MODELS)
            
            # Litigation (small chance)
            has_pending_litigation = np.random.random() < 0.05
            
            # First acquisition flag
            is_first_acquisition = np.random.random() < 0.7
            
            # ============================================================
            # CALCULATE ACQUISITION PRICE (TARGET VARIABLE)
            # ============================================================
            # Based on multiple factors:
            
            # 1. Base valuation from ARR multiple
            base_valuation = arr * benchmarks['arr_multiple_mean']
            
            # 2. Growth premium (high growth = premium)
            growth_premium = 1.0 + (growth_rate / 100) * 0.1
            growth_premium = np.clip(growth_premium, 0.5, 3.0)
            
            # 3. Margin quality (high margin = premium)
            margin_premium = 1.0 + (gross_margin - 50) / 100
            margin_premium = np.clip(margin_premium, 0.7, 1.5)
            
            # 4. Unit economics (good LTV/CAC = premium)
            ltv_cac_premium = 1.0 + (ltv_cac_ratio - 3) * 0.1
            ltv_cac_premium = np.clip(ltv_cac_premium, 0.6, 1.8)
            
            # 5. Retention premium
            retention_premium = 1.0 + (retention_rate - 85) / 50
            retention_premium = np.clip(retention_premium, 0.7, 1.4)
            
            # 6. IP premium
            ip_value = (patents_granted * 3 + patents_pending + trademarks * 0.5)
            ip_premium = 1.0 + ip_value * 0.01
            ip_premium = np.clip(ip_premium, 1.0, 1.5)
            
            # 7. Team premium
            team_premium = 1.0 + (founder_experience - 5) * 0.02
            team_premium = np.clip(team_premium, 0.8, 1.3)
            
            # 8. Brand premium
            brand_premiums = {
                'Industry_Leader': 1.3,
                'Established': 1.1,
                'Emerging': 1.0,
                'Controversial': 0.7
            }
            brand_premium_factor = brand_premiums[brand_reputation]
            
            # 9. Litigation discount
            litigation_discount = 0.85 if has_pending_litigation else 1.0
            
            # 10. Market sector adjustment
            sector_noise = np.random.uniform(0.85, 1.15)
            
            # Final acquisition price
            acquisition_price = (
                base_valuation *
                growth_premium *
                margin_premium *
                ltv_cac_premium *
                retention_premium *
                ip_premium *
                team_premium *
                brand_premium_factor *
                litigation_discount *
                sector_noise
            )
            
            # Add some random noise (±15%)
            acquisition_price *= np.random.uniform(0.85, 1.15)
            
            # Ensure reasonable bounds
            acquisition_price = np.clip(acquisition_price, 500_000, 500_000_000)
            
            # Store record
            record = {
                # Financial metrics
                'monthly_recurring_revenue': mrr,
                'annual_recurring_revenue': arr,
                'revenue_growth_rate': growth_rate,
                'gross_margin': gross_margin,
                'burn_rate': burn_rate,
                'runway_months': runway_months,
                
                # Funding metrics
                'total_funding_raised': total_funding,
                'last_round_valuation': last_round_valuation,
                'funding_rounds': funding_rounds,
                
                # IP metrics
                'patents_granted': patents_granted,
                'patents_pending': patents_pending,
                'trademarks': trademarks,
                
                # Customer metrics
                'customer_count': customer_count,
                'customer_growth_rate': customer_growth_rate,
                'customer_acquisition_cost': cac,
                'lifetime_value': ltv,
                'ltv_cac_ratio': ltv_cac_ratio,
                'churn_rate': churn_rate,
                'retention_rate': retention_rate,
                
                # Team metrics
                'team_size': team_size,
                'founder_experience_years': founder_experience,
                'technical_team_pct': technical_team_pct,
                
                # Product metrics
                'years_in_operation': years_in_operation,
                'monthly_active_users': mau,
                'nps_score': nps_score,
                
                # Infrastructure
                'infrastructure_value': infrastructure_value,
                'fleet_value': fleet_value,
                'liquid_cash_reserves': liquid_cash_reserves,
                
                # Categorical
                'business_model': business_model,
                'tech_sector': sector,
                'brand_reputation': brand_reputation,
                'revenue_model': revenue_model,
                'has_pending_litigation': 'yes' if has_pending_litigation else 'no',
                'is_first_acquisition': 'yes' if is_first_acquisition else 'no',
                
                # Target
                'acquisition_price_usd': acquisition_price
            }
            
            self.data.append(record)
        
        print(f"✓ Generated {self.n_samples:,} startup records")
        return self
    
    def create_dataframe(self):
        """Convert to pandas DataFrame."""
        df = pd.DataFrame(self.data)
        
        print(f"\n{'='*80}")
        print("DATASET STATISTICS")
        print(f"{'='*80}")
        
        print(f"\nShape: {df.shape}")
        print(f"Memory usage: {df.memory_usage(deep=True).sum() / 1024**2:.2f} MB")
        
        print("\nAcquisition Price Distribution:")
        print(f"  Mean:   ${df['acquisition_price_usd'].mean():,.0f}")
        print(f"  Median: ${df['acquisition_price_usd'].median():,.0f}")
        print(f"  Min:    ${df['acquisition_price_usd'].min():,.0f}")
        print(f"  Max:    ${df['acquisition_price_usd'].max():,.0f}")
        print(f"  Std:    ${df['acquisition_price_usd'].std():,.0f}")
        
        print("\nSector Distribution:")
        print(df['tech_sector'].value_counts())
        
        print("\nBusiness Model Distribution:")
        print(df['business_model'].value_counts())
        
        print(f"\n{'='*80}")
        
        return df
    
    def save(self, filepath):
        """Save dataset to CSV."""
        df = self.create_dataframe()
        df.to_csv(filepath, index=False)
        print(f"\n✓ Dataset saved to: {filepath}")
        print(f"{'='*80}\n")
        return df


def main():
    """Generate and save startup acquisition dataset."""
    
    print("\n" + "="*80)
    print("STARTUP ACQUISITION DATASET GENERATOR")
    print("="*80)
    print("\nGenerating realistic synthetic startup acquisition data")
    print("Based on industry benchmarks and actual market patterns")
    print("="*80)
    
    # Generate dataset
    generator = StartupDatasetGenerator(n_samples=10000)
    generator.generate_base_features()
    
    # Save to file
    output_path = '../data/startup_acquisition_dataset.csv'
    df = generator.save(output_path)
    
    print("\n✓ Dataset generation complete!")
    print("\nNext steps:")
    print("  1. Review the generated data")
    print("  2. Run: python train_startup_model.py")
    print("  3. Validate model performance")
    print("="*80 + "\n")
    
    return df


if __name__ == "__main__":
    df = main()
