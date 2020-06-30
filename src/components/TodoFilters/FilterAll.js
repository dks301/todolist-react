import React from "react";
import { FILTER_TYPE } from "../../utils/constants";

const FilterAll = ({ filter, onFilterSelect }) => {
  return (
    <li>
      <a
        className={
          filter === FILTER_TYPE.ALL
            ? FILTER_TYPE.ALL_SELECTED
            : FILTER_TYPE.ALL
        }
        href="#/"
        onClick={() => onFilterSelect(FILTER_TYPE.ALL)}
      >
        해야할 일
      </a>
    </li>
  );
};

export default FilterAll;
