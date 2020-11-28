<script>
  import { firebase } from "./firebase.js";
  import { voyage, selected } from "./stores.js";
  import { Collection } from "sveltefire";
  import Provision from "./Provision.svelte";
  import ProvisionInput from "./ProvisionInput.svelte";
  const handleSelect = (provision, provisionRef, remove) => {
    console.log(remove);
    provisionRef.doc(provision.id).update({
      crewmate: remove
        ? firebase.firestore.FieldValue.arrayRemove($selected.name)
        : firebase.firestore.FieldValue.arrayUnion($selected.name),
    });
  };
</script>

<Collection path={`/voyage/${$voyage.id}/provision`} let:data let:ref>
  Sum:
  {data.reduce((accumulator, { price }) => parseFloat(accumulator) + parseFloat(price), 0)}
  {#each data as provision (provision)}
    <Provision
      {provision}
      on:select={({ detail: { remove } }) => handleSelect(provision, ref, remove)} />
  {/each}

  <ProvisionInput {ref} />
</Collection>
