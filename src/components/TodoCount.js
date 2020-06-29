import React from "react";

const TodoCount = ({ count }) => {
  return (
    <span className="todo-count">
      총 <strong>{count}</strong> 개
    </span>
  );
};

export default TodoCount;
