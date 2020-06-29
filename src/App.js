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
  };

  const onEdit = ({ id, title, editing }) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, title: title, editing: editing } : todo
    );
    setTodos(newTodos);
  };

  const onDelete = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const onCheckClick = (id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    );
    setTodos(newTodos);
  };

  const onDbClick = (id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, editing: true } : todo
    );
    setTodos(newTodos);
  };

  const onFilterSelect = (type) => {
    setFilter(type);
  };

  const filteringTodos = () => {
    if (filter === FILTER_TYPE.ACTIVE) {
      return todos.filter((todo) => !todo.done);
    }
    if (filter === FILTER_TYPE.COMPLETED) {
      return todos.filter((todo) => todo.done);
    }
    return todos;
  };

  return (
    <section className="todoapp">
      <TodoHeader onCreate={onCreate} />
      <TodoList
        todos={filteringTodos()}
        onCheckClick={onCheckClick}
        onDelete={onDelete}
        onDbClick={onDbClick}
        onEdit={onEdit}
      />
      <TodoFooter
        count={filteringTodos().length}
        filter={filter}
        onFilterSelect={onFilterSelect}
      />
    </section>
  );
}

export default App;
