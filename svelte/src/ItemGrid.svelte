<script>
  import { receiptData } from "./receipt.js";
  import LineItem from "./LineItem.svelte";
</script>

{#each receiptData.line_items as lineItem}
  <LineItem {lineItem} />
{/each}
