import './App.css'
import "./style.css"
import Header from './Header'
import TODOHero from './TODOHero';
import TODOList from './TODOList';
import Form from './Form';
import { useEffect, useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos))
    }
  }, [])

  const todos_completed = todos.filter(
    (todo) => todo.is_completed === true
  ).length;
  const total_todos = todos.length;

  return (
    <div className="wrapper">
      <Header />
      <TODOHero todos_completed={todos_completed} total_todos={total_todos} />
      <Form todos={todos} setTodos={setTodos} />
      <TODOList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;     
