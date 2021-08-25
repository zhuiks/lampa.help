<script>
  import PlanItem from './plan-item.svelte';

	export let expanded = true;
	export let section;
	export let items;

	function toggle() {
		expanded = !expanded;
	}
</script>

<section>
<h3 class:expanded on:click={toggle}>{section}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="arrow"><path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"/></svg></h3>

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
    margin-top: 1.5em;
  }
  h3 {
		/* padding: 0 0 0 1.5em; */
		cursor: pointer;
    display: flex;
    align-items: center;
    margin: 0;
	}

  .arrow {
    width: 1.25em;
    height: 1.25em;
    padding-bottom: 0.3em;
    fill: var(--orange);
  }

	.expanded .arrow{
		transform: rotate(90deg);
	}
</style>