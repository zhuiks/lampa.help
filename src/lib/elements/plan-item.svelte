<script>
	import NumCircle from '$lib/atoms/num-circle.svelte';

	export let num = '';
	export let title;
	export let passage = '';
	export let link;
</script>

<div class="container">
	<div class="circle">
		<NumCircle {link} {num} />
	</div>

	<div class="title">
		<a href={link} rel="external">{title}</a>
		<div class="details">{passage.split(' (')[0]}</div>
	</div>
</div>

<style>
	.container {
		--circle-size: 2em;
		width: 100%;
		display: grid;
		grid-auto-flow: column;
		grid-template-columns: 1fr calc(var(--circle-size) * 1.3) 1fr;
		min-height: calc(var(--circle-size) * 1.3);
		align-items: center;
		position: relative;
	}
	.container::after {
		content: '';
		position: absolute;
		width: 3px;
		height: 100%;
		background: var(--primary-color);
		z-index: 1;
		top: 0;
		left: calc(50% - 1.5px);
	}
	.circle {
		grid-column: 2;
		grid-row: 1;
		place-self: center;
		background: white;
		z-index: 2;
	}

	.title {
		text-align: right;
		word-break: break-word;
	}
	.container:nth-child(even) .title {
		grid-column: 3;
		text-align: left;
	}
	.details {
		color: darkgrey;
		font-size: 0.6em;
	}
</style>
