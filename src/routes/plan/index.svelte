<script context="module">
	import { getYamlData, padNumber } from '$lib/get-data.js';

	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ page, fetch, session, context }) {
		const prefix = 'lessons/';
		const resAbout = await getYamlData(page, `${prefix}about`);

		if (!resAbout.ok) {
			return resAbout;
		}

		const sections = await Promise.all(
			resAbout.data['Sections'].map(async (sectionData) => {
				const [sectionKey, details] = Object.entries(sectionData)[0];
				let lessons = [];

				if (Array.isArray(details)) {
					for (let i = 0; i < details.length; i++) {
						const res = await getYamlData(page, `${prefix}${details[i]}`);

						if (res.ok) {
							lessons.push({
								title: res.data['Title'],
								link: `plan/${details[i]}`
							});
						}
					}
				} else {
					const totalLessons = details['Lessons'];
					
          if (Number.isInteger(totalLessons)) {
						for (let i = 1; i <= totalLessons; i++) {
							const res = await getYamlData(
								page,
								`${prefix}${sectionKey.toLowerCase().replace('_', '-')}-${padNumber(i)}`
							);

							if (res.ok) {
								lessons.push({
									num: res.data['Number'],
									title: res.data['Title'],
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
