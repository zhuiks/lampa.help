<script>
  import NumCircle from "$lib/atoms/num-circle.svelte";

  // export let currentPlan;
  const lessons = [
    {link: '#', num: 1},
    {link: '#', num: 2},
    {link: '#', num: 3},
    {link: '#', num: 4},
    {link: '#', num: 5},
  ]
</script>

<footer>
  {#each lessons as {link, num}}
    <NumCircle {link} {num} />
  {/each}
</footer>

<style>
  footer {
    background: var(--accent-color);
    display: flex;
    justify-content: space-around;
  }
</style>