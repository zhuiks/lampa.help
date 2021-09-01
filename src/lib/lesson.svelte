<script>
	import { Localized } from '@nubolab-ffwd/svelte-fluent';
	import LessonHeader from './templates/lesson-header.svelte';
	import MemoryVerse from './elements/memory-verse.svelte';
	import Character from './elements/character.svelte';
	import LessonScripture from './elements/lesson-scripture.svelte';
	import LessonApplication from './elements/lesson-application.svelte';

  import { onMount, onDestroy, beforeUpdate, afterUpdate } from 'svelte';
	onMount(async () => console.log('lesson onMount', lesson["Number"]));
  beforeUpdate(async () => console.log('lesson beforeUpdate', lesson["Number"]));
  afterUpdate(async () => console.log('lesson afterUpdate'));
  onDestroy(async() => console.log('lesson onDestroy'));

	export let section;
	export let lesson;
</script>

<article class="lesson">
	<LessonHeader
		lessonNumber={lesson["Number"]}
		lessonTitle={lesson['Title']}
		lessonSection={section}
		lessonTruth={lesson['Truth']}
	/>

	<LessonScripture scripture={lesson['Scripture']} />
	<section>
		<h3><Localized id="summary" /></h3>
		{#each lesson['Summary'].split('\n') as paragraph}
		<p>{paragraph}</p>
		{/each}
	</section>
	
	<Character values={lesson['Character']} />
	
	<MemoryVerse verse={lesson['Verse']} />

	<section>
		<h3><Localized id="application" /></h3>
		<LessonApplication text={lesson['Application']} />
	</section>

	<footer>
		{#if lesson['Songs']}
			<h3><Localized id="songs" /></h3>
			<ul>
				{#each lesson['Songs'] as song}
					<li>{song}</li>
				{/each}
			</ul>
		{/if}
	</footer>
</article>

<style>
	.lesson {
		max-width: 1024px;
		margin: 0 auto;
	}
	
</style>
