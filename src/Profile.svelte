<script>
  import Providers from "./Providers.svelte";
  import { voyage } from "./stores.js";
  import { User, Doc } from "sveltefire";
  import Tag from "./svg/Tag.svelte";
  import Ship from "./svg/Ship.svelte";

  const handleSelect = (boat, ref, user) => {
    $voyage
      .collection(`crewmate`)
      .doc(user.uid)
      .update({ boat }, { merge: true });
    ref.update({ boat }, { merge: true });
  };
</script>

<style>
  div {
    display: flex;
  }
  .name {
    width: 87%;
    position: absolute;
    left: 6%;
    text-align:center;
    top: 63%;
  }

  .providers {
    position: absolute;
    bottom: 3%;
    height: 21%;
    width: 67%;
    left: 26%;
  }
</style>

<User let:user>
  <div>
    <Doc path={`/mariner/${user.uid}`} let:data let:ref>
      <div class="relative h-64">
        <Tag text="">
          <Ship boat={data.boat} />
        </Tag>
        <div class="providers">
          <Providers />
        </div>
        <span class="name outline-none" contenteditable>Kyle Trusler</span>
        <div class="providers">
          <Providers />
        </div>
      </div>
    </Doc>
  </div>
</User>
