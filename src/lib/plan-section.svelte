<script>
	import PlanItem from './elements/plan-item.svelte';

	export let expanded = true;
	export let section;
	export let items;

	function toggle() {
		expanded = !expanded;
	}
</script>

<section>
	<h3 class:expanded on:click={toggle}>
		{section}
		<svg class="arrow" width="16" height="26" viewBox="0 0 16 26" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M9 2C8.21885 8.93041 7 16.0426 7 23"
				stroke-width="3"
				stroke-linecap="round"
			/>
			<path
				d="M2 15C3.33102 17.6165 5.38346 27.9117 9.41333 22.4016C10.2097 21.3128 10.6185 19.8331 11.4133 18.8001C12.1088 17.8961 13.6288 17.3208 14 16.5314"
				stroke-width="3"
				stroke-linecap="round"
			/>
		</svg>
	</h3>

	{#if expanded}
		<nav>
			{#each items as item}
				<PlanItem {...item} />
			{/each}
		</nav>
	{/if}
</section>

<style>
	section {
		margin-top: 1em;
	}
	h3 {
		/* padding: 0 0 0 1.5em; */
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0 0 1em 1em;
		padding-top: 0.5em;
		text-decoration: underline;
		position: sticky;
		top: 0;
		background: white;
		z-index: 3;
	}

	h3::after {
		content: "";
		position: absolute;
		bottom: -1em;
		height: 1em;
		width: 100%;
		background: linear-gradient(to bottom, white 0%, rgba(255, 255, 255, 0) 100%);
	}

	h3.expanded {
		text-decoration: none;
	}

	.arrow {
		height: 0.8em;
		padding-left: 0.3em;
		stroke: darkgray;
		transform: scale(0);
	}
	h3:hover .arrow {
		transform: scale(1);
	}
	.expanded:hover .arrow {
		transform: rotate(170deg);
	}
</style>
