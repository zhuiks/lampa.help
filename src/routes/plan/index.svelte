<script context="module">
  import { getYamlData } from '$lib/get-data.js';

	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ page, fetch, session, context }) {
		const prefix = `http://localhost:3000/lessons/`;
		const resAbout = await getYamlData(`${prefix}about.yml`);

		if (!resAbout.ok) {
			return resAbout;
		}

    const sections = await Promise.all(
      resAbout.data['Sections'].map(async sectionData => {
        const [sectionKey, list] = Object.entries(sectionData)[0];
        let lessons = [];

        if (Array.isArray(list)) {
          for(let i=0; i<list.length; i++) {
            const res = await getYamlData(`${prefix}${list[i]}.yml`);

            if (res.ok) {
              lessons.push({
                num: res.data['Number'],
                title: res.data['Title'],
              });
            }
          } 
        } else if (Number.isInteger(list)) {
          const paddedLength = 2; //Math.ceil(Math.log10(list+1));
          for(let i=1; i<=list; i++) {
            const res = await getYamlData(`${prefix}lesson-${i.toString().padStart(paddedLength, 0)}.yml`);

            if (res.ok) {
              lessons.push({
                num: res.data['Number'],
                title: res.data['Title'],
              });
            }
          } 
        }

        return {
          section: sectionKey,
          lessons
        }
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

<Plan {name} {sections}/>