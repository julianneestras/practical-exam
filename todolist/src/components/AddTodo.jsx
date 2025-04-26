import { useState } from "react";

function AddTodo({ addTodo }) {
  const [todo, setTodo] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (todo.trim() === "") {
      alert("Please enter a todo item.");
      return;
    }

    if (description.trim() === "") {
      alert("Please enter a description.");
      return;
    }

    addTodo(todo, description);
    setTodo("");
    setDescription("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div className="input-container">
          <input
            className="input-todo"
            type="text"
            placeholder="Title"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />

          <textarea
            rows="4"
            cols="50"
            type="text"
            placeholder="Add description..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button className="btn-add">Add Notes</button>
      </div>
    </form>
  );
}

export default AddTodo;
