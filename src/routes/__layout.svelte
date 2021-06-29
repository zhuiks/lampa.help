<script>
  import '../app.css';
</script>

<header>
  <h5 class="slogan"><a href="/">Bright Ideas for Kid's Bible Lessons</a></h5>
</header>
<main>
  <slot/>
</main>

<footer>
  (c) 2021
</footer>

<style>

  main {
    padding: 3em 1.5em 1em;
  }
  header {
    background: var(--blue);
    padding: 0 1.5em;
    height: 52px;
  }
  header h5 {
    background: url("/assets/logo.png") no-repeat 0 50%;
    height: 100%;
    box-sizing: border-box;
    margin: 0;
    padding: 15px 0 5px 64px;
  }
  header h5 a {
    color: white;
    text-shadow: 2px 0 5px #33333388;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }
  footer {
    margin-top: auto;
  }
</style>