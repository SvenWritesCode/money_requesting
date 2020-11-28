<script>
  import { instance } from "./stores.js";
  import { Collection } from "sveltefire";
  import Avatar from "./Avatar.svelte";
</script>

{#if $instance}
  <Collection path={`/instance/${$instance.id}/users`} let:data>
    {#each data as user}
      <Avatar name={user?.name || user?.venmo} />
    {/each}
  </Collection>
{/if}
