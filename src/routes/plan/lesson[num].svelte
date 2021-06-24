<script context="module">
  import { parse } from 'yaml';

	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ page, fetch, session, context }) {
		const url = `http://localhost:3000/lessons/lesson-${page.params.num}.yml`;
		const res = await fetch(url);

		if (res.ok) {
      const data = await res.text();

      return {
				props: {
					lesson: parse(data) 
				}
			};
		}

    return {
			status: res.status,
			error: new Error(`Could not load ${url}`)
		};
	}
</script>

<script>
  import Lesson from '$lib/lesson.svelte';

  export let lesson;

</script>

<Lesson {lesson}/>