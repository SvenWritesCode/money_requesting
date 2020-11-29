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
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <AvatarSelect />
    <ShareUrl />
    <div>
      <Provisions />
    </div>
    <Undo />
    <Profile />
  </div>
</FirebaseApp>
