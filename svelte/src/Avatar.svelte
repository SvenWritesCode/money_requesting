<script>
  export let selected;
  export let user = { name: "Anon" };
</script>

<style>
  span {
    font-size: 24px;
  }
  .selected {
    border: 1px solid green;
  }
</style>

<span class:selected> {user.name} </span>
