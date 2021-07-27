<script context="module">
	import { getLessonFilename, getYamlData } from '$lib/get-data.js';

	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ fetch, context }) {
			
		const currentPlanData = context.currentPlan || context.plans[0];

		const { section, num, special } = context.lesson;
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
