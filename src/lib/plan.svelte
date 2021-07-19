<script>
  import PlanSection from "./plan-section.svelte";

  export let name;
  export let sections = [];
</script>

<h1>{name}</h1>
{#if sections}
  {#each sections as {section, items}}
    <PlanSection {section} {items}/>  
  {/each}
{/if}