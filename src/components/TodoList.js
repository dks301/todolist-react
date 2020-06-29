import React from "react";
import TodoItem from "./TodoItem";
import { FILTER_TYPE } from "../utils/constants";

const TodoList = ({
  todos,
  filter,
  onCheckClick,
  onDelete,
  onDbClick,
  onEdit,
}) => {
  const filteringTodos = () => {
    if (filter === FILTER_TYPE.ACTIVE) {
      return todos.filter((todo) => !todo.done);
    }
    if (filter === FILTER_TYPE.COMPLETED) {
      return todos.filter((todo) => todo.done);
    }
    return todos;
  };
  const TodoList = filteringTodos().map((todo) => (
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
