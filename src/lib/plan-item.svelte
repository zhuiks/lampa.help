<script>
	export let num = '';
	export let title;
	export let passage = '';
	export let link;
</script>

<div class="container">
	<div class="line" />
	{#if num}
		<a class="circle" href={link} rel="external"><strong>#{num}</strong></a>
	{/if}

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
	}
	.line {
		grid-column: 2;
    grid-row: 1;
		width: calc(50% - 1px);
		border-inline-end: 3px solid var(--heading-color);
    align-self: stretch;
	}
	.circle {
    grid-column: 2;
    grid-row: 1;
    place-self: center;
		background: white;
		display: block;
		height: var(--circle-size);
		width: var(--circle-size);
		line-height: var(--circle-size);
		text-align: center;
		font-size: 0.6em;
		letter-spacing: -1px;
		border-radius: 50%;
		border: 2px solid var(--heading-color);
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
