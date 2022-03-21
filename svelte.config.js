import svelteFluent from '@nubolab-ffwd/svelte-fluent/rollup-plugin';
import adapter from "@sveltejs/adapter-static";

// const dev = process.env.NODE_ENV === "development";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			// fallback: "docs/index.html",
			pages: "docs",
			assets: "docs",
			fallback: "index.html"
		}),
		// paths: {
		// 	base: dev ? "" : "/little-lamp",
		// },
		// prerender: {
		// 	default: true
		// },
		// ssr: false,
		// hydrate the <div id="svelte"> element in src/app.html
		vite: {
			plugins: [svelteFluent()],
		}
	}
};

export default config;
