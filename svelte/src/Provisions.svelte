<script>
  import { firebase } from "./firebase.js";
  import { voyage, selected, undo } from "./stores.js";
  import { Collection } from "sveltefire";
  import Provision from "./Provision.svelte";
  import ProvisionInput from "./ProvisionInput.svelte";
  import Fees from "./Fees.svelte";
  let tax, tip, fees;

  const handleSelect = ({ id }, provisionRef, remove) => {
    provisionRef.doc(id).update({
      crewmate: remove
        ? firebase.firestore.FieldValue.arrayRemove($selected.name)
        : firebase.firestore.FieldValue.arrayUnion($selected.name),
    });
  };

  const handleRemove = ({ id }, provisionRef) => {
    const docRef = provisionRef.doc(id);
    docRef.get().then((doc) => {
      $undo = () => provisionRef.add(doc.data());
      docRef.delete();
    });
  };

  const sumProvisions = (provisions) =>
    provisions.reduce(
      (accumulator, { price }) => parseFloat(accumulator) + parseFloat(price),
      0
    );

  const sumPeople = (provisions) => {
    return provisions.reduce((acc, { price, crewmate }) => {
      if (crewmate) {
        crewmate.forEach((name) => {
          if (!acc[name]) acc[name] = 0;
          acc[name] += parseInt(price) / crewmate.length;
        });
      }
      return acc;
    }, {});
  };
</script>

<Collection
  path={`/voyage/${$voyage.id}/provision`}
  let:data={provisions}
  let:ref>
  {#each provisions as provision (provision)}
    <Provision
      {provision}
      on:select={({ detail: { remove } }) => handleSelect(provision, ref, remove)}
      on:remove={() => handleRemove(provision, ref)} />
  {/each}
  <div>
    <ProvisionInput {ref} />
    <Fees bind:tax bind:tip bind:fees />
  </div>
  <div>
    People
    {#each Object.entries(sumPeople(provisions)) as [name, total]}
      <div>{name}: ${total}</div>
    {/each}
  </div>
  <div>
    Total ${sumProvisions(provisions) + parseInt(tax) + parseInt(tip) + parseInt(fees)}
  </div>
</Collection>
