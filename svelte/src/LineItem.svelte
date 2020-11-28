<script>
  export let lineItem;
  const { description, total } = lineItem;
</script>

<div>
  <h3>{description}</h3>
  <span>${total}</span>
  <button>I got this</button>
  <button>I split this</button>
</div>
