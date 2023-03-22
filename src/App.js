
import "./App.css";
import { useState } from 'react';
import {db} from "./config/firebase"
import {getDocs,collection,addDoc,doc,deleteDoc} from "firebase/firestore"
import { useEffect } from 'react';
import Navbar from "./components/Navbar";
import Remaining from "./components/Remaining";
import { useReducer } from "react";

function App() {

 const[datas,setDatas]=useState([]); 
  const[newProduct,setNewProduct]=useState("");
  const[newPrice,setNewPrice]=useState(0);
  const[newDate,setNewDate]=useState(0);
  const[newKg,setNewKg]=useState(0);
  const[search,setSearch]=useState("");
 const [reducerValue,forceUpdate]=useReducer(x=>x+1,0)
  const dataCollection=collection(db,"datas");

  const createUser=async()=>{
    await addDoc(dataCollection,{product:newProduct,price:Number(newPrice),date:newDate,Kg:Number(newKg)})
  }
  
 
    const getDatas=async()=>{
      try{
      const data=await getDocs(dataCollection);
      const filterData=data.docs.map((doc)=>({...doc.data(),id:doc.id}));
   setDatas(filterData); 
       forceUpdate();
      }catch(err){
        console.error(err);
      }
    };
 useEffect(() =>{
 getDatas();

  },[reducerValue]);
  

  const deleteProduct=async(id) =>{
    const userDoc=doc(db,"datas",id);
    await deleteDoc(userDoc);

function handleButton(){
  <Remaining />
}
  }
  return (
    
    <div className="App">
    <div>

    </div>
    <div className='inputs'>
    SEARCH THE PORDUCT<input className="input-box" type="text" onChange={(event)=>(setSearch(event.target.value))} placeholder="Search the item....." />
    PRODUCT:
<select className="input-box"  onChange={(event)=>(setNewProduct(event.target.value))}>
    <option value="product">product</option>
    <option value="coconut">coconunt</option>
    <option value="mango">mango</option>
    <option value="sheet">sheet</option>
    <option value="tea powder">tea powder</option>
  </select>
 PRICE: <input className="input-box" type="number" placeholder='price' onChange={(event)=>(setNewPrice(event.target.value))}/>
 DATE: <input className="input-box" type="date" placeholder='Date' onChange={(event)=>(setNewDate(event.target.value))}/>
  KG:<input className="input-box" type="number" placeholder='Kg' onChange={(event)=>(setNewKg(event.target.value))}/>
  <button onClick={createUser}>Add To Table</button>
  
  </div>
  <div className="body-app">
  <table border="3" align="center"  >
  <thead>
  <tr>
    <th>product</th>
    <th>price</th>

  <th>kg</th>
  <th>date</th>
  <th>Delete</th>
  </tr>
  </thead>
  <tbody>
 {datas.filter((dats)=>{
  return search.toLowerCase()===""?dats:dats.product.toLowerCase().includes(search);
 })
 .map((dats)=>{
    return(
      <tr key={dats.id}>
    <td>{dats.product}</td>
    <td>{dats.price}</td>
    <td>{dats.Kg}</td>
    <td>{dats.date}</td>
    <td><button onClick={()=>{deleteProduct(dats.id)}}>Delete</button></td>
    </tr>
  );
  })}
  </tbody>
  </table>
</div>

</div>
  );
  };
export default App;
