<script>
  import { fade } from "svelte/transition";
  import { onMount } from "svelte";

  import Clipboard from "clipboard";
  export let text;

  let button;
  onMount(async () => {
    if (button) {
      new Clipboard(button, { text: () => text });
    }
  });

  let page = 0;
  const story = [
    "Copy Text",
    "You're amazing!",
    "Nice work.",
    "Awesome.",
    "😁",
    "Enjoy 😀",
    "Good luck.",
    "OK",
    "That's enough 😊",
    "Seriously stop...",
    "I'll take away the toy.",
    "That's it. 😤",
  ];
</script>

{#if story[page]}
  <button
    out:fade
    bind:this={button}
    on:click={() => page++}>{story[page]}</button>
{/if}
