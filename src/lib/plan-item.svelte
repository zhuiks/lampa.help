<script>
  import 'wired-elements/lib/wired-link.js';

  export let num;
  export let title;
  export let passage='';
  export let link;
</script>

{#if num}
  <strong>#{num}</strong> 
{/if}

<wired-link href={link}>{title}</wired-link>

<span class="passage">{passage.split(' (')[0]}</span>

<style>
  wired-link {
    --wired-link-decoration-color: var(--orange);
  }
  .passage {
    color: #999;
  }
</style>