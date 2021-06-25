<script context="module">
  import { getYamlData } from '$lib/get-data.js';

	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ page, fetch, session, context }) {
		const url = `http://localhost:3000/lessons/about.yml`;
		const res = await getYamlData(url);

		if (!res.ok) {
			return res;
		}

    return {
			props: {
        name: res.data['Name'],
				lessons: res.data['Sections']
			}
		};
	}
</script>

<script>
  import Plan from '$lib/plan.svelte';
  
  export let name;
  export let lessons;
</script>

<Plan {name} {lessons}/>