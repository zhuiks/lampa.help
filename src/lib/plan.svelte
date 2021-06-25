<script>
  import PlanSection from "./plan-section.svelte";

  export let name;
  export let sections = [];

  console.log(sections);
</script>

<h1>{name}</h1>
{#if sections}
  <PlanSection section="Bible" items={sections}/>
{/if}