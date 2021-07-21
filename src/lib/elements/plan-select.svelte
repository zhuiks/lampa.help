<script>
	import { plans, currentPlan, urlParams } from '$lib/store.js';

	export let header = false;
</script>

<ul class="plans">
	{#if header && $currentPlan}
		<li class="plans__item">
			<h1>{$plans[$currentPlan].name}</h1>
		</li>
	{/if}

	{#each Object.entries($plans) as plan}
		{#if !header || (header && plan[0] != $currentPlan)}
			<li class="plans__item">
				{#if plan[0] == $currentPlan}
					<strong>{plan[1].name}</strong>
				{:else}
					<a href="/{plan[0]}-plan{$urlParams}">{plan[1].name}</a>
				{/if}
			</li>
		{/if}
	{/each}
</ul>

<style>
	.plans {
		list-style: none;
		padding-inline-start: 0;
		width: 100%;
		display: flex;
		align-items: baseline;
	}
  .plans__item:not(:first-child) {
    margin-inline-start: 1em;
  }
</style>
