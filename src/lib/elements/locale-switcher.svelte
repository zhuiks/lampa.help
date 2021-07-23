<script>
  import { locale } from '$lib/store.js';
  import WiredCombo from '$lib/wired/wired-combo.svelte';
  import { page } from '$app/stores';

  const avaliableLocales = {
    'en': 'English',
    'ru': 'Русский',
  };

  function handleLocaleChage(e) {
    const {host, path, query} = $page;
    const newLocale = e.detail.value;
    if (query.get('lang') != newLocale) {
      query.set('lang', newLocale);
      const newLocation = `//${host}${path}/?${query.toString()}`;
      document.location.href = newLocation;
    }
  }
</script>

<WiredCombo bind:value={$locale} options={avaliableLocales} on:change={handleLocaleChage}/>
