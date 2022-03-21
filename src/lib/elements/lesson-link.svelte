<script>
	import { lessonInfo, currentPlanData, lastLesson, locale } from '$lib/store.js';

	// import { onMount, onDestroy, beforeUpdate, afterUpdate } from 'svelte';
	// onMount(async () => console.log('lesson link onMount', num));
	// beforeUpdate(async () => console.log('lesson link beforeUpdate', num));
	// afterUpdate(async () => console.log('lesson link afterUpdate'));
	// onDestroy(async () => console.log('lesson link onDestroy'));

	export let relative = 1;

	const num = parseInt($lessonInfo.num) + relative;

	const href = `/${$locale}/${$currentPlanData.urlPath}${$lessonInfo.section}/lesson${num}`;
</script>

{#if num > 0 && num <= $lastLesson}
	<a rel="external" class:end={relative > 0} {href}>#{num}</a>
{/if}

<style>
	.end {
		margin-inline-start: auto;
	}
</style>