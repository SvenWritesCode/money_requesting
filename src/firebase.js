import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/performance";
import "firebase/analytics";

if (!firebase.apps.length)
  firebase.initializeApp({
    apiKey: "AIzaSyC3S7dHHgBPfDeKcCUFG7XIeYPzajRttNs",
    authDomain: "payme-180fc.firebaseapp.com",
    databaseURL: "https://payme-180fc.firebaseio.com",
    projectId: "payme-180fc",
    storageBucket: "payme-180fc.appspot.com",
    messagingSenderId: "373086809850",
    appId: "1:373086809850:web:86b19f4f1865dae1f5a343",
  });

export { firebase };

export const db = firebase.firestore();
export const auth = firebase.auth();

import { voyage } from "./stores";
const queryId = window.location.search.split("i=")?.[1];
let voyageRef;
if (queryId) {
  voyageRef = db.doc(`/voyage/${queryId}`);
} else {
  voyageRef = db.collection("voyage").doc();
}
voyage.set(voyageRef);
const crewmateRef = voyageRef.collection("crewmate");
auth.signInAnonymously().then(({ user: { uid } }) => {
  db.doc(`mariner/${uid}`)
    .set(
      { voyages: firebase.firestore.FieldValue.arrayUnion(voyageRef.id) },
      { merge: true }
    )
    .then(() => {
      voyageRef.set({ date: new Date() }, { merge: true });
      db.doc(`mariner/${uid}`)
        .get()
        .then((mariner) => {
          crewmateRef.doc(uid).set({ ...mariner.data(), uid });
        });
    });
});
