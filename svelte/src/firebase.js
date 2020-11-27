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

auth.signInAnonymously();
