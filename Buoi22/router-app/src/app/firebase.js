// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrxTfSDtDFf1FhgaPyJ2J3zr-CjGwqqVY",
  authDomain: "router-f9b48.firebaseapp.com",
  projectId: "router-f9b48",
  storageBucket: "router-f9b48.appspot.com",
  messagingSenderId: "262666045686",
  appId: "1:262666045686:web:a087989cfd4825a74804d7",
  measurementId: "G-FVEHPBR262",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
firebase.initializeApp(firebaseConfig)
const db = firebase.firestore();
export { db };
export {firebase}
// const analytics = getAnalytics(app);
