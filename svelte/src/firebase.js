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

import { instance } from "./stores";
const queryId = window.location.search.split("i=")?.[1];
let instanceRef = db.doc(`instance/${queryId}`);
if (!instanceRef) {
  instanceRef = db.collection("instance").doc();
}
const usersRef = instanceRef.collection("users");
instance.set(instanceRef);
auth.signInAnonymously().then(({ user: { uid } }) => {
  db.doc(`users/${uid}`)
    .set({}, { merge: true })
    .then(() => {
      db.doc(`users/${uid}`)
        .get()
        .then((user) => {
          usersRef.doc(uid).set({ ...user.data() });
        });
    });
});
