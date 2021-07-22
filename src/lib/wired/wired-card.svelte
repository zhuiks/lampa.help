<script>
	import { onMount } from 'svelte';
	import { prerendering } from '$app/env';

	let WiredCard = null;

	export let fill = 'yellow';

	let backgroundFill = fill;

	onMount(async () => {
		const styles = window.getComputedStyle(document.documentElement);
		backgroundFill = styles.getPropertyValue(`--${fill}`);
		console.log(backgroundFill);

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