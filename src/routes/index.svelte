<script>
	import { currentPlan } from '$lib/store.js';
  import PlanSelect from "$lib/elements/plan-select.svelte";

  currentPlan.set(null);
</script>
<img src="assets/lampochka.png" alt="Little Lamp">
<h1>Little Lamp</h1>

<p>Little Lamp is a site in progress which ultimately will offer children’s ministry resources including: Chronological Bible lesson plans, training videos for children’s ministry, memory verse game ideas, craft ideas, and children’s Bible songs.</p>

<p>While serving in a church plant in Central Asia, our pastor asked the children’s ministry team to develop a chronological Bible program that focused on Christ throughout the whole of Scripture. The result is a 2 year program for younger children, offering 50 Old Testament lessons and 50 New Testament lessons and a 4 year program for older children with 100 Old Testament lessons and 100 New Testament lessons. There are separate lessons for Easter and Christmas to round out the 52 week calendar year. Each lesson includes a God-centered main truth, a memory verse, a list of God’s character revealed in the passage and an application. Prayers in the application section are italicised and are purely suggestions for how the heart may respond to God’s Word. The lesson plans are designed to help the teacher to prepare personally for the lesson. Often there are many ideas for application offered in the lesson plan. The teacher can prayfully decide which ones to present to the children. Craft ideas, scripts for dialogue with the class and teaching method are not included here. We believe that the Holy Spirit desires to lead and inspire each of you as you seek Jesus’ help for passing on God’s eternal truth to others. May God give you joy in preparing and in teaching!</p>

<p>In Jesus, The Lampochka Team</p>

<PlanSelect />