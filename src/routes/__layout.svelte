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
		const urlParams = `/?lang=${lang}`;

		await prepareResources(fetch);
		
		const planType = page.params.type;
		currentPlan.set(planType);

		const planData = await setPlanData(fetch, lang);
		if (!planData.ready) {
			return planData;
		}
		delete planData.ready;
		plans.set(planData);

		return {
			context: {
				plans: planData,
				currentPlan: planType ? planData[planType] : false,
				urlParams
			},
			props: {
				urlParams
			}
		};
	}
</script>

<script>
	import PlanSelect from '$lib/elements/plan-select.svelte';
	import LocaleSwitcher from '$lib/elements/locale-switcher.svelte';
	import '../app.css';

  export let urlParams;
</script>

<header>
	<h5 class="slogan"><a href={urlParams}>Chronological Bible Lessons for Kids</a></h5>
</header>
<main>
	<slot />
</main>

<footer>
	<PlanSelect />
	<LocaleSwitcher />
	(c) 2021
</footer>

<style>
	main {
		padding: 3em 1.5em 1em;
	}
	header {
		background: var(--blue);
		padding: 0 1.5em;
		height: 52px;
	}
	header h5 {
		background: url('/assets/logo.png') no-repeat 0 50%;
		height: 100%;
		box-sizing: border-box;
		margin: 0;
		padding: 15px 0 5px 64px;
	}
	header h5 a {
		color: white;
		text-shadow: 2px 0 5px #33333388;
		text-transform: uppercase;
		letter-spacing: 0.1em;
	}
	footer {
    display: flex;
    min-height: 7em;
    background-color: var(--green);
    padding: 1em 1.5em;
		margin-top: auto;
	}
</style>
