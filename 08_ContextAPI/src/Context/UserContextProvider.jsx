import React, { useState } from 'react'
import userContext from './UserContext'


//just like  we have outlets similarly we have ,props
//{children}  this is a prop passed as usual
const UserContextProvider=({children})=>{
    const [user,setUser] =useState(null)
    // user --> data ,used when acessing the data
    //setUser--> for sending and setting the data
    //idar kuch bhi karo like managing hooks ,API calls ,unko as it is bhej do
return(
    <userContext.Provider value={{user,setUser}}>
        {/* hamare pass jo bhi  aaya use as it is render karwa diya */}
    {children}
    </userContext.Provider >
)
}

export default UserContextProvider