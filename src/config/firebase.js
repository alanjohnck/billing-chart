// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"




const firebaseConfig = {
 apiKey: "AIzaSyAjtnliE5GuNEGz6UDptcPrltwHPTd38RY",
  authDomain: "billing-88d10.firebaseapp.com",
  projectId: "billing-88d10",
  storageBucket: "billing-88d10.appspot.com",
  messagingSenderId: "1098686755851",
  appId: "1:1098686755851:web:5a16b4cf7c89a5074dc30e",
  measurementId: "G-JRF964MXRB"
};

const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
