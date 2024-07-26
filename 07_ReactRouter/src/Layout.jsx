import React from 'react'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import { Outlet } from 'react-router-dom'
//this outlet allow us to do nesting ,while creating routes 
function Layout() {
    //outlet is used for dynamic addition of components by keeping other component fixed link header and footer
  return (
    <>
    <Header/>
    <Outlet/>  
    <Footer/>
    </>
  )
}

export default Layout