<script>
	import { Localized } from '@nubolab-ffwd/svelte-fluent';
	import LessonHeader from './elements/lesson-header.svelte';
	import MemoryVerse from './elements/memory-verse.svelte';
	import Character from './elements/character.svelte';
import LessonApplication from './elements/lesson-application.svelte';

	export let section;
	export let lesson;
</script>

<article class="lesson">
	<LessonHeader
		lessonNumber={lesson['Number']}
		lessonTitle={lesson['Title']}
		lessonSection={section}
		lessonScripture={lesson['Scripture']}
	/>

	<MemoryVerse verse={lesson['Verse']} />

	<h3 class="truth"><Localized id="main-truth" /></h3>
	<h2>{lesson['Truth']}</h2>

	<section>
		<h3><Localized id="summary" /></h3>
		{#each lesson['Summary'].split('\n') as paragraph}
			<p>{paragraph}</p>
		{/each}
	</section>

	<Character values={lesson['Character']} />

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
	h2 {
		color: var(--orange);
		margin-top: 0;
		margin-bottom: 3.5rem;
	}
	h3.truth {
		clear: left;
		margin-top: 5.5rem;
		margin-bottom: 0;
		text-align: center;
		font-weight: normal;
		color: #999;
		width: 180px;
	}
</style>
