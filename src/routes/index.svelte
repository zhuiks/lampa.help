<script context="module">
	import { locale } from '$lib/store.js';

	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ params, fetch }) {
		const lang = params.lang || 'en';
		locale.set(lang);

		return {
			status: 301,
			redirect: `/${lang}`
		};
	}
</script>
