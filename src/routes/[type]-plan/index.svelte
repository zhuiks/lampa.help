<script context="module">
	import { setPlanData, getLessonFilename, getYamlData } from '$lib/get-data.js';

	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ page, fetch}) {
		const planType = page.params.type;
		const planData = await setPlanData(fetch, planType);
		if (!planData.ready) {
			return planData;
		}
		
		const prefix = `en-${planType}/`;

		const sections = await Promise.all(
			planData[planType].sections.map(async (sectionData) => {
				const [sectionKey, details] = Object.entries(sectionData)[0];
				let lessons = [];

				if (Array.isArray(details)) {
					for (let i = 0; i < details.length; i++) {
						const res = await getYamlData(fetch, `${prefix}${details[i]}`);

						if (res.ok) {
							lessons.push({
								title: res.data['Title'],
								passage: res.data['Scripture'],
								link: `${planType}-plan/${details[i]}`
							});
						}
					}
				} else {
					const totalLessons = details['Lessons'];
					
          if (Number.isInteger(totalLessons)) {
						for (let i = 1; i <= totalLessons; i++) {
							const res = await getYamlData(fetch, `${prefix}${getLessonFilename(sectionKey, i)}`);

							if (res.ok) {
								lessons.push({
									num: res.data['Number'],
									title: res.data['Title'],
									passage: res.data['Scripture'],
									link: `${planType}-plan/${sectionKey}/lesson${i}`
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
