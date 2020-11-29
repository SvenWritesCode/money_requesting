<script>
  import { createEventDispatcher } from "svelte";
  export let selected = false;
  export let isRemovable = true;
  export let crewmate;
  crewmate.name = crewmate.name || "Anon";

  const dispatch = createEventDispatcher();

  const handleRemove = () => {
    // TODO: update so you can throw them overboard to kick out
    dispatch("remove");
  };
</script>

<span
  class="relative transition-all inline-flex items-center justify-center h-12 w-12 rounded-full bg-gray-500"
  class:bg-green-500={selected}>
  {#if isRemovable}
    <span
      on:click={handleRemove}
      class="absolute top-0 right-0 block h-4 w-4 rounded-full ring-2 ring-white bg-red-400 cursor-pointer" />
  {/if}
  <span
    class="text-lg font-medium leading-none text-white">{crewmate.name.substring(0, 2)}</span>
</span>
