"""
Request Schemas

Pydantic models for validating incoming API requests.
Phase 4 - Data Mapping & Payload Validation:
- Strict ConfigDict(extra='forbid') on all payloads
- Discriminated unions via payload_type Literal
- Enumerations synchronized with frontend
- All fields required (no silent defaults)
"""

from pydantic import (
    BaseModel,
    ConfigDict,
    Field,
    BeforeValidator,
    field_validator,
    model_validator,
)
from typing import Annotated, List, Literal, Optional, Union
from enum import Enum


class BusinessModel(str, Enum):
    """Business model categories (synchronized with the trained model)."""
    B2B_ENTERPRISE = "B2B_Enterprise"
    B2C_CONSUMER = "B2C_Consumer"
    B2B_SMB = "B2B_SMB"
    HYBRID = "Hybrid"


class BrandReputation(str, Enum):
    """Brand reputation levels (synchronized with frontend)."""
    INDUSTRY_LEADER = "Industry_Leader"
    ESTABLISHED = "Established"
    EMERGING = "Emerging"
    CONTROVERSIAL = "Controversial"


class TechSector(str, Enum):
    """Technology sector categories (synchronized with the trained model)."""
    AI_DEEPTECH = "AI_DeepTech"
    SAAS_ENTERPRISE = "SaaS_Enterprise"
    SAAS_SMB = "SaaS_SMB"
    E_COMMERCE = "E_commerce"
    FINTECH = "Fintech"
    HEALTHCARE = "Healthcare"


class YesNo(str, Enum):
    """Yes/No responses."""
    YES = "yes"
    NO = "no"


class DowryData(BaseModel):
    """Schema for the 25 raw equal-weightage dowry features (Phase 4 strict)."""

    model_config = ConfigDict(extra="forbid")

    payload_type: Literal["dowry"] = Field(default="dowry")
    boy_height: float = Field(..., ge=2.0, le=250.0)
    boy_income: float = Field(..., ge=0, le=100000000)
    boy_job: str = Field(...)
    boy_first_marriage: str = Field(...)
    boy_father_income: float = Field(..., ge=0, le=100000000)
    boy_area: str = Field(...)
    boy_skin_colour: str = Field(...)
    boy_caste: str = Field(...)
    boy_religion: str = Field(...)
    boy_age: int = Field(..., ge=18, le=60)
    boy_physical_disability: str = Field(...)
    boy_job_stability: str = Field(...)
    girl_height: float = Field(..., ge=2.0, le=250.0)
    girl_income: float = Field(..., ge=0, le=100000000)
    girl_job: str = Field(...)
    girl_first_marriage: str = Field(...)
    girl_father_income: float = Field(..., ge=0, le=100000000)
    girl_area: str = Field(...)
    girl_skin_colour: str = Field(...)
    girl_caste: str = Field(...)
    girl_religion: str = Field(...)
    girl_age: int = Field(..., ge=16, le=60)
    girl_physical_disability: str = Field(...)
    age_difference: Optional[float] = Field(default=None)
    intercaste_interreligion: str = Field(...)
    # Legacy frontend aliases (accepted, mapped to canonicals above).
    girl_salary: Optional[float] = Field(default=None, exclude=True)
    boy_job_type: Optional[str] = Field(default=None, exclude=True)
    girl_job_type: Optional[str] = Field(default=None, exclude=True)
    job_stability_boy: Optional[str] = Field(default=None, exclude=True)
    family_income_boy: Optional[float] = Field(default=None, exclude=True)
    family_income_girl: Optional[float] = Field(default=None, exclude=True)
    boy_skin_tone: Optional[str] = Field(default=None, exclude=True)
    girl_skin_tone: Optional[str] = Field(default=None, exclude=True)
    physical_disability_boy: Optional[str] = Field(default=None, exclude=True)
    physical_disability_girl: Optional[str] = Field(default=None, exclude=True)
    boy_previous_marriage: Optional[str] = Field(default=None, exclude=True)
    girl_previous_marriage: Optional[str] = Field(default=None, exclude=True)
    caste: Optional[str] = Field(default=None, exclude=True)
    religion: Optional[str] = Field(default=None, exclude=True)
    # Purely informational legacy fields (ignored for the model).
    boy_education: Optional[str] = Field(default=None, exclude=True)
    girl_education: Optional[str] = Field(default=None, exclude=True)
    working_abroad: Optional[str] = Field(default=None, exclude=True)
    own_house_boy: Optional[str] = Field(default=None, exclude=True)
    land_ownership_boy: Optional[str] = Field(default=None, exclude=True)
    land_ownership_girl: Optional[str] = Field(default=None, exclude=True)
    rural_urban: Optional[str] = Field(default=None, exclude=True)
    age_diff: Optional[float] = Field(default=None, exclude=True)

    @model_validator(mode="before")
    @classmethod
    def _map_legacy(cls, data):
        if not isinstance(data, dict):
            return data
        d = dict(data)
        pairs = {
            "boy_salary": "boy_income",
            "boy_job_type": "boy_job",
            "boy_previous_marriage": "boy_first_marriage",
            "family_income_boy": "boy_father_income",
            "boy_skin_tone": "boy_skin_colour",
            "physical_disability_boy": "boy_physical_disability",
            "job_stability_boy": "boy_job_stability",
            "girl_salary": "girl_income",
            "girl_job_type": "girl_job",
            "girl_previous_marriage": "girl_first_marriage",
            "family_income_girl": "girl_father_income",
            "girl_skin_tone": "girl_skin_colour",
            "physical_disability_girl": "girl_physical_disability",
            "age_diff": "age_difference",
        }
        for leg, can in pairs.items():
            if can not in d and leg in d and d[leg] is not None:
                d[can] = d[leg]
        # Phase 6 / frontend integration: drop the legacy source keys after
        # mapping. DowryData uses extra='forbid', so leaving e.g. 'boy_salary'
        # alongside the mapped 'boy_income' raises extra_forbidden and the
        # frontend (which sends legacy field names) can never get a prediction.
        for leg in pairs:
            d.pop(leg, None)
        # Frontend-only informational keys that are NOT model fields must also
        # be stripped (they are not declared on DowryData -> extra='forbid').
        for extra_key in ("dowry_category", "rural_urban"):
            d.pop(extra_key, None)
        if "caste" in d and d["caste"] is not None:
            d.setdefault("boy_caste", d["caste"])
            d.setdefault("girl_caste", d["caste"])
        if "religion" in d and d["religion"] is not None:
            d.setdefault("boy_religion", d["religion"])
            d.setdefault("girl_religion", d["religion"])
        return d

    @model_validator(mode="after")
    def _derive_age(self):
        if self.age_difference is None:
            self.age_difference = float(self.boy_age - self.girl_age)
        return self


class StartupData(BaseModel):
    """
    Startup acquisition schema matching the TRAINED startup model
    (28 numerical + 6 categorical features, see
    ``scripts/train_startup_model.py``).

    Four metrics (ARR, runway, LTV/CAC, retention) are optional and
    auto-derived from their source metrics when omitted. All other
    fields are required so the model never receives out-of-distribution
    zero-filled rows (previously the old 12-field schema silently sent
    25 zeros/defaults to the model and produced garbage valuations).

    ``pending_lawsuits`` / ``is_first_acquisition`` legacy field names are
    still accepted as aliases.
    """
    model_config = ConfigDict(extra="forbid")

    payload_type: Literal["startup"] = Field(
        default="startup", description="Discriminator for startup payloads"
    )

    # --- Financial metrics ---
    monthly_recurring_revenue: float = Field(..., ge=0, description="Monthly Recurring Revenue (MRR) in USD")
    annual_recurring_revenue: Optional[float] = Field(None, ge=0, description="ARR in USD (derived from MRR if omitted)")
    revenue_growth_rate: float = Field(..., ge=-100, le=1000, description="YoY revenue growth rate (%)")
    gross_margin: float = Field(..., ge=0, le=100, description="Gross profit margin (%)")
    burn_rate: float = Field(..., ge=0, description="Monthly cash burn rate in USD")
    runway_months: Optional[float] = Field(None, ge=0, description="Cash runway in months (derived if omitted)")

    # --- Funding metrics ---
    total_funding_raised: float = Field(..., ge=0, description="Total funding raised to date (USD)")
    last_round_valuation: float = Field(..., ge=0, description="Latest pre-money valuation (USD)")
    funding_rounds: int = Field(..., ge=1, le=50, description="Number of funding rounds")

    # --- Intellectual property ---
    patents_granted: int = Field(..., ge=0, le=10000, description="Granted patents")
    patents_pending: int = Field(0, ge=0, le=10000, description="Pending patent applications")
    trademarks: int = Field(0, ge=0, le=100000, description="Registered trademarks")

    # --- Customer metrics ---
    customer_count: int = Field(..., ge=1, description="Active customers")
    customer_growth_rate: float = Field(..., ge=-100, le=1000, description="YoY customer growth rate (%)")
    customer_acquisition_cost: float = Field(..., ge=0, description="CAC (USD)")
    lifetime_value: float = Field(..., ge=0, description="Customer lifetime value (USD)")
    ltv_cac_ratio: Optional[float] = Field(None, ge=0, description="LTV/CAC ratio (derived if omitted)")
    churn_rate: float = Field(..., ge=0, le=100, description="Annual churn rate (%)")
    retention_rate: Optional[float] = Field(None, ge=0, le=100, description="Retention rate (derived if omitted)")

    # --- Team metrics ---
    team_size: int = Field(..., ge=1, le=1000000, description="Total employees")
    founder_experience_years: float = Field(..., ge=0, le=50, description="Average founder experience (years)")
    technical_team_pct: float = Field(..., ge=0, le=100, description="Technical team share (%)")

    # --- Product metrics ---
    years_in_operation: float = Field(..., ge=0, le=100, description="Years since founding")
    monthly_active_users: float = Field(..., ge=0, description="Monthly active users")
    nps_score: float = Field(..., ge=-100, le=100, description="Net Promoter Score")

    # --- Infrastructure & assets ---
    infrastructure_value: float = Field(..., ge=0, description="Infrastructure/IT asset value (USD)")
    fleet_value: float = Field(0, ge=0, description="Physical fleet/equipment value (USD, optional)")
    liquid_cash_reserves: float = Field(..., ge=0, description="Cash and liquid equivalents (USD)")

    # --- Categorical features ---
    business_model: BusinessModel = Field(...)
    brand_reputation: BrandReputation = Field(...)
    tech_sector: TechSector = Field(...)
    has_pending_litigation: YesNo = Field(..., description="Pending litigation (legacy alias: pending_lawsuits)")
    revenue_model: str = Field(
        ...,
        description="Primary revenue model",
        pattern="^(Subscription|Transaction|Advertising|Marketplace)$",
    )
    is_first_acquisition: YesNo = Field(...)

    @model_validator(mode="before")
    @classmethod
    def _map_legacy(cls, data):
        """Accept legacy field names so older clients keep working."""
        if not isinstance(data, dict):
            return data
        d = dict(data)
        if "has_pending_litigation" not in d and "pending_lawsuits" in d:
            d["has_pending_litigation"] = d.pop("pending_lawsuits")
        return d

    @field_validator(
        "business_model", "brand_reputation", "tech_sector",
        "has_pending_litigation", "is_first_acquisition",
        "revenue_model", mode="before",
    )
    @classmethod
    def _coerce_enums(cls, v):
        # Accept lowercase / legacy variants sent by current clients.
        if isinstance(v, str):
            s = v.strip()
            lowered = s.lower()
            aliases = {
                # business models
                "b2b_enterprise": "B2B_Enterprise",
                "b2b_smb": "B2B_SMB",
                "b2b": "B2B_Enterprise",
                "b2c_consumer": "B2C_Consumer",
                "b2c": "B2C_Consumer",
                "hybrid": "Hybrid",
                # brand reputation
                "industry_leader": "Industry_Leader",
                "established": "Established",
                "emerging": "Emerging",
                "controversial": "Controversial",
                # tech sectors (levels of the trained startup model)
                "ai_deeptech": "AI_DeepTech",
                "ai": "AI_DeepTech",
                "saas": "SaaS_Enterprise",
                "saas_enterprise": "SaaS_Enterprise",
                "saas_smb": "SaaS_SMB",
                "b2b_smb": "B2B_SMB",
                "e_commerce": "E_commerce",
                "ecommerce": "E_commerce",
                "fintech": "Fintech",
                "healthcare": "Healthcare",
                # revenue models
                "subscription": "Subscription",
                "transaction": "Transaction",
                "advertising": "Advertising",
                "marketplace": "Marketplace",
                # yes/no
                "yes": "yes",
                "y": "yes",
                "true": "yes",
                "1": "yes",
                "no": "no",
                "n": "no",
                "false": "no",
                "0": "no",
            }
            canonical = {
                "B2B_Enterprise", "B2C_Consumer", "B2B_SMB", "Hybrid",
                "Industry_Leader", "Established", "Emerging", "Controversial",
                "AI_DeepTech", "SaaS_Enterprise", "SaaS_SMB", "E_commerce",
                "Fintech", "Healthcare",
                "yes", "no",
                "Subscription", "Transaction", "Advertising", "Marketplace",
            }
            if s in canonical:
                return s
            if lowered in aliases:
                return aliases[lowered]
        return v

    @field_validator('annual_recurring_revenue', mode='before')
    @classmethod
    def calculate_arr(cls, v, info):
        """Calculate ARR from MRR if not provided (mirrors training data)."""
        if v is None and 'monthly_recurring_revenue' in info.data:
            return float(info.data['monthly_recurring_revenue']) * 12
        return v

    @field_validator('ltv_cac_ratio', mode='before')
    @classmethod
    def calculate_ltv_cac(cls, v, info):
        """Calculate LTV/CAC ratio if not provided."""
        if v is None:
            ltv = float(info.data.get('lifetime_value', 0) or 0)
            cac = float(info.data.get('customer_acquisition_cost', 0) or 0)
            return ltv / cac if cac > 0 else 0.0
        return v

    @field_validator('retention_rate', mode='before')
    @classmethod
    def calculate_retention(cls, v, info):
        """Calculate retention from churn if not provided."""
        if v is None and 'churn_rate' in info.data:
            return 100 - float(info.data['churn_rate'])
        return v

    @field_validator('runway_months', mode='before')
    @classmethod
    def calculate_runway(cls, v, info):
        """Calculate runway from cash reserves and burn if not provided."""
        if v is None:
            cash = float(info.data.get('liquid_cash_reserves', 0) or 0)
            burn = float(info.data.get('burn_rate', 0) or 0)
            return cash / burn if burn > 0 else 999.0
        return v

    model_config = ConfigDict(
        extra="forbid",
        json_schema_extra={
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
        },
    )


# Critical 2: discriminated union for secure O(1) payload routing.
# Strict variant (PredictItem / PredictionRequest / batch items) requires an
# explicit payload_type discriminator. InferredPredictItem additionally
# accepts legacy payloads without the discriminator for /predict compat.
def _infer_startup(v):
    if isinstance(v, dict) and "payload_type" not in v:
        return {**v, "payload_type": "startup"}
    return v


def _infer_dowry(v):
    if isinstance(v, dict) and "payload_type" not in v:
        return {**v, "payload_type": "dowry"}
    return v


InferredStartup = Annotated[StartupData, BeforeValidator(_infer_startup)]
InferredDowry = Annotated[DowryData, BeforeValidator(_infer_dowry)]

# Union-first form: try startup shape, fall back to dowry shape.
# Field-level discrimination inside each member still rejects {} with 422.
InferredPredictItem = Union[InferredStartup, InferredDowry]

# Strict discriminated union used by PredictionRequest / batch items.
# Requires the explicit payload_type discriminator (spec section 2.3).
PredictItem = Annotated[
    Union[StartupData, DowryData], Field(discriminator="payload_type")
]


class PredictionRequest(BaseModel):
    """Single prediction request wrapper (discriminated payload)."""

    model_config = ConfigDict(extra="forbid")
    data: PredictItem = Field(..., description="Single profile payload")


class BatchPredictionRequest(BaseModel):
    """
    Schema for batch prediction requests (Phase 4 strict + backward compatible).
    Accepts the discriminated `items` list; keeps the legacy `startups` alias.
    Items use the inferred (non-discriminated) union so legacy clients that
    omit `payload_type` — e.g. the frontend sending {"items": [...]} — are
    routed by shape instead of rejected with union_tag_not_found.
    """

    model_config = ConfigDict(extra="forbid")
    items: Optional[List[InferredPredictItem]] = Field(
        default=None,
        description="List of profiles for batch prediction (max 100)",
    )
    startups: Optional[List[StartupData]] = Field(
        default=None,
        description="Legacy alias for startups batch",
    )

    @model_validator(mode="after")
    def _non_empty(self):
        if not (self.items or self.startups):
            raise ValueError("Batch must contain at least 1 item")
        return self
