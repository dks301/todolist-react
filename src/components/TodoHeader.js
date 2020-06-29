import React, { useState } from "react";
import { KEY_TYPE } from "../utils/constants";

const TodoHeader = ({ onCreate }) => {
  const [todoInput, setTodoInput] = useState("");

  const onChange = (e) => setTodoInput(e.target.value);
  const onKeyPress = (e) => {
    if (e.key === KEY_TYPE.ENTER && todoInput) {
      const todo = {
        title: todoInput,
        done: false,
        editing: false,
      };
      onCreate(todo);
      setTodoInput("");
    }
  };

  return (
    <div>
      <h1>TODOS</h1>
      <input
        id="new-todo-title"
        className="new-todo"
        placeholder="할일을 추가해주세요"
        autoFocus
        value={todoInput}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
    </div>
  );
};

export default TodoHeader;
