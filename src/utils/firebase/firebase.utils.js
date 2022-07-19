import { initializeApp } from "firebase/app";
import { getFirestore, getDoc, setDoc, doc } from "firebase/firestore";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword
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
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();

export const createAuthUserWithEmailAndPassword = async (email,password,displayName) => {
    if(!email || !password) return;
    const user = await createUserWithEmailAndPassword(auth,email,password);
    createUserDocumentFromAuth(user,{displayName});
}

export const createUserDocumentFromAuth =  async (userAuth,additionalData = {}) => {
    if(!userAuth) return;
    const userDocRef = doc(db,"/users",userAuth.user.uid);
    const userSnapshot = await getDoc(userDocRef);

    if(!userSnapshot.exists()) {
        const { displayName,email } = userAuth.user;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,email,createdAt,...additionalData
            })
        } catch(error) {
            console.log("Error Adding User in Database",error.message);
        }
    }

    return userSnapshot;
}