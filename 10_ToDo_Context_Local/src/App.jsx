import { useState } from 'react'
import {TodoProvider} from './Contexts'
import './App.css'

function App() {
  //see we get the todos and do changes on it then U.I will be changed so we use hooks
  const [todos,setTodos]=useState([])
 //This is a state-setting function, likely coming from a useState hook in React, where todos is the state that holds an array of todo items.




  //defining functionalities of todo
  const addTodo=(todo) => {//yeh jo todo paramteter hai usko ham add karenge in todos array which is initially empty
  
     //if we do like setTodo(todo) then previous all data will be deleted 
    setTodos((prev)=>[...prev,{id : Date.now(),...prev}])  //prev is previous array 
    //so what we do we spread previous array and add new  todo to it
    //since array is in collection of objects {id : , todo : ,completed : }
  }


  //prev: previous state of todos
  //map method is used to create a new array based on prev array
  //It iterates over each prevTodo in the prev array.

  /*
  [
  { id: 1, text: "Buy groceries" },
  { id: 2, text: "Do laundry" },
  { id: 3, text: "Clean the house" }
]
You call updatedTodo(2, { id: 2, text: "Do laundry and ironing" }).

The map function will iterate over each todo:

For id: 1, it will keep { id: 1, text: "Buy groceries" }.
For id: 2, it will replace it with the new todo: { id: 2, text: "Do laundry and ironing" }.
For id: 3, it will keep { id: 3, text: "Clean the house" }.
  */
  const updatedTodo = (id,todo)=>{
    //yeh pehle walla prevTodo jo hai woh ek tarah se index hai
    setTodos((prev)=> prev.map((prevTodo)=> (prevTodo.id === id ? todo : prevTodo)))
  }


  const deleteTodo = (id)=>{
    setTodos((prev)=> prev.filter((prevtodo)=> prevtodo.id !== id ))
  }


  const toggleComplete = (id) =>{
   // setTodos((prev)=> prev.map((prevTodo)=> prevTodo === id ?))
  }

  return (
   <TodoProvider value={{todos,addTodo,deleteTodo,updatedTodo,toggleComplete}}>
   <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                    </div>
                </div>
            </div>
   </TodoProvider>
  )
}

export default App
