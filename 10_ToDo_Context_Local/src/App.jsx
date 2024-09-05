import { useEffect, useState } from 'react';
import { TodoProvider } from './Contexts';
import './App.css';
import TodoForm from './Components/TodoForm';
import TodoItem from './Components/TodoItem';

function App() {
  // State to hold the list of todos
  const [todos, setTodos] = useState([]);

  // Function to add a new todo to the list
  const addTodo = (todo) => {
    // Ensure that the new todo is added without overwriting the previous todos
    setTodos((prev) => [...prev, { id: Date.now(), ...todo }]);
  };

  // Function to update an existing todo based on its id
  const updatedTodo = (id, todo) => {
    setTodos((prev) => 
      prev.map((prevTodo) => (prevTodo.id === id ? { ...prevTodo, ...todo } : prevTodo))
    );
  };

  // Function to delete a todo based on its id
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id));
  };

  // Function to toggle the completion status of a todo
  const toggleComplete = (id) => {
    setTodos((prev) => 
      prev.map((prevTodo) => 
        prevTodo.id === id 
          ? { ...prevTodo, completed: !prevTodo.completed } 
          : prevTodo
      )
    );
  };

  // Use useEffect to load todos from localStorage when the component first mounts
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos && storedTodos.length > 0) {
      setTodos(storedTodos);
    }
  }, []);

  // Use useEffect to save todos to localStorage whenever the todos state changes
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider value={{ todos, addTodo, deleteTodo, updatedTodo, toggleComplete }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm /> 
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/* Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
