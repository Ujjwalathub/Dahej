globalThis.__nitro_main__ = import.meta.url;
import { i as HTTPError, n as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
import { t as FastResponse } from "./_libs/srvx.mjs";
// #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
// #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/assets/1111-0ti_djOF.jpg": {
		"type": "image/jpeg",
		"etag": "\"abbf-mR/80YCTzSd+G0pXNQTfPT7KOdU\"",
		"mtime": "2026-10-29T14:05:48.621Z",
		"size": 43967,
		"path": "../public/assets/1111-0ti_djOF.jpg"
	},
	"/assets/boy_aman_singh-C5GjHB2-.jpg": {
		"type": "image/jpeg",
		"etag": "\"a913a-p1t2P7N4/DkTdhPQyE6BcOGtOjA\"",
		"mtime": "2026-10-29T14:05:48.625Z",
		"size": 692538,
		"path": "../public/assets/boy_aman_singh-C5GjHB2-.jpg"
	},
	"/assets/boy_aditya_verma-BUxqEdu9.jpg": {
		"type": "image/jpeg",
		"etag": "\"a89fe-EzLU4T4V6jQM+taGVALsm1CLJsg\"",
		"mtime": "2026-10-29T14:05:48.625Z",
		"size": 690686,
		"path": "../public/assets/boy_aditya_verma-BUxqEdu9.jpg"
	},
	"/assets/boy_arjun_sharma-97WtBCKn.jpg": {
		"type": "image/jpeg",
		"etag": "\"a4e7a-Ul4pHNN1PSx0u6yUMpb8dwc1NYo\"",
		"mtime": "2026-10-29T14:05:48.626Z",
		"size": 675450,
		"path": "../public/assets/boy_arjun_sharma-97WtBCKn.jpg"
	},
	"/assets/boy_sad-DqJcWKls.jpg": {
		"type": "image/jpeg",
		"etag": "\"bcbbe-+IimgRRhN+vOeTim+M0DOelQlLw\"",
		"mtime": "2026-10-29T14:05:48.630Z",
		"size": 773054,
		"path": "../public/assets/boy_sad-DqJcWKls.jpg"
	},
	"/assets/boy_happy-BiLS1N1H.jpg": {
		"type": "image/jpeg",
		"etag": "\"d1a80-4L50YDSVqDwfPkg7D4OeU9STdlA\"",
		"mtime": "2026-10-29T14:05:48.626Z",
		"size": 858752,
		"path": "../public/assets/boy_happy-BiLS1N1H.jpg"
	},
	"/assets/boy_kabir_patel-BwcOlBEX.jpg": {
		"type": "image/jpeg",
		"etag": "\"b676f-yePSfRnNa8nMbtPGmPm0p5HhVR8\"",
		"mtime": "2026-10-29T14:05:48.628Z",
		"size": 747375,
		"path": "../public/assets/boy_kabir_patel-BwcOlBEX.jpg"
	},
	"/assets/boy_rohan_malhotra-DNBwV5fD.jpg": {
		"type": "image/jpeg",
		"etag": "\"9a78d-Iq51LkdgmTeC4q4nTZHj15+onHg\"",
		"mtime": "2026-10-29T14:05:48.630Z",
		"size": 632717,
		"path": "../public/assets/boy_rohan_malhotra-DNBwV5fD.jpg"
	},
	"/assets/boy_vikramaditya_singhania-DKY8-x4F.jpg": {
		"type": "image/jpeg",
		"etag": "\"ab0e2-2Z1UWdvpuF2oH+S1kImHePqfly8\"",
		"mtime": "2026-10-29T14:05:48.632Z",
		"size": 700642,
		"path": "../public/assets/boy_vikramaditya_singhania-DKY8-x4F.jpg"
	},
	"/assets/girl_happy-Bkt34BzN.jpg": {
		"type": "image/jpeg",
		"etag": "\"dcf61-0ikoFqM0tR39N1IyO0yhGiFak7w\"",
		"mtime": "2026-10-29T14:05:48.640Z",
		"size": 905057,
		"path": "../public/assets/girl_happy-Bkt34BzN.jpg"
	},
	"/assets/girl_sad-Cza0DjJ_.jpg": {
		"type": "image/jpeg",
		"etag": "\"cbc0b-N7isWDt9A2IjZeEY13oviBN0578\"",
		"mtime": "2026-10-29T14:05:48.646Z",
		"size": 834571,
		"path": "../public/assets/girl_sad-Cza0DjJ_.jpg"
	},
	"/assets/index-6a8HOXFG.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ec265-voav6F62j41T496Xxl4b9BoBO8g\"",
		"mtime": "2026-10-29T14:05:48.621Z",
		"size": 967269,
		"path": "../public/assets/index-6a8HOXFG.js"
	},
	"/assets/indian-bride-groom-VwRk2ilA.jpg": {
		"type": "image/jpeg",
		"etag": "\"f6aa1-gu2TmJWj7GmzNmSH709dRKHfQIU\"",
		"mtime": "2026-10-29T14:05:48.651Z",
		"size": 1010337,
		"path": "../public/assets/indian-bride-groom-VwRk2ilA.jpg"
	},
	"/assets/girl_athleisure_bedroom-BffjFYNv.png": {
		"type": "image/png",
		"etag": "\"1e054b-I/vpb+V9Kk9JpPQn36gAokG912M\"",
		"mtime": "2026-10-29T14:05:48.634Z",
		"size": 1967435,
		"path": "../public/assets/girl_athleisure_bedroom-BffjFYNv.png"
	},
	"/assets/girl_athletic_neutral-BpHogJQn.png": {
		"type": "image/png",
		"etag": "\"1e7bca-4h524GidkWkK2zm7r+tnX6jO7ac\"",
		"mtime": "2026-10-29T14:05:48.635Z",
		"size": 1997770,
		"path": "../public/assets/girl_athletic_neutral-BpHogJQn.png"
	},
	"/assets/girl_sporty_cream_wall-BQlXQPj4.png": {
		"type": "image/png",
		"etag": "\"1ea6af-OoV2zqIdzWk83Yy2bjX7ZidUH0c\"",
		"mtime": "2026-10-29T14:05:48.646Z",
		"size": 2008751,
		"path": "../public/assets/girl_sporty_cream_wall-BQlXQPj4.png"
	},
	"/assets/girl_athletic_track-DoSWeJbJ.png": {
		"type": "image/png",
		"etag": "\"231fa8-c2mlObUzcodnkksswGJ2pXMW0D0\"",
		"mtime": "2026-10-29T14:05:48.635Z",
		"size": 2301864,
		"path": "../public/assets/girl_athletic_track-DoSWeJbJ.png"
	},
	"/assets/girl_oct4_portrait-DXsk8H1w.png": {
		"type": "image/png",
		"etag": "\"247ffb-gHqrgymm3G3cNht6AB4AM4xYNvE\"",
		"mtime": "2026-10-29T14:05:48.640Z",
		"size": 2392059,
		"path": "../public/assets/girl_oct4_portrait-DXsk8H1w.png"
	},
	"/assets/girl_rural_canal-Btg69pcy.png": {
		"type": "image/png",
		"etag": "\"202feb-Drak38vP6slJbua0bCD85WSCeIw\"",
		"mtime": "2026-10-29T14:05:48.644Z",
		"size": 2109419,
		"path": "../public/assets/girl_rural_canal-Btg69pcy.png"
	},
	"/assets/girl_bedroom_red_denim-B08S9t1R.png": {
		"type": "image/png",
		"etag": "\"27f6a9-daES+MnP0ly0P9iV1TKMN+FBem4\"",
		"mtime": "2026-10-29T14:05:48.638Z",
		"size": 2619049,
		"path": "../public/assets/girl_bedroom_red_denim-B08S9t1R.png"
	},
	"/assets/girl_cozy_living_room-DRmDspYV.png": {
		"type": "image/png",
		"etag": "\"24aeb4-rRMBu6Vj9ttKJ86JyuCz8Pw7AVg\"",
		"mtime": "2026-10-29T14:05:48.638Z",
		"size": 2404020,
		"path": "../public/assets/girl_cozy_living_room-DRmDspYV.png"
	},
	"/assets/girl_oct5_portrait-B2TrNfe-.png": {
		"type": "image/png",
		"etag": "\"21a5b4-2fotu+gMNiPmQc/Ihv8zUJlfFoc\"",
		"mtime": "2026-10-29T14:05:48.644Z",
		"size": 2205108,
		"path": "../public/assets/girl_oct5_portrait-B2TrNfe-.png"
	},
	"/assets/styles-DlmEI2-E.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"19696-6oXAhH6gSrJoDzAGlh0Q++ZDVMw\"",
		"mtime": "2026-10-29T14:05:48.651Z",
		"size": 104086,
		"path": "../public/assets/styles-DlmEI2-E.css"
	},
	"/assets/girl_yellow_black-DBSkszhM.png": {
		"type": "image/png",
		"etag": "\"2044f5-azQTyj5CY9UIvgk5pccd+F87qwk\"",
		"mtime": "2026-10-29T14:05:48.650Z",
		"size": 2114805,
		"path": "../public/assets/girl_yellow_black-DBSkszhM.png"
	},
	"/assets/girl_nielit_campus-B9d-9VE_.png": {
		"type": "image/png",
		"etag": "\"2934c3-80LctEAyiF2wyXibg1LAUnBHOE4\"",
		"mtime": "2026-10-29T14:05:48.640Z",
		"size": 2700483,
		"path": "../public/assets/girl_nielit_campus-B9d-9VE_.png"
	},
	"/assets/girl_sunset_shoreline-Cmy2C2Zs.png": {
		"type": "image/png",
		"etag": "\"2424e7-kWj2BARSMs+PrdZUm8lx0U9DXGQ\"",
		"mtime": "2026-10-29T14:05:48.648Z",
		"size": 2368743,
		"path": "../public/assets/girl_sunset_shoreline-Cmy2C2Zs.png"
	},
	"/assets/indian-wedding-hero-IYmWfBLA.jpg": {
		"type": "image/jpeg",
		"etag": "\"103649-vboKkFVfi+wRkw1j/Er5dZrGAqw\"",
		"mtime": "2026-10-29T14:05:48.651Z",
		"size": 1062473,
		"path": "../public/assets/indian-wedding-hero-IYmWfBLA.jpg"
	}
};
// #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
// node_modules/.pnpm/nitro@3.0.260603-beta_jiti@_88ddabd19c591a4cd8e7a3b5f878a4ac/node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
// #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_YYYFsU = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_YYYFsU
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
// node_modules/.pnpm/nitro@3.0.260603-beta_jiti@_88ddabd19c591a4cd8e7a3b5f878a4ac/node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
// #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
// #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
// node_modules/.pnpm/nitro@3.0.260603-beta_jiti@_88ddabd19c591a4cd8e7a3b5f878a4ac/node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
// node_modules/.pnpm/nitro@3.0.260603-beta_jiti@_88ddabd19c591a4cd8e7a3b5f878a4ac/node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
// node_modules/.pnpm/nitro@3.0.260603-beta_jiti@_88ddabd19c591a4cd8e7a3b5f878a4ac/node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
export { cloudflare_module_default as default };
