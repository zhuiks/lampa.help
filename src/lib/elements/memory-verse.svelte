<script>
	import WiredCard from '$lib/wired/wired-card.svelte'

	export let verse;
</script>

<blockquote class="memory-verse">
	<h3>Memory Verse</h3>
	<WiredCard fill="green">
		<p>{verse}</p>
	</WiredCard>
</blockquote>

<style>
	.memory-verse {
		float: right;
		width: 40%;
		position: relative;
		transform: rotate(1deg);
	}
	.memory-verse h3 {
		position: absolute;
		top: -2.5em;
		right: 1em;
		transform: rotate(1deg);
		color: #999;
		font-weight: normal;
	}
	.memory-verse p {
		padding: 0 1em;
		text-align: center;
	}
</style>
