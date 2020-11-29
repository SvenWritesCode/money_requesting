<script>
  import { FirebaseApp } from "sveltefire";
  import { firebase } from "./firebase";
  import ShareUrl from "./ShareUrl.svelte";
  import AvatarSelect from "./AvatarSelect.svelte";
  import Profile from "./Profile.svelte";
  import Provisions from "./Provisions.svelte";
  import Undo from "./Undo.svelte";
</script>

<FirebaseApp {firebase}>
  <div>
    <Profile />
    <AvatarSelect />
    <ShareUrl />
    <div>
      <Provisions />
    </div>
  </div>
  <Undo />
</FirebaseApp>
