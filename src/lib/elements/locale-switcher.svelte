<script>
  import { onMount } from 'svelte';
  import { amp, browser, dev,  prerendering } from '$app/env';
  import { locale } from '$lib/store.js';
  import WiredCombo from '$lib/wired/wired-combo.svelte';


  const avaliableLocales = [
    { code: 'en', name: 'English'},
    { code: 'ru', name: 'Русский'},
  ];

</script>

{#if prerendering}
<select bind:value={$locale} class="locale-switcher">
  {#each avaliableLocales as {code, name} }
    <option value={code}>{name}</option>
  {/each}
</select>
{:else}
  <WiredCombo>
    <!-- {#each avaliableLocales as {code, name} }
      <wired-item value={code}>{name}</wired-item>
    {/each} -->
  </WiredCombo>
  ku-ku
{/if}  