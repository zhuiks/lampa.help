<script>
  import 'wired-elements/lib/wired-card.js';
  import 'wired-elements/lib/wired-divider.js';
  import LessonHeader from './lesson-header.svelte';
  import MemoryVerse from './memory-verse.svelte';

  export let section;
  export let lesson;

  function sunitize(str) {
    return str.replace(/</g, '').replace(/>/g, '').replace('\n', '<br/>');
  }
</script>

<article class="lesson">
  <LessonHeader
    lessonNumber={lesson['Number']}
    lessonTitle={lesson['Title']}
    lessonSection={section}
    lessonScripture={lesson['Scripture']} />

  <MemoryVerse verse={lesson['Verse']} />  

  <h3>Main Truth</h3>
  <h2>{lesson['Truth']}</h2>

  <section>
    <h3>Summary</h3>
    <p>{@html sunitize(lesson['Summary'])}</p>

    <wired-card elevation="2">
      <h3>God's character</h3>
      <p>{lesson['Character']}</p>
    </wired-card>
  </section>

  <section>
    <h3>Application</h3>
    <p>{@html sunitize(lesson['Application'])}</p>
  </section>

  <footer>
    <h3>Song suggestions</h3>
    <ul>
    {#each lesson['Songs'] as song}
      <li>{song}</li>
    {/each}
    </ul>
  </footer>
</article>

<style>
  .lesson {
    padding: 1em 2em;
    clear: both;
  }

  h2 {
    color: var(--orange);
  }
</style>