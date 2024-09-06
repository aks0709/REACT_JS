import { createSlice,nanoid } from "@reduxjs/toolkit";
//nanoid is used for unique id for new todos

const intialState = {
    todos : [{
        id : 1, text : "HELLO WORLD"}]
}
//we have to create reducers
export const todoSlice=createSlice({
    name: 'todo',
    initialState,
    //properties and their defination
    reducers :{
        //there are always two parameters state and action
        //for adding new todo
        addTodo : (state,action)=>{
        const todo={
            id: nanoid(),
            text : action.payload
        }
        state.todos.push(todo)
    },

    //remove a todo by id
    //state have access of prev all data and action have access to current data
    removeTodo : (state,action)=>{
        state.todos= state.todos.filter((todo)=>todo.id !== action.payload)
    },

    //update a todo
    updateTodo: (state, action) => {
        const { id, newText } = action.payload;
        const todo = state.todos.find((todo) => todo.id === id);
        if (todo) {
            todo.text = newText; // Update the text of the found todo
        }
    }
} 
})

export const {addTodo,removeTodo,updateTodo}=todoSlice.actions

export default todoSlice.reducer