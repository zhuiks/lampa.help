<script>
	export let text = '';

	const paragraphs = text.split('\n').map((p) => {
		const found = p.match(/^(.+)__(.+)__$/);
		if (found) {
			return { text: found[1], prayer: found[2] };
		}
		return { text: p };
	}, []);
</script>

{#each paragraphs as { text, prayer }}
	<p>
		{text}
		{#if prayer}
			<em class="prayer">{prayer}</em>
		{/if}
	</p>
{/each}

<style>
	.prayer {
		font-style: italic;
	}
	.prayer::before {
		content: '🙏';
    font-style: normal;
    padding-inline-start: 0.5em;
	}
</style>
