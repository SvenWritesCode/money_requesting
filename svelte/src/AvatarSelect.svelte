<script>
  import { voyage, selected } from "./stores.js";
  import { Collection } from "sveltefire";
  import Avatar from "./Avatar.svelte";
</script>

<style>
  input {
    opacity: 0 !important;
    width: 0 !important;
    height: 0 !important;
  }
</style>

{#if $voyage}
  <Collection path={`/voyage/${$voyage.id}/crewmate`} let:data>
    {#each data as user}
      <label>
        <Avatar {user} selected={user == $selected} />
        <input type="radio" value={user} bind:group={$selected} />
      </label>
    {/each}
  </Collection>
{/if}
