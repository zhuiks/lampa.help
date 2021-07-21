import { derived, writable } from "svelte/store";

export const plans = writable({});

export const currentPlan = writable(null);

export const lessonNum = writable(null);

export const locale = writable('en');

export const urlParams = derived(locale, $locale => `/?lang=${$locale}`);