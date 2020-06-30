import React from "react";
import { FILTER_TYPE } from "../../utils/constants";

const FilterCompleted = ({ filter, onFilterSelect }) => {
  return (
    <li>
      <a
        className={
          filter === FILTER_TYPE.COMPLETED
            ? FILTER_TYPE.COMPLETED_SELECTED
            : FILTER_TYPE.COMPLETED
        }
        href="#/completed"
        onClick={() => onFilterSelect(FILTER_TYPE.COMPLETED)}
      >
        완료한 일
      </a>
    </li>
  );
};

export default FilterCompleted;
