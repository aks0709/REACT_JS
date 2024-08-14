import { createContext,useContext } from "react";
export const TodoContext=createContext({
    todos :[
        {
            id :1,
            todo : "TODO MESSAGE",
            completed : false
        }
    ],
    //functionalities  -->only name no defination
    addTodo : (todo) =>{},
    updatedTodo : (id,todo) =>{},
    deleteTodo : (id) =>{},
    toggleComplete: (id)=>{}
})

//method
export const useTodo=()=>{
    return useContext(TodoContext)
}

export const TodoProvider=TodoContext.Provider 