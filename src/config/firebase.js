// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"




const firebaseConfig = {
  apiKey: "AIzaSyCmZerrlw3uOAzd-6YImYXRjXrLyxvS3AI",
  authDomain: "alandatabase-6b54b.firebaseapp.com",
  projectId: "alandatabase-6b54b",
  storageBucket: "alandatabase-6b54b.appspot.com",
  messagingSenderId: "22848517666",
  appId: "1:22848517666:web:357dbc44149044d7debc7b",
  measurementId: "G-9M0B9XXL3C"
};

const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
