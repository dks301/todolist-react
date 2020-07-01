import React from "react";
import { CONDITION } from "../utils/constants";

const TodoFilter = ({ type, onFilterSelect, selected }) => {
  return (
    <li>
      <a
        className={selected === type ? type + CONDITION.SELECTED : type}
        href={"#/" + type}
        onClick={() => onFilterSelect(type)}
      >
        {type}
      </a>
    </li>
  );
};

export default TodoFilter;
