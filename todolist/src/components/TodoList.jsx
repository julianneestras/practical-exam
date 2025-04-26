import { useState } from "react";

function Todolist({ todos, deleteTodo, completeTodo }) {
  const [done, setDone] = useState("");

  function handleDelete(id) {
    deleteTodo(id);
  }

  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <div
          className={`todo ${todo.completed ? "done" : "not-done"}`}
          key={todo.id}
        >
          <p>{todo.text}</p>
          <p>{todo.description}</p>
          <div className="btn-group">
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
            <button onClick={() => completeTodo(todo.id)}>
              {todo.completed ? "Undo" : "Complete"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Todolist;
