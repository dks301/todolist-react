import React, { useState } from "react";
import TodoCount from "./TodoCount";
import { FILTER_TYPE } from "../utils/constants";

const TodoFooter = ({ count, onFilterSelect }) => {
  const [selected, setSelected] = useState([
    FILTER_TYPE.ALL_SELECTED,
    FILTER_TYPE.ACTIVE,
    FILTER_TYPE.COMPLETED,
  ]);

  const onAllClick = () => {
    onFilterSelect(FILTER_TYPE.ALL);
    setSelected([
      FILTER_TYPE.ALL_SELECTED,
      FILTER_TYPE.ACTIVE,
      FILTER_TYPE.COMPLETED,
    ]);
  };

  const onActiveClick = () => {
    onFilterSelect(FILTER_TYPE.ACTIVE);
    setSelected([
      FILTER_TYPE.ALL,
      FILTER_TYPE.ACTIVE_SELECTED,
      FILTER_TYPE.COMPLETED,
    ]);
  };

  const onCompletedClick = () => {
    onFilterSelect(FILTER_TYPE.COMPLETED);
    setSelected([
      FILTER_TYPE.ALL,
      FILTER_TYPE.ACTIVE,
      FILTER_TYPE.COMPLETED_SELECTED,
    ]);
  };

  return (
    <div className="count-container">
      <TodoCount count={count} />
      <ul className="filters">
        <li>
          <a className={selected[0]} href="#/" onClick={onAllClick}>
            전체보기
          </a>
        </li>
        <li>
          <a className={selected[1]} href="#/active" onClick={onActiveClick}>
            해야할 일
          </a>
        </li>
        <li>
          <a
            className={selected[2]}
            href="#/completed"
            onClick={onCompletedClick}
          >
            완료한 일
          </a>
        </li>
      </ul>
    </div>
  );
};

export default TodoFooter;
