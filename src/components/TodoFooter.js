import React from "react";
import TodoCount from "./TodoCount";
import TodoFilter from "./TodoFilter";
import { FILTER_TYPE } from "../utils/constants";

const TodoFooter = ({ count, selectedFilter, onFilterSelect }) => {
  return (
    <div className="count-container">
      <TodoCount count={count} />
      <ul className="filters">
        <TodoFilter
          type={FILTER_TYPE.ALL}
          onFilterSelect={onFilterSelect}
          selected={selectedFilter}
        />
        <TodoFilter
          type={FILTER_TYPE.ACTIVE}
          onFilterSelect={onFilterSelect}
          selected={selectedFilter}
        />
        <TodoFilter
          type={FILTER_TYPE.COMPLETED}
          onFilterSelect={onFilterSelect}
          selected={selectedFilter}
        />
      </ul>
    </div>
  );
};

export default TodoFooter;
