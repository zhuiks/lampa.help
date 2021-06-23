<script>
  import { page } from '$app/stores';
  import Lesson from '$lib/lesson.svelte';

  const { num } = $page.params;  
</script>


<h1>Lesson #{num}</h1>
<Lesson {num}/>