<script>
  export let selected;
  export let crewmate = { name: "Anon" };
</script>

<style>
  span {
    font-size: 24px;
  }
  .selected {
    border: 1px solid green;
  }
</style>

<span class:selected> {crewmate.name} </span>
