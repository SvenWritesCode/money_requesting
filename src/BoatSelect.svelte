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
  <div on:click={() => (open = !open)}>
    <Ship {boat} />
  </div>
{:else if !selectedType}
  {#each shipTypes as type (type)}
    <div on:click={() => (selectedType = type)}>
      {type}
      <Ship {type} />
    </div>
  {/each}
{:else}
  {#each Object.entries(shipColors) as [theme, [lightest, lighter]] (theme)}
    <div on:click={() => handleSelect(selectedType + theme)}>
      {selectedType}
      {theme}
      <Ship type={selectedType} {lightest} {lighter} />
    </div>
  {/each}
{/if}
