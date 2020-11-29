<script>
  export let tax, tip, fees;
</script>

<label for="tax">
  <input id="tax" bind:value={tax} />
  tax
</label>
<label for="tip">
  <input id="tip" bind:value={tip} />
  tip
</label>
<label for="fees">
  <input id="fees" bind:value={fees} />
  fees
</label>