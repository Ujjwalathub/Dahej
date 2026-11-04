"""
Request Schemas for Startup Valuation API
==========================================

Pydantic models for validating startup acquisition valuation requests.

DEPRECATED: superseded by ``app.schemas.request.StartupData`` - that module
is the single source of truth for the 34-feature startup payload used by
``/predict`` (the API layer validates requests against it). This file is
kept only for reference; nothing in the app imports it. Do not use it in
new code.
"""

from pydantic import BaseModel, Field, field_validator
from typing import Optional, List


class StartupValuationRequest(BaseModel):
    """Request schema for startup acquisition valuation prediction.
    
    All features are REAL BUSINESS METRICS - no feature mapping.
    """
    
    # Financial Metrics (Required)
    monthly_recurring_revenue: float = Field(
        ...,
        ge=0,
        description="Monthly Recurring Revenue (MRR) in USD",
        examples=[150000]
    )
    
    annual_recurring_revenue: Optional[float] = Field(
        None,
        ge=0,
        description="Annual Recurring Revenue (ARR) in USD (calculated from MRR if not provided)"
    )
    
    revenue_growth_rate: float = Field(
        ...,
        ge=-100,
        le=1000,
        description="Year-over-year revenue growth rate (%)",
        examples=[120]
    )
    
    gross_margin: float = Field(
        ...,
        ge=0,
        le=100,
        description="Gross profit margin (%)",
        examples=[75]
    )
    
    burn_rate: float = Field(
        ...,
        ge=0,
        description="Monthly cash burn rate in USD",
        examples=[80000]
    )
    
    runway_months: Optional[float] = Field(
        None,
        ge=0,
        description="Cash runway in months (calculated if not provided)"
    )
    
    # Funding Metrics (Required)
    total_funding_raised: float = Field(
        ...,
        ge=0,
        description="Total funding raised to date in USD",
        examples=[5000000]
    )
    
    last_round_valuation: float = Field(
        ...,
        ge=0,
        description="Most recent round pre-money valuation in USD",
        examples=[20000000]
    )
    
    funding_rounds: int = Field(
        ...,
        ge=1,
        le=20,
        description="Number of funding rounds completed",
        examples=[3]
    )
    
    # Intellectual Property (Required)
    patents_granted: int = Field(
        ...,
        ge=0,
        le=10000,
        description="Number of granted patents",
        examples=[8]
    )
    
    patents_pending: int = Field(
        0,
        ge=0,
        le=10000,
        description="Number of pending patent applications"
    )
    
    trademarks: int = Field(
        0,
        ge=0,
        le=1000,
        description="Number of registered trademarks"
    )
    
    # Customer Metrics (Required)
    customer_count: int = Field(
        ...,
        ge=1,
        description="Total number of active customers",
        examples=[250]
    )
    
    customer_growth_rate: float = Field(
        ...,
        ge=-100,
        le=1000,
        description="Year-over-year customer growth rate (%)",
        examples=[80]
    )
    
    customer_acquisition_cost: float = Field(
        ...,
        ge=0,
        description="Customer Acquisition Cost (CAC) in USD",
        examples=[5000]
    )
    
    lifetime_value: float = Field(
        ...,
        ge=0,
        description="Customer Lifetime Value (LTV) in USD",
        examples=[25000]
    )
    
    ltv_cac_ratio: Optional[float] = Field(
        None,
        ge=0,
        description="LTV/CAC ratio (calculated if not provided)"
    )
    
    churn_rate: float = Field(
        ...,
        ge=0,
        le=100,
        description="Annual customer churn rate (%)",
        examples=[8]
    )
    
    retention_rate: Optional[float] = Field(
        None,
        ge=0,
        le=100,
        description="Customer retention rate (calculated if not provided)"
    )
    
    # Team Metrics (Required)
    team_size: int = Field(
        ...,
        ge=1,
        le=100000,
        description="Total number of employees",
        examples=[45]
    )
    
    founder_experience_years: float = Field(
        ...,
        ge=0,
        le=50,
        description="Average years of founder experience",
        examples=[8]
    )
    
    technical_team_pct: float = Field(
        ...,
        ge=0,
        le=100,
        description="Percentage of team in technical roles",
        examples=[60]
    )
    
    # Product Metrics (Required)
    years_in_operation: float = Field(
        ...,
        ge=0,
        le=100,
        description="Years since company founding",
        examples=[5.5]
    )
    
    monthly_active_users: int = Field(
        ...,
        ge=0,
        description="Monthly Active Users (MAU)",
        examples=[15000]
    )
    
    nps_score: float = Field(
        ...,
        ge=-100,
        le=100,
        description="Net Promoter Score",
        examples=[42]
    )
    
    # Infrastructure & Assets (Required)
    infrastructure_value: float = Field(
        ...,
        ge=0,
        description="Value of infrastructure and IT assets in USD",
        examples=[500000]
    )
    
    fleet_value: float = Field(
        0,
        ge=0,
        description="Value of physical fleet/equipment in USD (optional)"
    )
    
    liquid_cash_reserves: float = Field(
        ...,
        ge=0,
        description="Current cash and liquid equivalents in USD",
        examples=[1500000]
    )
    
    # Categorical Features (Required)
    business_model: str = Field(
        ...,
        description="Primary business model",
        pattern="^(B2B_Enterprise|B2C_Consumer|B2B_SMB|Hybrid)$",
        examples=["B2B_Enterprise"]
    )
    
    tech_sector: str = Field(
        ...,
        description="Technology sector",
        pattern="^(AI_DeepTech|SaaS_Enterprise|SaaS_SMB|Fintech|E_commerce|Healthcare)$",
        examples=["SaaS_Enterprise"]
    )
    
    brand_reputation: str = Field(
        ...,
        description="Market brand reputation",
        pattern="^(Industry_Leader|Established|Emerging|Controversial)$",
        examples=["Established"]
    )
    
    revenue_model: str = Field(
        ...,
        description="Primary revenue model",
        pattern="^(Subscription|Transaction|Advertising|Marketplace)$",
        examples=["Subscription"]
    )
    
    has_pending_litigation: str = Field(
        "no",
        description="Whether there is pending litigation",
        pattern="^(yes|no)$",
        examples=["no"]
    )
    
    is_first_acquisition: str = Field(
        "yes",
        description="Whether this is acquirer's first acquisition",
        pattern="^(yes|no)$",
        examples=["yes"]
    )
    
    @field_validator('annual_recurring_revenue', mode='before')
    @classmethod
    def calculate_arr(cls, v, info):
        """Calculate ARR from MRR if not provided."""
        if v is None and 'monthly_recurring_revenue' in info.data:
            return info.data['monthly_recurring_revenue'] * 12
        return v
    
    @field_validator('ltv_cac_ratio', mode='before')
    @classmethod
    def calculate_ltv_cac(cls, v, info):
        """Calculate LTV/CAC ratio if not provided."""
        if v is None:
            ltv = info.data.get('lifetime_value', 0)
            cac = info.data.get('customer_acquisition_cost', 1)
            return ltv / cac if cac > 0 else 0
        return v
    
    @field_validator('retention_rate', mode='before')
    @classmethod
    def calculate_retention(cls, v, info):
        """Calculate retention from churn if not provided."""
        if v is None and 'churn_rate' in info.data:
            return 100 - info.data['churn_rate']
        return v
    
    @field_validator('runway_months', mode='before')
    @classmethod
    def calculate_runway(cls, v, info):
        """Calculate runway if not provided."""
        if v is None:
            cash = info.data.get('liquid_cash_reserves', 0)
            burn = info.data.get('burn_rate', 1)
            return cash / burn if burn > 0 else 999
        return v

    model_config = {
        "json_schema_extra": {
            "examples": [
                {
                    "monthly_recurring_revenue": 150000,
                    "revenue_growth_rate": 120,
                    "gross_margin": 75,
                    "burn_rate": 80000,
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
                    "churn_rate": 8,
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
                    "tech_sector": "SaaS_Enterprise",
                    "brand_reputation": "Established",
                    "revenue_model": "Subscription",
                    "has_pending_litigation": "no",
                    "is_first_acquisition": "yes"
                }
            ]
        }
    }


class BatchStartupValuationRequest(BaseModel):
    """Request schema for batch startup valuations."""
    
    startups: List[StartupValuationRequest] = Field(
        ...,
        min_length=1,
        max_length=100,
        description="List of startups to value (max 100)"
    )

    model_config = {
        "json_schema_extra": {
            "examples": [
                {
                    "startups": [
                        {
                            "monthly_recurring_revenue": 150000,
                            "revenue_growth_rate": 120,
                            "gross_margin": 75,
                            "burn_rate": 80000,
                            "total_funding_raised": 5000000,
                            "last_round_valuation": 20000000,
                            "funding_rounds": 3,
                            "patents_granted": 8,
                            "customer_count": 250,
                            "customer_growth_rate": 80,
                            "customer_acquisition_cost": 5000,
                            "lifetime_value": 25000,
                            "churn_rate": 8,
                            "team_size": 45,
                            "founder_experience_years": 8,
                            "technical_team_pct": 60,
                            "years_in_operation": 5.5,
                            "monthly_active_users": 15000,
                            "nps_score": 42,
                            "infrastructure_value": 500000,
                            "liquid_cash_reserves": 1500000,
                            "business_model": "B2B_Enterprise",
                            "tech_sector": "SaaS_Enterprise",
                            "brand_reputation": "Established",
                            "revenue_model": "Subscription",
                            "has_pending_litigation": "no",
                            "is_first_acquisition": "yes"
                        }
                    ]
                }
            ]
        }
    }
