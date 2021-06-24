<script>
  import 'wired-elements/lib/wired-card.js';
  import 'wired-elements/lib/wired-divider.js';
  import LessonHeader from './lesson-header.svelte';

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

  <blockquote class="memory-verse">
    <h3>Memory Verse</h3>
    <wired-card fill="#b2ff46">
      <p>{lesson['Verse']}</p>
    </wired-card>
  </blockquote>

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

  .memory-verse {
    float: right;
    width: 40%;
    position: relative;
  }
  .memory-verse h3{
    position: absolute;
    top: -3em;
    right: 1em;
    transform: rotate(-2deg);
  }
  .memory-verse wired-card {
    padding: 0 1em;
    text-align: center;
    transform: rotate(-1deg);
  }
</style>