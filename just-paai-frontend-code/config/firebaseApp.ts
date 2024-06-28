import firebase from "firebase/compat/app";
import "firebase/compat/auth"

const firebaseConfig = {
  apiKey: "AIzaSyALoJV9KB0GAMIKpm_ruOF9du63PXChlhM",
  authDomain: "justipaai.firebaseapp.com",
  projectId: "justipaai",
  storageBucket: "justipaai.appspot.com",
  messagingSenderId: "367431502120",
  appId: "1:367431502120:web:2801a12e63785b2196a81d",
  measurementId: "G-9Q7ELND9EJ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signIn = () => auth.signInWithPopup(provider);
export const signOut = () => auth.signOut();