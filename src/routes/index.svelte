<script>
  import { Localized } from '@nubolab-ffwd/svelte-fluent';
	import { currentPlan } from '$lib/store.js';

  currentPlan.set(null);
</script>
<img src="assets/lampochka.png" alt="Little Lamp">
<h1><Localized id="title" /></h1>

<p><Localized id="intro" /></p>
<p><Localized id="about" /></p>
