<script>
  export let name;
  export let sections = [];

  console.log(sections);
</script>

<h1>{name}</h1>
{#if sections}
  <table>
  {#each sections as sectionData}
    <tr>
      <td>{sectionData.section}</td>
    </tr>
  {/each}
  </table>
{/if}