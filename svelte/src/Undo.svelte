<script>
  import { undo } from "./stores.js";
  import { fade } from "svelte/transition";
</script>

{#if $undo}
  <button
    transition:fade
    on:click={() => {
      $undo();
      $undo = null;
    }}>Undo?</button>
{/if}
