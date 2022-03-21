<script context="module">
	import { prepareResources } from '$lib/fluent.js';
	import { setPlanData } from '$lib/get-data.js';
	import { plans, currentPlan, locale } from '$lib/store.js';

	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ params, fetch }) {
		const lang = params.lang || 'en';
		locale.set(lang);

		await prepareResources(fetch);

		currentPlan.set(null);

		const planType = params.type;
		currentPlan.set(planType);

		const planData = await setPlanData(fetch, lang);
		if (!planData.ready) {
			return {
				status: planData.status,
				error: planData.error
			};
		}
		delete planData.ready;
		plans.set(planData);

		return {};
	}
</script>

<script>
	import { FluentProvider, Localized } from '@nubolab-ffwd/svelte-fluent';
	import { generateBundles } from '$lib/fluent';
	import PlanSelect from '$lib/elements/plan-select.svelte';
	import LocaleSwitcher from '$lib/elements/locale-switcher.svelte'
	import '../../app.css';
</script>

<FluentProvider bundles={generateBundles($locale)}>
	<main>
		<img src="assets/lampochka.png" alt="Little Lamp" />
		<h1><Localized id="title" /></h1>

		<p><Localized id="intro" /></p>
		<p><Localized id="about" /></p>

		<PlanSelect />
    <LocaleSwitcher />
	</main>
</FluentProvider>
