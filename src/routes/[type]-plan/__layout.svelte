<script context="module">
	import { prepareResources } from '$lib/fluent.js';
	import { setPlanData } from '$lib/get-data.js';
	import { plans, currentPlan, lessonInfo, locale } from '$lib/store.js';

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

		let lesson = false;

		if (page.params.lesson) {
			const match = /\/?(?:(?<section>[^\/]+)\/[^\/\d\s]*(?<num>\d+))|(?<special>[^\/]+)$/.exec(
				page.params.lesson
			);
			if (!match) {
				return {
					status: 404,
					error: new Error(`Could not load ${page.path}`)
				};
			}
			lesson = match.groups;
		}
		lessonInfo.set(lesson);

		return {
			context: {
				plans: planData,
				currentPlan: planType ? planData[planType] : false,
				urlParams,
				lesson
			},
			props: {
				urlParams
			}
		};
	}
</script>

<script>
	import { FluentProvider, Localized } from '@nubolab-ffwd/svelte-fluent';
	import { generateBundles } from '$lib/fluent';
	import LessonLink from '$lib/elements/lesson-link.svelte';
	import PlanSelect from '$lib/elements/plan-select.svelte';
	import LocaleSwitcher from '$lib/elements/locale-switcher.svelte';
	import '../../app.css';
	
	let scrollY;
	
	export let urlParams;
	
</script>

<svelte:window bind:scrollY />
<FluentProvider bundles={generateBundles($locale)}>
	<header>
		{#if $lessonInfo}
			<nav class:visible={scrollY > 60}>
				<LessonLink relative={-1} />
				<LessonLink relative={1} />
			</nav>
		{/if}
		<h5 class="slogan"><a href={urlParams}><Localized id="slogan" /></a></h5>
	</header>
	<main>
		<slot />
	</main>

	<footer>
		<PlanSelect />
		<LocaleSwitcher />
		(c) 2021
	</footer>
</FluentProvider>

<style>
	header {
		background: var(--secondary-color);
		padding: 0 1.5em;
	}
	nav {
		transform: translateY(-100%);
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		background: var(--secondary-color);
		padding: 0.5em 1.5em;
		display: flex;
		justify-content: space-between;
		color: white;
		z-index: 947;
	}
	nav.visible {
		transform: translateY(0);
	}
	header h5 {
		height: 52px;
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
		flex-wrap: wrap;
		min-height: 7em;
		background-color: var(--green);
		padding: 1em 1.5em;
		margin-top: auto;
	}

	@media screen and (min-width: 600px) {
		footer {
			flex-wrap: nowrap;
		}
	}
</style>
