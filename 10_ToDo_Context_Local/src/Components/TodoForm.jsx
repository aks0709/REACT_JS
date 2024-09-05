import React, { useState } from 'react';
import { useTodo } from '../Contexts'; // Ensure that the custom hook useTodo is correctly imported

function TodoForm() {
    const [todo, setTodo] = useState(""); // State to hold the current todo input
    const { addTodo } = useTodo();  // Using the custom hook to get the addTodo function

    // Function to handle adding a new todo
    const add = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior

        if (!todo) return; // If the todo input is empty, do nothing

        addTodo({ todo, completed: false }); // Add the new todo with a completed status of false
        setTodo(""); // Clear the input field after adding the todo
    };

    return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}
                onChange={(e) => setTodo(e.target.value)} // Update the input state with the current value
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;
