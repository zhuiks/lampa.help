<script>
	import 'wired-elements/lib/wired-card.js';
  import Annotation from 'svelte-rough-notation';
	// import 'wired-elements/lib/wired-divider.js';
  import { onMount } from 'svelte';
	
	import LessonHeader from './lesson-header.svelte';
	import MemoryVerse from './memory-verse.svelte';

	export let section;
	export let lesson;

	let visible = false;
  onMount(() => {
    setTimeout(() => {
      visible = true; 
    }, 1000);
  });
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
		<div>
			<Annotation bind:visible type="box" padding={10}>
				<div class="character-wrapper">
					<h3>God's character:</h3>
					{#each lesson['Character'] as item}
						<div>{item}</div>						
					{/each}
				</div>
			</Annotation>
		</div>	
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
	h2 {
		color: var(--orange);
	}

	.character {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .character > div {
		max-width: 80%;
    padding: 1em;
		color: var(--blue);
		overflow: hidden;
	}
	.character-wrapper {
		color: var(--text-color);
		padding: 1em 0;
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		gap: 0.75em 1em;
	}
  .character-wrapper h3 {
		margin: 0;
  }
</style>
