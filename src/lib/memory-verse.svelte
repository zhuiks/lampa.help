<script>
  import 'wired-elements/lib/wired-card.js';

  export let verse;
</script>

<blockquote class="memory-verse">
	<h3>Memory Verse</h3>
	<wired-card fill="#b2ff46">
		<p>{verse}</p>
	</wired-card>
</blockquote>


<style>
  .memory-verse {
    float: right;
    width: 40%;
    position: relative;
  }
  .memory-verse h3{
    position: absolute;
    top: -2.5em;
    right: 1em;
    transform: rotate(2deg);
    color: #999;
    font-weight: normal;
  }
  .memory-verse wired-card {
    padding: 0 1em;
    text-align: center;
    transform: rotate(1deg);
  }

</style>