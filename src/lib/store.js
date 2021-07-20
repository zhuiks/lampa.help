import { writable } from "svelte/store";

export const plans = writable({});

export const currentPlan = writable(null);

export const lessonNum = writable(null);