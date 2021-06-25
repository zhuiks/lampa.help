<script>
	import 'wired-elements/lib/wired-card.js';
	// import 'wired-elements/lib/wired-divider.js';
	import LessonHeader from './lesson-header.svelte';
	import MemoryVerse from './memory-verse.svelte';

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

	<h3>Main Truth</h3>
	<h2>{lesson['Truth']}</h2>

	<section>
		<h3>Summary</h3>
		{#each lesson['Summary'].split('\n') as paragraph}
			<p>{paragraph}</p>
		{/each}
	</section>

	<section class="character">
		<wired-card elevation="2">
			<h3>God's character</h3>
			<p>{lesson['Character']}</p>
		</wired-card>
	</section>

	<section>
		<h3>Application</h3>
		{#each lesson['Application'].split('\n') as paragraph}
			<p>{paragraph}</p>
		{/each}
	</section>

	<footer>
		{#if lesson['Songs']}
		<h3>Song suggestions</h3>
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
		padding: 1em 2em;
		clear: both;
	}

	h2 {
		color: var(--orange);
	}

	.character {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .character > wired-card {
		max-width: 80%;
    padding: 1em;
	}
  .character h3 {
    margin-top: 0.45em;
    margin-bottom: 0.45em;
  }
</style>
