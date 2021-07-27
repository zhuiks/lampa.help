<script>
	import { Localized } from '@nubolab-ffwd/svelte-fluent';
	import WiredCard from '$lib/wired/wired-card.svelte';

	export let lessonNumber;
	export let lessonTitle;
	export let lessonSection;
	export let lessonScripture;

	const subHeading = (lessonSection || '') + (lessonNumber ? ` #${lessonNumber}` : '');
	var passage, passageNotes;

	const scriptureMatch = /^(?<passage>.*?)\s*(?:\((?<notes>.+)\))?\s*$/.exec(lessonScripture);
	if (scriptureMatch) {
		passage = scriptureMatch[1];
		passageNotes = scriptureMatch.length > 2 ? scriptureMatch[2] : undefined;
	}
</script>

<header>
	{#if passage}
		<div class="scripture-passage">
			<WiredCard>
				<h3><Localized id="scripture" /></h3>
				<p>{passage}</p>
			</WiredCard>
			{#if passageNotes}
				<p class="notes">* {passageNotes}</p>
			{/if}
		</div>
	{/if}

	{#if subHeading}
		<h4>{subHeading}</h4>
	{/if}

	<h1>{lessonTitle}</h1>
</header>

<style>
	h1 {
		text-align: center;
		margin-top: 0.25rem;
		margin-bottom: 5rem;
	}
	h4 {
		text-align: center;
		margin-top: 2rem;
		margin-bottom: 0;
	}
	.scripture-passage h3 {
		margin: 0;
		font-size: 1em;
	}
	.scripture-passage p {
		margin: 0;
	}
	.notes {
		font-size: 0.8em;
		margin: 0;
	}

	@media screen and (min-width: 600px) {
		.scripture-passage {
			float: left;
			max-width: 10em;
		}

		h4 {
			margin-top: 0;
		}
	}
</style>
