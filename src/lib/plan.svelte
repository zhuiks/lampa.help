<script>
  export let name;
  export let lessons = [];

  console.log(lessons);
</script>

<h1>{name}</h1>
{#if lessons}
  <table>
  {#each lessons as lesson}
    <tr>
      <td>lesson</td>
    </tr>
  {/each}
  </table>
{/if}