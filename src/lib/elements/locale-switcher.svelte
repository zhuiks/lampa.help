<script>
	import { locale } from '$lib/store.js';
	import WiredCombo from '$lib/wired/wired-combo.svelte';
	import { page } from '$app/stores';
	import { avaliableLocales } from '$lib/fluent.js';

	function handleLocaleChage(e) {
		const { url, params: {lang: oldLocale } } = $page;
		const newLocale = e.detail.value;
		if (oldLocale != newLocale) {
			const newLocation = `//${url.host}${url.pathname.replace(`/${oldLocale}`, `/${newLocale}`)}`;
			document.location.href = newLocation;
		}
	}
</script>

<WiredCombo bind:value={$locale} options={avaliableLocales} on:change={handleLocaleChage} />
