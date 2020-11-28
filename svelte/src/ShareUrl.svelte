<script>
  import CopyButton from "./CopyButton.svelte";
  import { instance } from './stores';
</script>

<span>Here's the share link! 👉
  <CopyButton text={`${window.location.host}/?i=${$instance.id}`} />
</span>
