/**
 * API Service for Backend Communication
 * Handles all HTTP requests to the FastAPI backend
 */

const API_BASE_URL = import.meta.env["VITE_API_URL"] || "http://localhost:8000";

export interface DowryData {
  payload_type?: "dowry";
  boy_age: number;
  girl_age: number;
  age_difference?: number;
  boy_salary: number;
  girl_salary: number;
  boy_education: string;
  girl_education: string;
  boy_job_type: string;
  girl_job_type: string;
  job_stability_boy: string;
  working_abroad: string;
  family_income_boy: number;
  family_income_girl: number;
  own_house_boy: string;
  land_ownership_boy: string;
  land_ownership_girl: string;
  boy_height: number;
  girl_height: number;
  boy_skin_tone: string;
  girl_skin_tone: string;
  physical_disability_boy: string;
  physical_disability_girl: string;
  boy_previous_marriage: string;
  girl_previous_marriage: string;
  caste: string;
  religion: string;
  intercaste_interreligion: string;
  rural_urban: string;
  boy_area: string;
  girl_area: string;
  dowry_category?: never; // REMOVED: target-derived leakage, never send to API
}

/**
 * Startup acquisition payload — mirrors the strict backend `StartupData`
 * schema (34 features: 28 numeric + 6 categorical). Four metrics
 * (ARR, runway, LTV/CAC, retention) are auto-derived by the backend when
 * omitted. Unknown extra fields are rejected with 422 (extra='forbid').
 */
export interface StartupData {
  payload_type?: "startup";
  // --- Financial metrics ---
  monthly_recurring_revenue: number;
  annual_recurring_revenue?: number;
  revenue_growth_rate: number;
  gross_margin: number;
  burn_rate: number;
  runway_months?: number;
  // --- Funding metrics ---
  total_funding_raised: number;
  last_round_valuation: number;
  funding_rounds: number;
  // --- Intellectual property ---
  patents_granted: number;
  patents_pending?: number;
  trademarks?: number;
  // --- Customer metrics ---
  customer_count: number;
  customer_growth_rate: number;
  customer_acquisition_cost: number;
  lifetime_value: number;
  ltv_cac_ratio?: number;
  churn_rate: number;
  retention_rate?: number;
  // --- Team metrics ---
  team_size: number;
  founder_experience_years: number;
  technical_team_pct: number;
  // --- Product metrics ---
  years_in_operation: number;
  monthly_active_users: number;
  nps_score: number;
  // --- Infrastructure & assets ---
  infrastructure_value: number;
  fleet_value?: number;
  liquid_cash_reserves: number;
  // --- Categorical features ---
  business_model: "B2B_Enterprise" | "B2C_Consumer" | "B2B_SMB" | "Hybrid";
  brand_reputation: "Industry_Leader" | "Established" | "Emerging" | "Controversial";
  tech_sector: "AI_DeepTech" | "SaaS_Enterprise" | "SaaS_SMB" | "E_commerce" | "Fintech" | "Healthcare";
  revenue_model: "Subscription" | "Transaction" | "Advertising" | "Marketplace";
  /** @deprecated legacy alias of has_pending_litigation (still accepted) */
  pending_lawsuits?: "yes" | "no";
  has_pending_litigation?: "yes" | "no";
  is_first_acquisition: "yes" | "no";
}

/**
 * Dual-domain prediction result: dowry payloads return INR fields,
 * startup payloads return USD fields (predicted_valuation_usd +
 * confidence_interval).
 */
export interface PredictionResponse {
  success: boolean;
  data: {
    // Startup (USD)
    predicted_valuation_usd?: number;
    predicted_acquisition_price_usd?: number;
    confidence_interval?: {
      lower_bound_usd: number;
      upper_bound_usd: number;
      confidence_level: number;
      method?: string;
    };
    model_info?: Record<string, unknown>;
    prediction_metadata?: Record<string, unknown>;
    // Dowry (INR)
    predicted_acquisition_price_inr?: number;
    predicted_dowry_amount_inr?: number;
    prediction_range?: {
      lower_bound: number;
      upper_bound: number;
    };
    // Shared
    confidence_score?: number;
    error?: string;
  };
  message: string;
}

export interface BatchPredictionResponse {
  success: boolean;
  data: {
    predictions: PredictionResponse["data"][];
    total_count: number;
    average_acquisition_price?: number;
    average_valuation_usd?: number;
  };
  message: string;
}

export interface ModelInfo {
  model_type: string;
  components: string[];
  r2_score: number;
  mae: number;
  rmse: number;
  training_samples: number;
  features: number;
  best_model?: string;
  target_unit?: "USD" | "INR";
  target_transform?: string;
  confidence_interval?: Record<string, unknown>;
  feature_names?: Record<string, unknown>;
  test_scores?: Record<string, unknown>;
}

export interface HealthResponse {
  status: "healthy" | "unhealthy";
  model_loaded: boolean;
  version: string;
}

class APIService {
  private baseURL: string;

  constructor(baseURL: string = API_BASE_URL) {
    this.baseURL = baseURL;
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseURL}${endpoint}`;
    
    try {
      const response = await fetch(url, {
        ...options,
        headers: {
          "Content-Type": "application/json",
          ...options.headers,
        },
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(
          errorData.message || 
          errorData.detail || 
          `HTTP ${response.status}: ${response.statusText}`
        );
      }

      return await response.json();
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
      throw new Error("An unexpected error occurred");
    }
  }

  /**
   * Health check endpoint
   */
  async health(): Promise<HealthResponse> {
    return this.request<HealthResponse>("/health");
  }

  /**
   * Get model information
   */
  async getModelInfo(): Promise<ModelInfo> {
    return this.request<ModelInfo>("/model/info");
  }

  /**
   * Predict dowry / acquisition price for a single profile.
   * The backend accepts the flat profile object directly (it infers
   * dowry-vs-startup by shape, `payload_type` optional).
   */
  async predictSingle(data: DowryData | StartupData): Promise<PredictionResponse> {
    const body =
      "payload_type" in data && data.payload_type
        ? data
        : { payload_type: "dowry" as const, ...data };
    return this.request<PredictionResponse>("/predict", {
      method: "POST",
      body: JSON.stringify(body),
    });
  }

  /**
   * Predict valuations for multiple profiles (batch).
   * The backend `BatchPredictionRequest` expects `{ items: [...] }`
   * (legacy `startups` alias is startup-only) and infers each item's
   * type by shape, so send items WITH the explicit discriminator.
   */
  async predictBatch(items: (DowryData | StartupData)[]): Promise<BatchPredictionResponse> {
    if (items.length > 100) {
      throw new Error("Maximum 100 items allowed per batch");
    }

    const tagged = items.map((item) =>
      "payload_type" in item && item.payload_type
        ? item
        : { payload_type: "dowry" as const, ...item }
    );
    return this.request<BatchPredictionResponse>("/predict/batch", {
      method: "POST",
      body: JSON.stringify({ items: tagged }),
    });
  }

  /**
   * Simple ping test
   */
  async ping(): Promise<{ status: string }> {
    return this.request<{ status: string }>("/ping");
  }
}

// Export singleton instance
export const api = new APIService();

// Export class for custom instances
export default APIService;
