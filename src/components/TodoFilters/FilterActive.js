import React from "react";
import { FILTER_TYPE } from "../../utils/constants";

const FilterActive = ({ filter, onFilterSelect }) => {
  const onActiveClick = () => {
    onFilterSelect(FILTER_TYPE.ACTIVE);
  };

  return (
    <li>
      <a
        className={
          filter === FILTER_TYPE.ACTIVE
            ? FILTER_TYPE.ACTIVE_SELECTED
            : FILTER_TYPE.ACTIVE
        }
        href="#/"
        onClick={onActiveClick}
      >
        전체보기
      </a>
    </li>
  );
};

export default FilterActive;
