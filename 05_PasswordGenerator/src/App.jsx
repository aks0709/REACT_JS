import { useState, useCallback, useEffect, useRef } from 'react'



function App() {
  const [length, setLength] = useState(8)   //this hook is for length of password and its default value is 8
  const [numberAllowed, setNumberAllowed] = useState(false);  //if we want to add nums in our password or not,  by default false
  const [charAllowed, setCharAllowed] = useState(false)  //if we want to add special characters in out pass ,by default false
  const [password, setPassword] = useState("")    // use for setting password


  //useRef hook :- keep track of mutable values
  //Used to access DOM ELEMENTS DIRECTLY
  const passwordRef = useRef(null)//defautl value null
  //hum kisi ka bhi reference le sakte hai and uske saath manipulation kar sakte hai


  //use callBack is react hook which stores function in cache and used when it is needed
  //syntax const func= usecallback(fn,[])  []....> are dependencies
  const passwordGenerator = useCallback(() => {
    let pass = "Ayush@"  // initally password is empty 
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz" //contains character that out of which password is made
    if (numberAllowed) str += "0123456789"  //agar hum num allowed karte hain toh yeh add karna hoga
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"   //agar special character add karna chahte hai toh yeh characters dediya hamne

    for (let i = 7; i <= length; i++) { //loop runs for,the length we want for password
      let char = Math.floor(Math.random() * str.length + 1)  //generate random indedx
      pass += str.charAt(char)  //uss random index pe jo character hai woh add kardiya
      
    }

    setPassword(pass)  //call the method of use state
  }, [length, numberAllowed, charAllowed, setPassword])
  //idhar jo dependecies hum provide kar rahe hai unpar function possibly depend karega
  //dependcies of useCallback--->used for optimization,function defining
  //dependcies of useEffect-->used to re-run function,if any of dependencies is changed
//usecallBack memoize the function,to stop from recreating on every render
//dpendencies determine when the  memoized function should be updated
  const copyPasswordToClipboard = useCallback(() => {
    
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    //for copy
    window.navigator.clipboard.writeText(password)
  }, [password]) 


  //this hook is used to  sync components with system
  //hum passwordGenertor ko directly call nahi kar sakte
  //we execute it by using useEffect hook.
  //syntax -->useEffect(callback,[])
  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])
    //it means length,numberAllowed, charAllowed, passwordGenerator inpar depend karega hamara function passwordgenerator
  //agar dependecies mai kuch bhi change hua then yeh function re run hoga
  
  return (
    
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
        />
        <button
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
        
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        value={length}  //length used in useState
         className='cursor-pointer'
         //event handler,we need to pass event
         onChange={(e) => {setLength(e.target.value)}}   
          />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={() => {
              setNumberAllowed((prev) => !prev); //to flip true and false
          }}  //prev value ka humko access hota hai
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                  setCharAllowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
</div>
    
  )
}

export default App