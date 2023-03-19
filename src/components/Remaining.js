import React, { useEffect } from 'react'
import { useState } from 'react'
import {db} from "../config/firebase"
import {getDocs,collection,addDoc,doc,deleteDoc} from "firebase/firestore";
import App from '../App';

function Remaining() {
var totalPrice=0;
const dataCollection=collection(db,"datas");
const[datas,setDatas]=useState([]);
const[search,setSearch]=useState("");
const getDatas=async()=>{
    const data=await getDocs(dataCollection);
    const filterData=data.docs.map((doc)=>({...doc.data(),id:doc.id}));
    setDatas(filterData); 
}
getDatas();



{datas
.map((dats)=>{
    return(
totalPrice+=dats.price

);
    })}
const[click,clicked]=useState(<h1>Total</h1>)

    const handleButton=()=>{
      clicked(  
            <h2>Total Price={totalPrice}₹</h2>
        );
    }
   
   
   

  return (
    <div className='balance' >
            
             <button  onClick={handleButton}>{click}</button>
    </div>
  )
}

export default Remaining;