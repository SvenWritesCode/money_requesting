<script>
  import CopyButton from './CopyButton.svelte';
import { db } from './firebase';

  export let ref = null;
  export let id = null;

  const queryId = window.location.search.split("i=")?.[1];
  if (queryId) {
    ref = db.collection("instance").doc(queryId);
    id = queryId;
  } else {
    ref = db.collection("instance").doc();
    id = ref.id;
  }

  const text = `${window.location.href}?i=${id}`;
</script>

<span>Here's the share link! 👉 <CopyButton {text}/></span>