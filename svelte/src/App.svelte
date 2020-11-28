<script>
  import { FirebaseApp, User, Doc, Collection } from "sveltefire";
  import { firebase } from "./firebase";
  import ShareUrl from "./ShareUrl.svelte";
  import Online from "./Online.svelte";
  import Profile from "./Profile.svelte";
  import ItemGrid from "./ItemGrid.svelte";
</script>

<FirebaseApp {firebase}>
  <Profile />
  <ShareUrl />
  <Online />
  <ItemGrid />
</FirebaseApp>
