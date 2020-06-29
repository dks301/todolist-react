import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, onCheckClick, onDelete, onDbClick, onEdit }) => {
  const TodoList = todos.map((todo) => (
    <TodoItem
      item={todo}
      key={todo.id}
      onDbClick={onDbClick}
      onDelete={onDelete}
      onEdit={onEdit}
      onCheckClick={onCheckClick}
    />
  ));

  return (
    <div className="main">
      <input className="toggle-all" type="checkbox" />
      <ul id="todo-list" className="todo-list">
        {TodoList}
      </ul>
    </div>
  );
};

export default TodoList;
