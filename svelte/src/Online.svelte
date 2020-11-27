<script>
  import { User } from "sveltefire";
  import Avatar from "./Avatar.svelte";

  const providers = [
{name: 'Venmo', src: 'https://cdn1.venmo.com/marketing/images/branding/venmo-icon.svg'}
  ];
  </script>

<User let:user>
  <Avatar name={user.uid} />

</User>

