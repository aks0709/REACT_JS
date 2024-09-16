import React from 'react'
import authservice from '../../appwrite/config'
import { useDispatch } from 'react-redux'
import { logout } from '../../store/authSlice'

function LogoutBtn() {
    const dispatch=useDispatch()
    //function to handle logout
    const logoutHandler=()=>{
        //return a promise
        authservice.logout().then(()=>{
            dispatch(logout())
        })
    }
    return (
        <button
        className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
        onClick={logoutHandler}
        >Logout</button>
      )
}

export default LogoutBtn