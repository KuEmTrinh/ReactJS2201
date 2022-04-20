import React from "react";
import { useState } from "react";
import { createNewTask } from "../todoSlice";
import { useDispatch } from "react-redux";
export default function Input() {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const changeInputValue = (e) => {
    setInputValue(e.target.value);
  };
  const addTask = () => {
    dispatch(createNewTask(inputValue));
    setInputValue("");
  };
  return (
    <div>
      <input type="text" value={inputValue} onChange={changeInputValue} />
      <button
        onClick={() => {
          addTask();
        }}
      >
        Add
      </button>
    </div>
  );
}
