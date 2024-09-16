import './App.css'
import { useState,useEffect } from 'react'
import {useDispatch} from 'react-redux'
import authService from "./appwrite/auth"
import { login } from './store/authSlice'
import { Footer, Header } from './components'
import {Outlet} from 'react-router-dom'
function App() { 
  //console.log(import.meta.env.VITE_APPWRITE_URL)
  const [loading,setLoading] = useState(true)
  const dispatch=useDispatch()

   useEffect(()=>{
     authService.getCurrentUser()  //this return a promise which is handled by "then"
     .then((userData)=>{
      if(userData){    //if user is valid
         dispatch(login({userData}))   //we dispatch login method
      }else{
        dispatch(logout())   //we dispatch logout method
      }

     })
     .finally(()=>setLoading(false)) //indicates that loading process is finished
   },[])

  //condition rendering
  return !loading ? (
  <div className='min-h-screen flex flex-wrap content-between bg-gray-400 '>
     <div className='w-full block '>
      <Header/>
      <main>
        {/* <Outlet/> */}
      </main>
      <Footer/>
     </div>
  </div>
  ) : null
}

export default App
