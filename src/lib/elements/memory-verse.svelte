<script>
	import { Localized } from '@nubolab-ffwd/svelte-fluent';
	import WiredCard from '$lib/wired/wired-card.svelte';

	export let verse;
</script>

<blockquote class="memory-verse">
	<h3><Localized id="verse" /></h3>
	<WiredCard fill="green">
		<p>{verse}</p>
	</WiredCard>
</blockquote>

<style>
	.memory-verse {
		position: relative;
		text-align: right;
		margin-inline-end: 0;
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

	@media screen and (min-width: 600px) {
		.memory-verse {
			float: right;
			width: 40%;
			transform: rotate(1deg);
		}
	}
</style>
