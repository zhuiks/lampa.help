<script>
	import { onMount, createEventDispatcher } from 'svelte';
	import { prerendering } from '$app/env';

	let WiredCombo = null;
	let WiredItem = null;

	export let value;
	export let options;

	const dispatch = createEventDispatcher();

	function handleSelected(e) {
		dispatch('change', {
			value: e.target.value.value,
		})
	}

	onMount(async () => {
		WiredCombo = (await import('wired-elements/lib/wired-combo.js')).WiredCombo;
		WiredItem = (await import('wired-elements/lib/wired-item.js')).WiredItem;
	});
</script>

{#if prerendering}
	<select bind:value on:blur={handleSelected}>
		{#each Object.entries(options) as [val, text]}
			<option value={val}>{text}</option>
		{/each}
	</select>
{:else}
	<wired-combo selected={value} on:selected={handleSelected}>
		{#each Object.entries(options) as [val, text]}
			<wired-item value={val}>{text}</wired-item>
		{/each}
	</wired-combo>
{/if}

<style>
	wired-combo {
		font-family: var(--font-header);
		letter-spacing: 0.1em;
		--wired-combo-popup-bg: var(--yellow);
		--wired-item-selected-bg: var(--primary-color);
	}
	wired-item {
		letter-spacing: 0.1em;
	}
</style>