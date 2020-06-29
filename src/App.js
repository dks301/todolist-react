import React, { useState } from "react";
import "./App.css";
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";
import TodoFooter from "./components/TodoFooter";
import { FILTER_TYPE } from "./utils/constants";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: "새로운 타이틀", done: false, editing: false },
    { id: 2, title: "완료된 타이틀", done: true, editing: true },
    { id: 3, title: "완료된 타이틀", done: true, editing: false },
  ]);
  const [nextId, setNextId] = useState(4);
  const [count, setCount] = useState(3);
  const [filter, setFilter] = useState(FILTER_TYPE.ALL);

  const onCreate = ({ title, done, editing }) => {
    const newTodos = todos.concat({
      id: nextId,
      title: title,
      done: done,
      editing: editing,
    });
    setNextId(nextId + 1);
    setTodos(newTodos);
    setCount(count + 1);
  };

  const onEdit = ({ id, title, editing }) => {
    const newTodos = todos.map((todo) =>
      todo.id === id
        ? { id: id, title: title, done: todo.done, editing: editing }
        : todo
    );
    setTodos(newTodos);
  };

  const onDelete = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
    setCount(count - 1);
  };

  const onCheckClick = (id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id
        ? { id: id, title: todo.title, done: !todo.done, editing: todo.editing }
        : todo
    );
    setTodos(newTodos);
  };

  const onDbClick = (id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id
        ? { id: id, title: todo.title, done: todo.done, editing: true }
        : todo
    );
    setTodos(newTodos);
  };

  const onFilterSelect = (type) => {
    setFilter(type);
  };

  return (
    <section className="todoapp">
      <TodoHeader onCreate={onCreate} />
      <TodoList
        todos={todos}
        filter={filter}
        onCheckClick={onCheckClick}
        onDelete={onDelete}
        onDbClick={onDbClick}
        onEdit={onEdit}
      />
      <TodoFooter count={count} onFilterSelect={onFilterSelect} />
    </section>
  );
}

export default App;
