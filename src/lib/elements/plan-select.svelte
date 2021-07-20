<script>
  import { plans, currentPlan } from '$lib/store.js';

  const current = $currentPlan;

</script>

<ul class="plans">
{#if $currentPlan}
  <li>
    <h1>{$plans[$currentPlan].name}</h1>
  </li>  
{/if}

{#each Object.entries($plans) as plan}
  {#if plan[1].name && plan[0] != $currentPlan}
    <li>
      <a href="{plan[0]}-plan">{plan[1].name}</a>
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
    justify-content: space-between;
  }
</style>