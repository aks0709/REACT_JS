import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <h1 className='p-4 text-white bg-purple-800'>TODO</h1>
   </>
  )
}

export default App
