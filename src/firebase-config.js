// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMRAHa16Fg79P1tXivnipvLxb52VFGUHk",
  authDomain: "blog-project-446a8.firebaseapp.com",
  projectId: "blog-project-446a8",
  storageBucket: "blog-project-446a8.appspot.com",
  messagingSenderId: "542544826556",
  appId: "1:542544826556:web:27a544ad5e3c256c4ac0b9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();