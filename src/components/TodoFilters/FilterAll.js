import React from "react";
import { FILTER_TYPE } from "../../utils/constants";

const FilterAll = ({ filter, onFilterSelect }) => {
  const onAllClick = () => {
    onFilterSelect(FILTER_TYPE.ALL);
  };

  return (
    <li>
      <a
        className={
          filter === FILTER_TYPE.ALL
            ? FILTER_TYPE.ALL_SELECTED
            : FILTER_TYPE.ALL
        }
        href="#/active"
        onClick={onAllClick}
      >
        해야할 일
      </a>
    </li>
  );
};

export default FilterAll;
