<script>
  export let selected;
  export let crewmate;
  crewmate.name = crewmate.name || "Anon"
</script>

<style>
  span {
    font-size: 24px;
  }
</style>

<span
  class="transition-all inline-flex items-center justify-center h-12 w-12 rounded-full bg-gray-500"
  class:bg-green-500={selected}>
  <span
    class="text-lg font-medium leading-none text-white">{crewmate.name.substring(0, 2)}</span>
</span>
