<script>
  import { WiredCard } from 'wired-elements';
  export let lesson;
</script>

<article class="lesson">
  <h1>#{lesson['Number']}: {lesson['Title']}</h1>
  <h3>Main Truth</h3>
  <h2>{lesson['Main Truth']}</h2>
  <blockquote>
    <wired-card>
      <h3>Memory Verse</h3>
      <p>{lesson['Memory Verse']}</p>
    </wired-card>
  </blockquote>
</article>