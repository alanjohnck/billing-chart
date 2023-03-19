// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"




const firebaseConfig = {
  apiKey: "AIzaSyC-nbFTcGkaNkaF7OR0ov-R9yaYIYFddyo",
   authDomain: "akhil-s-shop-8ff36.firebaseapp.com",
   projectId: "akhil-s-shop-8ff36",
   storageBucket: "akhil-s-shop-8ff36.appspot.com",
   messagingSenderId: "721587707726",
   appId: "1:721587707726:web:32b7fa203787be3386081f",
   measurementId: "G-9LW4Y3LE0C"
};

const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);