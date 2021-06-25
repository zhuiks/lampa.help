<script>
  import 'wired-elements/lib/wired-link.js';

  export let num;
  export let title;
  export let link;
</script>

{#if num}
  <strong>#{num}</strong> 
{/if}

<wired-link href={link}>{title}</wired-link>