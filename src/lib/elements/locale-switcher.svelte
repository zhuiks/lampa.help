<script>
  import { locale } from '$lib/store.js';
  import WiredCombo from '$lib/wired/wired-combo.svelte';
  import { navigating, page, session } from '$app/stores';
  import { goto } from '$app/navigation';

  const avaliableLocales = {
    'en': 'English',
    'ru': 'Русский',
  };

  function handleLocaleChage(e) {
    const {path, query} = $page;
    const newLocale = e.detail.value;
    if (query.get('lang') != newLocale) {
      query.set('lang', newLocale);
      const newLocation = `${path}/?${query.toString()}`;
      goto(newLocation).catch((error) => {
        console.error('Failed to navigate to', newLocation);
      });
    }
  }
</script>

<WiredCombo bind:value={$locale} options={avaliableLocales} on:change={handleLocaleChage}/>
