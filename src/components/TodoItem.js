import React, { useState } from "react";
import { KEY_TYPE, CONDITION } from "../utils/constants";

const TodoItem = ({ item, onCheckClick, onDelete, onDbClick, onEdit }) => {
  const [editInput, setEditInput] = useState(item.title);
  const itemCondition = item.editing
    ? CONDITION.EDITING
    : item.done
    ? CONDITION.COMPLETED
    : CONDITION.NONE;

  const onChange = (e) => setEditInput(e.target.value);
  const onKeyUp = (e) => {
    if (e.key === KEY_TYPE.ESC) {
      const newTodo = {
        id: item.id,
        title: item.title,
        editing: false,
      };
      onEdit(newTodo);
      setEditInput(item.title);
    }
    if (e.key === KEY_TYPE.ENTER && editInput) {
      const newTodo = {
        id: item.id,
        title: editInput,
        editing: false,
      };
      onEdit(newTodo);
      setEditInput(newTodo.title);
    }
  };

  return (
    <li id={item.id} className={itemCondition}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          onChange={() => onCheckClick(item.id)}
          checked={item.done}
        />
        <label className="label" onDoubleClick={() => onDbClick(item.id)}>
          {item.title}
        </label>
        <button className="destroy" onClick={() => onDelete(item.id)}></button>
      </div>
      <input
        className="edit"
        value={itemCondition === "editing" ? editInput : ""}
        onChange={onChange}
        onKeyUp={onKeyUp}
      />
    </li>
  );
};

export default TodoItem;
