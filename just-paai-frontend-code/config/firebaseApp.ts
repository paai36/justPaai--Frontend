import firebase from "firebase/compat/app";
import "firebase/compat/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDIJ-a6K0l21n83EHe0aIxEFEg2tjhXrfs",
  authDomain: "just-paai.firebaseapp.com",
  projectId: "just-paai",
  storageBucket: "just-paai.appspot.com",
  messagingSenderId: "906113291490",
  appId: "1:906113291490:web:89f0e24f7b4389989f7abb",
  measurementId: "G-VE6BJBTBXY"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signIn = () => auth.signInWithPopup(provider);
export const signOut = () => auth.signOut();