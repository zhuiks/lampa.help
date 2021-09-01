<script>
	import { Localized } from '@nubolab-ffwd/svelte-fluent';

	export let lessonNumber;
	export let lessonTitle;
	export let lessonSection;
	export let lessonTruth;

	const subHeading = (lessonSection || '') + (lessonNumber ? ` #${lessonNumber}` : '');
</script>

<header>
	<div class="hero">
		<!-- <h3 class="truth"><Localized id="main-truth" /></h3> -->
		<h2>{lessonTruth}</h2>
	</div>

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

  .hero {
		margin: -3em -1.5em 1em;
		height: 85vh;
		display: grid;
		place-content: center;
		background: linear-gradient(160deg, var(--secondary-color) 10%, var(--tertiary-color));
	}

	h2 {
		color: var(--primary-color);
		margin: 0 2.5rem;
		text-shadow: 0 0 15px #FFF;
		text-align: center;
		font-weight: bold;
		text-transform: uppercase;
		letter-spacing: 0.12em;
		line-height: 1.2;
	}
	/* h3.truth {
		margin: 0 5rem;
		font-weight: normal;
		color: white;
	} */
	@media screen and (min-width: 600px) {
		/* h3.truth {
			clear: left;
			margin-top: 5.5rem;
		} */
		h2 {
			margin-bottom: 3.5rem;
		}
		h4 {
			margin-top: 0;
		}
	}
</style>
