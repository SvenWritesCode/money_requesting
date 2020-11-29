<script>
  import { voyage, selected, undo } from "./stores.js";
  import { Collection, User } from "sveltefire";
  import Avatar from "./Avatar.svelte";
</script>

<style>
  input {
    opacity: 0 !important;
    width: 0 !important;
    height: 0 !important;
  }
  span {
    cursor: pointer;
  }
</style>

<User let:user>
  <Collection path={`/voyage/${$voyage.id}/crewmate`} let:data let:ref>
    {#each data as crewmate}
      {#if user.uid !== crewmate.uid}
        <span
          on:click={(e) => {
            crewmate.ref.delete();
            $undo = { action: () => ref.add(crewmate), text: `Hoist ${crewmate.name} back aboard?` };
          }}>x</span>
      {/if}
      <label>
        <Avatar {crewmate} selected={crewmate == $selected} />
        <input type="radio" value={crewmate} bind:group={$selected} />
      </label>
    {/each}
  </Collection>
</User>
