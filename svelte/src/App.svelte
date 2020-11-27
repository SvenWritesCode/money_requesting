<script>
  import { FirebaseApp, User, Doc, Collection } from "sveltefire";
  import { firebase } from "./firebase";
  import ShareUrl from "./ShareUrl.svelte";
  import Online from "./Online.svelte";
</script>

<FirebaseApp {firebase}>
  <ShareUrl />
  <Online />
</FirebaseApp>
