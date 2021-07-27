<script>
	export let text = '';

	const paragraphs = text.split('\n').reduce((a, p) => {
    var arr = [...a];
    const found = p.match(/^(.+)__(.+)__$/);
    if(found) {
      arr.push({text: found[1]}, {prayer: true, text: found[2]});
    } else {
      arr.push({text: p});
    }
    return arr;
  }, []);
</script>

{#each paragraphs as {text, prayer}}
	<p class:prayer>{text}</p>
{/each}

<style>
  .prayer {
    margin-top: -0.5em;
    padding-inline-start: 3em;
    font-style: italic;
  }
</style>