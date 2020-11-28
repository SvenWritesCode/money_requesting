<script>
  import { voyage } from "./stores.js";
  import { User, Doc } from "sveltefire";
  import Avatar from "./Avatar.svelte";

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
</script>

<style>
  img {
    height: 24px;
  }
  div {
    display: flex;
  }
</style>

<User let:user>
  <div>
    <Doc path={`/mariner/${user.uid}`} let:data let:ref>
      {#each providers as { name, src }}
        {#if src}<img alt={name} {src} />{/if}

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
