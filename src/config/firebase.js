// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"




const firebaseConfig = {
  apiKey: "AIzaSyB-zZzIxz1Vy4SnqSl6rVlH-2doj_mHijg",
  authDomain: "vercel-bill-app.firebaseapp.com",
  projectId: "vercel-bill-app",
  storageBucket: "vercel-bill-app.appspot.com",
  messagingSenderId: "545396195556",
  appId: "1:545396195556:web:32769019bcd369c19cacf1",
  measurementId: "G-RG528SD0T6"
};

const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
