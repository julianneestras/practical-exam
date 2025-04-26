import { useEffect, useState } from "react";

import AddTodo from "./components/AddTodo";
import Todolist from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  // add todo
  function addTodo(todo, description) {
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      text: todo,
      description: description,
      completed: false,
    };

    setTodos((prevTodos) => {
      return [...prevTodos, newTodo];
    });

    localStorage.setItem("todos", JSON.stringify([...todos, newTodo]));
  }

  // delete todo
  function deleteTodo(id) {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });

    localStorage.setItem(
      "todos",
      JSON.stringify(todos.filter((todo) => todo.id !== id))
    );
  }

  // complete todo
  function completeTodo(id) {
    console.log("updated");
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
    });
  }

  return (
    <div className="App">
      <div className="container">
        <p className="title">Todolist</p>

        <div>
          <AddTodo addTodo={addTodo} />

          <Todolist
            todos={todos}
            deleteTodo={deleteTodo}
            completeTodo={completeTodo}
          />
        </div>
      </div>
    </div>
  );
}
export default App;
