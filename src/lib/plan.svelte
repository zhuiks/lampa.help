<script>
  import PlanSection from './plan-section.svelte';
  import { plans, currentPlan} from './store.js'

  export let sections = [];
</script>

<h1>{$plans[$currentPlan].name}</h1>
{#if sections}
  {#each sections as {section, items}}
    <PlanSection {section} {items}/>  
  {/each}
{/if}