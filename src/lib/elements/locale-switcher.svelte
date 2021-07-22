<script>
  import { locale } from '$lib/store.js';
  import WiredCombo from '$lib/wired/wired-combo.svelte';


  const avaliableLocales = {
    'en': 'English',
    'ru': 'Русский',
  };

</script>

<WiredCombo bind:value={$locale} options={avaliableLocales} />
