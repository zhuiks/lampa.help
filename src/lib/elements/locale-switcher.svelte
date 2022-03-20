<script>
	import { locale } from '$lib/store.js';
	import WiredCombo from '$lib/wired/wired-combo.svelte';
	import { page } from '$app/stores';
	import { avaliableLocales } from '$lib/fluent.js';

	function handleLocaleChage(e) {
		const { url } = $page;
		const { searchParams } = url;
		const newLocale = e.detail.value;
		if (searchParams.get('lang') != newLocale) {
			searchParams.set('lang', newLocale);
			const newLocation = `//${url.host}${url.pathname.replace(/\/$/, '')}/?${searchParams.toString()}`;
			document.location.href = newLocation;
		}
	}
</script>

<WiredCombo bind:value={$locale} options={avaliableLocales} on:change={handleLocaleChage} />
