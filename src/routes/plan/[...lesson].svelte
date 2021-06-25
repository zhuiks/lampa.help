<script context="module">
	import { getLessonFilename, getYamlData } from '$lib/get-data.js';

	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ page, fetch, session, context }) {
		const prefix = 'lessons/';

		const match = /\/?(?:(?<section>[^\/]+)\/[^\/\d\s]*(?<num>\d+))|(?<special>[^\/]+)$/.exec(page.params.lesson);
		if (!match) {
			return {
				status: 404,
		    error: new Error(`Could not load ${page.path}`)
			}
		}

		const { section, num, special } = match.groups;
		const filepath = `${prefix}${special ? special : getLessonFilename(section, num)}`;
		const resLesson = await getYamlData(filepath, {page, fetch});

		if (!resLesson.ok) {
			return resLesson;
		}

		var sectionName;

		if (section) {
			const resAbout = await getYamlData(`${prefix}about`, {page, fetch});

			if (resAbout.ok) {
				const sectionData = resAbout.data['Sections'].find(s => !!s[section]);
				if (sectionData) {
					sectionName = sectionData[section]['Name'];
				}
			}
		}
		
		return {
			props: {
				lesson: resLesson.data,
				section: sectionName,
			}
		};
	}
</script>

<script>
	import Lesson from '$lib/lesson.svelte';

	export let lesson;
	export let section;
</script>

<Lesson {section} {lesson} />
