<script>
  import PlanSelect from './elements/plan-select.svelte';
  import PlanSection from './templates/plan-section.svelte';
  import { plans, currentPlan} from './store.js'

  export let sections = [];
</script>

<PlanSelect header />
{#if sections}
  {#each sections as {section, items}}
    <PlanSection {section} {items}/>  
  {/each}
{/if}