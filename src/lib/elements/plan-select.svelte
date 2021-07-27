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

	{#each Object.entries($plans) as [planKey, planData]}
		{#if !header || (header && planKey != $currentPlan)}
			<li class="plans__item">
				{#if planKey == $currentPlan}
					<strong>{planData.name}</strong>
				{:else}
					<a href="/{planKey}-plan{$urlParams}">{planData.name}</a>
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
		flex-wrap: wrap;
		align-items: baseline;
	}
  .plans__item:not(:first-child) {
    margin-inline-start: 1em;
  }
</style>
