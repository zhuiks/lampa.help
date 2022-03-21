<script>
	import { lessonInfo, currentPlanData, currentSection, locale } from '$lib/store.js';

  import { onMount, onDestroy, beforeUpdate, afterUpdate } from 'svelte';
	onMount(async () => console.log('lesson link onMount', num));
  beforeUpdate(async () => console.log('lesson link beforeUpdate', num));
  afterUpdate(async () => console.log('lesson link afterUpdate'));
  onDestroy(async() => console.log('lesson link onDestroy'));

	export let relative = 1;

	const num = parseInt($lessonInfo.num) + relative;

	const href = `/${$locale}/${$currentPlanData.urlPath}${$lessonInfo.section}/lesson${num}`;

</script>

<a rel="external" {href}>#{num}</a>

