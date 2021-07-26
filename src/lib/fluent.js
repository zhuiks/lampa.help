import { negotiateLanguages } from '@fluent/langneg';
import { FluentBundle, FluentResource } from '@fluent/bundle';

export const avaliableLocales = {
  'en': 'English',
  'ru': 'Русский',
};

const availableLocaleCodes = Object.keys(avaliableLocales);

let resources = {};
export async function prepareResources(fetch) {
  for (const locale of availableLocaleCodes) {
    const res = fetch(`/locales/${locale}.flt`);
    if (res.ok) {
      resources[locale] = new FluentResource(await res.text());
    }
  }
}

// A generator function responsible for building the sequence
// of FluentBundle instances in the order of user's language
// preferences.
export function* generateBundles(requestedLocales) {
  requestedLocales = Array.isArray(requestedLocales) ? requestedLocales : [requestedLocales];


  // Choose locales that are best for the user.
  const currentLocales = negotiateLanguages(
    requestedLocales,
    availableLocaleCodes,
    { defaultLocale: availableLocaleCodes[0] }
  );

  for (const locale of currentLocales) {
    if (resources[locale]) {
      const bundle = new FluentBundle(locale);
      bundle.addResource(resources[locale]);
      yield bundle;
    }
  }
}
