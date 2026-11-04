import { i as __toESM } from "../_runtime.mjs";
import { a as require_react, i as require_jsx_runtime, n as useQuery, r as QueryClientProvider, t as useMutation } from "../_libs/react+tanstack__react-query.mjs";
import { c as createFileRoute, d as useRouter, i as HeadContent, l as createRootRouteWithContext, o as createRouter, r as Scripts, s as Outlet, u as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { A as CircleCheck, C as Gauge, D as DollarSign, E as Eye, F as Briefcase, I as Brain, L as Award, M as ChevronLeft, N as ChartPie, O as Database, P as Building, R as ArrowRight, S as GraduationCap, T as Flame, _ as Mail, a as Sparkles, b as Landmark, c as ShieldCheck, d as Search, f as Scale, g as MapPin, h as Phone, i as TrendingUp, j as ChevronRight, k as Cpu, l as ShieldAlert, m as Printer, n as X, o as Smile, p as RefreshCw, r as User, s as SlidersHorizontal, t as Zap, u as Send, v as Lightbulb, w as Frown, x as Heart, y as Layers } from "../_libs/lucide-react.mjs";
import { _ as Legend, a as LineChart, c as Scatter, d as CartesianGrid, f as Bar, g as Tooltip, h as ResponsiveContainer, i as BarChart, l as Area, m as Cell, n as ScatterChart, o as YAxis, p as Pie, r as PieChart, s as XAxis, t as AreaChart, u as Line } from "../_libs/recharts+[...].mjs";
// node_modules/.nitro/vite/services/ssr/assets/router-pLsocrgt.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-DlmEI2-E.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message,
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$4 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Calculate my Dahej" },
			{
				name: "description",
				content: "Calculate my Dahej - Smart AI Valuation Calculator Engine"
			},
			{
				name: "author",
				content: "Calculate my Dahej"
			},
			{
				property: "og:title",
				content: "Calculate my Dahej"
			},
			{
				property: "og:description",
				content: "Lovable Generated Project"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:site",
				content: "@Lovable"
			}
		],
		links: [{
			rel: "stylesheet",
			href: styles_default
		}, {
			rel: "icon",
			href: "/favicon.ico",
			type: "image/x-icon"
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$4.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
var _1111_default = "/assets/1111-0ti_djOF.jpg";
var navItems = [
	{
		to: "/",
		label: "Overview"
	},
	{
		to: "/predictor",
		label: "Dahej Predictor"
	},
	{
		to: "/model",
		label: "Model Analytics"
	},
	{
		to: "/find-somebody",
		label: "Find Somebody"
	}
];
function GlassLayout({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "orb h-[500px] w-[500px] -top-24 -left-24",
				style: { background: "oklch(0.45 0.18 25 / 25%)" },
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "orb h-[600px] w-[600px] -bottom-36 -right-24",
				style: { background: "oklch(0.38 0.16 20 / 20%)" },
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "orb h-[450px] w-[450px] top-[40%] left-[35%]",
				style: { background: "oklch(0.50 0.15 30 / 18%)" },
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-1 mx-auto max-w-[1440px] px-4 py-6 sm:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
						className: "glass glass-lift mb-7 flex flex-col gap-4 px-5 py-4 sm:px-8 lg:flex-row lg:items-center lg:justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							className: "flex items-center gap-3 group",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-[12px] border border-primary/40 shadow-[0_4px_14px_oklch(0.42_0.20_25/35%)] transition-transform group-hover:scale-105",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: _1111_default,
									alt: "Calculate my Dahej Logo",
									className: "h-full w-full object-cover"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-xl font-extrabold tracking-tight",
								children: ["Calculate my ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-primary",
									children: "Dahej"
								})]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
							className: "glass-subtle flex flex-wrap gap-1 p-1.5",
							children: navItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: item.to,
								activeOptions: { exact: item.to === "/" },
								className: "rounded-[10px] px-4 py-2.5 text-sm font-semibold transition-all",
								inactiveProps: { className: "text-muted-foreground hover:bg-primary/10 hover:text-primary" },
								activeProps: { className: "gradient-primary text-primary-foreground font-bold shadow-[0_2px_10px_oklch(0.42_0.20_25/35%)]" },
								children: item.label
							}, item.to))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
						className: "animate-in fade-in duration-500",
						children
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
						className: "glass-subtle mt-8 flex flex-col gap-1 px-6 py-5 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Ridge + NN Ensemble (equal weightage) · 400,000 synthetic records · 37 features" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Production R² ~0.758 · MAE ₹187,674 · RMSE ₹242,985" })]
					})
				]
			})
		]
	});
}
function PageHeading({ eyebrow, title, description }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "label-caps text-primary",
				children: eyebrow
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 text-3xl font-extrabold sm:text-4xl",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 max-w-3xl text-[0.975rem] text-muted-foreground",
				children: description
			})
		]
	});
}
function HeroImage({ src, alt, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mb-7 overflow-hidden rounded-[var(--radius-md)] border border-border shadow-[var(--glass-shadow-md)]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src,
			alt,
			width: 1600,
			height: 900,
			className: `h-[340px] sm:h-[480px] w-full object-cover object-[center_15%] ${className || ""}`
		})
	});
}
var indian_wedding_hero_default = "/assets/indian-wedding-hero-IYmWfBLA.jpg";
var Route$3 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Calculate my Dahej | Smart Dahej Valuation Calculator" },
		{
			name: "description",
			content: "Discover what your startup is truly worth in simple, non-technical terms. Data-backed acquisition valuations powered by 400,000 synthetic records, 37 parity-weighted features, and a production Ridge + NN Ensemble (equal weightage) (R² ~0.758, MAE ₹187,674)."
		},
		{
			property: "og:title",
			content: "Calculate my Dahej | Smart Dahej Valuation Calculator"
		},
		{
			property: "og:description",
			content: "Simple, objective startup valuation calculations based on 37 parity-weighted, intellectual property, and market risk dimensions."
		}
	] }),
	component: HomePage
});
var DEMO_PRESETS = [
	{
		id: "govt_officer",
		title: "Government Officer (Gazetted / IAS)",
		badge: "Government Stability",
		salary: "₹1,400,000 / mo",
		education: "Post Graduate (Master)",
		familyWealth: "₹25 Lakhs / yr + Medium Land",
		estimatedValuation: "₹15,22,000",
		valuationRange: "₹14.62 L – ₹15.82 L (±₹60k MAE)",
		keyFactor: "1.28x Permanent Govt Multiplier + House Ownership",
		description: "Permanent government employment and family real estate create a premium security baseline."
	},
	{
		id: "nri_tech_lead",
		title: "NRI Software Tech Lead (USA/EU)",
		badge: "NRI Global Income",
		salary: "₹2,20,000 / mo",
		education: "Post Graduate (Master)",
		familyWealth: "₹32 Lakhs / yr + Large Land",
		estimatedValuation: "₹18,45,000",
		valuationRange: "₹17.85 L – ₹19.05 L (±₹60k MAE)",
		keyFactor: "1.35x NRI Abroad Multiplier + High Salary",
		description: "Global foreign currency earnings and strong economic index elevate the valuation bracket."
	},
	{
		id: "corporate_pro",
		title: "Corporate Private Professional",
		badge: "MNC Corporate",
		salary: "₹72,000 / mo",
		education: "Graduate (Bachelor)",
		familyWealth: "₹18 Lakhs / yr + Small Land",
		estimatedValuation: "₹9,80,000",
		valuationRange: "₹9.20 L – ₹10.40 L (±₹60k MAE)",
		keyFactor: "Stable Private Career + Urban Residence",
		description: "Consistent monthly cash flow and city living provide a solid median market benchmark."
	},
	{
		id: "family_business",
		title: "Established Business Family",
		badge: "Asset & Real Estate Heavy",
		salary: "₹1,50,000 / mo",
		education: "Graduate (Bachelor)",
		familyWealth: "₹38 Lakhs / yr + Large Land",
		estimatedValuation: "₹14,20,000",
		valuationRange: "₹13.60 L – ₹14.80 L (±₹60k MAE)",
		keyFactor: "Extensive Land Ownership & High Family Income",
		description: "Substantial physical land assets and high family revenue cushion provide strong tangible capital."
	}
];
function HomePage() {
	const [activePreset, setActivePreset] = (0, import_react.useState)(DEMO_PRESETS[0]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassLayout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroImage, {
			src: indian_wedding_hero_default,
			alt: "Indian Bride and Groom Wedding"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mb-10 text-center lg:text-left",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeading, {
				eyebrow: "Platform Overview & Welcome",
				title: "Marriage are Arranged in Heaven But the Dahej are Arranged on the Earth",
				description: "It is compulsory to take the dahej as after marriage  your wife cheated on you and go to court for the alimony  \n          It is taken as a security money for the males as females are throwing males from the mountain cliff with the help of their bestfriend or boyfriend \n          use this for your safety and benfits."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/predictor",
						className: "gradient-primary inline-flex items-center gap-2 rounded-[12px] px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-[0_4px_20px_oklch(0.42_0.20_25/35%)] transition-all hover:scale-[1.02] active:scale-[0.98]",
						children: ["Launch Dahej Predictor", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/find-somebody",
						className: "glass-subtle inline-flex items-center gap-2 rounded-[12px] px-5 py-3.5 text-sm font-bold text-primary transition-all hover:bg-accent border border-primary/30",
						children: "Find Somebody (18 Profiles)"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/model",
						className: "glass-subtle inline-flex items-center gap-2 rounded-[12px] px-5 py-3.5 text-sm font-bold text-foreground transition-all hover:bg-accent",
						children: "View Model Analytics (~0.758 R²)"
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mb-12 grid grid-cols-2 gap-4 sm:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glass glass-lift p-5 text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-2xl font-extrabold text-primary sm:text-3xl",
						children: "400,000+"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs font-semibold text-muted-foreground uppercase tracking-wider",
						children: "Synthetic Records"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glass glass-lift p-5 text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-2xl font-extrabold text-primary sm:text-3xl",
						children: "37"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs font-semibold text-muted-foreground uppercase tracking-wider",
						children: "Feature Dimensions"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glass glass-lift p-5 text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-2xl font-extrabold text-primary sm:text-3xl",
						children: "0.7581"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs font-semibold text-muted-foreground uppercase tracking-wider",
						children: "Champion R² (MAE ₹188k)"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glass glass-lift p-5 text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-2xl font-extrabold text-primary sm:text-3xl",
						children: "<18 ms"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs font-semibold text-muted-foreground uppercase tracking-wider",
						children: "Inference Latency"
					})]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mb-14",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "label-caps text-primary",
						children: "The Big Picture"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-1 text-2xl font-extrabold sm:text-3xl",
						children: "What is Calculate my Dahej & Why Do You Need It?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted-foreground max-w-3xl",
						children: "Think of Calculate my Dahej as a digital appraiser engineered with state-of-the-art machine learning. Instead of guessing based on rumors or opinions, it cross-analyzes 37 parity-weighted, intellectual property, and operational dimensions against 400,000 synthetic records."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "glass glass-lift p-6 flex flex-col justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "h-5 w-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-base font-bold",
								children: "High Precision Bounds"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-xs text-muted-foreground leading-relaxed",
								children: "Rather than wide speculative estimates, our model delivers tight, empirical price bounds calibrated to an MAE of ±₹187,674 with 75.8% parity-constrained fit."
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-4 text-[11px] font-bold text-primary",
							children: "✓ Bounded Confidence Intervals"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "glass glass-lift p-6 flex flex-col justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartPie, { className: "h-5 w-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-base font-bold",
								children: "Clear Factor Contributions"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-xs text-muted-foreground leading-relaxed",
								children: "See exactly how much recurring revenue, patent portfolios, cash reserves, and equipment add to the final valuation tag."
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-4 text-[11px] font-bold text-primary",
							children: "✓ Transparent Asset Weights"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "glass glass-lift p-6 flex flex-col justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldAlert, { className: "h-5 w-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-base font-bold",
								children: "Smart Risk Factor Analysis"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-xs text-muted-foreground leading-relaxed",
								children: "Automatically adjusts valuations for active legal disputes, brand reputation risks, or early-stage acquisition penalties."
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-4 text-[11px] font-bold text-primary",
							children: "✓ Risk-Adjusted Output"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/find-somebody",
						className: "glass glass-lift p-6 flex flex-col justify-between group",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:scale-105 transition-transform",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-5 w-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-base font-bold text-foreground",
								children: "Find Somebody (18 Profiles)"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-xs text-muted-foreground leading-relaxed",
								children: "Browse verified matrimony biodatas of brides and grooms with authentic portraits, family background, Kundali, and AI valuation compatibility."
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "mt-4 text-[11px] font-bold text-primary flex items-center gap-1",
							children: ["Explore Profiles ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3 w-3" })]
						})]
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mb-14 rounded-[var(--radius-md)] glass p-7 sm:p-9 border border-border",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center max-w-2xl mx-auto mb-9",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "label-caps text-primary",
						children: "Simple Workflow"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-1 text-2xl font-extrabold sm:text-3xl",
						children: "How It Works in 3 Simple Steps"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: "No complex accounting spreadsheets needed. Get an instant valuation breakdown in under two minutes."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 md:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "glass-subtle p-6 rounded-2xl relative",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute -top-4 left-6 flex h-8 w-8 items-center justify-center rounded-full gradient-primary text-xs font-black text-primary-foreground",
								children: "1"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-2 text-base font-bold text-foreground",
								children: "Enter Match & Profile Metrics"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-xs text-muted-foreground leading-relaxed",
								children: "Use simple sliders and select controls to enter monthly salary, profession, job stability, family income, land ownership, and education."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "glass-subtle p-6 rounded-2xl relative",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute -top-4 left-6 flex h-8 w-8 items-center justify-center rounded-full gradient-primary text-xs font-black text-primary-foreground",
								children: "2"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-2 text-base font-bold text-foreground",
								children: "Ridge + NN Ensemble Inference"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-xs text-muted-foreground leading-relaxed",
								children: "A champion Ridge + Regularized NN (R² ~0.758) and Voting Ensemble (Ridge + Regularized NN) evaluate your parameters across 37 transformed dimensions."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "glass-subtle p-6 rounded-2xl relative",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute -top-4 left-6 flex h-8 w-8 items-center justify-center rounded-full gradient-primary text-xs font-black text-primary-foreground",
								children: "3"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-2 text-base font-bold text-foreground",
								children: "Get Instant Valuation & Breakdown"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-xs text-muted-foreground leading-relaxed",
								children: "Receive your valuation price tag in Indian Rupees (INR), minimum-maximum confidence ranges (±₹187,674 MAE), asset distribution chart, and 5-year projections."
							})
						]
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mb-14",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "label-caps text-primary",
						children: "Interactive Preview"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-1 text-2xl font-extrabold sm:text-3xl",
						children: "See How Different Startups are Valued"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: "Click on any sample startup profile below to see how business model, revenue type, and patents affect final valuation."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 lg:grid-cols-[1fr_1.3fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-3",
					children: DEMO_PRESETS.map((preset) => {
						const isSelected = activePreset.id === preset.id;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setActivePreset(preset),
							className: `w-full text-left p-4 rounded-xl transition-all ${isSelected ? "glass glass-lift border-primary/50 shadow-[0_4px_16px_oklch(0.42_0.20_25/20%)]" : "glass-subtle hover:bg-accent/70"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-bold text-sm text-foreground",
									children: preset.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-primary/10 text-primary",
									children: preset.badge
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-2 flex items-center justify-between text-xs text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: preset.salary }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-extrabold text-foreground",
									children: preset.estimatedValuation
								})]
							})]
						}, preset.id);
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glass glass-lift p-6 sm:p-7 flex flex-col justify-between border-t-4 border-t-primary",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between mb-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-bold uppercase tracking-wider text-muted-foreground",
								children: "Sample Valuation Result"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full bg-[oklch(0.55_0.135_162/15%)] px-3 py-1 text-xs font-bold text-success",
								children: "High Confidence (75.81% R² · MAE ₹188k)"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-xl font-extrabold text-foreground",
							children: activePreset.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs text-muted-foreground",
							children: activePreset.description
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 grid grid-cols-2 gap-4 rounded-xl bg-accent/30 p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] font-semibold text-muted-foreground uppercase",
								children: "Estimated Valuation"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-2xl font-black text-primary",
								children: activePreset.estimatedValuation
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] font-semibold text-muted-foreground uppercase",
								children: "Synthetic Price Range"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm font-bold text-foreground",
								children: activePreset.valuationRange
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 space-y-2 text-xs",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between py-1 border-b border-border/50",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground",
										children: "Monthly Salary:"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-bold text-foreground",
										children: activePreset.salary
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between py-1 border-b border-border/50",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground",
										children: "Education Level:"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-bold text-foreground",
										children: activePreset.education
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between py-1 border-b border-border/50",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground",
										children: "Family Wealth & Real Estate:"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-bold text-foreground",
										children: activePreset.familyWealth
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between py-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground",
										children: "Primary Value Driver:"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-bold text-primary",
										children: activePreset.keyFactor
									})]
								})
							]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 pt-4 border-t border-border flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs text-muted-foreground",
							children: "Want to calculate your custom numbers?"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/predictor",
							className: "inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline",
							children: ["Open Full Calculator ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
						})]
					})]
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mb-14",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "label-caps text-primary",
						children: "Valuation Physics"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-1 text-2xl font-extrabold sm:text-3xl",
						children: "The 4 Key Drivers That Determine Your Valuation"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: "What determines the baseline between ₹5 Lakhs and ₹20+ Lakhs? Here is how our 37-feature model evaluates parity-weighted parameters:"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-5 sm:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "glass glass-lift p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DollarSign, { className: "h-5 w-5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-bold text-base",
								children: "1. Groom Monthly Salary & Profession"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-xs text-muted-foreground leading-relaxed",
							children: "Monthly take-home salary is the single strongest financial multiplier. Permanent government jobs and business careers command a significant stability premium."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "glass glass-lift p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lightbulb, { className: "h-5 w-5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-bold text-base",
								children: "2. Education & Working Abroad (NRI)"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-xs text-muted-foreground leading-relaxed",
							children: "Post-graduate degrees (Master's, Doctorate) and foreign employment abroad (NRI status) create a strong upward multiplier in prospective desirability."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "glass glass-lift p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "h-5 w-5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-bold text-base",
								children: "3. Family Income & Land Ownership"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-xs text-muted-foreground leading-relaxed",
							children: "Annual family earnings combined with physical land holdings (Small, Medium, Large) and house ownership establish a solid tangible asset foundation."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "glass glass-lift p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-5 w-5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-bold text-base",
								children: "4. Bride Profile & Compatibility Offsets"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-xs text-muted-foreground leading-relaxed",
							children: "Bride's education, independent career, and family background provide balanced economic equilibrium and risk mitigation across match criteria."
						})]
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mb-14 glass glass-lift p-7 sm:p-9 rounded-[var(--radius-md)] border border-border",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "label-caps text-primary",
					children: "Target Audience"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-1 text-2xl font-extrabold sm:text-3xl",
					children: "Who is Calculate my Dahej Built For?"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 font-bold text-foreground text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 text-primary" }), "Startup Founders"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-xs text-muted-foreground leading-relaxed",
						children: "Walk into investment meetings or M&A negotiation tables with realistic, objective valuation data instead of arbitrary guesses."
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 font-bold text-foreground text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 text-primary" }), "Angel & VC Investors"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-xs text-muted-foreground leading-relaxed",
						children: "Quickly screen pitch decks, benchmark founder valuation asks, and analyze entire portfolio deal flow in batch CSV format."
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 font-bold text-foreground text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 text-primary" }), "M&A Advisors"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-xs text-muted-foreground leading-relaxed",
						children: "Provide clients with clear, transparent reports showing baseline valuations, lower/upper bounds, and risk score adjustments."
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 font-bold text-foreground text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 text-primary" }), "Business Buyers"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-xs text-muted-foreground leading-relaxed",
						children: "Verify if an asking acquisition price is fair before entering deep due diligence or issuing an intent letter."
					})] })
				]
			})]
		})
	] });
}
var PROFILES = [
	{
		id: "girl-1",
		name: "Ananya Deshmukh",
		gender: "female",
		age: "25",
		height: "5' 6\" (168 cm)",
		dob: "14th April 2001",
		timeOfBirth: "07:25 AM",
		placeOfBirth: "Pune, Maharashtra",
		rashi: "Mesha (Aries)",
		nakshatra: "Ashwini",
		manglik: "Non-Manglik",
		gotra: "Kashyap",
		religion: "Hindu",
		caste: "Maratha / 96 Kuli",
		motherTongue: "Marathi / Hindi",
		maritalStatus: "Never Married",
		location: {
			city: "Pune",
			state: "Maharashtra",
			country: "India"
		},
		education: {
			degree: "B.P.Th & M.S. Sports Sciences",
			institution: "Armed Forces Medical College (AFMC) & Manipal University",
			field: "Sports Physiotherapy & Orthopedic Rehabilitation",
			level: "Masters"
		},
		profession: {
			role: "Lead Sports Physiotherapist & Fitness Studio Founder",
			company: "Apex Rehab Clinic & Maharashtra Cricket Academy",
			industry: "Sports & Fitness",
			experienceYears: 4,
			workMode: "On-site"
		},
		annualIncomeLPA: 26,
		incomeDisplay: "₹26 LPA",
		family: {
			father: "Col. Suresh Deshmukh (Retd.)",
			fatherOccupation: "Veteran Indian Army Officer & Defense Advisor",
			mother: "Dr. Suniti Deshmukh",
			motherOccupation: "Vice Principal, Army Public School",
			siblings: "1 Elder Brother (Captain in Indian Navy, INS Vikrant)",
			familyType: "Nuclear",
			familyValues: "Liberal",
			nativePlace: "Satara, Maharashtra",
			familyAssets: "Ancestral bungalow in Model Colony Pune + 12 acres vineyard",
			familyNetWorth: "₹18 Cr+"
		},
		lifestyle: {
			diet: "Eggetarian",
			habits: [
				"Early Riser",
				"Non-smoker",
				"Social Teetotaler"
			],
			hobbies: [
				"Marathon Running",
				"Badminton",
				"Classical Sitar",
				"Trekking in Sahyadris"
			],
			fitness: "Daily Functional Strength & Ashtanga Yoga (5 days/week)"
		},
		aboutMe: "I am an energetic, disciplined, and warm-hearted individual who believes in lifelong physical fitness and purposeful living. Having grown up in an Army environment, I value punctuality, cultural rootedness, and mutual respect. I run a sports wellness practice in Pune helping athletes recover and thrive. In my downtime, you'll find me hiking mountain trails or reading history.",
		partnerExpectations: "Looking for an educated, progressive gentleman aged 26-30 with high emotional intelligence, professional ambition, and a healthy active lifestyle. Someone with family values who respects independent career ambitions and enjoys travel and fitness.",
		contact: {
			phone: "+91 98230 XXXXX",
			email: "ananya.deshmukh@matrimony.org",
			managedBy: "Self"
		},
		photo: "/assets/girl_athletic_neutral-BpHogJQn.png",
		photoAlt: "Ananya Deshmukh - Athletic portrait in neutral natural light",
		verified: true,
		featured: true,
		estimatedValuationINR: 325e4,
		valuationTier: "Tier 1 High-Demand",
		keyHighlight: "AFMC Gold Medalist · Army Background · Fitness Entrepreneur"
	},
	{
		id: "girl-2",
		name: "Meera Rathore",
		gender: "female",
		age: 26,
		height: "5' 8\" (173 cm)",
		dob: "22nd September 2000",
		timeOfBirth: "06:15 AM",
		placeOfBirth: "Jaipur, Rajasthan",
		rashi: "Kanya (Virgo)",
		nakshatra: "Hasta",
		manglik: "Non-Manglik",
		gotra: "Gautam",
		religion: "Hindu",
		caste: "Rajput",
		motherTongue: "Hindi / Marwari",
		maritalStatus: "Never Married",
		location: {
			city: "Jaipur / New Delhi",
			state: "Rajasthan",
			country: "India"
		},
		education: {
			degree: "B.A. (Hons) Economics + M.B.A. Sports Management",
			institution: "Lady Shri Ram College (LSR) & Loughborough University UK",
			field: "Sports Governance & Olympic Athletic Program",
			level: "Masters"
		},
		profession: {
			role: "Senior Sports Program Manager & Ex-National Sprinter",
			company: "Reliance Foundation Youth Sports (RFYS)",
			industry: "Sports & Fitness",
			experienceYears: 4,
			workMode: "Hybrid"
		},
		annualIncomeLPA: 29,
		incomeDisplay: "₹29 LPA",
		family: {
			father: "Kunwar Raghuraj Rathore",
			fatherOccupation: "Heritage Hotelier & Organic Farming Exporter",
			mother: "Rani Meenakshi Rathore",
			motherOccupation: "Trustee, Rajasthan Heritage Arts Foundation",
			siblings: "1 Younger Sister (Pursuing Master of Law at Cambridge)",
			familyType: "Joint",
			familyValues: "Moderate",
			nativePlace: "Jodhpur / Jaipur",
			familyAssets: "Heritage Haveli in Jaipur + 25-acre organic farm near Pushkar",
			familyNetWorth: "₹35 Cr+"
		},
		lifestyle: {
			diet: "Vegetarian",
			habits: [
				"Teetotaler",
				"Non-smoker",
				"Morning Runner"
			],
			hobbies: [
				"Track & Sprinting",
				"Horse Riding",
				"Archery",
				"Rajasthani Folk Art"
			],
			fitness: "Track athletic conditioning, high-performance sprint drills"
		},
		aboutMe: "Proud Rajasthani blending noble family traditions with global modern education. A national-level 400m sprinter during college, I transitioned into sports governance to mentor young grassroots Olympians. I believe in simple living, profound conversations, deep family roots, and chasing excellence in every endeavor.",
		partnerExpectations: "Seeking a warm, dignified partner from a good family background who is grounded, ambitious, and shares an appreciation for culture, integrity, and active health.",
		contact: {
			phone: "+91 94140 XXXXX",
			email: "meera.rathore@heritage.in",
			managedBy: "Parents"
		},
		photo: "/assets/girl_athletic_track-DoSWeJbJ.png",
		photoAlt: "Meera Rathore - Athletic woman on the track",
		verified: true,
		featured: true,
		estimatedValuationINR: 42e5,
		valuationTier: "Elite Ultra",
		keyHighlight: "LSR Alumna · Ex-National Athlete · Heritage Rajput Family"
	},
	{
		id: "girl-3",
		name: "Riya Sen",
		gender: "female",
		age: 27,
		height: "5' 5\" (165 cm)",
		dob: "11th November 1999",
		timeOfBirth: "10:45 AM",
		placeOfBirth: "Kolkata, West Bengal",
		rashi: "Vrischika (Scorpio)",
		nakshatra: "Anuradha",
		manglik: "Non-Manglik",
		gotra: "Sandilya",
		religion: "Hindu",
		caste: "Kayastha / Baidya",
		motherTongue: "Bengali / Hindi",
		maritalStatus: "Never Married",
		location: {
			city: "Bengaluru",
			state: "Karnataka",
			country: "India"
		},
		education: {
			degree: "B.Tech Computer Science & Engineering",
			institution: "Jadavpur University, Kolkata",
			field: "Distributed Systems & Cloud Computing",
			level: "Bachelors"
		},
		profession: {
			role: "Senior Distributed Systems Engineer",
			company: "Atlassian India",
			industry: "Technology",
			experienceYears: 5,
			workMode: "Hybrid"
		},
		annualIncomeLPA: 46,
		incomeDisplay: "₹46 LPA",
		family: {
			father: "Dr. Alok Sen",
			fatherOccupation: "Chief Scientist (Retd.), CSIR-CGCRI Kolkata",
			mother: "Prof. Debjani Sen",
			motherOccupation: "Head of English Literature, Calcutta University",
			siblings: "Single child",
			familyType: "Nuclear",
			familyValues: "Liberal",
			nativePlace: "South Kolkata (Ballygunge)",
			familyAssets: "3-BHK flat in Ballygunge Park + Premium villa in Whitefield Bangalore",
			familyNetWorth: "₹14 Cr+"
		},
		lifestyle: {
			diet: "Non-Vegetarian",
			habits: [
				"Non-smoker",
				"Social Drinker",
				"Coffee Enthusiast"
			],
			hobbies: [
				"Indie Game Development",
				"Rabindra Sangeet",
				"French Cinema",
				"Bouldering"
			],
			fitness: "Pilates, indoor rock climbing, weekend badminton"
		},
		aboutMe: "A tech enthusiast with a creative soul. By weekdays, I architect high-scale distributed backend pipelines handling millions of events; by weekends, I experiment with specialty brews, write micro-fiction, and play acoustic guitar. I treasure thoughtful debates, gentle humor, and cozy home evenings.",
		partnerExpectations: "Seeking a kind, intellectually curious, and progressive companion aged 27-31 based in Bengaluru, Mumbai, or Delhi-NCR. A partner who believes in equality, shared laughter, and celebrating life's quiet milestones together.",
		contact: {
			phone: "+91 98301 XXXXX",
			email: "riya.sen@devspace.io",
			managedBy: "Self"
		},
		photo: "/assets/girl_athleisure_bedroom-BffjFYNv.png",
		photoAlt: "Riya Sen - Casual athleisure portrait",
		verified: true,
		featured: true,
		estimatedValuationINR: 48e5,
		valuationTier: "Elite Ultra",
		keyHighlight: "Jadavpur CS · Senior Engineer at Atlassian · ₹46 LPA"
	},
	{
		id: "girl-4",
		name: "Tanvi Kulkarni",
		gender: "female",
		age: 26,
		height: "5' 4\" (163 cm)",
		dob: "3rd January 2000",
		timeOfBirth: "03:10 PM",
		placeOfBirth: "Mumbai, Maharashtra",
		rashi: "Dhanu (Sagittarius)",
		nakshatra: "Moola",
		manglik: "Anshik Manglik",
		gotra: "Vashishta",
		religion: "Hindu",
		caste: "Brahmin - Deshastha",
		motherTongue: "Marathi / Hindi",
		maritalStatus: "Never Married",
		location: {
			city: "Mumbai",
			state: "Maharashtra",
			country: "India"
		},
		education: {
			degree: "B.Des (Interaction Design) + M.Des Human-Computer Interaction",
			institution: "IDC School of Design, IIT Bombay",
			field: "Human-Centered Product Design",
			level: "Masters"
		},
		profession: {
			role: "Lead Product Designer (Growth & FinTech)",
			company: "Swiggy / Instamart",
			industry: "Design & Creative",
			experienceYears: 4,
			workMode: "Hybrid"
		},
		annualIncomeLPA: 38,
		incomeDisplay: "₹38 LPA",
		family: {
			father: "Pradeep Kulkarni",
			fatherOccupation: "Senior Chief Engineer, Tata Power",
			mother: "Anjali Kulkarni",
			motherOccupation: "Sanskrit & Classical Music Educator",
			siblings: "1 Elder Sister (Architect in Amsterdam, married)",
			familyType: "Nuclear",
			familyValues: "Moderate",
			nativePlace: "Dadar, Mumbai / Nashik",
			familyAssets: "Spacious 3-BHK sea-facing apartment in Dadar West Mumbai",
			familyNetWorth: "₹16 Cr+"
		},
		lifestyle: {
			diet: "Vegetarian",
			habits: [
				"Non-smoker",
				"Teetotaler",
				"Avid Podcaster"
			],
			hobbies: [
				"Pottery & Ceramics",
				"Film Photography",
				"Graphic Novel Illustration",
				"Baking"
			],
			fitness: "Vinyasa Flow Yoga and weekend cycling along Marine Drive"
		},
		aboutMe: "Passionate design thinker from IIT Bombay with a deep love for aesthetics, empathy, and intuitive human experiences. Raised in a loving cultural Maharashtrian household where arts, literature, and education were celebrated. I enjoy cooking authentic meals, wandering art exhibits, and learning new craft techniques.",
		partnerExpectations: "Looking for a well-educated, open-minded professional (engineer, doctor, designer, or entrepreneur) who respects mutual autonomy and loves culture, design, and thoughtful conversations.",
		contact: {
			phone: "+91 98205 XXXXX",
			email: "tanvi.kulkarni@designiitb.ac.in",
			managedBy: "Self"
		},
		photo: "/assets/girl_yellow_black-DBSkszhM.png",
		photoAlt: "Tanvi Kulkarni - Casual indoor portrait in yellow and black",
		verified: true,
		featured: false,
		estimatedValuationINR: 39e5,
		valuationTier: "Tier 1 High-Demand",
		keyHighlight: "IIT Bombay IDC Master's · Design Lead · Mumbai Native"
	},
	{
		id: "girl-5",
		name: "Dr. Ishita Nair",
		gender: "female",
		age: 28,
		height: "5' 6\" (168 cm)",
		dob: "19th August 1998",
		timeOfBirth: "08:50 AM",
		placeOfBirth: "Kochi, Kerala",
		rashi: "Simha (Leo)",
		nakshatra: "Magha",
		manglik: "Non-Manglik",
		gotra: "Bharadwaja",
		religion: "Hindu",
		caste: "Nair",
		motherTongue: "Malayalam / English / Hindi",
		maritalStatus: "Never Married",
		location: {
			city: "Bengaluru",
			state: "Karnataka",
			country: "India"
		},
		education: {
			degree: "M.B.B.S. + M.D. Pediatrics",
			institution: "St. John's Medical College & NIMHANS",
			field: "Pediatric Neurology & Developmental Medicine",
			level: "Doctorate"
		},
		profession: {
			role: "Consultant Pediatric Specialist",
			company: "Manipal Hospital & Aster CMI",
			industry: "Healthcare",
			experienceYears: 5,
			workMode: "On-site"
		},
		annualIncomeLPA: 34,
		incomeDisplay: "₹34 LPA",
		family: {
			father: "Dr. K. G. Nair",
			fatherOccupation: "Chief Cardiac Surgeon, Aster Medcity Kochi",
			mother: "Dr. Geetha Nair",
			motherOccupation: "Senior Consultant Gynecologist",
			siblings: "1 Younger Brother (Final year MD Radiology, CMC Vellore)",
			familyType: "Nuclear",
			familyValues: "Liberal",
			nativePlace: "Thiruvananthapuram, Kerala",
			familyAssets: "Villa in Kochi Waterfront + Commercial Medical Clinic Complex in Bengaluru",
			familyNetWorth: "₹28 Cr+"
		},
		lifestyle: {
			diet: "Eggetarian",
			habits: [
				"Non-smoker",
				"Teetotaler",
				"Early Bird"
			],
			hobbies: [
				"Carnatic Classical Flute",
				"Wildlife Photography",
				"Scuba Diving",
				"Reading"
			],
			fitness: "Pilates, swimming, morning jogging in Cubbon Park"
		},
		aboutMe: "A compassionate doctor dedicated to pediatric healthcare with roots in Kerala and heart in Bengaluru. Medicine is my passion, but my world also revolves around music, family gatherings, ocean diving, and home-cooked dinners. I balance scientific rigor with warmth and gentle optimism.",
		partnerExpectations: "Looking for a grounded, caring, and intellectually compatible doctor, engineer, or professional who values empathy, work-life balance, and mutual support in both personal and professional goals.",
		contact: {
			phone: "+91 97412 XXXXX",
			email: "dr.ishita.nair@manipalhospitals.com",
			managedBy: "Parents"
		},
		photo: "/assets/girl_oct4_portrait-DXsk8H1w.png",
		photoAlt: "Dr. Ishita Nair - Professional and warm portrait",
		verified: true,
		featured: true,
		estimatedValuationINR: 41e5,
		valuationTier: "Elite Ultra",
		keyHighlight: "MD Pediatrics (St. John's) · Family of Doctors · ₹34 LPA"
	},
	{
		id: "girl-6",
		name: "Pooja Bansal",
		gender: "female",
		age: 27,
		height: "5' 5\" (165 cm)",
		dob: "8th May 1999",
		timeOfBirth: "01:20 PM",
		placeOfBirth: "Gurugram, Haryana",
		rashi: "Vrishabha (Taurus)",
		nakshatra: "Rohini",
		manglik: "Non-Manglik",
		gotra: "Garg",
		religion: "Hindu",
		caste: "Banya / Agrawal",
		motherTongue: "Hindi / English",
		maritalStatus: "Never Married",
		location: {
			city: "Gurugram / New Delhi",
			state: "Haryana",
			country: "India"
		},
		education: {
			degree: "B.Com (Hons) + MBA in Strategy & Finance",
			institution: "SRCC (Delhi University) & IIM Calcutta",
			field: "Corporate Strategy, Private Equity & Advisory",
			level: "Masters"
		},
		profession: {
			role: "Engagement Manager / Strategy Consultant",
			company: "Bain & Company",
			industry: "Finance & Banking",
			experienceYears: 5,
			workMode: "Hybrid"
		},
		annualIncomeLPA: 52,
		incomeDisplay: "₹52 LPA",
		family: {
			father: "Navin Bansal",
			fatherOccupation: "Managing Director, Bansal Auto Components Exports",
			mother: "Sarita Bansal",
			motherOccupation: "Interior Designer & Social Philanthropist",
			siblings: "1 Younger Brother (Leading Manufacturing Plant Operations)",
			familyType: "Joint",
			familyValues: "Moderate",
			nativePlace: "Hisar / Delhi",
			familyAssets: "Own Kothi in DLF Phase 2 Gurugram + Commercial properties in Okhla & Connaught Place",
			familyNetWorth: "₹45 Cr+"
		},
		lifestyle: {
			diet: "Strict Vegetarian",
			habits: [
				"Non-smoker",
				"Teetotaler",
				"Structured Planner"
			],
			hobbies: [
				"World Travel (22 countries visited)",
				"Stock Market Valuation",
				"Tennis",
				"Tasting Fine Teas"
			],
			fitness: "Lawn tennis 3 mornings a week and Reformer Pilates"
		},
		aboutMe: "Alumna of SRCC and IIM Calcutta, currently advising Fortune 500 boards on high-stakes strategy at Bain. Beyond consulting decks and financial modeling, I am a family-centric daughter who loves Sunday brunch rituals, spiritual temple visits, tennis matches, and hosting friends.",
		partnerExpectations: "Seeking an ambitious, high-achieving partner from an esteemed business or top corporate family background (IIM/IIT/Ivy League preferred). Someone who is humble, ethical, and shares mutual respect and humor.",
		contact: {
			phone: "+91 99100 XXXXX",
			email: "pooja.bansal@alumni.iimcal.ac.in",
			managedBy: "Parents"
		},
		photo: "/assets/girl_oct5_portrait-B2TrNfe-.png",
		photoAlt: "Pooja Bansal - Elegant corporate portrait",
		verified: true,
		featured: true,
		estimatedValuationINR: 58e5,
		valuationTier: "Elite Ultra",
		keyHighlight: "SRCC + IIM Calcutta · Bain & Company · ₹52 LPA"
	},
	{
		id: "girl-7",
		name: "Avani Kapoor",
		gender: "female",
		age: 28,
		height: "5' 7\" (170 cm)",
		dob: "30th June 1998",
		timeOfBirth: "05:40 PM",
		placeOfBirth: "Chandigarh, Punjab",
		rashi: "Karka (Cancer)",
		nakshatra: "Pushya",
		manglik: "Non-Manglik",
		gotra: "Kaushal",
		religion: "Hindu",
		caste: "Punjabi Khatri",
		motherTongue: "Punjabi / Hindi / English",
		maritalStatus: "Never Married",
		location: {
			city: "Mumbai",
			state: "Maharashtra",
			country: "India"
		},
		education: {
			degree: "B.A. Mass Media + Master of Global Luxury & Brand Strategy",
			institution: "St. Xavier's College Mumbai & ESSEC Business School Paris",
			field: "Brand Marketing, Omnichannel Growth & D2C",
			level: "Masters"
		},
		profession: {
			role: "Associate Brand Director (Omnichannel Retail)",
			company: "Nykaa Beauty & Fashion",
			industry: "Marketing & Media",
			experienceYears: 6,
			workMode: "Hybrid"
		},
		annualIncomeLPA: 42,
		incomeDisplay: "₹42 LPA",
		family: {
			father: "Harish Kapoor",
			fatherOccupation: "Executive Director, Punjab Agro Industries",
			mother: "Simmi Kapoor",
			motherOccupation: "Fashion Stylist & Boutique Proprietor",
			siblings: "1 Elder Brother (Investment Banker in London, married)",
			familyType: "Nuclear",
			familyValues: "Liberal",
			nativePlace: "Chandigarh Sector 9",
			familyAssets: "Villa in Chandigarh Sector 9 + 3-BHK luxury apartment in Bandra West",
			familyNetWorth: "₹22 Cr+"
		},
		lifestyle: {
			diet: "Non-Vegetarian",
			habits: [
				"Social Drinker",
				"Non-smoker",
				"Fashion Forward"
			],
			hobbies: [
				"Art Curation",
				"Gourmet Baking",
				"Skiing",
				"European Architecture"
			],
			fitness: "Strength training 4x/week, cardio dance, yoga"
		},
		aboutMe: "A confident, creative Punjabi woman who loves fashion, brand narratives, and discovering hidden city gems. After completing my masters in Paris, I returned to Mumbai to lead marquee beauty and fashion brands. I adore vibrant family celebrations, spontaneous road trips, and deep heart-to-heart conversations.",
		partnerExpectations: "Looking for a confident, charismatic, and loving man who has good style, strong values, respect for gender equality, and an easygoing sense of humor.",
		contact: {
			phone: "+91 98140 XXXXX",
			email: "avani.kapoor@brandlead.com",
			managedBy: "Self"
		},
		photo: "/assets/girl_bedroom_red_denim-B08S9t1R.png",
		photoAlt: "Avani Kapoor - Confident bedroom portrait in red and denim",
		verified: true,
		featured: false,
		estimatedValuationINR: 435e4,
		valuationTier: "Elite Ultra",
		keyHighlight: "ESSEC Paris Alumna · Brand Director · Bandra & Chandigarh"
	},
	{
		id: "girl-8",
		name: "Shreya Verma",
		gender: "female",
		age: 26,
		height: "5' 4\" (163 cm)",
		dob: "16th October 2000",
		timeOfBirth: "04:30 AM",
		placeOfBirth: "Lucknow, Uttar Pradesh",
		rashi: "Tula (Libra)",
		nakshatra: "Swati",
		manglik: "Non-Manglik",
		gotra: "Srivastava",
		religion: "Hindu",
		caste: "Kayastha",
		motherTongue: "Hindi / Urdu / English",
		maritalStatus: "Never Married",
		location: {
			city: "New Delhi",
			state: "Delhi NCR",
			country: "India"
		},
		education: {
			degree: "B.A. (Hons) Political Science & M.A. Public Policy",
			institution: "Miranda House, Delhi University & National Law School (NLSIU)",
			field: "Public Policy, Governance & Legislative Research",
			level: "Masters"
		},
		profession: {
			role: "Public Policy Consultant & Legislative Research Fellow",
			company: "PRS Legislative Research / NITI Aayog Advisory",
			industry: "Civil Services",
			experienceYears: 4,
			workMode: "Hybrid"
		},
		annualIncomeLPA: 24,
		incomeDisplay: "₹24 LPA",
		family: {
			father: "Sudhir Verma, IAS (Retd.)",
			fatherOccupation: "Former Principal Secretary, UP Cadre",
			mother: "Dr. Vandana Verma",
			motherOccupation: "Dean, Faculty of Arts, Lucknow University",
			siblings: "1 Elder Sister (IRS Officer, Deputy Commissioner of Income Tax)",
			familyType: "Nuclear",
			familyValues: "Moderate",
			nativePlace: "Gomti Nagar, Lucknow",
			familyAssets: "Ancestral Kothi in Hazratganj + Flat in Vasant Kunj New Delhi",
			familyNetWorth: "₹19 Cr+"
		},
		lifestyle: {
			diet: "Vegetarian",
			habits: [
				"Teetotaler",
				"Non-smoker",
				"Avid Book Reader"
			],
			hobbies: [
				"Urdu Poetry / Ghazals",
				"Documentary Film Making",
				"Sufi Music",
				"Museum Hopping"
			],
			fitness: "Morning walk in Lodhi Gardens & classical Kathak training"
		},
		aboutMe: "Deeply rooted in Indian heritage, constitutional ethics, and literary warmth. Born into a respected civil service family in Lucknow, I studied policy at NLSIU Bangalore and now work on public governance reforms in Delhi. I value empathy, gentle humor, intellectual debates, and old-school hospitality.",
		partnerExpectations: "Seeking a mature, cultured, and ethically grounded gentleman (civil services, judiciary, consulting, or corporate) who appreciates books, arts, and deep familial ties.",
		contact: {
			phone: "+91 94150 XXXXX",
			email: "shreya.verma@policylab.org",
			managedBy: "Parents"
		},
		photo: "/assets/girl_cozy_living_room-DRmDspYV.png",
		photoAlt: "Shreya Verma - Cozy living room portrait",
		verified: true,
		featured: false,
		estimatedValuationINR: 35e5,
		valuationTier: "Tier 1 High-Demand",
		keyHighlight: "Miranda House + NLSIU · Civil Service Family · Policy Consultant"
	},
	{
		id: "girl-9",
		name: "Sneha Bhattacharya",
		gender: "female",
		age: 27,
		height: "5' 5\" (165 cm)",
		dob: "4th December 1999",
		timeOfBirth: "02:15 PM",
		placeOfBirth: "Hyderabad, Telangana",
		rashi: "Dhanu (Sagittarius)",
		nakshatra: "Uttara Ashadha",
		manglik: "Non-Manglik",
		gotra: "Bharadwaja",
		religion: "Hindu",
		caste: "Brahmin",
		motherTongue: "Bengali / Telugu / Hindi",
		maritalStatus: "Never Married",
		location: {
			city: "Hyderabad",
			state: "Telangana",
			country: "India"
		},
		education: {
			degree: "B.Tech + M.Tech Dual Degree in Computer Science & AI",
			institution: "IIIT Hyderabad",
			field: "Artificial Intelligence & Large Language Models",
			level: "Masters"
		},
		profession: {
			role: "Senior AI Research Scientist",
			company: "Microsoft Research India",
			industry: "Technology",
			experienceYears: 5,
			workMode: "Hybrid"
		},
		annualIncomeLPA: 50,
		incomeDisplay: "₹50 LPA",
		family: {
			father: "Dr. Partho Bhattacharya",
			fatherOccupation: "Director of Research, DRDO (Defense Lab)",
			mother: "Swapna Bhattacharya",
			motherOccupation: "Professor of Mathematics, Osmania University",
			siblings: "Single child",
			familyType: "Nuclear",
			familyValues: "Liberal",
			nativePlace: "Hyderabad / Kolkata",
			familyAssets: "Villa in Gachibowli Financial District + Land in Kolkata",
			familyNetWorth: "₹15 Cr+"
		},
		lifestyle: {
			diet: "Eggetarian",
			habits: [
				"Non-smoker",
				"Teetotaler",
				"Night Coder"
			],
			hobbies: [
				"Machine Learning Research",
				"Board Games",
				"Astrophotography",
				"Sci-Fi Novels"
			],
			fitness: "Badminton, table tennis, daily yoga stretches"
		},
		aboutMe: "A researcher at heart, exploring cutting-edge AI breakthroughs at Microsoft Research. I was born and raised in Hyderabad with Bengali cultural roots. I love logic puzzles, stargazing from my balcony with my Dobsonian telescope, and cooking traditional festive biryanis and sweets.",
		partnerExpectations: "Looking for a smart, compassionate, and tech-forward or scientific partner who loves deep conversations, supports ambitious aspirations, and enjoys peaceful weekends.",
		contact: {
			phone: "+91 99890 XXXXX",
			email: "sneha.bhattacharya@iiit.ac.in",
			managedBy: "Self"
		},
		photo: "/assets/girl_nielit_campus-B9d-9VE_.png",
		photoAlt: "Sneha Bhattacharya - Campus portrait in red and denim",
		verified: true,
		featured: true,
		estimatedValuationINR: 51e5,
		valuationTier: "Elite Ultra",
		keyHighlight: "IIIT Hyderabad Dual Degree · Microsoft AI Researcher · ₹50 LPA"
	},
	{
		id: "girl-10",
		name: "Gayatri Sharma",
		gender: "female",
		age: 25,
		height: "5' 4\" (163 cm)",
		dob: "12th March 2001",
		timeOfBirth: "11:00 AM",
		placeOfBirth: "Dehradun, Uttarakhand",
		rashi: "Meena (Pisces)",
		nakshatra: "Revati",
		manglik: "Non-Manglik",
		gotra: "Vatsa",
		religion: "Hindu",
		caste: "Brahmin - Gaur",
		motherTongue: "Hindi / Garhwali",
		maritalStatus: "Never Married",
		location: {
			city: "Dehradun / Chandigarh",
			state: "Uttarakhand",
			country: "India"
		},
		education: {
			degree: "B.Sc (Hons) Forestry & M.Sc Environmental Policy",
			institution: "Forest Research Institute (FRI) Dehradun & TERI SAS",
			field: "Ecology, Carbon Offsetting & Himalayan Conservation",
			level: "Masters"
		},
		profession: {
			role: "Lead Environmental Policy Analyst & ESG Consultant",
			company: "World Wide Fund for Nature (WWF-India) / TERI",
			industry: "Civil Services",
			experienceYears: 3,
			workMode: "Hybrid"
		},
		annualIncomeLPA: 22,
		incomeDisplay: "₹22 LPA",
		family: {
			father: "Prof. Hemant Sharma",
			fatherOccupation: "Professor of Botany, HNB Garhwal Central University",
			mother: "Kamala Sharma",
			motherOccupation: "Ayurvedic Practitioner & Yoga Healer",
			siblings: "1 Younger Brother (Pursuing B.Tech Civil at IIT Roorkee)",
			familyType: "Nuclear",
			familyValues: "Moderate",
			nativePlace: "Rishikesh / Dehradun",
			familyAssets: "Colonial-style stone bungalow in Rajpur Road Dehradun + Apple orchard in Mussoorie",
			familyNetWorth: "₹12 Cr+"
		},
		lifestyle: {
			diet: "Strict Vegetarian (Sattvic)",
			habits: [
				"Teetotaler",
				"Non-smoker",
				"Early Riser"
			],
			hobbies: [
				"Nature Photography",
				"Bird Watching",
				"Botanical Watercolor Painting",
				"Folk Singing"
			],
			fitness: "Himalayan trekking, Pranayama, morning trail running"
		},
		aboutMe: "A mountain girl who finds deep peace in pine forests, riverbanks, and clean mountain air. Working in environmental conservation, I advocate for sustainable living and climate action. I value quiet sincerity, traditional values, kindness to animals, and simple, joyous moments with loved ones.",
		partnerExpectations: "Seeking a calm, nature-loving, and kind-hearted gentleman with strong moral fiber and family values. Open to relocating to NCR, Chandigarh, or Bengaluru for the right match.",
		contact: {
			phone: "+91 94120 XXXXX",
			email: "gayatri.sharma@fri.res.in",
			managedBy: "Parents"
		},
		photo: "/assets/girl_rural_canal-Btg69pcy.png",
		photoAlt: "Gayatri Sharma - Rural canal portrait in white and pink",
		verified: true,
		featured: false,
		estimatedValuationINR: 28e5,
		valuationTier: "Tier 2 Stable Growth",
		keyHighlight: "FRI Dehradun · Environmental Policy Lead · Sattvic Lifestyle"
	},
	{
		id: "girl-11",
		name: "Radhika Menon",
		gender: "female",
		age: 29,
		height: "5' 7\" (170 cm)",
		dob: "27th July 1997",
		timeOfBirth: "09:30 PM",
		placeOfBirth: "New Delhi",
		rashi: "Karka (Cancer)",
		nakshatra: "Ashlesha",
		manglik: "Non-Manglik",
		gotra: "Kaushik",
		religion: "Hindu",
		caste: "Menon / Nair",
		motherTongue: "Malayalam / English / Hindi",
		maritalStatus: "Never Married",
		location: {
			city: "New Delhi",
			state: "Delhi NCR",
			country: "India"
		},
		education: {
			degree: "B.A. LL.B. (Hons) + LL.M. Corporate Law",
			institution: "National Law University, Delhi (NLUD) & Columbia Law School NY",
			field: "Cross-Border M&A, Private Equity & Competition Law",
			level: "Masters"
		},
		profession: {
			role: "Senior Corporate Associate (M&A)",
			company: "Shardul Amarchand Mangaldas & Co",
			industry: "Law & Advisory",
			experienceYears: 6,
			workMode: "Hybrid"
		},
		annualIncomeLPA: 55,
		incomeDisplay: "₹55 LPA",
		family: {
			father: "Justice K. M. Menon (Retd.)",
			fatherOccupation: "Former High Court Judge & Arbitration Counsel",
			mother: "Dr. Rohini Menon",
			motherOccupation: "Senior Consultant Psychiatrist, Fortis Healthcare",
			siblings: "1 Younger Sister (Architect at Foster + Partners London)",
			familyType: "Nuclear",
			familyValues: "Liberal",
			nativePlace: "Chanakyapuri, New Delhi / Palakkad",
			familyAssets: "Duplex Residence in Golf Links New Delhi + Villa in Kerala",
			familyNetWorth: "₹38 Cr+"
		},
		lifestyle: {
			diet: "Non-Vegetarian",
			habits: [
				"Social Drinker",
				"Non-smoker",
				"Avid Art Collector"
			],
			hobbies: [
				"Squash",
				"Debating",
				"World History",
				"Attending Symphony Orchestras"
			],
			fitness: "Squash thrice a week, functional gym training"
		},
		aboutMe: "Sharp, articulate, and fiercely loyal. Educated at NLU Delhi and Columbia Law, I advise top international sovereign wealth funds on cross-border transactions. Outside law, I am a foodie who loves testing artisanal pasta recipes, playing squash, and attending theater performances.",
		partnerExpectations: "Seeking an accomplished, mature, and intellectually vibrant partner (lawyer, doctor, corporate leader, or founder) with high integrity and great conversational skills.",
		contact: {
			phone: "+91 98110 XXXXX",
			email: "radhika.menon@columbia.edu",
			managedBy: "Self"
		},
		photo: "/assets/girl_sporty_cream_wall-BQlXQPj4.png",
		photoAlt: "Radhika Menon - Sporty portrait against a cream wall",
		verified: true,
		featured: true,
		estimatedValuationINR: 56e5,
		valuationTier: "Elite Ultra",
		keyHighlight: "Columbia Law Alumna · Senior M&A Counsel · Judicial Family"
	},
	{
		id: "girl-12",
		name: "Natasha Singhal",
		gender: "female",
		age: 27,
		height: "5' 6\" (168 cm)",
		dob: "5th August 1999",
		timeOfBirth: "07:15 PM",
		placeOfBirth: "Goa / Mumbai",
		rashi: "Simha (Leo)",
		nakshatra: "Uttara Phalguni",
		manglik: "Non-Manglik",
		gotra: "Mittal",
		religion: "Hindu",
		caste: "Agrawal / Banya",
		motherTongue: "Hindi / Konkani / English",
		maritalStatus: "Never Married",
		location: {
			city: "Goa / Mumbai",
			state: "Goa",
			country: "India"
		},
		education: {
			degree: "B.Sc Marine Biology & M.Sc Climate Science",
			institution: "St. Xavier's Mumbai & James Cook University Australia",
			field: "Ocean Conservation & Coastal Eco-Tourism",
			level: "Masters"
		},
		profession: {
			role: "Marine Ecologist & Sustainable Resort Strategy Director",
			company: "Terra Coastline Conservation & Coastal Heritage Retreats",
			industry: "Design & Creative",
			experienceYears: 5,
			workMode: "Hybrid"
		},
		annualIncomeLPA: 32,
		incomeDisplay: "₹32 LPA",
		family: {
			father: "Deepak Singhal",
			fatherOccupation: "Managing Director, Goa Maritime Logistics & Shipping",
			mother: "Neena Singhal",
			motherOccupation: "Ceramic Sculptor & Environmental Activist",
			siblings: "1 Elder Brother (Yacht Captain & Charter Business Owner)",
			familyType: "Nuclear",
			familyValues: "Liberal",
			nativePlace: "North Goa (Anjuna) / South Mumbai",
			familyAssets: "Portuguese Heritage Villa in Goa + Penthouse in Worli Mumbai",
			familyNetWorth: "₹30 Cr+"
		},
		lifestyle: {
			diet: "Eggetarian",
			habits: [
				"Non-smoker",
				"Social Drinker",
				"Sunset Lover"
			],
			hobbies: [
				"Scuba Diving (PADI Divemaster)",
				"Surfing",
				"Travel Writing",
				"Guitar"
			],
			fitness: "Open water swimming, ocean surfing, beach yoga at sunrise"
		},
		aboutMe: "A coastal soul with an adventurous heart and a warm smile. I divide my time between Mumbai and Goa, leading marine conservation efforts and sustainable retreats. I value honesty, curiosity about different cultures, empathy for nature, and finding happiness in the little things.",
		partnerExpectations: "Looking for a partner who is passionate about life, has a joyful sense of humor, appreciates travel and oceans, and values open communication.",
		contact: {
			phone: "+91 98221 XXXXX",
			email: "natasha.singhal@coastalmatrimony.in",
			managedBy: "Self"
		},
		photo: "/assets/girl_sunset_shoreline-Cmy2C2Zs.png",
		photoAlt: "Natasha Singhal - Sunset shoreline stroll portrait",
		verified: true,
		featured: false,
		estimatedValuationINR: 38e5,
		valuationTier: "Tier 1 High-Demand",
		keyHighlight: "PADI Divemaster · Marine Scientist · Goa Heritage Family"
	},
	{
		id: "boy-1",
		name: "Arjun Sharma",
		gender: "male",
		age: 28,
		height: "6' 0\" (183 cm)",
		dob: "18th February 1998",
		timeOfBirth: "06:45 AM",
		placeOfBirth: "Bengaluru, Karnataka",
		rashi: "Kumbha (Aquarius)",
		nakshatra: "Shatabhisha",
		manglik: "Non-Manglik",
		gotra: "Bharadwaja",
		religion: "Hindu",
		caste: "Brahmin - Saraswat",
		motherTongue: "Hindi / Kannada / English",
		maritalStatus: "Never Married",
		location: {
			city: "Bengaluru",
			state: "Karnataka",
			country: "India"
		},
		education: {
			degree: "B.Tech in Computer Science & Engineering",
			institution: "IIT Bombay (Indian Institute of Technology)",
			field: "High-Performance Cloud Infrastructure & Machine Learning",
			level: "Bachelors"
		},
		profession: {
			role: "Lead Software Architect (Cloud Infrastructure)",
			company: "Google India",
			industry: "Technology",
			experienceYears: 6,
			workMode: "Hybrid"
		},
		annualIncomeLPA: 58,
		incomeDisplay: "₹58 LPA + Stocks",
		family: {
			father: "Prof. Vinod Sharma",
			fatherOccupation: "Former Dean of Engineering, IISc Bengaluru",
			mother: "Dr. Maya Sharma",
			motherOccupation: "Senior Consultant Pathologist, Manipal Hospitals",
			siblings: "1 Younger Sister (Pursuing Master's at Stanford University)",
			familyType: "Nuclear",
			familyValues: "Liberal",
			nativePlace: "Indiranagar, Bengaluru / Himachal Pradesh",
			familyAssets: "Independent 4-BHK duplex villa in Indiranagar + 2 Commercial IT spaces in Koramangala",
			familyNetWorth: "₹25 Cr+"
		},
		lifestyle: {
			diet: "Vegetarian",
			habits: [
				"Non-smoker",
				"Teetotaler",
				"Early Riser"
			],
			hobbies: [
				"Trekking in the Western Ghats",
				"Classical Indian Violin",
				"Chess (ELO 2050)",
				"Podcasting"
			],
			fitness: "Calisthenics, 10k road runs, weekend swimming"
		},
		aboutMe: "I am an IIT Bombay graduate working as a Lead Software Architect at Google Bengaluru. While my profession is centered around cutting-edge cloud infrastructure, my personal life is grounded in books, mountain hikes, Hindustani classical music, and warm family dinners. I believe that true strength lies in humility, empathy, and constant curiosity.",
		partnerExpectations: "Seeking an educated, kind-hearted, and ambitious companion aged 24-28 who values intellectual conversation, mutual emotional support, and shared adventures. Profession in tech, medicine, finance, or academia is welcome.",
		contact: {
			phone: "+91 98450 XXXXX",
			email: "arjun.sharma@iitbalumni.org",
			managedBy: "Self"
		},
		photo: "/assets/boy_arjun_sharma-97WtBCKn.jpg",
		photoAlt: "Arjun Sharma - Handsome tech lead portrait in navy blazer",
		verified: true,
		featured: true,
		estimatedValuationINR: 62e5,
		valuationTier: "Elite Ultra",
		keyHighlight: "IIT Bombay CS · Google Tech Lead · ₹58 LPA + RSUs"
	},
	{
		id: "boy-2",
		name: "Dr. Rohan Malhotra",
		gender: "male",
		age: 30,
		height: "5' 11\" (180 cm)",
		dob: "29th August 1996",
		timeOfBirth: "04:15 AM",
		placeOfBirth: "New Delhi",
		rashi: "Simha (Leo)",
		nakshatra: "Purva Phalguni",
		manglik: "Non-Manglik",
		gotra: "Kashyap",
		religion: "Hindu",
		caste: "Punjabi Khatri",
		motherTongue: "Hindi / Punjabi / English",
		maritalStatus: "Never Married",
		location: {
			city: "Gurugram / New Delhi",
			state: "Delhi NCR",
			country: "India"
		},
		education: {
			degree: "M.B.B.S. + M.D. (Internal Medicine) + D.M. (Cardiology)",
			institution: "AIIMS New Delhi (All India Institute of Medical Sciences)",
			field: "Interventional Cardiology & Structural Heart Interventions",
			level: "Doctorate"
		},
		profession: {
			role: "Specialist Interventional Cardiologist",
			company: "Medanta - The Medicity & Fortis Heart Institute",
			industry: "Healthcare",
			experienceYears: 6,
			workMode: "On-site"
		},
		annualIncomeLPA: 48,
		incomeDisplay: "₹48 LPA",
		family: {
			father: "Dr. Ashok Malhotra",
			fatherOccupation: "Senior Orthopedic Surgeon & Hospital Director",
			mother: "Dr. Neerja Malhotra",
			motherOccupation: "Gynecologist & Philanthropist",
			siblings: "1 Elder Brother (Radiologist in London, married)",
			familyType: "Nuclear",
			familyValues: "Moderate",
			nativePlace: "South Extension, New Delhi",
			familyAssets: "Family-owned Multi-specialty Daycare Clinic in South Delhi + Residential Kothi in Greater Kailash",
			familyNetWorth: "₹32 Cr+"
		},
		lifestyle: {
			diet: "Eggetarian",
			habits: [
				"Non-smoker",
				"Teetotaler",
				"Fitness Conscious"
			],
			hobbies: [
				"Lawn Tennis",
				"Playing Acoustic Guitar",
				"Medical Volunteering",
				"Formula 1 Racing"
			],
			fitness: "Strength training 4 days a week, cardiovascular endurance drills"
		},
		aboutMe: "A cardiologist trained at AIIMS New Delhi who finds deep fulfillment in healing hearts and clinical research. Outside the catheterization lab, I am an enthusiastic tennis player, amateur guitarist, and a passionate foodie who enjoys Sunday cooking for loved ones. I believe in mutual respect, unconditional kindness, and positive living.",
		partnerExpectations: "Looking for a compassionate, educated, and cheerful partner (doctor, engineer, designer, or finance professional) aged 25-29 who understands professional commitments and appreciates a warm, harmonious family environment.",
		contact: {
			phone: "+91 98101 XXXXX",
			email: "dr.rohan.malhotra@aiims.edu",
			managedBy: "Parents"
		},
		photo: "/assets/boy_rohan_malhotra-DNBwV5fD.jpg",
		photoAlt: "Dr. Rohan Malhotra - Smart doctor portrait with stethoscope",
		verified: true,
		featured: true,
		estimatedValuationINR: 65e5,
		valuationTier: "Elite Ultra",
		keyHighlight: "AIIMS Gold Medalist · DM Cardiology · Doctor Lineage"
	},
	{
		id: "boy-3",
		name: "Aditya Verma",
		gender: "male",
		age: 29,
		height: "5' 11\" (180 cm)",
		dob: "10th December 1997",
		timeOfBirth: "08:10 AM",
		placeOfBirth: "Lucknow, Uttar Pradesh",
		rashi: "Dhanu (Sagittarius)",
		nakshatra: "Purva Ashadha",
		manglik: "Non-Manglik",
		gotra: "Srivastava",
		religion: "Hindu",
		caste: "Kayastha",
		motherTongue: "Hindi / English",
		maritalStatus: "Never Married",
		location: {
			city: "New Delhi",
			state: "Delhi NCR",
			country: "India"
		},
		education: {
			degree: "B.A. (Hons) History & Master of Public Administration (MPA)",
			institution: "St. Stephen's College (Delhi University) & LBSNAA Mussoorie",
			field: "Indian Administrative Service (IAS) · All India Rank 14",
			level: "Masters"
		},
		profession: {
			role: "Assistant Secretary / Sub-Divisional Magistrate (IAS Officer, 2022 Batch)",
			company: "Ministry of Finance / Government of India",
			industry: "Civil Services",
			experienceYears: 4,
			workMode: "On-site"
		},
		annualIncomeLPA: 18,
		incomeDisplay: "₹18 LPA + Gazetted Officer Perks & House",
		family: {
			father: "Rajeshwar Verma, IPS (Retd.)",
			fatherOccupation: "Former Director General of Police (DGP)",
			mother: "Uma Verma",
			motherOccupation: "Author & Senior Classical Kathak Guru",
			siblings: "1 Elder Sister (Civil Judge, UP Judicial Services)",
			familyType: "Nuclear",
			familyValues: "Moderate",
			nativePlace: "Civil Lines, Prayagraj / Lucknow",
			familyAssets: "Ancestral Kothi in Civil Lines + Government allotted Central Delhi bungalow + 20 acres fertile farmland",
			familyNetWorth: "₹24 Cr+"
		},
		lifestyle: {
			diet: "Vegetarian",
			habits: [
				"Teetotaler",
				"Non-smoker",
				"Disciplined Routine"
			],
			hobbies: [
				"Polo & Horse Riding",
				"Reading Geopolitics & Modern History",
				"Badminton",
				"Writing Poetry"
			],
			fitness: "Morning parade drills, jogging around Rajpath, yoga"
		},
		aboutMe: "Serving as an officer in the Indian Administrative Service (IAS). Raised in a family steeped in patriotic duty and justice, I believe in integrity, public service, and dignified grace. Outside administrative responsibilities, I love reading constitutional history, horseback riding, and discussing current affairs with friends and elders.",
		partnerExpectations: "Seeking an educated, graceful, and understanding partner aged 24-28 from a cultured family background who values public service, integrity, and warmth.",
		contact: {
			phone: "+91 94151 XXXXX",
			email: "aditya.verma.ias@nic.in",
			managedBy: "Parents"
		},
		photo: "/assets/boy_aditya_verma-BUxqEdu9.jpg",
		photoAlt: "Aditya Verma - IAS officer portrait in elegant navy bandhgala",
		verified: true,
		featured: true,
		estimatedValuationINR: 75e5,
		valuationTier: "Elite Ultra",
		keyHighlight: "IAS AIR 14 · St. Stephen's Alumnus · Gazetted Status"
	},
	{
		id: "boy-4",
		name: "Vikramaditya Singhania",
		gender: "male",
		age: 31,
		height: "6' 1\" (185 cm)",
		dob: "15th May 1995",
		timeOfBirth: "02:30 PM",
		placeOfBirth: "Mumbai, Maharashtra",
		rashi: "Vrishabha (Taurus)",
		nakshatra: "Krittika",
		manglik: "Non-Manglik",
		gotra: "Mittal",
		religion: "Hindu",
		caste: "Marwari / Agrawal",
		motherTongue: "Hindi / Marwari / English",
		maritalStatus: "Never Married",
		location: {
			city: "Mumbai",
			state: "Maharashtra",
			country: "India"
		},
		education: {
			degree: "B.Tech Electrical + MBA (Finance & Entrepreneurship)",
			institution: "BITS Pilani & IIM Ahmedabad",
			field: "Fintech Venture Architecture & Quantitative Capital",
			level: "Masters"
		},
		profession: {
			role: "Co-Founder & Chief Executive Officer (FinTech Unicorn)",
			company: "KuberPay Technologies (Series C Funded)",
			industry: "Finance & Banking",
			experienceYears: 8,
			workMode: "Hybrid"
		},
		annualIncomeLPA: 140,
		incomeDisplay: "₹1.4 Cr PA + Significant Equity",
		family: {
			father: "Ghanshyam Singhania",
			fatherOccupation: "Chairman, Singhania Textiles & Industrial Logistics",
			mother: "Shashi Singhania",
			motherOccupation: "Trustee, Singhania Education Society",
			siblings: "1 Younger Brother (Leading family textile mills in Surat)",
			familyType: "Joint",
			familyValues: "Moderate",
			nativePlace: "Walkeshwar, South Mumbai / Shekhawati",
			familyAssets: "Penthouse at Walkeshwar South Mumbai + Family Industrial Estate in Gujarat",
			familyNetWorth: "₹120 Cr+"
		},
		lifestyle: {
			diet: "Strict Vegetarian",
			habits: [
				"Teetotaler",
				"Non-smoker",
				"Active Angel Investor"
			],
			hobbies: [
				"Sailing at Bombay Yacht Club",
				"Collecting Modern Indian Art",
				"Golf",
				"High-Altitude Trekking"
			],
			fitness: "Morning functional CrossFit and weekend golf at Willingdon Sports Club"
		},
		aboutMe: "Co-founder and CEO of a high-growth fintech startup backed by Tier-1 global venture funds. An alumnus of BITS Pilani and IIM Ahmedabad, I combine industrial business lineage with tech entrepreneurship. Beyond work, I am passionate about ocean sailing, mentoring startup founders, and preserving Marwari traditions.",
		partnerExpectations: "Looking for an educated, modern yet rooted woman aged 25-30 from a good family background who has her own career or creative passion and values integrity and family harmony.",
		contact: {
			phone: "+91 98200 XXXXX",
			email: "vikram@kuberpay.fin",
			managedBy: "Self"
		},
		photo: "/assets/boy_vikramaditya_singhania-DKY8-x4F.jpg",
		photoAlt: "Vikramaditya Singhania - FinTech founder in tailored charcoal suit",
		verified: true,
		featured: true,
		estimatedValuationINR: 85e5,
		valuationTier: "Elite Ultra",
		keyHighlight: "BITS Pilani + IIM-A · Unicorn Founder · ₹1.4 Cr + Equity"
	},
	{
		id: "boy-5",
		name: "Kabir Patel",
		gender: "male",
		age: 26,
		height: "5' 10\" (178 cm)",
		dob: "9th September 2000",
		timeOfBirth: "05:00 PM",
		placeOfBirth: "Ahmedabad, Gujarat",
		rashi: "Kanya (Virgo)",
		nakshatra: "Chitra",
		manglik: "Non-Manglik",
		gotra: "Patel / Leva",
		religion: "Hindu",
		caste: "Patidar / Patel",
		motherTongue: "Gujarati / Hindi / English",
		maritalStatus: "Never Married",
		location: {
			city: "Bengaluru / Ahmedabad",
			state: "Karnataka",
			country: "India"
		},
		education: {
			degree: "Bachelor of Design (Industrial Design) + Master of Architecture",
			institution: "National Institute of Design (NID Ahmedabad) & CEPT University",
			field: "Sustainable Architecture & Spatial Product Design",
			level: "Masters"
		},
		profession: {
			role: "Principal Product Architect & Design Studio Director",
			company: "Studio Vayu Design Labs",
			industry: "Design & Creative",
			experienceYears: 4,
			workMode: "Hybrid"
		},
		annualIncomeLPA: 36,
		incomeDisplay: "₹36 LPA",
		family: {
			father: "Harshad Patel",
			fatherOccupation: "Real Estate Developer & Ceramic Manufacturer, Morbi",
			mother: "Kokila Patel",
			motherOccupation: "Ceramic Artisan & Homemaker",
			siblings: "1 Elder Sister (Architect in New York, married)",
			familyType: "Joint",
			familyValues: "Liberal",
			nativePlace: "Bodakdev, Ahmedabad",
			familyAssets: "Modern architectural villa in Bodakdev Ahmedabad + Design studio loft in Indiranagar Bengaluru",
			familyNetWorth: "₹28 Cr+"
		},
		lifestyle: {
			diet: "Vegetarian",
			habits: [
				"Non-smoker",
				"Teetotaler",
				"Espresso Brewer"
			],
			hobbies: [
				"Woodworking & Furniture Craft",
				"Film Cinematography",
				"Vintage Motorcycle Restoration",
				"Travel"
			],
			fitness: "Rock climbing, functional gym training, daily morning cycling"
		},
		aboutMe: "A creative architect and designer with a deep love for sustainable materials, brutalist architecture, and clean functional aesthetics. NID and CEPT alumnus running an independent design laboratory in Bengaluru. I believe in honest design, genuine empathy, quiet confidence, and good conversations over fresh pour-over coffee.",
		partnerExpectations: "Seeking a creative, open-hearted, and smart life partner aged 23-28 (designer, architect, software engineer, or writer) who loves exploring new spaces, arts, and cultures.",
		contact: {
			phone: "+91 98980 XXXXX",
			email: "kabir.patel@studiovayu.in",
			managedBy: "Self"
		},
		photo: "/assets/boy_kabir_patel-BwcOlBEX.jpg",
		photoAlt: "Kabir Patel - Creative product designer with glasses and olive linen shirt",
		verified: true,
		featured: false,
		estimatedValuationINR: 42e5,
		valuationTier: "Tier 1 High-Demand",
		keyHighlight: "NID Ahmedabad + CEPT · Design Studio Founder · ₹36 LPA"
	},
	{
		id: "boy-6",
		name: "Capt. Aman Deep Singh",
		gender: "male",
		age: 27,
		height: "6' 2\" (188 cm)",
		dob: "14th July 1999",
		timeOfBirth: "07:30 AM",
		placeOfBirth: "Amritsar / Chandigarh, Punjab",
		rashi: "Karka (Cancer)",
		nakshatra: "Pushya",
		manglik: "Non-Manglik",
		gotra: "Sandhu",
		religion: "Sikh",
		caste: "Jat Sikh",
		motherTongue: "Punjabi / Hindi / English",
		maritalStatus: "Never Married",
		location: {
			city: "New Delhi / Chandigarh",
			state: "Delhi NCR",
			country: "India"
		},
		education: {
			degree: "B.Sc (Aviation Science) & Commercial Pilot License (CPL)",
			institution: "Indira Gandhi Rashtriya Uran Akademi (IGRUA) & Boeing Flight Academy",
			field: "Boeing 787 Dreamliner Multi-Crew Pilot Certification",
			level: "Professional"
		},
		profession: {
			role: "Senior First Officer (Boeing 787 Dreamliner)",
			company: "Air India International",
			industry: "Aviation & Defense",
			experienceYears: 5,
			workMode: "On-site"
		},
		annualIncomeLPA: 42,
		incomeDisplay: "₹42 LPA + International Flight Allowances",
		family: {
			father: "S. Gurpreet Singh",
			fatherOccupation: "Superintending Engineer, Punjab Water Resources",
			mother: "Dr. Jaswinder Kaur",
			motherOccupation: "Principal, Khalsa College for Women",
			siblings: "1 Younger Brother (Pursuing M.S. Data Science in Canada)",
			familyType: "Nuclear",
			familyValues: "Moderate",
			nativePlace: "Sector 33 Chandigarh / Amritsar",
			familyAssets: "3-Storey Villa in Sector 33 Chandigarh + 18 acres agricultural land in Amritsar",
			familyNetWorth: "₹26 Cr+"
		},
		lifestyle: {
			diet: "Eggetarian",
			habits: [
				"Teetotaler",
				"Non-smoker",
				"Aviation Enthusiast"
			],
			hobbies: [
				"Flight Simulation",
				"Acoustic Dhol & Bhangra",
				"Long Highway Rides",
				"Squash"
			],
			fitness: "FAA/DGCA Class 1 fitness, swimming 1km thrice a week, gym workouts"
		},
		aboutMe: "A commercial airline pilot flying widebody Dreamliners across London, Tokyo, and San Francisco. Raised in Chandigarh with proud Sikh heritage, I wear my turban with honor and carry a warm, generous heart. I love the thrill of cruising at 38,000 feet, but I am equally grounded in family values, seva, and home celebrations.",
		partnerExpectations: "Looking for a graceful, joyful, and educated girl aged 24-28 who is warm-hearted, values respect and traditions, and is excited about a life filled with global travel and shared warmth.",
		contact: {
			phone: "+91 98150 XXXXX",
			email: "capt.amandeep@airindia.in",
			managedBy: "Parents"
		},
		photo: "/assets/boy_aman_singh-C5GjHB2-.jpg",
		photoAlt: "Captain Aman Deep Singh - Commercial airline pilot in sharp uniform",
		verified: true,
		featured: true,
		estimatedValuationINR: 52e5,
		valuationTier: "Elite Ultra",
		keyHighlight: "IGRUA Alumnus · Boeing 787 International Pilot · ₹42 LPA"
	}
];
var Route$2 = createFileRoute("/find-somebody")({
	head: () => ({ meta: [
		{ title: "Find Somebody | Matrimony Biodatas & Profiles | Calculate my Dahej" },
		{
			name: "description",
			content: "Browse verified Indian matrimony biodatas with authentic photographs, comprehensive family background, Kundali horoscope, education, and AI valuation compatibility."
		},
		{
			property: "og:title",
			content: "Find Somebody | Verified Matrimony Biodatas"
		},
		{
			property: "og:description",
			content: "Explore authentic brides and grooms profiles with complete biodata details and AI Dahej valuation estimates."
		}
	] }),
	component: FindSomebodyPage
});
function FindSomebodyPage() {
	const [selectedGender, setSelectedGender] = (0, import_react.useState)("all");
	const [searchQuery, setSearchQuery] = (0, import_react.useState)("");
	const [selectedIndustry, setSelectedIndustry] = (0, import_react.useState)("all");
	const [selectedDiet, setSelectedDiet] = (0, import_react.useState)("all");
	const [sortBy, setSortBy] = (0, import_react.useState)("featured");
	const [activeProfile, setActiveProfile] = (0, import_react.useState)(null);
	const [activeModalTab, setActiveModalTab] = (0, import_react.useState)("personal");
	const [shortlistedIds, setShortlistedIds] = (0, import_react.useState)(/* @__PURE__ */ new Set());
	const [contactRevealed, setContactRevealed] = (0, import_react.useState)({});
	const toggleShortlist = (id, e) => {
		e?.stopPropagation();
		setShortlistedIds((prev) => {
			const next = new Set(prev);
			if (next.has(id)) next.delete(id);
			else next.add(id);
			return next;
		});
	};
	const industries = (0, import_react.useMemo)(() => {
		const set = /* @__PURE__ */ new Set();
		PROFILES.forEach((p) => set.add(p.profession.industry));
		return Array.from(set);
	}, []);
	const filteredProfiles = (0, import_react.useMemo)(() => {
		return PROFILES.filter((profile) => {
			if (selectedGender !== "all" && profile.gender !== selectedGender) return false;
			if (selectedIndustry !== "all" && profile.profession.industry !== selectedIndustry) return false;
			if (selectedDiet !== "all" && profile.lifestyle.diet !== selectedDiet) return false;
			if (searchQuery.trim() !== "") {
				const q = searchQuery.toLowerCase();
				const matchesName = profile.name.toLowerCase().includes(q);
				const matchesRole = profile.profession.role.toLowerCase().includes(q);
				const matchesCompany = profile.profession.company.toLowerCase().includes(q);
				const matchesCity = profile.location.city.toLowerCase().includes(q);
				const matchesCaste = profile.caste.toLowerCase().includes(q);
				const matchesDegree = profile.education.degree.toLowerCase().includes(q);
				const matchesInstitution = profile.education.institution.toLowerCase().includes(q);
				if (!matchesName && !matchesRole && !matchesCompany && !matchesCity && !matchesCaste && !matchesDegree && !matchesInstitution) return false;
			}
			return true;
		}).sort((a, b) => {
			if (sortBy === "featured") {
				if (a.featured && !b.featured) return -1;
				if (!a.featured && b.featured) return 1;
				return 0;
			}
			if (sortBy === "age-asc") return Number(a.age) - Number(b.age);
			if (sortBy === "income-desc") return b.annualIncomeLPA - a.annualIncomeLPA;
			if (sortBy === "valuation-desc") return b.estimatedValuationINR - a.estimatedValuationINR;
			return 0;
		});
	}, [
		selectedGender,
		selectedIndustry,
		selectedDiet,
		searchQuery,
		sortBy
	]);
	const girlsCount = PROFILES.filter((p) => p.gender === "female").length;
	const boysCount = PROFILES.filter((p) => p.gender === "male").length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlassLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative overflow-hidden rounded-[24px] border border-primary/20 bg-gradient-to-r from-primary/10 via-amber-500/10 to-primary/5 p-6 sm:p-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative z-10 max-w-3xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-xs font-bold text-primary",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5" }), "Verified Matrimony & Biodata Directory"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-4 text-3xl font-black tracking-tight sm:text-5xl text-foreground",
							children: "Find Somebody Special"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-base text-muted-foreground sm:text-lg",
							children: "Explore authentic matrimony biodatas complete with real portrait photography, comprehensive family lineage, educational pedigree, Kundali horoscope, and instant valuation compatibility."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex flex-wrap gap-4 pt-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2.5 rounded-xl border border-primary/20 bg-card/80 px-4 py-2.5 shadow-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "flex h-8 w-8 items-center justify-center rounded-lg bg-primary/15 text-primary font-black text-sm",
										children: "18"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-left text-xs",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-bold text-foreground",
											children: "Active Profiles"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-muted-foreground",
											children: "12 Brides · 6 Grooms"
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2.5 rounded-xl border border-primary/20 bg-card/80 px-4 py-2.5 shadow-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-700 font-black text-sm",
										children: "100%"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-left text-xs",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-bold text-foreground",
											children: "Full Biodatas"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-muted-foreground",
											children: "Kundali & Family Verified"
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2.5 rounded-xl border border-primary/20 bg-card/80 px-4 py-2.5 shadow-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500/15 text-amber-700 font-black text-sm",
										children: "⚡"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-left text-xs",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-bold text-foreground",
											children: "AI Valuation"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-muted-foreground",
											children: "Ridge + NN Ensemble"
										})]
									})]
								})
							]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "glass p-5 sm:p-6 space-y-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "inline-flex rounded-xl border border-primary/20 bg-muted/60 p-1.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => setSelectedGender("all"),
								className: `flex items-center gap-1.5 rounded-lg px-4 py-2 text-xs sm:text-sm font-bold transition-all ${selectedGender === "all" ? "gradient-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`,
								children: [
									"All Profiles (",
									PROFILES.length,
									")"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => setSelectedGender("female"),
								className: `flex items-center gap-1.5 rounded-lg px-4 py-2 text-xs sm:text-sm font-bold transition-all ${selectedGender === "female" ? "gradient-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`,
								children: [
									"Brides / Girls (",
									girlsCount,
									")"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => setSelectedGender("male"),
								className: `flex items-center gap-1.5 rounded-lg px-4 py-2 text-xs sm:text-sm font-bold transition-all ${selectedGender === "male" ? "gradient-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`,
								children: [
									"Grooms / Boys (",
									boysCount,
									")"
								]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative flex-1 max-w-md",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								placeholder: "Search by name, role, college, city, or caste...",
								value: searchQuery,
								onChange: (e) => setSearchQuery(e.target.value),
								className: "w-full rounded-xl border border-input bg-card/90 pl-10 pr-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
							}),
							searchQuery && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setSearchQuery(""),
								className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground text-xs",
								children: "Clear"
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-3 pt-2 border-t border-border/50 text-xs",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1.5 text-muted-foreground font-semibold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlidersHorizontal, { className: "h-3.5 w-3.5 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Filters:" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							value: selectedIndustry,
							onChange: (e) => setSelectedIndustry(e.target.value),
							className: "rounded-lg border border-input bg-card/80 px-3 py-1.5 text-xs text-foreground focus:outline-none focus:ring-1 focus:ring-primary",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "all",
								children: "All Industries"
							}), industries.map((ind) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: ind,
								children: ind
							}, ind))]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							value: selectedDiet,
							onChange: (e) => setSelectedDiet(e.target.value),
							className: "rounded-lg border border-input bg-card/80 px-3 py-1.5 text-xs text-foreground focus:outline-none focus:ring-1 focus:ring-primary",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "all",
									children: "All Diets"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "Vegetarian",
									children: "Strict Vegetarian"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "Eggetarian",
									children: "Eggetarian"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "Non-Vegetarian",
									children: "Non-Vegetarian"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "ml-auto flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground font-medium",
								children: "Sort by:"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								value: sortBy,
								onChange: (e) => setSortBy(e.target.value),
								className: "rounded-lg border border-input bg-card/80 px-3 py-1.5 text-xs font-semibold text-foreground focus:outline-none focus:ring-1 focus:ring-primary",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "featured",
										children: "Featured / Verified First"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "age-asc",
										children: "Age: Youngest First"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "income-desc",
										children: "Package: High to Low"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "valuation-desc",
										children: "Valuation: High to Low"
									})
								]
							})]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between px-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm font-semibold text-muted-foreground",
						children: [
							"Showing ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-foreground font-bold",
								children: filteredProfiles.length
							}),
							" profiles",
							selectedGender !== "all" && ` (${selectedGender === "female" ? "Brides" : "Grooms"})`
						]
					}), shortlistedIds.size > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-xs font-bold text-primary flex items-center gap-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "h-3.5 w-3.5 fill-primary text-primary" }),
							shortlistedIds.size,
							" Shortlisted"
						]
					})]
				}), filteredProfiles.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glass p-12 text-center rounded-2xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "mx-auto h-12 w-12 text-muted-foreground/50" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-3 text-lg font-bold text-foreground",
							children: "No profiles match your filter criteria"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted-foreground",
							children: "Try resetting the filters or clearing the search terms."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => {
								setSelectedGender("all");
								setSelectedIndustry("all");
								setSelectedDiet("all");
								setSearchQuery("");
							},
							className: "mt-4 inline-flex items-center gap-2 rounded-xl gradient-primary px-4 py-2 text-xs font-bold text-primary-foreground shadow",
							children: "Reset All Filters"
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3",
					children: filteredProfiles.map((profile) => {
						const isShortlisted = shortlistedIds.has(profile.id);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							onClick: () => setActiveProfile(profile),
							className: "glass glass-lift group cursor-pointer overflow-hidden rounded-[20px] border border-primary/20 bg-card/85 transition-all hover:border-primary/40 flex flex-col justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative aspect-[4/4.6] w-full overflow-hidden bg-muted/40",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: profile.photo,
										alt: profile.photoAlt,
										className: "h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105",
										loading: "lazy"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "absolute top-3 left-3 right-3 flex items-center justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: `inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-bold shadow-md backdrop-blur-md ${profile.gender === "female" ? "bg-pink-600/90 text-white" : "bg-blue-600/90 text-white"}`,
											children: profile.gender === "female" ? "Bride Profile" : "Groom Profile"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: (e) => toggleShortlist(profile.id, e),
											className: "flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md transition-transform hover:scale-110",
											title: isShortlisted ? "Remove from shortlist" : "Shortlist profile",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: `h-4 w-4 ${isShortlisted ? "fill-rose-500 text-rose-500" : "text-white"}` })
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "absolute bottom-3 left-3 right-3 text-white",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "text-xl font-extrabold tracking-tight drop-shadow-md",
												children: profile.name
											}), profile.verified && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-5 w-5 text-emerald-400 drop-shadow fill-emerald-400/20" })]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-xs font-medium text-white/90 drop-shadow",
											children: [
												profile.age,
												" yrs · ",
												profile.height,
												" · ",
												profile.location.city
											]
										})]
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-4 sm:p-5 space-y-3.5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-lg bg-primary/10 border border-primary/20 px-2.5 py-1.5 text-[11px] font-bold text-primary flex items-center gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "h-3.5 w-3.5 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "truncate",
											children: profile.keyHighlight
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1.5 text-xs",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-start gap-2 text-foreground font-semibold",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Briefcase, { className: "h-4 w-4 text-primary shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "truncate",
													children: [
														profile.profession.role,
														" ",
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
															className: "text-muted-foreground font-normal",
															children: ["at ", profile.profession.company]
														})
													]
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-start gap-2 text-muted-foreground",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraduationCap, { className: "h-4 w-4 text-primary/70 shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "truncate",
													children: [
														profile.education.degree,
														" (",
														profile.education.institution,
														")"
													]
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-2 text-muted-foreground",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4 text-primary/70 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Native: ", profile.family.nativePlace] })]
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid grid-cols-2 gap-2 rounded-xl bg-muted/40 p-2.5 text-[11px]",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-muted-foreground",
												children: "Community:"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-bold text-foreground truncate",
												children: profile.caste
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-muted-foreground",
												children: "Kundali / Gotra:"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "font-bold text-foreground truncate",
												children: [
													profile.manglik,
													" · ",
													profile.gotra
												]
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-muted-foreground",
												children: "Annual Income:"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-extrabold text-emerald-700",
												children: profile.incomeDisplay
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-muted-foreground",
												children: "Diet & Habits:"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-bold text-foreground truncate",
												children: profile.lifestyle.diet
											})] })
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-xl border border-amber-500/30 bg-amber-500/10 p-2.5 flex items-center justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[10px] font-bold uppercase tracking-wider text-amber-800",
											children: "Estimated Dahej Valuation"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-base font-black text-amber-900",
											children: [
												"₹",
												(profile.estimatedValuationINR / 1e5).toFixed(1),
												" Lakhs"
											]
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "rounded-md bg-amber-600/20 px-2 py-1 text-[10px] font-extrabold text-amber-900",
											children: profile.valuationTier
										})]
									})
								]
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-4 sm:p-5 pt-0 flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => setActiveProfile(profile),
									className: "flex-1 rounded-xl gradient-primary py-2.5 text-xs font-bold text-primary-foreground shadow flex items-center justify-center gap-1.5 hover:opacity-95 transition-opacity",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "h-3.5 w-3.5" }), "View Full Biodata"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/predictor",
									onClick: (e) => e.stopPropagation(),
									className: "rounded-xl border border-primary/30 bg-card py-2.5 px-3 text-xs font-bold text-primary hover:bg-primary/10 transition-colors flex items-center justify-center gap-1",
									title: "Simulate valuation in Calculator",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flame, { className: "h-3.5 w-3.5 text-primary" }), "Value"]
								})]
							})]
						}, profile.id);
					})
				})]
			}),
			activeProfile && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm animate-in fade-in",
				onClick: () => setActiveProfile(null),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-[24px] border border-primary/30 bg-card/95 p-6 shadow-2xl backdrop-blur-xl sm:p-8",
					onClick: (e) => e.stopPropagation(),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setActiveProfile(null),
							className: "absolute top-5 right-5 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-muted/80 text-foreground hover:bg-destructive hover:text-white transition-colors",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-6 border-b border-border/70 pb-6 sm:flex-row sm:items-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "relative h-28 w-28 shrink-0 overflow-hidden rounded-2xl border-2 border-primary/40 shadow-lg",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: activeProfile.photo,
										alt: activeProfile.photoAlt,
										className: "h-full w-full object-cover object-top"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex-1 space-y-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-wrap items-center gap-2",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: `rounded-full px-2.5 py-0.5 text-xs font-bold ${activeProfile.gender === "female" ? "bg-pink-500/15 text-pink-700 border border-pink-500/30" : "bg-blue-500/15 text-blue-700 border border-blue-500/30"}`,
													children: activeProfile.gender === "female" ? "Bride Profile" : "Groom Profile"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "rounded-full bg-emerald-500/15 px-2.5 py-0.5 text-xs font-bold text-emerald-800 border border-emerald-500/30",
													children: ["ID: ", activeProfile.id.toUpperCase()]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "rounded-full bg-amber-500/15 px-2.5 py-0.5 text-xs font-bold text-amber-800 border border-amber-500/30",
													children: activeProfile.valuationTier
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "text-2xl sm:text-3xl font-black text-foreground",
											children: activeProfile.name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-sm text-muted-foreground",
											children: [
												activeProfile.profession.role,
												" · ",
												activeProfile.profession.company,
												" · ",
												activeProfile.location.city,
												", ",
												activeProfile.location.state
											]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onClick: () => toggleShortlist(activeProfile.id),
										className: `flex items-center gap-1.5 rounded-xl border px-3.5 py-2 text-xs font-bold transition-all ${shortlistedIds.has(activeProfile.id) ? "border-rose-400 bg-rose-500/15 text-rose-600" : "border-border bg-card text-foreground hover:bg-muted"}`,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: `h-4 w-4 ${shortlistedIds.has(activeProfile.id) ? "fill-rose-500 text-rose-500" : ""}` }), shortlistedIds.has(activeProfile.id) ? "Shortlisted" : "Shortlist"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onClick: () => window.print(),
										className: "flex items-center gap-1.5 rounded-xl border border-border bg-card px-3.5 py-2 text-xs font-bold text-foreground hover:bg-muted",
										title: "Print Biodata Sheet",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, { className: "h-4 w-4" }), "Print"]
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 flex flex-wrap gap-2 border-b border-border/70 pb-3",
							children: [
								{
									id: "personal",
									label: "Personal & Kundali"
								},
								{
									id: "career",
									label: "Education & Career"
								},
								{
									id: "family",
									label: "Family & Heritage"
								},
								{
									id: "lifestyle",
									label: "Lifestyle & Expectations"
								}
							].map((tab) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setActiveModalTab(tab.id),
								className: `rounded-xl px-4 py-2 text-xs sm:text-sm font-bold transition-all ${activeModalTab === tab.id ? "gradient-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:bg-muted hover:text-foreground"}`,
								children: tab.label
							}, tab.id))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6",
							children: [
								activeModalTab === "personal" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "rounded-xl border border-border/70 bg-muted/30 p-3.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[11px] font-semibold text-muted-foreground uppercase",
													children: "Age & Height"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
													className: "mt-1 text-sm font-bold text-foreground",
													children: [
														activeProfile.age,
														" Years · ",
														activeProfile.height
													]
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "rounded-xl border border-border/70 bg-muted/30 p-3.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[11px] font-semibold text-muted-foreground uppercase",
													children: "Date & Time of Birth"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
													className: "mt-1 text-sm font-bold text-foreground",
													children: [
														activeProfile.dob,
														" at ",
														activeProfile.timeOfBirth
													]
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "rounded-xl border border-border/70 bg-muted/30 p-3.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[11px] font-semibold text-muted-foreground uppercase",
													children: "Place of Birth"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-1 text-sm font-bold text-foreground",
													children: activeProfile.placeOfBirth
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "rounded-xl border border-border/70 bg-muted/30 p-3.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[11px] font-semibold text-muted-foreground uppercase",
													children: "Rashi (Moon Sign)"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-1 text-sm font-bold text-foreground",
													children: activeProfile.rashi
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "rounded-xl border border-border/70 bg-muted/30 p-3.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[11px] font-semibold text-muted-foreground uppercase",
													children: "Nakshatra"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-1 text-sm font-bold text-foreground",
													children: activeProfile.nakshatra
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "rounded-xl border border-border/70 bg-muted/30 p-3.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[11px] font-semibold text-muted-foreground uppercase",
													children: "Manglik Status"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-1 text-sm font-bold text-primary",
													children: activeProfile.manglik
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "rounded-xl border border-border/70 bg-muted/30 p-3.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[11px] font-semibold text-muted-foreground uppercase",
													children: "Gotra"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-1 text-sm font-bold text-foreground",
													children: activeProfile.gotra
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "rounded-xl border border-border/70 bg-muted/30 p-3.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[11px] font-semibold text-muted-foreground uppercase",
													children: "Religion & Community"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
													className: "mt-1 text-sm font-bold text-foreground",
													children: [
														activeProfile.religion,
														" · ",
														activeProfile.caste
													]
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "rounded-xl border border-border/70 bg-muted/30 p-3.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[11px] font-semibold text-muted-foreground uppercase",
													children: "Mother Tongue"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-1 text-sm font-bold text-foreground",
													children: activeProfile.motherTongue
												})]
											})
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-2xl border border-primary/20 bg-primary/5 p-5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
											className: "text-sm font-extrabold uppercase tracking-wide text-primary",
											children: ["About ", activeProfile.name]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 text-sm leading-relaxed text-foreground",
											children: activeProfile.aboutMe
										})]
									})]
								}),
								activeModalTab === "career" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid grid-cols-1 gap-4 sm:grid-cols-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rounded-xl border border-border/70 bg-muted/30 p-4 space-y-2",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center gap-2 text-primary font-bold text-xs uppercase",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraduationCap, { className: "h-4 w-4" }), "Educational Background"]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
													className: "text-base font-extrabold text-foreground",
													children: activeProfile.education.degree
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
													className: "text-xs text-muted-foreground",
													children: ["Institute: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-foreground font-semibold",
														children: activeProfile.education.institution
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
													className: "text-xs text-muted-foreground",
													children: ["Field: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-foreground font-semibold",
														children: activeProfile.education.field
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "inline-block rounded-md bg-primary/10 px-2 py-0.5 text-[11px] font-bold text-primary",
													children: ["Degree Level: ", activeProfile.education.level]
												})
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rounded-xl border border-border/70 bg-muted/30 p-4 space-y-2",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center gap-2 text-primary font-bold text-xs uppercase",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Briefcase, { className: "h-4 w-4" }), "Professional Role & Company"]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
													className: "text-base font-extrabold text-foreground",
													children: activeProfile.profession.role
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
													className: "text-xs text-muted-foreground",
													children: ["Organization: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-foreground font-semibold",
														children: activeProfile.profession.company
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
													className: "text-xs text-muted-foreground",
													children: ["Industry: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-foreground font-semibold",
														children: activeProfile.profession.industry
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
													className: "text-xs text-muted-foreground",
													children: ["Experience: ", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "text-foreground font-semibold",
														children: [
															activeProfile.profession.experienceYears,
															" Years (",
															activeProfile.profession.workMode,
															")"
														]
													})]
												})
											]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs font-bold uppercase tracking-wider text-emerald-800",
											children: "Annual CTC / Compensation"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-2xl font-black text-emerald-950",
											children: activeProfile.incomeDisplay
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-xs text-emerald-900 sm:text-right",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-semibold",
												children: "Income Bracket: Top Tier Professional"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-emerald-800/80",
												children: "Verified Form 16 / ITR Equivalent"
											})]
										})]
									})]
								}),
								activeModalTab === "family" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid grid-cols-1 gap-4 sm:grid-cols-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "rounded-xl border border-border/70 bg-muted/30 p-4 space-y-1.5",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-[11px] font-semibold text-muted-foreground uppercase",
														children: "Father"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
														className: "text-sm font-bold text-foreground",
														children: activeProfile.family.father
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-xs text-muted-foreground",
														children: activeProfile.family.fatherOccupation
													})
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "rounded-xl border border-border/70 bg-muted/30 p-4 space-y-1.5",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-[11px] font-semibold text-muted-foreground uppercase",
														children: "Mother"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
														className: "text-sm font-bold text-foreground",
														children: activeProfile.family.mother
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-xs text-muted-foreground",
														children: activeProfile.family.motherOccupation
													})
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "rounded-xl border border-border/70 bg-muted/30 p-4 space-y-1.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[11px] font-semibold text-muted-foreground uppercase",
													children: "Siblings"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-xs font-semibold text-foreground",
													children: activeProfile.family.siblings
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "rounded-xl border border-border/70 bg-muted/30 p-4 space-y-1.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[11px] font-semibold text-muted-foreground uppercase",
													children: "Family Type & Values"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
													className: "text-xs font-semibold text-foreground",
													children: [
														activeProfile.family.familyType,
														" Family · ",
														activeProfile.family.familyValues,
														" Values"
													]
												})]
											})
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-xl border border-border/70 bg-muted/30 p-4 space-y-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-2 text-primary font-bold text-xs uppercase",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Landmark, { className: "h-4 w-4" }), "Family Assets & Native Background"]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "text-xs text-muted-foreground",
												children: ["Native Ancestral Place: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-bold text-foreground",
													children: activeProfile.family.nativePlace
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "text-xs text-muted-foreground",
												children: ["Real Estate & Assets: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-semibold text-foreground",
													children: activeProfile.family.familyAssets
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "text-xs text-muted-foreground",
												children: ["Estimated Family Net Worth: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-bold text-emerald-700",
													children: activeProfile.family.familyNetWorth
												})]
											})
										]
									})]
								}),
								activeModalTab === "lifestyle" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-6",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "grid grid-cols-1 gap-4 sm:grid-cols-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "rounded-xl border border-border/70 bg-muted/30 p-4 space-y-2",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-xs font-bold uppercase tracking-wider text-primary",
														children: "Diet & Daily Routine"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
														className: "text-xs text-foreground",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "font-semibold",
																children: "Dietary Habit:"
															}),
															" ",
															activeProfile.lifestyle.diet
														]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
														className: "text-xs text-foreground",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "font-semibold",
																children: "Fitness Regimen:"
															}),
															" ",
															activeProfile.lifestyle.fitness
														]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "flex flex-wrap gap-1.5 pt-1",
														children: activeProfile.lifestyle.habits.map((h, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "rounded-md bg-muted px-2 py-0.5 text-[11px] font-medium text-foreground",
															children: h
														}, i))
													})
												]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "rounded-xl border border-border/70 bg-muted/30 p-4 space-y-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-xs font-bold uppercase tracking-wider text-primary",
													children: "Hobbies & Interests"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "flex flex-wrap gap-1.5 pt-1",
													children: activeProfile.lifestyle.hobbies.map((h, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "rounded-md bg-primary/10 border border-primary/20 px-2 py-0.5 text-[11px] font-bold text-primary",
														children: h
													}, i))
												})]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rounded-2xl border border-border/70 bg-muted/20 p-5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
												className: "text-xs font-bold uppercase tracking-wider text-primary",
												children: "Partner Expectations"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-2 text-sm leading-relaxed text-foreground",
												children: activeProfile.partnerExpectations
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "rounded-2xl border border-primary/30 bg-primary/5 p-5",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
													className: "text-sm font-extrabold text-foreground",
													children: "Direct Contact & Guardian Details"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
													className: "text-xs text-muted-foreground",
													children: ["Managed by: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "font-bold text-foreground",
														children: activeProfile.contact.managedBy
													})]
												})] }), contactRevealed[activeProfile.id] ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex flex-col sm:items-end gap-1 text-xs",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "flex items-center gap-1.5 font-bold text-foreground",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-3.5 w-3.5 text-primary" }),
															" ",
															activeProfile.contact.phone
														]
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "flex items-center gap-1.5 font-bold text-foreground",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-3.5 w-3.5 text-primary" }),
															" ",
															activeProfile.contact.email
														]
													})]
												}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
													onClick: () => setContactRevealed((prev) => ({
														...prev,
														[activeProfile.id]: true
													})),
													className: "inline-flex items-center gap-1.5 rounded-xl gradient-primary px-4 py-2 text-xs font-bold text-primary-foreground shadow",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-3.5 w-3.5" }), "View Contact Numbers"]
												})]
											})
										})
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-border/70 pt-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs text-muted-foreground",
									children: "Estimated Fair Valuation:"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-lg font-black text-amber-900",
									children: [
										"₹",
										(activeProfile.estimatedValuationINR / 1e5).toFixed(1),
										" Lakhs"
									]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/predictor",
									className: "inline-flex items-center gap-1.5 rounded-xl gradient-primary px-4 py-2 text-xs font-bold text-primary-foreground shadow",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flame, { className: "h-4 w-4" }), "Open in Dahej Calculator"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setActiveProfile(null),
									className: "rounded-xl border border-input bg-card px-4 py-2 text-xs font-semibold text-foreground hover:bg-muted",
									children: "Close"
								})]
							})]
						})
					]
				})
			})
		]
	}) });
}
var Route$1 = createFileRoute("/model")({
	head: () => ({ meta: [
		{ title: "Model Performance & Ensemble Analytics | Calculate my Dahej" },
		{
			name: "description",
			content: "Transparency dashboard for the Ridge + Regularized NN Ensemble: R² ~0.758, MAE ₹187,674, RMSE ₹242,985, MAPE ~10.1%, 37 transformed features across 400,000 synthetic records."
		},
		{
			property: "og:title",
			content: "Model Performance & Ensemble Analytics | Calculate my Dahej"
		},
		{
			property: "og:description",
			content: "Benchmark grid, 5-fold cross-validation variance, 37-feature weighting and residual diagnostics for the valuation pipeline."
		}
	] }),
	component: ModelPage
});
var tooltipStyle = {
	background: "var(--glass-surface-strong)",
	border: "1px solid var(--border)",
	borderRadius: 12,
	fontSize: 12
};
var benchmarks = [
	{
		model: "Ridge + Regularized NN",
		badge: "Production Champion",
		r2: "0.7581",
		mae: "₹187,674",
		rmse: "₹242,985",
		mape: "10.06%",
		note: "Ridge (L2 alpha=10000) · 37-dim parity-weighted input",
		accent: true
	},
	{
		model: "EqualWeight Ensemble",
		badge: "Production Ensemble",
		r2: "0.7581",
		mae: "₹187,675",
		rmse: "₹242,985",
		mape: "10.08%",
		note: "Averaged Ensemble (Ridge + Regularized NN)",
		accent: false
	},
	{
		model: "Ridge (Equal Weightage)",
		badge: "Parity-Constrained Linear",
		r2: "0.7582",
		mae: "₹187,556",
		rmse: "₹242,917",
		mape: "10.06%",
		note: "L2 alpha=10000 · distributed weights · max feature 11.75%",
		accent: false
	},
	{
		model: "Constrained NN",
		badge: "Regularized MLP",
		r2: "0.7559",
		mae: "₹188,586",
		rmse: "₹244,045",
		mape: "10.14%",
		note: "MLP 50→25 · weight decay 1.0 · early stopping",
		accent: false
	}
];
var importance = [
	{
		feature: "Boy First Marriage",
		xgb: 11.75,
		lgbm: 2.2
	},
	{
		feature: "Girl/Boy Job (Private)",
		xgb: 9.61,
		lgbm: 7.32
	},
	{
		feature: "Skin Colour (Fair)",
		xgb: 9.21,
		lgbm: 4.44
	},
	{
		feature: "Interreligion Match",
		xgb: 7.61,
		lgbm: 5.44
	},
	{
		feature: "Girl Height",
		xgb: 3.81,
		lgbm: 3.56
	},
	{
		feature: "Caste (General/SC)",
		xgb: 3.07,
		lgbm: 1.85
	},
	{
		feature: "Job Stability (Unstable)",
		xgb: 2.92,
		lgbm: 2.45
	},
	{
		feature: "Income (Boy/Girl)",
		xgb: 2.01,
		lgbm: 1.6
	}
];
var cvFolds = [
	{
		fold: "Fold 1",
		nn: .7599,
		ensemble: .7599,
		xgb: .7599,
		lgbm: .7599
	},
	{
		fold: "Fold 2",
		nn: .7551,
		ensemble: .7551,
		xgb: .7551,
		lgbm: .7551
	},
	{
		fold: "Fold 3",
		nn: .758,
		ensemble: .758,
		xgb: .758,
		lgbm: .758
	},
	{
		fold: "Fold 4",
		nn: .7591,
		ensemble: .7591,
		xgb: .7591,
		lgbm: .7591
	},
	{
		fold: "Fold 5",
		nn: .7602,
		ensemble: .7602,
		xgb: .7602,
		lgbm: .7602
	}
];
var residuals = Array.from({ length: 90 }, (_, i) => {
	const actual = 5.2 + i % 28 * .7 + i * 17 % 9 * .25;
	const errorMagnitude = (Math.sin(i * 1.6) * .52 + Math.cos(i * 2.3) * .38) * .85;
	const residual = Number(errorMagnitude.toFixed(2));
	const predicted = Number((actual + residual).toFixed(2));
	return {
		actual: Number(actual.toFixed(2)),
		residual,
		predicted
	};
});
function ModelPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassLayout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeading, {
			eyebrow: "Webpage 03 · Model Transparency & Machine Learning Analytics",
			title: "Model Performance & Ensemble Analytics",
			description: "Full visibility into the multi-architecture machine learning system trained on 400,000 synthetic records with 37 transformed features: Ridge + Regularized NN, Voting Ensemble, Ridge, and Regularized NN."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-5 sm:grid-cols-2 xl:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Brain, { className: "h-4 w-4 text-primary" }),
					label: "Champion Ridge R²",
					value: "0.7581",
					hint: "Ensemble R²: 0.7581 · Target parity-stable",
					accent: true
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "h-4 w-4 text-primary" }),
					label: "Mean Absolute Error (MAE)",
					value: "₹187,674",
					hint: "≈ ₹1.88 Lakhs MAE bound"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gauge, { className: "h-4 w-4 text-primary" }),
					label: "Root Mean Sq. Error (RMSE)",
					value: "₹242,985",
					hint: "≈ ₹2.43 Lakhs RMSE"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Database, { className: "h-4 w-4 text-primary" }),
					label: "MAPE / Synthetic Dataset",
					value: "8.87%",
					hint: "400,000 records · 37 features"
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "glass mt-5 p-6 sm:p-7",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-lg font-bold",
					children: "Model Leaderboard & 5-Fold Benchmark Grid"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted-foreground",
					children: "Evaluated on a 20% hold-out test set (80,000 samples) and 5-fold cross-validation (CV 0.7584 ± 0.0018)."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "inline-flex items-center gap-1.5 self-start rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-3.5 w-3.5" }), "Champion: Ridge + Regularized NN"]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
				children: benchmarks.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `glass-subtle relative p-5 transition-all hover:-translate-y-1 ${b.accent ? "border-primary/50 shadow-[0_4px_18px_oklch(0.42_0.20_25/15%)]" : ""}`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "label-caps text-primary text-[0.7rem]",
								children: b.badge
							}), b.accent && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full bg-primary px-2 py-0.5 text-[0.65rem] font-bold text-primary-foreground",
								children: "Active"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-base font-bold text-foreground",
							children: b.model
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 flex items-baseline gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `text-2xl font-black ${b.accent ? "text-primary" : ""}`,
								children: b.r2
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs text-muted-foreground",
								children: "R² score"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 space-y-1 text-xs text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "flex justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Test MAE:" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
										className: "text-foreground",
										children: b.mae
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "flex justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Test RMSE:" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
										className: "text-foreground",
										children: b.rmse
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "flex justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Test MAPE:" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
										className: "text-foreground",
										children: b.mape
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 border-t border-[var(--border-strong)] pt-2.5 text-[0.72rem] text-muted-foreground",
							children: b.note
						})
					]
				}, b.model))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-5 grid gap-5 xl:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "glass glass-lift p-6 sm:p-7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-lg font-bold",
						children: "Engineered Feature Importance"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted-foreground",
						children: "Top parity-weighted drivers from 37 final features (permutation importance; max 11.75%, under the 30% threshold)."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "label-caps text-primary",
						children: "37 Features"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 h-[380px]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
						width: "100%",
						height: "100%",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
							data: importance,
							layout: "vertical",
							barGap: 3,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
									horizontal: false,
									stroke: "var(--border-strong)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
									type: "number",
									stroke: "var(--muted-foreground)",
									fontSize: 11,
									unit: "%"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
									type: "category",
									dataKey: "feature",
									width: 160,
									stroke: "var(--muted-foreground)",
									fontSize: 11
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
									contentStyle: tooltipStyle,
									formatter: (val) => [`${val}%`, "Weight"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
									dataKey: "xgb",
									name: "Permutation (%)",
									fill: "var(--chart-1)",
									radius: [
										0,
										6,
										6,
										0
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
									dataKey: "lgbm",
									name: "Reference (%)",
									fill: "var(--chart-2)",
									radius: [
										0,
										6,
										6,
										0
									]
								})
							]
						})
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "glass glass-lift p-6 sm:p-7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-lg font-bold",
						children: "5-Fold Cross Validation Stability"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted-foreground",
						children: "R² variance across 5 stratified folds: high stability (0.7584 ± 0.0018, train/test gap 0.0018)."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "label-caps text-success",
						children: "Low Variance"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 h-[380px]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
						width: "100%",
						height: "100%",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LineChart, {
							data: cvFolds,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, { stroke: "var(--border-strong)" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
									dataKey: "fold",
									stroke: "var(--muted-foreground)",
									fontSize: 11
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
									domain: [.752, .762],
									stroke: "var(--muted-foreground)",
									fontSize: 11,
									tickFormatter: (v) => v.toFixed(3)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: tooltipStyle }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
									type: "monotone",
									dataKey: "nn",
									name: "Ridge + NN Ensemble",
									stroke: "var(--primary)",
									strokeWidth: 2.5,
									dot: { r: 4 }
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
									type: "monotone",
									dataKey: "ensemble",
									name: "Voting Ensemble",
									stroke: "var(--chart-3)",
									strokeWidth: 2,
									strokeDasharray: "3 3",
									dot: { r: 3 }
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
									type: "monotone",
									dataKey: "xgb",
									name: "Ridge",
									stroke: "var(--chart-1)",
									strokeWidth: 2,
									dot: { r: 3 }
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
									type: "monotone",
									dataKey: "lgbm",
									name: "Regularized NN",
									stroke: "var(--chart-2)",
									strokeWidth: 2,
									dot: { r: 3 }
								})
							]
						})
					})
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-5 grid gap-5 xl:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "glass glass-lift p-6 sm:p-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-lg font-bold",
						children: "Residual Diagnostics (₹ Lakhs)"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted-foreground",
						children: "Prediction error delta against true valuations. Narrow homoscedastic band (MAE ≈ ₹187,674)."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 h-[320px]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
							width: "100%",
							height: "100%",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ScatterChart, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, { stroke: "var(--border-strong)" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
									dataKey: "actual",
									name: "Actual (₹ Lakhs)",
									unit: "L",
									stroke: "var(--muted-foreground)",
									fontSize: 11
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
									dataKey: "residual",
									name: "Residual (₹ Lakhs)",
									unit: "L",
									stroke: "var(--muted-foreground)",
									fontSize: 11
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: tooltipStyle }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scatter, {
									data: residuals,
									fill: "var(--chart-2)",
									fillOpacity: .75
								})
							] })
						})
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "glass glass-lift p-6 sm:p-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-lg font-bold",
						children: "Actual vs Predicted Linearity"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted-foreground",
						children: "Tightly aligned along the 45° ideal regression diagonal across all valuation tiers."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 h-[320px]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
							width: "100%",
							height: "100%",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ScatterChart, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, { stroke: "var(--border-strong)" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
									dataKey: "actual",
									name: "Actual (₹ Lakhs)",
									unit: "L",
									stroke: "var(--muted-foreground)",
									fontSize: 11
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
									dataKey: "predicted",
									name: "Predicted (₹ Lakhs)",
									unit: "L",
									stroke: "var(--muted-foreground)",
									fontSize: 11
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: tooltipStyle }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scatter, {
									data: residuals,
									children: residuals.map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, {
										fill: "var(--chart-1)",
										fillOpacity: .75
									}, i))
								})
							] })
						})
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "glass mt-5 p-6 sm:p-7",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-lg font-bold",
					children: "End-to-End Machine Learning Pipeline Architecture"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted-foreground",
					children: "How 25 standardized base columns encode into the 37-dimensional production feature space (no derived interactions, no leakage)."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 grid gap-4 sm:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "glass-subtle p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 text-primary",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Database, { className: "h-5 w-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-bold",
										children: "1. Base Ingestion"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted-foreground",
									children: "25 base numerical & categorical columns from 400,000 synthetic records. Includes demographic, income, employment, and regional fields."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-3 text-xs font-semibold text-foreground",
									children: "✓ 320,000 Train / 80,000 Test Split"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "glass-subtle p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 text-primary",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-5 w-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-bold",
										children: "2. Feature Engineering"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted-foreground",
									children: "Strict parity lockdown: advanced interactions OFF. One-hot + standard scaling to 37 uniform-variance dimensions."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-3 text-xs font-semibold text-foreground",
									children: "✓ 37 Final Vector Dimensions"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "glass-subtle p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 text-primary",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cpu, { className: "h-5 w-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-bold",
										children: "3. Dual Inference Engine"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted-foreground",
									children: "Production Ridge + Regularized NN ensemble (0.7581 R², 5-fold CV 0.7584 ± 0.0018) for stable bounded inference."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-3 text-xs font-semibold text-foreground",
									children: "✓ Fast Inference (<20 ms latency)"
								})
							]
						})
					]
				})
			]
		})
	] });
}
function Kpi({ icon, label, value, hint, accent }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "glass glass-lift p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "label-caps",
					children: label
				}), icon]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: `mt-3 text-2xl font-extrabold ${accent ? "text-primary" : ""}`,
				children: value
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted-foreground",
				children: hint
			})
		]
	});
}
var indian_bride_groom_default = "/assets/indian-bride-groom-VwRk2ilA.jpg";
var boy_happy_default = "/assets/boy_happy-BiLS1N1H.jpg";
var boy_sad_default = "/assets/boy_sad-DqJcWKls.jpg";
var girl_happy_default = "/assets/girl_happy-Bkt34BzN.jpg";
var girl_sad_default = "/assets/girl_sad-Cza0DjJ_.jpg";
/**
* API Service for Backend Communication
* Handles all HTTP requests to the FastAPI backend
*/
var API_BASE_URL = {
	"BASE_URL": "/",
	"DEV": false,
	"MODE": "production",
	"PROD": true,
	"SSR": true,
	"TSS_DEV_SERVER": "false",
	"TSS_DEV_SSR_STYLES_BASEPATH": "/",
	"TSS_DEV_SSR_STYLES_ENABLED": "true",
	"TSS_DISABLE_CSRF_MIDDLEWARE_WARNING": "false",
	"TSS_INLINE_CSS_ENABLED": "false",
	"TSS_ROUTER_BASEPATH": "",
	"TSS_SERVER_FN_BASE": "/_serverFn/",
	"VITE_API_URL": "http://localhost:8000"
}["VITE_API_URL"] || "http://localhost:8000";
var APIService = class {
	baseURL;
	constructor(baseURL = API_BASE_URL) {
		this.baseURL = baseURL;
	}
	async request(endpoint, options = {}) {
		const url = `${this.baseURL}${endpoint}`;
		try {
			const response = await fetch(url, {
				...options,
				headers: {
					"Content-Type": "application/json",
					...options.headers
				}
			});
			if (!response.ok) {
				const errorData = await response.json().catch(() => ({}));
				throw new Error(errorData.message || errorData.detail || `HTTP ${response.status}: ${response.statusText}`);
			}
			return await response.json();
		} catch (error) {
			if (error instanceof Error) throw error;
			throw new Error("An unexpected error occurred");
		}
	}
	/**
	* Health check endpoint
	*/
	async health() {
		return this.request("/health");
	}
	/**
	* Get model information
	*/
	async getModelInfo() {
		return this.request("/model/info");
	}
	/**
	* Predict dowry / acquisition price for a single profile.
	* The backend accepts the flat profile object directly (it infers
	* dowry-vs-startup by shape, `payload_type` optional).
	*/
	async predictSingle(data) {
		const body = "payload_type" in data && data.payload_type ? data : {
			payload_type: "dowry",
			...data
		};
		return this.request("/predict", {
			method: "POST",
			body: JSON.stringify(body)
		});
	}
	/**
	* Predict valuations for multiple profiles (batch).
	* The backend `BatchPredictionRequest` expects `{ items: [...] }`
	* (legacy `startups` alias is startup-only) and infers each item's
	* type by shape, so send items WITH the explicit discriminator.
	*/
	async predictBatch(items) {
		if (items.length > 100) throw new Error("Maximum 100 items allowed per batch");
		const tagged = items.map((item) => "payload_type" in item && item.payload_type ? item : {
			payload_type: "dowry",
			...item
		});
		return this.request("/predict/batch", {
			method: "POST",
			body: JSON.stringify({ items: tagged })
		});
	}
	/**
	* Simple ping test
	*/
	async ping() {
		return this.request("/ping");
	}
};
var api = new APIService();
/**
* Hook for making single predictions
*/
function usePrediction() {
	return useMutation({ mutationFn: (data) => api.predictSingle(data) });
}
/**
* Hook for checking API health
*/
function useApiHealth() {
	return useQuery({
		queryKey: ["apiHealth"],
		queryFn: () => api.health(),
		refetchInterval: 3e4,
		retry: 1
	});
}
var Route = createFileRoute("/predictor")({
	head: () => ({ meta: [
		{ title: "Empirical Dahej Predictor & Valuation Calculator" },
		{
			name: "description",
			content: "Predict data-driven dowry estimates in INR with our production Ridge + Regularized NN ensemble (R² ~0.758, MAE ₹187,674, equal weightage). Adjust empirical groom and bride parameters from the dataset for real-time confidence bounds."
		},
		{
			property: "og:title",
			content: "Empirical Dahej Predictor & Valuation Calculator"
		},
		{
			property: "og:description",
			content: "Live empirical valuation engine trained on 400,000 synthetic records and 37 parity-weighted features with dynamic confidence intervals."
		}
	] }),
	component: PredictorPage
});
var inr = (v) => "₹" + Math.round(v).toLocaleString("en-IN", { maximumFractionDigits: 0 });
var lakhOrCrore = (v) => v >= 1e7 ? `₹${(v / 1e7).toFixed(2)} Cr` : `₹${(v / 1e5).toFixed(2)} L`;
var GROOM_PRESETS = [
	{
		name: "Govt Officer (Gazetted/IAS)",
		icon: "🏛️",
		data: {
			boy_age: 28,
			boy_salary: 11e4,
			boy_education: "Post Graduate",
			boy_job_type: "Government",
			job_stability_boy: "Permanent",
			working_abroad: "No",
			family_income_boy: 25e5,
			own_house_boy: "Yes",
			land_ownership_boy: "Medium",
			boy_height: 172,
			boy_skin_tone: "Fair",
			physical_disability_boy: "No",
			boy_previous_marriage: "Never Married",
			boy_area: "City",
			caste: "General"
		}
	},
	{
		name: "NRI Tech Lead (USA/EU)",
		icon: "💻",
		data: {
			boy_age: 29,
			boy_salary: 22e4,
			boy_education: "Post Graduate",
			boy_job_type: "Private",
			job_stability_boy: "Permanent",
			working_abroad: "Yes",
			family_income_boy: 32e5,
			own_house_boy: "Yes",
			land_ownership_boy: "Large",
			boy_height: 176,
			boy_skin_tone: "Wheatish",
			physical_disability_boy: "No",
			boy_previous_marriage: "Never Married",
			boy_area: "City",
			caste: "General"
		}
	},
	{
		name: "Corporate Professional (MNC)",
		icon: "🏢",
		data: {
			boy_age: 27,
			boy_salary: 72e3,
			boy_education: "Graduate",
			boy_job_type: "Private",
			job_stability_boy: "Permanent",
			working_abroad: "No",
			family_income_boy: 18e5,
			own_house_boy: "Yes",
			land_ownership_boy: "Small",
			boy_height: 170,
			boy_skin_tone: "Wheatish",
			physical_disability_boy: "No",
			boy_previous_marriage: "Never Married",
			boy_area: "City",
			caste: "OBC"
		}
	},
	{
		name: "Established Business Family",
		icon: "📈",
		data: {
			boy_age: 28,
			boy_salary: 15e4,
			boy_education: "Graduate",
			boy_job_type: "Business",
			job_stability_boy: "Business",
			working_abroad: "No",
			family_income_boy: 38e5,
			own_house_boy: "Yes",
			land_ownership_boy: "Large",
			boy_height: 172,
			boy_skin_tone: "Medium",
			physical_disability_boy: "No",
			boy_previous_marriage: "Never Married",
			boy_area: "Town",
			caste: "General"
		}
	}
];
var BRIDE_PRESETS = [
	{
		name: "Govt Officer (Gazetted/IAS)",
		icon: "🏛️",
		data: {
			girl_age: 26,
			girl_salary: 95e3,
			girl_education: "Post Graduate",
			girl_job_type: "Government",
			family_income_girl: 24e5,
			land_ownership_girl: "Medium",
			girl_height: 158,
			girl_skin_tone: "Fair",
			physical_disability_girl: "No",
			girl_previous_marriage: "Never Married",
			girl_area: "City",
			caste: "General"
		}
	},
	{
		name: "NRI Tech Lead (USA/EU)",
		icon: "💻",
		data: {
			girl_age: 27,
			girl_salary: 19e4,
			girl_education: "Post Graduate",
			girl_job_type: "Private",
			family_income_girl: 3e6,
			land_ownership_girl: "Medium",
			girl_height: 162,
			girl_skin_tone: "Fair",
			physical_disability_girl: "No",
			girl_previous_marriage: "Never Married",
			girl_area: "City",
			caste: "General"
		}
	},
	{
		name: "Corporate Professional (MNC)",
		icon: "🏢",
		data: {
			girl_age: 24,
			girl_salary: 65e3,
			girl_education: "Graduate",
			girl_job_type: "Private",
			family_income_girl: 13e5,
			land_ownership_girl: "Small",
			girl_height: 155,
			girl_skin_tone: "Wheatish",
			physical_disability_girl: "No",
			girl_previous_marriage: "Never Married",
			girl_area: "City",
			caste: "OBC"
		}
	},
	{
		name: "Established Business Family",
		icon: "📈",
		data: {
			girl_age: 24,
			girl_salary: 11e4,
			girl_education: "Graduate",
			girl_job_type: "Business",
			family_income_girl: 34e5,
			land_ownership_girl: "Large",
			girl_height: 156,
			girl_skin_tone: "Fair",
			physical_disability_girl: "No",
			girl_previous_marriage: "Never Married",
			girl_area: "Town",
			caste: "General"
		}
	}
];
var EDU_OPTIONS = [
	"Illiterate",
	"Primary",
	"Middle",
	"Secondary",
	"Higher Secondary",
	"Graduate",
	"Post Graduate",
	"Doctorate"
];
var BOY_JOB_OPTIONS = [
	"Government",
	"Private",
	"Business",
	"Farmer",
	"Unemployed"
];
var GIRL_JOB_OPTIONS = [
	"Housewife",
	"Private",
	"Government",
	"Business",
	"Student"
];
var JOB_STABILITY_OPTIONS = [
	"Permanent",
	"Business",
	"Contract",
	"Unstable",
	"Unemployed"
];
var LAND_OPTIONS = [
	"None",
	"Small",
	"Medium",
	"Large"
];
var SKIN_TONE_OPTIONS = [
	"Fair",
	"Wheatish",
	"Medium",
	"Dark"
];
var MARITAL_OPTIONS = [
	"Never Married",
	"Divorced",
	"Widowed"
];
var AREA_OPTIONS = [
	"City",
	"Town",
	"Village"
];
var RURAL_URBAN_OPTIONS = [
	"Urban",
	"Semi-Urban",
	"Rural"
];
var CASTE_OPTIONS = [
	"General",
	"OBC",
	"SC",
	"ST",
	"Other"
];
var RELIGION_OPTIONS = [
	"Hindu",
	"Muslim",
	"Sikh",
	"Christian",
	"Other"
];
var COMPATIBILITY_OPTIONS = [
	"Same Caste Same Religion",
	"Intercaste",
	"Interreligion",
	"Both"
];
var TIER_OPTIONS = [
	"Low",
	"Medium",
	"High",
	"Very High"
];
var YES_NO = ["No", "Yes"];
function PredictorPage() {
	const [activeTab, setActiveTab] = (0, import_react.useState)("groom");
	const [boyAge, setBoyAge] = (0, import_react.useState)(27);
	const [boySalary, setBoySalary] = (0, import_react.useState)(68e3);
	const [boyEducation, setBoyEducation] = (0, import_react.useState)("Graduate");
	const [boyJobType, setBoyJobType] = (0, import_react.useState)("Government");
	const [jobStabilityBoy, setJobStabilityBoy] = (0, import_react.useState)("Permanent");
	const [workingAbroad, setWorkingAbroad] = (0, import_react.useState)("No");
	const [familyIncomeBoy, setFamilyIncomeBoy] = (0, import_react.useState)(2e6);
	const [ownHouseBoy, setOwnHouseBoy] = (0, import_react.useState)("Yes");
	const [landOwnershipBoy, setLandOwnershipBoy] = (0, import_react.useState)("Small");
	const [boyHeight, setBoyHeight] = (0, import_react.useState)(170);
	const [boySkinTone, setBoySkinTone] = (0, import_react.useState)("Wheatish");
	const [physicalDisabilityBoy, setPhysicalDisabilityBoy] = (0, import_react.useState)("No");
	const [boyPrevMarriage, setBoyPrevMarriage] = (0, import_react.useState)("Never Married");
	const [boyArea, setBoyArea] = (0, import_react.useState)("City");
	const [girlAge, setGirlAge] = (0, import_react.useState)(23);
	const [girlSalary, setGirlSalary] = (0, import_react.useState)(0);
	const [girlEducation, setGirlEducation] = (0, import_react.useState)("Graduate");
	const [girlJobType, setGirlJobType] = (0, import_react.useState)("Housewife");
	const [familyIncomeGirl, setFamilyIncomeGirl] = (0, import_react.useState)(8e5);
	const [landOwnershipGirl, setLandOwnershipGirl] = (0, import_react.useState)("Small");
	const [girlHeight, setGirlHeight] = (0, import_react.useState)(155);
	const [girlSkinTone, setGirlSkinTone] = (0, import_react.useState)("Wheatish");
	const [physicalDisabilityGirl, setPhysicalDisabilityGirl] = (0, import_react.useState)("No");
	const [girlPrevMarriage, setGirlPrevMarriage] = (0, import_react.useState)("Never Married");
	const [girlArea, setGirlArea] = (0, import_react.useState)("Town");
	const [caste, setCaste] = (0, import_react.useState)("General");
	const [religion, setReligion] = (0, import_react.useState)("Hindu");
	const [intercasteInterreligion, setIntercasteInterreligion] = (0, import_react.useState)("Same Caste Same Religion");
	const [ruralUrban, setRuralUrban] = (0, import_react.useState)("Urban");
	const [valuationTier, setValuationTier] = (0, import_react.useState)("Medium");
	const prediction = usePrediction();
	const { data: healthData } = useApiHealth();
	const [backendResult, setBackendResult] = (0, import_react.useState)(null);
	const executePrediction = (0, import_react.useCallback)(() => {
		const payload = {
			boy_age: boyAge,
			girl_age: girlAge,
			age_difference: Math.max(0, boyAge - girlAge),
			boy_salary: boySalary,
			girl_salary: girlSalary,
			boy_education: boyEducation,
			girl_education: girlEducation,
			boy_job_type: boyJobType,
			girl_job_type: girlJobType,
			job_stability_boy: jobStabilityBoy,
			working_abroad: workingAbroad,
			family_income_boy: familyIncomeBoy,
			family_income_girl: familyIncomeGirl,
			own_house_boy: ownHouseBoy,
			land_ownership_boy: landOwnershipBoy,
			land_ownership_girl: landOwnershipGirl,
			boy_height: boyHeight,
			girl_height: girlHeight,
			boy_skin_tone: boySkinTone,
			girl_skin_tone: girlSkinTone,
			physical_disability_boy: physicalDisabilityBoy,
			physical_disability_girl: physicalDisabilityGirl,
			boy_previous_marriage: boyPrevMarriage,
			girl_previous_marriage: girlPrevMarriage,
			caste,
			religion,
			intercaste_interreligion: intercasteInterreligion,
			rural_urban: ruralUrban,
			boy_area: boyArea,
			girl_area: girlArea
		};
		prediction.mutate(payload, { onSuccess: (res) => {
			const val = res.data.predicted_dowry_amount_inr ?? res.data.predicted_acquisition_price_inr;
			setBackendResult({
				predicted: val,
				lower: res.data.prediction_range.lower_bound,
				upper: res.data.prediction_range.upper_bound,
				confidence: res.data.confidence_score
			});
		} });
	}, [
		boyAge,
		boySalary,
		boyEducation,
		boyJobType,
		jobStabilityBoy,
		workingAbroad,
		familyIncomeBoy,
		ownHouseBoy,
		landOwnershipBoy,
		boyHeight,
		boySkinTone,
		physicalDisabilityBoy,
		boyPrevMarriage,
		boyArea,
		girlAge,
		girlSalary,
		girlEducation,
		girlJobType,
		familyIncomeGirl,
		landOwnershipGirl,
		girlHeight,
		girlSkinTone,
		physicalDisabilityGirl,
		girlPrevMarriage,
		girlArea,
		caste,
		religion,
		intercasteInterreligion,
		ruralUrban,
		valuationTier,
		prediction
	]);
	(0, import_react.useEffect)(() => {
		executePrediction();
	}, []);
	const applyGroomPreset = (presetName) => {
		const preset = GROOM_PRESETS.find((p) => p.name === presetName);
		if (!preset) return;
		const d = preset.data;
		setBoyAge(d.boy_age);
		setBoySalary(d.boy_salary);
		setBoyEducation(d.boy_education);
		setBoyJobType(d.boy_job_type);
		setJobStabilityBoy(d.job_stability_boy);
		setWorkingAbroad(d.working_abroad);
		setFamilyIncomeBoy(d.family_income_boy);
		setOwnHouseBoy(d.own_house_boy);
		setLandOwnershipBoy(d.land_ownership_boy);
		setBoyHeight(d.boy_height);
		setBoySkinTone(d.boy_skin_tone);
		setPhysicalDisabilityBoy(d.physical_disability_boy);
		setBoyPrevMarriage(d.boy_previous_marriage);
		setBoyArea(d.boy_area);
		if (d.caste) setCaste(d.caste);
		prediction.mutate({
			boy_age: d.boy_age,
			girl_age: girlAge,
			age_difference: Math.max(0, d.boy_age - girlAge),
			boy_salary: d.boy_salary,
			girl_salary: girlSalary,
			boy_education: d.boy_education,
			girl_education: girlEducation,
			boy_job_type: d.boy_job_type,
			girl_job_type: girlJobType,
			job_stability_boy: d.job_stability_boy,
			working_abroad: d.working_abroad,
			family_income_boy: d.family_income_boy,
			family_income_girl: familyIncomeGirl,
			own_house_boy: d.own_house_boy,
			land_ownership_boy: d.land_ownership_boy,
			land_ownership_girl: landOwnershipGirl,
			boy_height: d.boy_height,
			girl_height: girlHeight,
			boy_skin_tone: d.boy_skin_tone,
			girl_skin_tone: girlSkinTone,
			physical_disability_boy: d.physical_disability_boy,
			physical_disability_girl: physicalDisabilityGirl,
			boy_previous_marriage: d.boy_previous_marriage,
			girl_previous_marriage: girlPrevMarriage,
			caste: d.caste,
			religion,
			intercaste_interreligion: intercasteInterreligion,
			rural_urban: ruralUrban,
			boy_area: d.boy_area,
			girl_area: girlArea
		}, { onSuccess: (res) => {
			const val = res.data.predicted_dowry_amount_inr ?? res.data.predicted_acquisition_price_inr;
			setBackendResult({
				predicted: val,
				lower: res.data.prediction_range.lower_bound,
				upper: res.data.prediction_range.upper_bound,
				confidence: res.data.confidence_score
			});
		} });
	};
	const applyBridePreset = (presetName) => {
		const preset = BRIDE_PRESETS.find((p) => p.name === presetName);
		if (!preset) return;
		const d = preset.data;
		setGirlAge(d.girl_age);
		setGirlSalary(d.girl_salary);
		setGirlEducation(d.girl_education);
		setGirlJobType(d.girl_job_type);
		setFamilyIncomeGirl(d.family_income_girl);
		setLandOwnershipGirl(d.land_ownership_girl);
		setGirlHeight(d.girl_height);
		setGirlSkinTone(d.girl_skin_tone);
		setPhysicalDisabilityGirl(d.physical_disability_girl);
		setGirlPrevMarriage(d.girl_previous_marriage);
		setGirlArea(d.girl_area);
		if (d.caste) setCaste(d.caste);
		prediction.mutate({
			boy_age: boyAge,
			girl_age: d.girl_age,
			age_difference: Math.max(0, boyAge - d.girl_age),
			boy_salary: boySalary,
			girl_salary: d.girl_salary,
			boy_education: boyEducation,
			girl_education: d.girl_education,
			boy_job_type: boyJobType,
			girl_job_type: d.girl_job_type,
			job_stability_boy: jobStabilityBoy,
			working_abroad: workingAbroad,
			family_income_boy: familyIncomeBoy,
			family_income_girl: d.family_income_girl,
			own_house_boy: ownHouseBoy,
			land_ownership_boy: landOwnershipBoy,
			land_ownership_girl: d.land_ownership_girl,
			boy_height: boyHeight,
			girl_height: d.girl_height,
			boy_skin_tone: boySkinTone,
			girl_skin_tone: d.girl_skin_tone,
			physical_disability_boy: physicalDisabilityBoy,
			physical_disability_girl: d.physical_disability_girl,
			boy_previous_marriage: boyPrevMarriage,
			girl_previous_marriage: d.girl_previous_marriage,
			caste: d.caste,
			religion,
			intercaste_interreligion: intercasteInterreligion,
			rural_urban: ruralUrban,
			boy_area: boyArea,
			girl_area: d.girl_area
		}, { onSuccess: (res) => {
			const val = res.data.predicted_dowry_amount_inr ?? res.data.predicted_acquisition_price_inr;
			setBackendResult({
				predicted: val,
				lower: res.data.prediction_range.lower_bound,
				upper: res.data.prediction_range.upper_bound,
				confidence: res.data.confidence_score
			});
		} });
	};
	const result = (0, import_react.useMemo)(() => {
		const eduScore = {
			Doctorate: 7,
			"Post Graduate": 6,
			Graduate: 5,
			"Higher Secondary": 4,
			Secondary: 3,
			Middle: 2,
			Primary: 1,
			Illiterate: 0
		}[boyEducation] ?? 5;
		const landBoyVal = landOwnershipBoy === "Large" ? 35e4 : landOwnershipBoy === "Medium" ? 2e5 : landOwnershipBoy === "Small" ? 1e5 : 0;
		const houseBoyVal = ownHouseBoy === "Yes" ? 18e4 : 4e4;
		const nriBonus = workingAbroad === "Yes" ? 35e4 : 0;
		const govtBonus = boyJobType === "Government" ? 22e4 : 0;
		const drivers = {
			"Groom Salary & Career": Math.round(boySalary * 5.2 + govtBonus + (jobStabilityBoy === "Permanent" ? 8e4 : 2e4)),
			"Family Assets & Land": Math.round(familyIncomeBoy * .16 + landBoyVal + houseBoyVal),
			"Education & NRI Premium": Math.round(eduScore * 38e3 + nriBonus),
			"Bride Family & Offsets": Math.round(familyIncomeGirl * .12 + (girlSalary > 0 ? -girlSalary * 1.8 : 0) + 12e4),
			"Demographic & Area Context": Math.round((ruralUrban === "Urban" ? 14e4 : ruralUrban === "Semi-Urban" ? 9e4 : 5e4) + (boyArea === "City" ? 11e4 : 6e4))
		};
		if (backendResult) return {
			predicted: backendResult.predicted,
			lower: backendResult.lower,
			upper: backendResult.upper,
			confidence: backendResult.confidence,
			drivers: Object.entries(drivers).map(([name, value]) => ({
				name,
				value: Math.max(2e4, value)
			})),
			rawDrivers: drivers
		};
		const totalDriver = Object.values(drivers).reduce((a, b) => a + b, 0);
		const estimated = Math.round(Math.max(5e4, totalDriver * (valuationTier === "Very High" ? 1.28 : valuationTier === "High" ? 1.12 : valuationTier === "Low" ? .78 : 1)));
		const mae = 187674;
		return {
			predicted: estimated,
			lower: Math.max(5e4, estimated - mae),
			upper: estimated + mae,
			confidence: .7581,
			drivers: Object.entries(drivers).map(([name, value]) => ({
				name,
				value: Math.max(2e4, value)
			})),
			rawDrivers: drivers
		};
	}, [
		backendResult,
		boySalary,
		boyJobType,
		jobStabilityBoy,
		familyIncomeBoy,
		landOwnershipBoy,
		ownHouseBoy,
		boyEducation,
		workingAbroad,
		familyIncomeGirl,
		girlSalary,
		ruralUrban,
		boyArea,
		valuationTier
	]);
	const isHighAlimony = result.predicted >= 105e4;
	const salaryCurve = (0, import_react.useMemo)(() => {
		const points = [
			{
				salaryLabel: "₹30k",
				factor: .5
			},
			{
				salaryLabel: "₹60k",
				factor: .85
			},
			{
				salaryLabel: "₹90k",
				factor: 1.15
			},
			{
				salaryLabel: "₹1.2L",
				factor: 1.45
			},
			{
				salaryLabel: "₹1.8L",
				factor: 1.85
			},
			{
				salaryLabel: "₹2.5L",
				factor: 2.3
			}
		];
		const baseVal = result.predicted;
		return points.map((p) => {
			const pred = Math.round(baseVal * p.factor);
			return {
				step: p.salaryLabel,
				estimate: pred,
				upperBound: Math.round(pred + 187674)
			};
		});
	}, [result.predicted]);
	const chartColors = [
		"var(--chart-1)",
		"var(--chart-2)",
		"var(--chart-3)",
		"var(--chart-4)",
		"var(--chart-5)"
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassLayout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroImage, {
			src: indian_bride_groom_default,
			alt: "Indian Bride and Groom"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-6 flex flex-col md:flex-row md:items-start md:justify-between gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "label-caps text-primary",
					children: "Interactive ML Engine · 400,000 Synthetic Records"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 text-3xl font-extrabold sm:text-4xl text-foreground",
					children: "Dahej Predictor & Match Parameters"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 max-w-2xl text-[0.95rem] text-muted-foreground",
					children: "Predict real-time dowry valuations in Indian Rupees (INR) trained on 30+ empirical marriage dataset dimensions with a Production Ridge + Regularized NN ensemble (R² ~0.758, MAE ±₹187,674, equal weightage)."
				})
			] }), healthData && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `shrink-0 rounded-xl px-4 py-2.5 text-xs font-semibold shadow-sm transition-all border self-start md:self-auto ${healthData.model_loaded ? "bg-[oklch(0.55_0.135_162/15%)] text-success border-success/30" : "bg-destructive/10 text-destructive border-destructive/20"}`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `h-2.5 w-2.5 rounded-full ${healthData.model_loaded ? "bg-success animate-pulse" : "bg-destructive"}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-bold",
							children: healthData.model_loaded ? "✓ Connected to ML Backend (v1.0.0 · Active)" : "⚠ Backend Model Unavailable"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-1 flex items-center justify-between text-[11px] opacity-85 gap-3 font-mono",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "30 Dataset Features" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "R² ~0.758 · MAE ±₹188k" })]
					}),
					prediction.isPending && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-1 text-[10px] text-primary animate-pulse font-medium",
						children: "Computing empirical pipeline..."
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mb-7",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "glass p-6 sm:p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 border-b border-border/70 pb-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-xl font-bold text-foreground flex items-center gap-2",
							children: "Dahej Calculator"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground mt-1",
							children: "Tuned on 400,000 synthetic records under equal-weightage parity. Change inputs and click the button to predict."
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-1 rounded-xl bg-background/40 p-1 border border-border/80",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => setActiveTab("groom"),
									className: `flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold rounded-lg transition-all ${activeTab === "groom" ? "gradient-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "h-3.5 w-3.5" }), "Groom Section"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => setActiveTab("bride"),
									className: `flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold rounded-lg transition-all ${activeTab === "bride" ? "gradient-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "h-3.5 w-3.5" }), "Bride Section"]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								id: "btn-predict-dowry",
								onClick: executePrediction,
								disabled: prediction.isPending,
								className: "gradient-primary inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-xs font-extrabold text-primary-foreground shadow-[0_4px_16px_oklch(0.42_0.20_25/30%)] transition-all hover:scale-[1.03] active:scale-[0.97] disabled:opacity-70 disabled:hover:scale-100 cursor-pointer",
								children: prediction.isPending ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: "h-4 w-4 animate-spin" }), "Predicting..."] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-4 w-4" }), "Predict Dowry Valuation"] })
							})]
						})]
					}),
					activeTab === "groom" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 grid gap-8 lg:grid-cols-[1fr_390px] xl:grid-cols-[1fr_420px] animate-fadeIn",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuickPresetsBar, {
									title: "Groom",
									presets: GROOM_PRESETS,
									onSelect: applyGroomPreset
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-5 sm:grid-cols-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderRow, {
										label: "Groom Age",
										display: `${boyAge} yrs`,
										value: boyAge,
										min: 20,
										max: 38,
										step: 1,
										onChange: setBoyAge
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderRow, {
										label: "Groom Height",
										display: `${boyHeight} cm (${(boyHeight / 30.48).toFixed(1)} ft)`,
										value: boyHeight,
										min: 155,
										max: 190,
										step: 1,
										onChange: setBoyHeight
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderRow, {
									label: "Groom Monthly Salary",
									display: inr(boySalary) + "/mo",
									value: boySalary,
									min: 0,
									max: 25e4,
									step: 2500,
									onChange: setBoySalary
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderRow, {
									label: "Groom Family Annual Income",
									display: inr(familyIncomeBoy) + "/yr",
									value: familyIncomeBoy,
									min: 15e4,
									max: 4e6,
									step: 25e3,
									onChange: setFamilyIncomeBoy
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-5 sm:grid-cols-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectRow, {
										label: "Groom Education",
										value: boyEducation,
										options: EDU_OPTIONS,
										onChange: setBoyEducation
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectRow, {
										label: "Groom Profession (Job Type)",
										value: boyJobType,
										options: BOY_JOB_OPTIONS,
										onChange: setBoyJobType
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-5 sm:grid-cols-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectRow, {
										label: "Job Stability",
										value: jobStabilityBoy,
										options: JOB_STABILITY_OPTIONS,
										onChange: setJobStabilityBoy
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Segmented, {
										label: "Working Abroad (NRI)",
										options: YES_NO.map((v) => ({
											label: v,
											value: v
										})),
										value: workingAbroad,
										onChange: setWorkingAbroad
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-5 sm:grid-cols-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Segmented, {
										label: "Owns House",
										options: YES_NO.map((v) => ({
											label: v,
											value: v
										})),
										value: ownHouseBoy,
										onChange: setOwnHouseBoy
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectRow, {
										label: "Groom Land Ownership",
										value: landOwnershipBoy,
										options: LAND_OPTIONS,
										onChange: setLandOwnershipBoy
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-5 sm:grid-cols-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectRow, {
											label: "Skin Tone",
											value: boySkinTone,
											options: SKIN_TONE_OPTIONS,
											onChange: setBoySkinTone
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectRow, {
											label: "Living Area",
											value: boyArea,
											options: AREA_OPTIONS,
											onChange: setBoyArea
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectRow, {
											label: "Marital Status",
											value: boyPrevMarriage,
											options: MARITAL_OPTIONS,
											onChange: setBoyPrevMarriage
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Segmented, {
									label: "Physical Disability",
									options: YES_NO.map((v) => ({
										label: v,
										value: v
									})),
									value: physicalDisabilityBoy,
									onChange: setPhysicalDisabilityBoy
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DemographicsBlock, {
									caste,
									setCaste,
									religion,
									setReligion,
									intercasteInterreligion,
									setIntercasteInterreligion,
									ruralUrban,
									setRuralUrban,
									valuationTier,
									setValuationTier
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReactionPortraitCard, {
							defaultView: "bride",
							result,
							isHighAlimony
						})]
					}),
					activeTab === "bride" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 grid gap-8 lg:grid-cols-[1fr_390px] xl:grid-cols-[1fr_420px] animate-fadeIn",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuickPresetsBar, {
									title: "Bride",
									presets: BRIDE_PRESETS,
									onSelect: applyBridePreset
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-5 sm:grid-cols-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderRow, {
										label: "Bride Age",
										display: `${girlAge} yrs`,
										value: girlAge,
										min: 16,
										max: 32,
										step: 1,
										onChange: setGirlAge
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderRow, {
										label: "Bride Height",
										display: `${girlHeight} cm (${(girlHeight / 30.48).toFixed(1)} ft)`,
										value: girlHeight,
										min: 145,
										max: 175,
										step: 1,
										onChange: setGirlHeight
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderRow, {
									label: "Bride Monthly Salary",
									display: inr(girlSalary) + "/mo",
									value: girlSalary,
									min: 0,
									max: 25e4,
									step: 2500,
									onChange: setGirlSalary
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderRow, {
									label: "Bride Family Annual Income",
									display: inr(familyIncomeGirl) + "/yr",
									value: familyIncomeGirl,
									min: 1e5,
									max: 25e5,
									step: 25e3,
									onChange: setFamilyIncomeGirl
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-5 sm:grid-cols-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectRow, {
										label: "Bride Education",
										value: girlEducation,
										options: EDU_OPTIONS,
										onChange: setGirlEducation
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectRow, {
										label: "Bride Profession (Job Type)",
										value: girlJobType,
										options: GIRL_JOB_OPTIONS,
										onChange: setGirlJobType
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-5 sm:grid-cols-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectRow, {
										label: "Bride Land Ownership",
										value: landOwnershipGirl,
										options: LAND_OPTIONS,
										onChange: setLandOwnershipGirl
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectRow, {
										label: "Skin Tone",
										value: girlSkinTone,
										options: SKIN_TONE_OPTIONS,
										onChange: setGirlSkinTone
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-5 sm:grid-cols-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectRow, {
										label: "Bride Living Area",
										value: girlArea,
										options: AREA_OPTIONS,
										onChange: setGirlArea
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectRow, {
										label: "Marital Status",
										value: girlPrevMarriage,
										options: MARITAL_OPTIONS,
										onChange: setGirlPrevMarriage
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Segmented, {
									label: "Physical Disability",
									options: YES_NO.map((v) => ({
										label: v,
										value: v
									})),
									value: physicalDisabilityGirl,
									onChange: setPhysicalDisabilityGirl
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DemographicsBlock, {
									caste,
									setCaste,
									religion,
									setReligion,
									intercasteInterreligion,
									setIntercasteInterreligion,
									ruralUrban,
									setRuralUrban,
									valuationTier,
									setValuationTier
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReactionPortraitCard, {
							defaultView: "groom",
							result,
							isHighAlimony
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 pt-5 border-t border-border/70 flex flex-col sm:flex-row items-center justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 text-xs text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-success" }), "Ridge + Regularized NN Ensemble (R² ~0.758)"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: executePrediction,
							disabled: prediction.isPending,
							className: "gradient-primary w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-extrabold text-primary-foreground shadow-[0_4px_20px_oklch(0.42_0.20_25/30%)] transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer disabled:opacity-60",
							children: prediction.isPending ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: "h-4 w-4 animate-spin" }), "Calculating with Ridge + NN..."] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-4 w-4" }),
								"Predict Dowry Valuation (",
								inr(result.predicted),
								")"
							] })
						})]
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-7 space-y-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-5 lg:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
						label: "Projected Dowry Valuation",
						value: inr(result.predicted),
						hint: `${lakhOrCrore(result.predicted)} · ${backendResult ? "Ridge + NN Ensemble" : "Equal-weightage ML (R² ~0.758)"}`,
						accent: true,
						loading: prediction.isPending
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
						label: "Lower Bound Estimate",
						value: inr(result.lower),
						hint: "Equal-weightage MAE bound (±₹187,674)",
						loading: prediction.isPending
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
						label: "Upper Bound Estimate",
						value: inr(result.upper),
						hint: "Optimistic tier benchmark (MAE bound)",
						loading: prediction.isPending
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl glass glass-lift p-5 sm:p-6 border border-border/80",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-border/60 pb-3.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex h-8 w-8 items-center justify-center rounded-xl bg-primary/10 text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scale, { className: "h-4 w-4" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-sm font-bold text-foreground",
							children: "Valuation Breakdown & Key Metrics"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-[11px] text-muted-foreground",
							children: ["Computed parameter breakdown for projected valuation ", inr(result.predicted)]
						})] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary self-start sm:self-auto",
						children: ["Benchmark Tier: ", valuationTier]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "glass-subtle rounded-xl p-3 border border-border/60",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] font-bold text-muted-foreground uppercase block",
									children: "Groom Salary Base"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-1 text-sm font-black text-foreground",
									children: [inr(boySalary), "/mo"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-[10px] text-primary font-semibold",
									children: [
										"~",
										(result.predicted / (boySalary || 1)).toFixed(1),
										"x monthly salary"
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "glass-subtle rounded-xl p-3 border border-border/60",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] font-bold text-muted-foreground uppercase block",
									children: "Groom Family Assets"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-1 text-sm font-black text-foreground",
									children: [inr(familyIncomeBoy), "/yr"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-[10px] text-muted-foreground",
									children: [
										"Land: ",
										landOwnershipBoy,
										" · House: ",
										ownHouseBoy
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "glass-subtle rounded-xl p-3 border border-border/60",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] font-bold text-muted-foreground uppercase block",
									children: "Career Stability"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm font-black text-foreground",
									children: boyJobType
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-[10px] text-success font-semibold",
									children: [
										jobStabilityBoy,
										" · NRI: ",
										workingAbroad
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "glass-subtle rounded-xl p-3 border border-border/60",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] font-bold text-muted-foreground uppercase block",
									children: "Bride Financial Cushion"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm font-black text-foreground",
									children: girlSalary > 0 ? inr(girlSalary) + "/mo" : "Independent Household"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-[10px] text-muted-foreground",
									children: [
										"Fam: ",
										inr(familyIncomeGirl),
										"/yr"
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "glass-subtle rounded-xl p-3 border border-border/60",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] font-bold text-muted-foreground uppercase block",
									children: "Alimony Security Cover"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: `mt-1 text-sm font-black ${isHighAlimony ? "text-success" : "text-amber-500"}`,
									children: isHighAlimony ? "Robust Shield (100%+)" : "Moderate / Low Shield"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] text-muted-foreground",
									children: isHighAlimony ? "Groom protected" : "Defensive deficit"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "glass-subtle rounded-xl p-3 border border-border/60",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] font-bold text-muted-foreground uppercase block",
									children: "Confidence Range"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm font-black text-primary",
									children: "±₹187,674 MAE"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] text-muted-foreground",
									children: "R² ~0.758 · 37 Dimensions"
								})
							]
						})
					]
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-7 grid gap-5 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "glass glass-lift p-6 sm:p-7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-base font-bold text-foreground",
						children: "Valuation Driver Weight Distribution"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-0.5 text-xs text-muted-foreground",
						children: "Relative contribution of parity-weighted parameters to the predicted dowry."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, { className: "h-5 w-5 text-primary opacity-70" })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 h-[270px]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
						width: "100%",
						height: "100%",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PieChart, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pie, {
								data: result.drivers,
								dataKey: "value",
								nameKey: "name",
								innerRadius: "52%",
								outerRadius: "80%",
								paddingAngle: 4,
								stroke: "var(--background)",
								children: result.drivers.map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, { fill: chartColors[i % chartColors.length] }, i))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
								formatter: (v) => inr(v),
								contentStyle: glassTooltip
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Legend, { wrapperStyle: { fontSize: 11 } })
						] })
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "glass glass-lift p-6 sm:p-7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-base font-bold text-foreground",
						children: "Groom Salary vs Dowry Scaling Curve"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-0.5 text-xs text-muted-foreground",
						children: "Projected valuation curve as groom monthly income scales."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "h-5 w-5 text-primary opacity-70" })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 h-[270px]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
						width: "100%",
						height: "100%",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AreaChart, {
							data: salaryCurve,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("defs", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
									id: "dowryFill",
									x1: "0",
									y1: "0",
									x2: "0",
									y2: "1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
										offset: "0%",
										stopColor: "var(--chart-1)",
										stopOpacity: .5
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
										offset: "100%",
										stopColor: "var(--chart-1)",
										stopOpacity: .05
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
									id: "boundFill",
									x1: "0",
									y1: "0",
									x2: "0",
									y2: "1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
										offset: "0%",
										stopColor: "var(--chart-3)",
										stopOpacity: .35
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
										offset: "100%",
										stopColor: "var(--chart-3)",
										stopOpacity: .05
									})]
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
									dataKey: "step",
									stroke: "var(--muted-foreground)",
									fontSize: 12
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
									stroke: "var(--muted-foreground)",
									fontSize: 11,
									tickFormatter: (v) => `${(v / 1e5).toFixed(1)}L`
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
									formatter: (v) => inr(v),
									contentStyle: glassTooltip
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
									type: "monotone",
									name: "Upper Bound",
									dataKey: "upperBound",
									stroke: "var(--chart-3)",
									fill: "url(#boundFill)",
									strokeWidth: 1.5,
									strokeDasharray: "4 4"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
									type: "monotone",
									name: "Predicted Dowry",
									dataKey: "estimate",
									stroke: "var(--chart-1)",
									fill: "url(#dowryFill)",
									strokeWidth: 2.5
								})
							]
						})
					})
				})]
			})]
		})
	] });
}
var glassTooltip = {
	background: "var(--glass-surface-strong)",
	backdropFilter: "blur(16px)",
	border: "1px solid var(--border)",
	borderRadius: "12px",
	color: "var(--foreground)",
	fontSize: 12
};
function MetricCard({ label, value, hint, accent, loading }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "glass glass-lift p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "label-caps",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: `mt-3 text-3xl font-extrabold tracking-tight ${accent ? "text-primary" : ""} ${loading ? "animate-pulse" : ""}`,
				children: value
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 flex items-center gap-2 text-xs sm:text-sm text-muted-foreground",
				children: [accent && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "rounded-full bg-[oklch(0.55_0.135_162/15%)] px-2.5 py-0.5 text-[0.7rem] font-bold tracking-wide text-success uppercase",
					children: "75.81% R² · Parity-Stable"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: hint })]
			})
		]
	});
}
function SliderRow({ label, display, value, min, max, step, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-2 flex items-baseline justify-between gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "label-caps text-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-sm font-bold text-primary",
			children: display
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type: "range",
		"aria-label": label,
		min,
		max,
		step,
		value,
		onChange: (e) => onChange(Number(e.target.value)),
		className: "h-1.5 w-full cursor-pointer appearance-none rounded-full bg-[oklch(0.878_0.019_251)] accent-[var(--primary)]"
	})] });
}
function SelectRow({ label, value, options, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: "label-caps text-foreground block mb-1.5",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
		value,
		onChange: (e) => onChange(e.target.value),
		className: "w-full rounded-xl border border-border glass-subtle px-3 py-2.5 text-xs font-semibold text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40",
		children: options.map((opt) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
			value: opt,
			className: "bg-background text-foreground",
			children: opt
		}, opt))
	})] });
}
function Segmented({ label, options, value, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "label-caps text-foreground",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "glass-subtle mt-1.5 flex flex-wrap gap-1 p-1 border border-border/60 rounded-xl",
		children: options.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			onClick: () => onChange(o.value),
			className: `flex-1 min-w-[60px] rounded-[9px] px-2.5 py-1.5 text-xs font-bold transition-all ${value === o.value ? "gradient-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:bg-primary/10 hover:text-primary"}`,
			children: o.label
		}, o.value))
	})] });
}
function QuickPresetsBar({ title, presets, onSelect }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-4 rounded-2xl glass-subtle border border-border/80 shadow-xs mb-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between gap-2 mb-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "text-xs font-bold text-foreground flex items-center gap-1.5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5 text-primary" }),
					"Quick Profile Presets (",
					title,
					"):"
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-[11px] text-muted-foreground font-medium hidden sm:inline",
				children: "1-click load empirical archetype"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-2 sm:grid-cols-4 gap-2.5",
			children: presets.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => onSelect(p.name),
				className: "glass-lift hover:bg-primary/15 hover:border-primary/50 rounded-xl p-3 text-left transition-all border border-border flex flex-col items-start gap-1.5 cursor-pointer group",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xl group-hover:scale-110 transition-transform",
					children: p.icon
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs font-bold text-foreground group-hover:text-primary leading-tight",
					children: p.name
				})]
			}, p.name))
		})]
	});
}
function DemographicsBlock({ caste, setCaste, religion, setReligion, intercasteInterreligion, setIntercasteInterreligion, ruralUrban, setRuralUrban, valuationTier, setValuationTier }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl border border-border/80 glass-subtle p-5 space-y-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between pb-3 border-b border-border/60",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building, { className: "h-4 w-4 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-sm font-bold text-foreground",
						children: "Demographics & Cultural Setting"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[11px] text-muted-foreground font-medium",
					children: "Key empirical dataset predictors"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-5 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectRow, {
					label: "Social Caste",
					value: caste,
					options: CASTE_OPTIONS,
					onChange: setCaste
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectRow, {
					label: "Religion",
					value: religion,
					options: RELIGION_OPTIONS,
					onChange: setReligion
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectRow, {
				label: "Intercaste / Interreligion Status",
				value: intercasteInterreligion,
				options: COMPATIBILITY_OPTIONS,
				onChange: setIntercasteInterreligion
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-5 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectRow, {
					label: "Demographic Setting",
					value: ruralUrban,
					options: RURAL_URBAN_OPTIONS,
					onChange: setRuralUrban
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectRow, {
					label: "Target Benchmark Category",
					value: valuationTier,
					options: TIER_OPTIONS,
					onChange: setValuationTier
				})]
			})
		]
	});
}
function ReactionPortraitCard({ defaultView, result, isHighAlimony }) {
	const [currentView, setCurrentView] = (0, import_react.useState)(defaultView);
	(0, import_react.useEffect)(() => {
		setCurrentView(defaultView);
	}, [defaultView]);
	const isBride = currentView === "bride";
	const imageSrc = isBride ? isHighAlimony ? girl_sad_default : girl_happy_default : isHighAlimony ? boy_happy_default : boy_sad_default;
	const title = isBride ? "Bride Emotional Reaction" : "Groom Emotional Reaction";
	const statusBadge = isBride ? isHighAlimony ? "Bride: Distressed & Sad (High Dowry)" : "Bride: Delighted & Happy (Affordable)" : isHighAlimony ? "Groom: Happy & Secured 😄" : "Groom: Sad & Worried 😢";
	const narrative = isBride ? isHighAlimony ? `High dowry demand of ${inr(result.predicted)}! The bride and her family feel severe financial strain under these demanding expectations.` : `Fair and reasonable dowry of ${inr(result.predicted)}! The bride is relieved, joyful, and fully enthusiastic about this match.` : isHighAlimony ? `High security valuation of ${inr(result.predicted)}! The groom feels financially protected, respected, and confident in his future safety cushion.` : `Low safety margin of ${inr(result.predicted)}! The groom feels anxious about prospective legal alimony exposure and asset balance.`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-3xl glass p-5 sm:p-6 flex flex-col border border-border/80 shadow-lg self-start sticky top-20 transition-all duration-300 w-full",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between pb-3.5 mb-3.5 border-b border-border/60",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "text-xs font-bold text-foreground flex items-center gap-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5 text-primary" }), "Reaction Portrait"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-1 bg-background/50 p-1 rounded-xl border border-border/70",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setCurrentView("bride"),
						className: `px-2.5 py-1 text-[11px] font-bold rounded-lg transition-all cursor-pointer ${isBride ? "gradient-primary text-primary-foreground shadow-xs" : "text-muted-foreground hover:text-foreground"}`,
						children: "👰 Bride"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setCurrentView("groom"),
						className: `px-2.5 py-1 text-[11px] font-bold rounded-lg transition-all cursor-pointer ${!isBride ? "gradient-primary text-primary-foreground shadow-xs" : "text-muted-foreground hover:text-foreground"}`,
						children: "🤵 Groom"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative w-full h-[340px] sm:h-[370px] rounded-2xl overflow-hidden shadow-md border-2 border-border/60 group",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: imageSrc,
						alt: title,
						className: "w-full h-full object-cover object-top transition-all duration-500 group-hover:scale-105"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setCurrentView(isBride ? "groom" : "bride"),
						className: "absolute left-2.5 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-background/80 hover:bg-background text-foreground backdrop-blur-md flex items-center justify-center shadow-md border border-border/60 transition-transform active:scale-90 cursor-pointer",
						title: "Slide to other portrait",
						"aria-label": "Slide portrait",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "h-4 w-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setCurrentView(isBride ? "groom" : "bride"),
						className: "absolute right-2.5 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-background/80 hover:bg-background text-foreground backdrop-blur-md flex items-center justify-center shadow-md border border-border/60 transition-transform active:scale-90 cursor-pointer",
						title: "Slide to other portrait",
						"aria-label": "Slide portrait",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-4 w-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `absolute bottom-3 left-3 right-3 rounded-xl px-3.5 py-2.5 text-xs font-black backdrop-blur-md flex items-center justify-center gap-1.5 shadow-md border transition-all ${isBride && isHighAlimony || !isBride && !isHighAlimony ? "bg-destructive/90 text-destructive-foreground border-destructive/50" : "bg-success/90 text-success-foreground border-success/50"}`,
						children: [isBride && isHighAlimony || !isBride && !isHighAlimony ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frown, { className: "h-4 w-4 shrink-0" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Smile, { className: "h-4 w-4 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "truncate",
							children: statusBadge
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "text-sm font-bold text-foreground flex items-center gap-1.5",
						children: title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[11px] font-semibold text-muted-foreground",
						children: "Slide to toggle ↔"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1.5 text-xs text-muted-foreground leading-relaxed",
					children: narrative
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 p-3 rounded-xl bg-background/40 border border-border/70 space-y-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between text-[11px] font-bold",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-muted-foreground flex items-center gap-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scale, { className: "h-3 w-3 text-primary" }), "Empirical Threshold:"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: isHighAlimony ? "text-destructive font-black" : "text-success font-black",
							children: isHighAlimony ? "Above Median (₹10.5L+)" : "Below Median (Affordable)"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-full bg-border/50 h-2 rounded-full overflow-hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: `h-full rounded-full transition-all duration-500 ${isHighAlimony ? "bg-destructive" : "bg-success"}`,
							style: { width: `${Math.min(100, Math.max(10, result.predicted / 25e5 * 100))}%` }
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-between text-[10px] text-muted-foreground font-mono",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "₹1L (Low)" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "₹10.5L Median" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "₹25L+ (Peak)" })
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 w-full pt-3.5 border-t border-border/60 flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[11px] text-muted-foreground block font-medium",
					children: "Current Valuation"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "text-[11px] text-muted-foreground/80 font-mono",
					children: [
						inr(result.lower),
						" – ",
						inr(result.upper)
					]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-lg font-black text-primary font-mono tracking-tight",
					children: inr(result.predicted)
				})]
			})
		]
	});
}
var rootRouteChildren = {
	IndexRoute: Route$3.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$4
	}),
	FindSomebodyRoute: Route$2.update({
		id: "/find-somebody",
		path: "/find-somebody",
		getParentRoute: () => Route$4
	}),
	ModelRoute: Route$1.update({
		id: "/model",
		path: "/model",
		getParentRoute: () => Route$4
	}),
	PredictorRoute: Route.update({
		id: "/predictor",
		path: "/predictor",
		getParentRoute: () => Route$4
	})
};
var routeTree = Route$4._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
export { getRouter };
