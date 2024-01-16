// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATqGSMPtTbWEdEO_-WDdcjnK_Iu3sG7IE",
  authDomain: "quillquest-201.firebaseapp.com",
  projectId: "quillquest-201",
  storageBucket: "quillquest-201.appspot.com",
  messagingSenderId: "605376436518",
  appId: "1:605376436518:web:a345658be2919dab2189e7",
  measurementId: "G-JYJYQW55NJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
