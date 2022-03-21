import svelteFluent from '@nubolab-ffwd/svelte-fluent/rollup-plugin';
import adapter from "@sveltejs/adapter-static";

// const dev = process.env.NODE_ENV === "development";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: "docs",
			assets: "docs",
			fallback: "index.html"
		}),
		// paths: {
		// 	base: dev ? "" : "/little-lamp",
		// },
		// prerender: {
		// 	enabled: false
		// },
		// ssr: false,
		vite: {
			plugins: [svelteFluent()],
		}
	}
};

export default config;
