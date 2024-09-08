import { createSlice, nanoid } from "@reduxjs/toolkit";
// nanoid is used for generating unique IDs for new todos

const initialState = {
    todos: [{
        id: nanoid(), text: "HELLO WORLD" // Ensure the ID is unique using nanoid()
    }]
}

// We have to create reducers
export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    // Properties and their definitions
    reducers: {
        // There are always two parameters: state and action
        // For adding a new todo
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), // Generate a unique ID for the new todo
                text: action.payload
            }
            state.todos.push(todo);
        },

        // Remove a todo by ID
        // State has access to previous data, and action has access to current data
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },

        // Update a todo
        updateTodo: (state, action) => {
            const { id, newText } = action.payload;
            const todo = state.todos.find((todo) => todo.id === id);
            if (todo) {
                todo.text = newText; // Update the text of the found todo
            }
        }
    }
})

// Export the actions to use them in components
export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

// Export the reducer to be used in the store
export default todoSlice.reducer;
