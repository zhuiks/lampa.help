<script>
	import { onMount } from 'svelte';
	import { prerendering } from '$app/env';

	let WiredCombo = null;
	let WiredItem = null;

	export let value;
	export let options;

	onMount(async () => {
		WiredCombo = (await import('wired-elements/lib/wired-combo.js')).WiredCombo;
		WiredItem = (await import('wired-elements/lib/wired-item.js')).WiredItem;
	});
</script>

{#if prerendering}
	<select bind:value>
		{#each Object.entries(options) as [val, text]}
			<option value={val}>{text}</option>
		{/each}
	</select>
{:else}
	<wired-combo selected={value}>
		{#each Object.entries(options) as [val, text]}
			<wired-item value={val}>{text}</wired-item>
		{/each}
	</wired-combo>
{/if}
