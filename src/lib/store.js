import { derived, writable } from "svelte/store";

export const plans = writable({});

export const currentPlan = writable(null);

export const lessonInfo = writable({});

export const locale = writable('en');

export const urlParams = derived(locale, $locale => `/?lang=${$locale}`);