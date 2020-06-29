import React from "react";
import { FILTER_TYPE } from "../../utils/constants";

const FilterCompleted = ({ filter, onFilterSelect }) => {
  const onCompletedClick = () => {
    onFilterSelect(FILTER_TYPE.COMPLETED);
  };

  return (
    <li>
      <a
        className={
          filter === FILTER_TYPE.COMPLETED
            ? FILTER_TYPE.COMPLETED_SELECTED
            : FILTER_TYPE.COMPLETED
        }
        href="#/completed"
        onClick={onCompletedClick}
      >
        완료한 일
      </a>
    </li>
  );
};

export default FilterCompleted;
