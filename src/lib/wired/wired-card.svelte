<script>
	import { onMount } from 'svelte';
	import { prerendering } from '$app/env';

	let WiredCard = null;

	export let fill = 'yellow';

	export let taped = false;

	let backgroundFill = fill;

	onMount(async () => {
		//FIXME: it's not efficient to request styles for every component.
		const styles = window.getComputedStyle(document.documentElement);
		backgroundFill = styles.getPropertyValue(`--${fill}`);

		WiredCard = (await import('wired-elements/lib/wired-card.js')).WiredCard;
	});
</script>

{#if prerendering}
	<section class="card">
		<slot>Something missing...</slot>
	</section>
{:else}
	<div class="card-wrapper">
		{#if taped}
			<div class="top-tape" />
		{/if}	
		<wired-card fill={backgroundFill} class="card" elevation="2">
			<slot>Something missing...</slot>
		</wired-card>
	</div>
{/if}

<style>
	.card-wrapper {
		--tape-gray: #dbd8be;
		--tape-edge-gray: #b7b49d;
		position: relative;
	}
	.card {
		min-width: var(--min-width, 5em);
		text-align: center;
	}
	.top-tape {
		position: absolute;
		z-index: 10;
		height: 2rem;
		top: -1.3rem;
		left: 50%;
		transform: translateX(-50%) rotate(-1deg);
		width: 4vmin;
		background-color: var(--tape-gray);
		border-top: 1px dotted var(--tape-edge-gray);
		border-bottom: 1px dotted var(--tape-edge-gray);
		opacity: 0.5;
	}
</style>
