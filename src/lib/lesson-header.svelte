<script>
  import 'wired-elements/lib/wired-card.js';

  export let lessonNumber;
  export let lessonTitle;
  export let lessonSection;
  export let lessonScripture;

  const subHeading = (lessonSection || '') + (lessonNumber ? `#${lessonNumber}` : '');
  var passage, passageNotes;

  const scriptureMatch = /^(?<passage>.*?)\s*(?:\((?<notes>.+)\))?\s*$/.exec(lessonScripture);
  if (scriptureMatch) {
    passage = scriptureMatch[1];
    passageNotes = scriptureMatch.length > 2 ? scriptureMatch[2] : undefined;
  }
  
</script>

<header>
  {#if passage}
  <wired-card fill="#ffff0b" class="scripture-passage">
    <h3>Scripture:</h3> 
    <p>{passage}</p>
    {#if passageNotes}
    <p class="notes">* {passageNotes}</p>
    {/if}
  </wired-card>
  {/if}  

  {#if subHeading}
  <h4>{subHeading}</h4>
  {/if}
  
  <h1>{lessonTitle}</h1>
</header>
<style>
  h1 {
    text-align: center;
    margin-top: 0.67em;
    margin-bottom: 1.5em;
  }
  h4 {
    text-align: center;
    margin-top: 0;
    margin-bottom: 0;
  }
  .scripture-passage {
    float: left;
    width: 100px;
    text-align: center;
  }
  .scripture-passage :is(h3, p) {
    margin: 0;
  }
  .scripture-passage h3 {
    font-size: 1em;
  }
  .notes {
    font-size: 0.8em;
  }
</style>