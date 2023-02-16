// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCg9LZPxXaik4z2xZ9GhwnlgQtMuLfgJls",
  authDomain: "clone-6e848.firebaseapp.com",
  projectId: "clone-6e848",
  storageBucket: "clone-6e848.appspot.com",
  messagingSenderId: "398396943880",
  appId: "1:398396943880:web:0f7890930da1bbe61dabbd",
  measurementId: "G-GXVS7K76PK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
