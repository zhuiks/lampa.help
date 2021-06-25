<script>
  import 'wired-elements/lib/wired-link.js';

  export let num;
  export let title;
  export let link;
</script>

<strong>#{num}</strong> <wired-link href={link}>{title}</wired-link>