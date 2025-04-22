import { useState } from "react";
import "./Main.css";
export default function Main({ todos, setTodos }) {
  const [todo, setTodo] = useState("");

  function handelSubmit(e) {
    e.preventDefault();
    if (!todo.trim()) return;
    setTodos([{ text: todo, completed: false }, ...todos]);

    setTodo("");
  }
  return (
    <div className="add-to-list">
      <form className="todo-form" action="" onSubmit={handelSubmit}>
        <input
          type="text"
          placeholder="add to list"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          className="todo-input"
        />
        <button type="submit" className="todo-button">
          add
        </button>
      </form>
      <div className="list">
        {todos.map((item, index) => (
          <div key={index}>
            <li className={`todo-item ${item.completed ? "completed" : ""}`}>
              {item.text}
              <button
                className="done-btn"
                onClick={() => {
                  const updatedTodos = [...todos];
                  updatedTodos[index].completed =
                    !updatedTodos[index].completed;
                  setTodos(updatedTodos);
                }}
              >
                Done
              </button>
            </li>

            <button
              className="delete-btn"
              onClick={() => setTodos(todos.filter((_, i) => i !== index))}
            >
              delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
