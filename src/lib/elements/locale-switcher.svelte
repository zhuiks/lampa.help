<script>
	import { locale } from '$lib/store.js';
	import WiredCombo from '$lib/wired/wired-combo.svelte';
	import { page } from '$app/stores';
	import { avaliableLocales } from '$lib/fluent.js';

	const { url, params } = $page;
	const isMain = Object.keys(params).length < 2;

	function handleLocaleChage(e) {
		const newLocale = e.detail.value;
		if ($locale != newLocale) {
			document.location.href = currentPageLink(newLocale);
		}
	}

	function currentPageLink(newLocale) {
		return `${url.pathname.replace(`/${$locale}`, `/${newLocale}`)}`;
	}
</script>

{#if isMain}
	{#each Object.entries(avaliableLocales) as [loc, name]}
		{#if loc !== $locale}
			<a rel="external" href={currentPageLink(loc)}>{name}</a>
		{/if}
	{/each}
{:else}
	<WiredCombo bind:value={$locale} options={avaliableLocales} on:change={handleLocaleChage} />
{/if}
