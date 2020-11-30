<script>
  import Sailboat from "./Sailboat.svelte";
  import Cruiseship from "./Cruiseship.svelte";
  import Cruiseprofile from "./Cruiseprofile.svelte";
  import Submarine from "./Submarine.svelte";
  import Cargoship from "./Cargoship.svelte";
  import { shipColors } from "../ships";
  export let type = "Cruiseprofile";
  export let lighter, lightest;
  export let boat = null;
  const boats = {
    Sailboat: Sailboat,
    Cruiseship: Cruiseship,
    Cruiseprofile: Cruiseprofile,
    Submarine: Submarine,
    Cargoship: Cargoship,
  };
  $: console.log(boat);
  if (boat) {
    if (boat?.split("#")[1]) {
      [lighter, lightest] = shipColors["#" + boat?.split("#")[1]];
    }
    if (boat?.split("#")[0]) {
      type = boat?.split("#")[0];
    }
  }
  $: console.log(lighter, type);
  const Boat = boats[type];
</script>

<Boat {lightest} {lighter} />
