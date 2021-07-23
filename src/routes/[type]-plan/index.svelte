<script context="module">
	import { getLessonFilename, getYamlData } from '$lib/get-data.js';

	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ fetch, context }) {
		const currentPlanData = context.currentPlan || context.plans[0];

		const sections = await Promise.all(
			currentPlanData.sections.map(async (sectionData) => {
				const [sectionKey, details] = Object.entries(sectionData)[0];
				let lessons = [];

				if (Array.isArray(details)) {
					for (let i = 0; i < details.length; i++) {
						const res = await getYamlData(fetch, `${currentPlanData.filePath}${details[i]}`);

						if (res.ok) {
							lessons.push({
								title: res.data['Title'],
								passage: res.data['Scripture'],
								link: `${currentPlanData.urlPath}${details[i]}${context.urlParams}`
							});
						}
					}
				} else {
					const totalLessons = details['Lessons'];

					if (Number.isInteger(totalLessons)) {
						for (let i = 1; i <= totalLessons; i++) {
							const res = await getYamlData(
								fetch,
								`${currentPlanData.filePath}${getLessonFilename(sectionKey, i)}`
							);

							if (res.ok) {
								lessons.push({
									num: res.data['Number'],
									title: res.data['Title'],
									passage: res.data['Scripture'],
									link: `${currentPlanData.urlPath}${sectionKey}/lesson${i}${context.urlParams}`
								});
							}
						}
					}
				}

				const sectionName = details['Name'] || sectionKey;

				return {
					section: sectionName,
					items: lessons
				};
			})
		);

		return {
			props: {
				sections
			}
		};
	}
</script>

<script>
	import Plan from '$lib/plan.svelte';

	export let sections;
</script>

<Plan {sections} />
