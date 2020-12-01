<script>
  import { shipColors, shipTypes } from "./ships.js";
  import { createEventDispatcher } from "svelte";
  import Ship from "./svg/Ship.svelte";

  export let boat;
  const dispatch = createEventDispatcher();

  let open = false;
  let selectedType = null;
  const handleSelect = (boat) => {
    dispatch("select", { boat });
    open = false;
    selectedType = null;
  };
</script>

{#if !open}
  <Ship on:click={() => (open = !open)} {boat} />
{:else if !selectedType}
  {#each shipTypes as type (type)}
    <Ship on:click={() => (selectedType = type)} {type} />
  {/each}
{:else}
  {#each Object.entries(shipColors) as [theme, [lightest, lighter]] (theme)}
    <Ship
      on:click={() => handleSelect(selectedType + theme)}
      type={selectedType}
      {lightest}
      {lighter} />
  {/each}
{/if}
