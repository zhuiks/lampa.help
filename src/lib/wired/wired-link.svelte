<script>
	import { onMount } from 'svelte';
	import { prerendering } from '$app/env';

	let WiredLink = null;

	export let href;

	onMount(async () => {
		WiredLink = (await import('wired-elements/lib/wired-link.js')).WiredLink;
	});
</script>

{#if prerendering}
	<a {href}>
		<slot>{href}</slot>
	</a>
{:else}
	<wired-link {href}>
		<slot>{href}</slot>
	</wired-link>
{/if}

<style>
	wired-link {
		--wired-link-decoration-color: var(--orange);
	}
</style>
