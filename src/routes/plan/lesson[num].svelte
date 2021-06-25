<script context="module">
	import { getYamlData } from '$lib/get-data.js';

	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ page, fetch, session, context }) {
		const url = `http://localhost:3000/lessons/lesson-${page.params.num}.yml`;
		const res = await getYamlData(url);

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
