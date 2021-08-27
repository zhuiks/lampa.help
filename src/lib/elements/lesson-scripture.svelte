<script>
	import { Localized } from '@nubolab-ffwd/svelte-fluent';
	import WiredCard from '$lib/wired/wired-card.svelte';

  export let scripture;
  
	var passage, passageNotes;

	const scriptureMatch = /^(?<passage>.*?)\s*(?:\((?<notes>.+)\))?\s*$/.exec(scripture);
	if (scriptureMatch) {
		passage = scriptureMatch[1];
		passageNotes = scriptureMatch.length > 2 ? scriptureMatch[2] : undefined;
	}
</script>

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

<style>
  .scripture-passage {
    padding-right: 1em;
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
	}

</style>