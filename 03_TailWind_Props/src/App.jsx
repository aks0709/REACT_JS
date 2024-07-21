import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/C/Card'

function App() {
  const [count, setCount] = useState(0)

  // let arr=[1,2,3]    can also use this as props someObj={arr} 
  return (
    <>
      <h1 className='bg-green-400 text-black p-4  rounded-xl' >TAILWIND WITH REACT/VITE</h1>
      <Card username="AYUSH" bttnText="CLICK ME" />
      <Card username="MAYUR" bttnText="HEY" />
      <Card username="SACHAN"  bttnText="KAISE HO"/>
      <Card />
    </>
  )
}

export default App
