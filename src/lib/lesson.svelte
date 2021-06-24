<script>
  import { WiredCard } from 'wired-elements';
  export let section;
  export let lesson;
  console.log(lesson['Song suggestions'])
</script>

<article class="lesson">
  <header>
    <wired-card fill="#ffff0b">
      <h4>Scripture:</h4> 
      <p>{lesson['Scripture for lesson']}</p>
    </wired-card>  

    <h3>{section} #{lesson['Number']}</h3>
    <h1>{lesson['Title']}</h1>
  </header>

  <blockquote class="memory-verse">
    <h3>Memory Verse</h3>
    <wired-card fill="#b2ff46">
      <p>{lesson['Memory Verse']}</p>
    </wired-card>
  </blockquote>

  <h3>Main Truth</h3>
  <h2>{lesson['Main Truth']}</h2>

  <section>
    <h4>Summary</h4>
    <p>{lesson['Summary'].replace('\n', '<br/>')}</p>

    <wired-card elevation="2">
      <h4>God's character</h4>
      <p>{lesson['Character'].replace('\n', '<br/>')}</p>
    </wired-card>
  </section>

  <section>
    <h4>Application</h4>
    <p>{lesson['Application'].replace('\n', '<br/>')}</p>
  </section>

  <footer>
    <h4>Song suggestions</h4>
    <ul>
    {#each lesson['Song suggestions'] as song}
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

  header wired-card {
    float: left;
    width: 100px;
    text-align: center;
  }
  header wired-card :is(h4, p) {
    margin: 0;
  }
  header :is(h1,h3) {
    text-align: center;
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