import React from 'react'
import { useState,useContext } from 'react'
import userContext from '../Context/UserContext'

//for sending data
function Login() {
    const [username,setUsername]=useState('')//for username ttake udhar cheeze update ho
    const [password,setPassword]=useState('')//for password taake udhar password update ho 


    //it is used to fetch value from the global context that is --> userContext
    const {setUser} =useContext(userContext)
    //this setUser is a state varible in UserContextProvider.jsx
    //toh userContext ke andar yeh declared the jooke useContext() ka use karke access karpa rahe hai

    const handleSubmit=(e)=>{
        e.preventDefault()  //to prevent from submit
        setUser({username,password})//state variable are like functions 
    }
  return (
    <div>
        <h2>Login</h2>
        <input
        value={username}
        onChange={(e)=> setUsername(e.target.value)}
        type='text ' placeholder='username'/>
        {"  "}
        <input 
        value={password}
        onChange={(e)=> setPassword(e.target.value)}
        
        type='text ' placeholder='password'/>
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login