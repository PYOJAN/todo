import { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./App.css";
import { addNewTodo, removeTodo } from "./store/todoSlice";

function App() {
  const { numbersOfTodo, todoList } = useSelector((state) => state.todo);
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const inputRef = useRef();

  // Adding New todo
  const addTodo = () => {
    if (!inputValue) return inputRef.current.focus();
    dispatch(addNewTodo({ todo: { message: inputValue, key: Date.now() } }));
    // Reset
    setInputValue("");
    inputRef.current.focus();
  };

  const deleteTodo = (key) => {
    dispatch(removeTodo({ todoKey: key }));
  };

  return (
    <div className="App">
      <nav className="navbar">
        <button className="btn" disabled>
          TODO Available in store {numbersOfTodo}
        </button>
      </nav>

      {/** Todo list */}

      <div className="todo-wrapper">
        <div className="todo-card">
          <div className="todo-input">
            <input
              ref={inputRef}
              type="text"
              onChange={(e) => setInputValue(e.target.value)}
              value={inputValue}
            />
            <button onClick={addTodo}>Add</button>
          </div>

          <ul className="todo-list">
            {todoList &&
              todoList.map((todo, index) => (
                <li key={todo.key}>
                  <strong>{todo.message}</strong>
                  <button onClick={() => deleteTodo(todo.key)}>Delete</button>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
