<script context="module">
	import { FluentBundle, FluentResource } from '@fluent/bundle';

	let resource = new FluentResource(`
main-truth = Main Truth
summary = Summary
application = Application
songs = Song Suggestions
`);

	let bundle = new FluentBundle('en-US');
	let errors = bundle.addResource(resource);
	if (errors.length) {
		console.log(errors);
	}

	function getMessage(id) {
		const message = bundle.getMessage(id);
		if (message && message.value) {
			return bundle.formatPattern(message.value);
		}
		return id;
	}
</script>
<script>
	import LessonHeader from './elements/lesson-header.svelte';
	import MemoryVerse from './elements/memory-verse.svelte';
	import Character from './elements/character.svelte';

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

	<h3 class="truth">{getMessage("main-truth")}</h3>
	<h2>{lesson['Truth']}</h2>

	<section>
		<h3>{getMessage("summary")}</h3>
		{#each lesson['Summary'].split('\n') as paragraph}
			<p>{paragraph}</p>
		{/each}
	</section>

	<Character values={lesson['Character']} />

	<section>
		<h3>{getMessage("application")}</h3>
		{#each lesson['Application'].split('\n') as paragraph}
			<p>{paragraph}</p>
		{/each}
	</section>

	<footer>
		{#if lesson['Songs']}
			<h3>{getMessage("songs")}</h3>
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
