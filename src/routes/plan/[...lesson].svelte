<script context="module">
	import { getLessonFilename, getYamlData, padNumber } from '$lib/get-data.js';

	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ page, fetch, session, context }) {
		const match = /\/?(?:(?<section>[^\/]+)\/[^\/\d\s]*(?<num>\d+))|(?<special>[^\/]+)$/.exec(page.params.lesson);
		if (!match) {
			return {
				status: 404,
		    error: new Error(`Could not load ${page.path}`)
			}
		}

		const { section, num, special } = match.groups;
		const filepath = `lessons/${special ? special : getLessonFilename(section, num)}`;
		const res = await getYamlData(filepath, {page, fetch});
		console.log(res)
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
