import React from "react";
import TodoCount from "./TodoCount";
import FilterAll from "./TodoFilters/FilterAll";
import FilterActive from "./TodoFilters/FilterActive";
import FilterCompleted from "./TodoFilters/FilterCompleted";

const TodoFooter = ({ count, filter, onFilterSelect }) => {
  return (
    <div className="count-container">
      <TodoCount count={count} />
      <ul className="filters">
        <FilterAll filter={filter} onFilterSelect={onFilterSelect} />
        <FilterActive filter={filter} onFilterSelect={onFilterSelect} />
        <FilterCompleted filter={filter} onFilterSelect={onFilterSelect} />
      </ul>
    </div>
  );
};

export default TodoFooter;
