<script>
  import { selected } from "./stores.js";
  import { User } from "sveltefire";
  import { createEventDispatcher } from "svelte";
  export let provision;

  const dispatch = createEventDispatcher();

  const handleSelect = (remove) => {
    dispatch("select", { remove });
  };

  const { description, price, crewmate } = provision;
</script>

<User let:user>
  <div>
    <span>{description}</span>:
    <span>${price}</span>
    {#if crewmate}
      {#each crewmate as name}<span>{name}</span>{/each}
    {/if}
    {#if $selected}
      <button
        on:click={() => handleSelect(crewmate && crewmate.includes($selected.name))}>
        {$selected.uid == user.uid ? 'I' : $selected.name}
        {crewmate && crewmate.includes($selected.name) ? "didn't get" : 'got'}
        this</button>
    {/if}
  </div>
</User>
