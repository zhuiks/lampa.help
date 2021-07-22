<script>
	import { onMount } from 'svelte';
	import { prerendering } from '$app/env';

	let WiredCard = null;

	export let fill = 'yellow';

	const backgroundFill = '#ffff0b';

	onMount(async () => {
		WiredCard = (await import('wired-elements/lib/wired-card.js')).WiredCard;
	});
</script>

{#if prerendering}
	<section class="card">
		<slot>Something missing...</slot>
	</section>
{:else}
	<wired-card fill={backgroundFill} class="card">
		<slot>Something missing...</slot>
	</wired-card>
{/if}

<style>
	.card {
		min-width: var(--min-width, 5em);
	}

</style>