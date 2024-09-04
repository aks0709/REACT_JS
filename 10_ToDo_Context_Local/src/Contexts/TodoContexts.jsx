import { createContext,useContext } from "react";
export const TodoContext=createContext({
      //every todo item is an object {},{},{}
    todos :[
        {
            id :1,
            todo : "TODO MESSAGE",
            completed : false //check or uncheck
        }
    ],
    //functionalities  -->only name no defination
    //inki functionalities ham app.jsx mai define karenge 
    addTodo : (todo) =>{},  //addTodo(DSA)
    updatedTodo : (id,todo) =>{},  
    deleteTodo : (id) =>{},
    toggleComplete: (id)=>{}
})

//method which return context 
export const useTodo=()=>{
    return useContext(TodoContext) //we created context above so we pass it here
}

export const TodoProvider=TodoContext.Provider 