<script>
  import { voyage } from "./stores.js";
  import { User, Doc } from "sveltefire";
  import Tag from "./svg/Tag.svelte";
  import Ship from "./svg/Ship.svelte";
  import Venmo from "./svg/Venmo.svelte";

  const handleSelect = (boat, ref, user) => {
    $voyage
      .collection(`crewmate`)
      .doc(user.uid)
      .update({ boat }, { merge: true });
    ref.update({ boat }, { merge: true });
  };
</script>

<style>
  .name {
    width: 87%;
    position: absolute;
    left: 6%;
    text-align: center;
    top: 63%;
  }
  .providers {
    position: absolute;
    bottom: 3%;
    height: 21%;
    width: 67%;
    left: 26%;
  }
  .provider {
    background-color: #fecc96;
    width: 90%;
    text-align: left;
    outline: none;
  }
</style>

<User let:user>
  <div class="flex">
    <Doc path={`/mariner/${user.uid}`} let:data let:ref>
      <div class="relative h-64">
        <Tag text="">
          <Ship boat={data.boat} />
        </Tag>
        <span class="name outline-none" contenteditable>Kyle Trusler</span>
        <div class="providers">
          <div>
            <span class="absolute -left-4">@</span>
            <input
              class="provider appearance-none text-sm"
              value={data?.venmo || 'venmo'}
              on:change={({ target: { value } }) => {
                $voyage
                  .collection('crewmate')
                  .doc(user.uid)
                  .update({ venmo: value });
                ref.update({ venmo: value });
              }} />
          </div>
          <div class="w-full">
            <Venmo />
          </div>
        </div>
      </div>
    </Doc>
  </div>
</User>
