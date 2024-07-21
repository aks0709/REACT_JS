import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 //let counter=5

 //hooks are used to update data in U.I at multiple places
//useState is used to propogate changes in UI
   let [counter,setCounter]= useState(15)  //we pass counter value
   //must be 'let'  tabhi value change hongi,const is not used
   //yeh counter jaha kahi pe bhi likha hoga poore web page mai udhar udhar changes honge
 const addValue=()=>{
  if(counter<30){
  setCounter(counter+1)

  //if we do multiple setCounter in this way
  // setCounter(counter+1)
  // setCounter(counter+1)
  // setCounter(counter+1)
  //use state hook send updates to U.I in form of batches,so it filter duplicates reqst
  //  setCounter((prevCounter)=>prevCounter)
  //  setCounter((prevCounter)=>prevCounter)
  //  setCounter((prevCounter)=>prevCounter)
  //  setCounter((prevCounter)=>prevCounter) 
  // if we do this then counter directly update to + 4 
  }
 }

 const subValue =()=>{
  if(counter>0)
  setCounter(counter-1)
 }
  return (
    <>
      <h1>AYUSH AND REACT</h1>
      <h2>COUNTER VALUE: {counter}</h2>
      <button onClick={addValue}>ADD VALUE {counter}</button>
      <button onClick={subValue}>REMOVE VALUE {counter}</button>
      <p>COUNTER:- {counter}</p>
    </>
  )
}

export default App
