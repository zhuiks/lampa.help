<script>
  import WiredLink from './wired/wired-link.svelte';

  export let num = '';
  export let title;
  export let passage='';
  export let link;
</script>

{#if num}
  <strong>#{num}</strong> 
{/if}

<WiredLink href={link}>{title}</WiredLink>

<span class="passage">{passage.split(' (')[0]}</span>

<style>
  .passage {
    color: #999;
  }
</style>