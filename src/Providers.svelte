<script>
  import { voyage } from "./stores.js";
  import { User, Doc } from "sveltefire";

  const providers = [
    {
      name: "venmo",
      src: "https://cdn1.venmo.com/marketing/images/branding/venmo-icon.svg",
    },

    // {
    //   name: "cashapp",
    //   src: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Square_Cash_app_logo.svg",
    // },
  ];
</script>
<style>
  .provider {
    background-color: #fecc96;
    width: 90%;
    text-align: center;
    outline: none;
  }
</style>
<User let:user>
  <Doc path={`/mariner/${user.uid}`} let:data let:ref>
    <div class="flex flex-col m-auto">
      <input
        class="provider appearance-none text-sm"
        value={data?.venmo || 'venmo'}
        on:change={({ target: { value } }) => {
          $voyage.collection('crewmate').doc(user.uid).update({ venmo: value });
          ref.update({ venmo: value });
        }} />
    </div>
  </Doc>
</User>
