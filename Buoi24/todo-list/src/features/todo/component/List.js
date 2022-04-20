import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../todoSlice";
export default function List() {
  const listData = useSelector((state) => state.todo.list);
  const dispatch = useDispatch();
  const deleteTaskIndex = (index) => {
    dispatch(deleteTask(index))
  };
  return (
    <>
      {listData.length > 0 ? (
        <>
          {listData.map((el, index) => {
            return (
              <div key={index}>
                {el}
                <button
                  onClick={() => {
                    deleteTaskIndex(index);
                  }}
                >
                  Xoa
                </button>
              </div>
            );
          })}
        </>
      ) : null}
    </>
  );
}
