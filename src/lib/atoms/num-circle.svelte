<script>
  export let num;
  export let link = '#';
</script>

{#if num}
  <a class="circle" href={link} rel="external"><strong>#{num}</strong></a>
{/if}

<style>
  	.circle {
		display: block;
		height: var(--circle-size, 2em);
		width: var(--circle-size, 2em);
		line-height: var(--circle-size, 2em);
		text-align: center;
		font-size: 0.6em;
		letter-spacing: -1px;
		border-radius: 50%;
		border: 2px solid var(--primary-color);
		/* outline: 2px solid white; */
		/* outline-offset: 2px; */
	}
</style>