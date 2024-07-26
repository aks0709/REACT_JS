import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import User from './Components/User/User.jsx'
import Github from './Components/Github/Github.jsx'


//it takes an array
// const router=createBrowserRouter(
//   [
//   {
//     path:'/',  //top level element
//     element : <Layout/>,  //element to render
//     children: [
//       {path: "",element:<Home/>},
//       {path:"about",element:<About/>},
//       {path:"contact",element:<Contact/>}
//     ]
//   }
//   ]
// )

//another method
const router=createBrowserRouter(
  createRoutesFromElements(
    // it is outer so we we give '/'
    //it is like /about  or /user or /contact
    <Route path='/' element={<Layout/>}>  
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      {/* <Route loader={githubInfoLoader} path='user/:userid' element={<User/>}/> */}
      <Route path='user/:userid' element={<User/>}/>
      <Route path='github' element={<Github/>}/>
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
