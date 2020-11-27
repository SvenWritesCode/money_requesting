<script>
  import { FirebaseApp, User, Doc, Collection } from "sveltefire";

  import firebase from "firebase/app";
  import "firebase/firestore";
  import "firebase/auth";
  import "firebase/performance";
  import "firebase/analytics";

  let name;
  const firebaseConfig = {
    apiKey: "AIzaSyC3S7dHHgBPfDeKcCUFG7XIeYPzajRttNs",
    authDomain: "payme-180fc.firebaseapp.com",
    databaseURL: "https://payme-180fc.firebaseio.com",
    projectId: "payme-180fc",
    storageBucket: "payme-180fc.appspot.com",
    messagingSenderId: "373086809850",
    appId: "1:373086809850:web:86b19f4f1865dae1f5a343",
  };
  if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  firebase.auth().signInAnonymously();
  let id = null;
  let ref = null;

  const queryId = window.location.search.split("i=")?.[1];
  if (queryId) {
    ref = db.collection("instance").doc(queryId);
    id = queryId;
  } else {
    ref = db.collection("instance").doc();
    id = ref.id;
  }
  name = "hi";
  ref.set({ name });
</script>

<div>Share url: {`${window.location.href}?i=${id}`}</div>
<label for="name">Name</label>
<input id="name" bind:value={name} />

<FirebaseApp {firebase}>
  <User let:user>
    <span>user{user.uid}</span>
    <Doc path={ref} let:data={item}>
      <span>{item.price}:</span>
      {#each item.participants as participant}
        <span> {participant} </span>
      {/each}
      <div slot="loading">
        <h1>loading...</h1>
      </div>
    </Doc>
  </User>
</FirebaseApp>
