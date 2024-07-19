import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
//we can also write function here
 
function myApp(){
  return(
    //react convert this in tree structure
    <>   
     <p>this function made in main.jsx</p>
     </>
  )
}

//this is a element in which we directly give HTML
const anotherElement=(
  <a href='https://google.com' target='_blank'>Visit Google</a>
)
// const reactElement = {
//   type : 'a',
//   props :{  //properties
//       href:'https://www.google.com/',
//       target:'_blank'
//   },
//   children : 'CLICK ME TO VISIT GOOGLE'
// }

//since we made function customRender of our own which understand above key value pairs

//but this render does understand our key values of react element

const username="TITAN OF WAR"
//this element is automatically injected by the help of babel,we dont have to write function to render or inject it
const reactElement=React.createElement(
  'a',
  {href:'https://www.google.com/',target:'_blank'},//{} it is mandatory field if have  no property leave empty
   "VISIT GOOGLE,THIS IS CUSTOM REACT ELEMENT",
  username  //we pass evaluated variables no programming here 
  //in this way we inject variables  
)

ReactDOM.createRoot(document.getElementById('root'))
.render(
  //anotherElement  //not a function
  <App/>  
  //App()  //we can also execte method like this but <App/> is more suitable
    //myApp() 
    //reactElement
)
