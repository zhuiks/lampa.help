<script context="module">
	import { prepareResources } from '$lib/fluent.js';
	import { setPlanData } from '$lib/get-data.js';
	import { plans, currentPlan, locale } from '$lib/store.js';

	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ page, fetch }) {
		const lang = page.query.get('lang') || 'en';
		locale.set(lang);

		await prepareResources(fetch);

		currentPlan.set(null);

		const planType = page.params.type;
		currentPlan.set(planType);

		const planData = await setPlanData(fetch, lang);
		if (!planData.ready) {
			return planData;
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
	import '../app.css';
</script>

<FluentProvider bundles={generateBundles($locale)}>
	<main>
		<img src="assets/lampochka.png" alt="Little Lamp" />
		<h1><Localized id="title" /></h1>

		<p><Localized id="intro" /></p>
		<p><Localized id="about" /></p>

		<PlanSelect />
	</main>
</FluentProvider>
