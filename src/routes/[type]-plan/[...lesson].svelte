<script context="module">
	import { getLessonFilename, getYamlData } from '$lib/get-data.js';
	import { lessonNum } from '$lib/store.js';

	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ page, fetch, context }) {
		const lesson = page.params.lesson;
		lessonNum.set(lesson);

		const currentPlanData = context.currentPlan || context.plans[0];

		const match = /\/?(?:(?<section>[^\/]+)\/[^\/\d\s]*(?<num>\d+))|(?<special>[^\/]+)$/.exec(
			lesson
		);
		if (!match) {
			return {
				status: 404,
				error: new Error(`Could not load ${page.path}`)
			};
		}

		const { section, num, special } = match.groups;
		const filepath = `${currentPlanData.filePath}${
			special ? special : getLessonFilename(section, num)
		}`;
		const resLesson = await getYamlData(fetch, filepath);

		if (!resLesson.ok) {
			return resLesson;
		}

		var sectionName;

		if (section) {
			const sectionData = currentPlanData.sections.find((s) => !!s[section]);

			if (sectionData) {
				sectionName = sectionData[section]['Name'];
			}
		}

		return {
			props: {
				lesson: resLesson.data,
				section: sectionName
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
