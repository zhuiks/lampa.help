import svelteFluent from '@nubolab-ffwd/svelte-fluent/rollup-plugin';
import netlify from '@sveltejs/adapter-netlify';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: netlify(),
		prerender: {
			enabled: false
		},
		ssr: false,
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		vite: {
      plugins: [svelteFluent()],
    }
	}
};

export default config;
