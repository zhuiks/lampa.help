<script>
	import { onMount } from 'svelte';
  import Annotation from 'svelte-rough-notation';
  
  
	export let values;
  
	let visible = false;
	onMount(() => {
		setTimeout(() => {
			visible = true;
		}, 1000);
	});
</script>

<section class="character">
	<div>
			<Annotation bind:visible type="box" padding={10}>
				<div class="character-wrapper">
					<h3>God's character:</h3>
					{#each values as item}
						<div>{item}</div>
					{/each}
				</div>
			</Annotation>
	</div>
</section>

<style>
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
