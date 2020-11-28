<script>
  import { FirebaseApp, User, Doc, Collection } from "sveltefire";
  import { firebase } from "./firebase";
  import ShareUrl from "./ShareUrl.svelte";
  import AvatarSelect from "./AvatarSelect.svelte";
  import Profile from "./Profile.svelte";
  import Provisions from "./Provisions.svelte";
</script>
<style>
</style>
<FirebaseApp {firebase}>
  <div>
  <Profile />
  <AvatarSelect />
  <ShareUrl />

  <div>
  <Provisions />
  </div>
  </div>
</FirebaseApp>
