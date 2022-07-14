import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCRQ5g1sg42aXW_aC8DH5er9Yh4zQ9Ibrc",
  authDomain: "crwn-db-8750e.firebaseapp.com",
  projectId: "crwn-db-8750e",
  storageBucket: "crwn-db-8750e.appspot.com",
  messagingSenderId: "67023989358",
  appId: "1:67023989358:web:8b8e42ac4663b66f01d47f",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth,provider);