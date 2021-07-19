<script context="module">
	import { getLessonFilename, getYamlData } from '$lib/get-data.js';

	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ page, fetch, session, context }) {
		const prefix = 'en-2year/';
		const resAbout = await getYamlData(`${prefix}about`, {page, fetch});
		
		if (!resAbout.ok) {
			return resAbout;
		}

		const sections = await Promise.all(
			resAbout.data['Sections'].map(async (sectionData) => {
				const [sectionKey, details] = Object.entries(sectionData)[0];
				let lessons = [];

				if (Array.isArray(details)) {
					for (let i = 0; i < details.length; i++) {
						const res = await getYamlData(`${prefix}${details[i]}`, {page, fetch});

						if (res.ok) {
							lessons.push({
								title: res.data['Title'],
								passage: res.data['Scripture'],
								link: `plan/${details[i]}`
							});
						}
					}
				} else {
					const totalLessons = details['Lessons'];
					
          if (Number.isInteger(totalLessons)) {
						for (let i = 1; i <= totalLessons; i++) {
							const res = await getYamlData(
								`${prefix}${getLessonFilename(sectionKey, i)}`,
                {page, fetch}
							);

							if (res.ok) {
								lessons.push({
									num: res.data['Number'],
									title: res.data['Title'],
									passage: res.data['Scripture'],
									link: `plan/${sectionKey}/lesson${i}`
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
				name: resAbout.data['Name'],
				desc: resAbout.data['Description'],
				sections
			}
		};
	}
</script>

<script>
	import Plan from '$lib/plan.svelte';

	export let name;
	export let sections;
</script>

<Plan {name} {sections} />
