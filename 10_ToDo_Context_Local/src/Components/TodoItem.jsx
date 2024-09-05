import React, { useState } from 'react';
import { useTodo } from '../Contexts'; // Ensure that the custom hook useTodo is correctly imported

function TodoItem({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false);  
  const [todoMsg, setTodoMsg] = useState(todo.todo);    
  const { updatedTodo, deleteTodo, toggleComplete } = useTodo(); // Using the custom hook to get the necessary functions

  // Function to handle editing the todo
  const editTodo = () => {
    updatedTodo(todo.id, { ...todo, todo: todoMsg });
    setIsTodoEditable(false);
  };

  // Function to toggle the completion status of the todo
  const toggleCompleted = () => {
    toggleComplete(todo.id);
  };

  return (
    <div
      className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300 text-black ${
        todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
      }`}
    >
      {/* Checkbox to toggle completion status */}
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={todo.completed}
        onChange={toggleCompleted}
      />

      {/* Input field for editing the todo */}
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg ${
          isTodoEditable ? "border-black/10 px-2" : "border-transparent"
        } ${todo.completed ? "line-through" : ""}`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />

      {/* Edit/Save Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        onClick={() => {
          if (todo.completed) return; // Prevent editing if the todo is completed

          if (isTodoEditable) {
            editTodo(); // Save the edit if in edit mode
          } else {
            setIsTodoEditable((prev) => !prev); // Toggle to edit mode
          }
        }}
        disabled={todo.completed} // Disable the button if the todo is completed
      >
        {isTodoEditable ? "📁" : "✏️"} {/* Show appropriate icon based on the mode */}
      </button>

      {/* Delete Todo Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        onClick={() => deleteTodo(todo.id)}
      >
        ❌
      </button>
    </div>
  );
}

export default TodoItem;
