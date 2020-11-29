<script>
  import CopyButton from "./CopyButton.svelte";
  import { voyage } from './stores';
</script>

<span>Here's the share link! 👉
  <CopyButton text={`${window.location.host}/?i=${$voyage.id}`} />
</span>
