<script context="module">
	import { getYamlData, padNumber } from '$lib/get-data.js';

	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ page, fetch, session, context }) {
		const filepath = `lessons/lesson-${padNumber(page.params.num)}`;
		const res = await getYamlData(page, filepath);

		if (!res.ok) {
			return res;
		}
		
		return {
			props: {
				lesson: res.data
			}
		};
	}
</script>

<script>
	import Lesson from '$lib/lesson.svelte';

	export let lesson;
	const section = 'Old Testament';
</script>

<Lesson {section} {lesson} />
