<script>
  import PlanItem from './plan-item.svelte';

	export let expanded = true;
	export let section;
	export let items;

	function toggle() {
		expanded = !expanded;
	}
</script>

<span class:expanded on:click={toggle}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="arrow"><path fill="none" d="M0 0h24v24H0z"/><path d="M16 12l-6 6V6z"/></svg>{section}</span>

{#if expanded}
	<ul>
		{#each items as item}
			<li>
				{#if item.items}
					<svelte:self {...item} />
				{:else}
					<PlanItem {...item} />
				{/if}
			</li>
		{/each}
	</ul>
{/if}

<style>
	span {
		/* padding: 0 0 0 1.5em; */
		font-weight: bold;
		cursor: pointer;
    display: flex;
    align-items: center;
	}

  .arrow {
    width: 1.25em;
    height: 1.25em;
    fill: var(--orange);
  }

	.expanded .arrow{
		transform: rotate(90deg);
	}

	ul {
		padding: 0.2em 0 0 0.5em;
		margin: 0 0 0 0.6em;
		list-style: none;
		border-left: 1px solid var(--orange);
	}

	li {
		padding: 0.2em 0;
	}
</style>