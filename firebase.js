// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPmzpCScoNlQo7AV44JacGv1msA-uJ0uc",
  authDomain: "appsmovilesurbe.firebaseapp.com",
  projectId: "appsmovilesurbe",
  storageBucket: "appsmovilesurbe.appspot.com",
  messagingSenderId: "1035752813852",
  appId: "1:1035752813852:web:90d03438efcc9a9caab6d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
