<script>
  import BoatSelect from "./BoatSelect.svelte";
  import { voyage } from "./stores.js";
  import { User, Doc } from "sveltefire";

  const providers = [
    { name: "name" },
    {
      name: "venmo",
      src: "https://cdn1.venmo.com/marketing/images/branding/venmo-icon.svg",
    },

    {
      name: "cashapp",
      src: "https://cdn1.venmo.com/marketing/images/branding/venmo-icon.svg",
    },
  ];
  function updateProvider(name, ref) {
    $voyage.collection("crewmate").doc();
  }
  const handleSelect = (boat, ref, user) => {
    $voyage.collection(`crewmate`).doc(user.uid).update({ boat }, { merge: true });
    ref.update({ boat }, { merge: true });
  };
</script>

<style>
  div {
    display: flex;
  }
</style>

<User let:user>
  <div>
    <Doc path={`/mariner/${user.uid}`} let:data let:ref>
      {#if data.boat}
        <BoatSelect
          boat={data.boat}
          on:select={({ detail: { boat } }) => handleSelect(boat, ref, user)} />
      {/if}
      {#each providers as { name }}
        <label for={name}>{name}</label>
        <input
          id={name}
          value={data?.[name]}
          on:change={({ target: { value } }) => {
            $voyage
              .collection('crewmate')
              .doc(user.uid)
              .update({ [name]: value });
            ref.update({ [name]: value });
          }} />
      {/each}
    </Doc>
  </div>
</User>
