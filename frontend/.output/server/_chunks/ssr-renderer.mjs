import { i as HTTPError, r as toRequest } from "../_libs/h3+rou3+srvx.mjs";
// node_modules/.pnpm/nitro@3.0.260603-beta_jiti@_88ddabd19c591a4cd8e7a3b5f878a4ac/node_modules/nitro/dist/runtime/vite.mjs
function fetchViteEnv(viteEnvName, input, init) {
	const viteEnv = (globalThis.__nitro_vite_envs__ || {})[viteEnvName];
	if (!viteEnv) throw HTTPError.status(404);
	return Promise.resolve(viteEnv.fetch(toRequest(input, init)));
}
// node_modules/.pnpm/nitro@3.0.260603-beta_jiti@_88ddabd19c591a4cd8e7a3b5f878a4ac/node_modules/nitro/dist/runtime/internal/vite/ssr-renderer.mjs
/** @param {{ req: Request }} HTTPEvent */
function ssrRenderer({ req }) {
	return fetchViteEnv("ssr", req);
}
export { ssrRenderer as default };
