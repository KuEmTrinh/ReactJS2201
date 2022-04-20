import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    createNewTask: (state, action) => {
      state.list.push(action.payload);
    },
    deleteTask: (state, action) => {
      state.list.splice(action.payload, 1);
    },
  },
});

export const { createNewTask, deleteTask } = todoSlice.actions;

export default todoSlice.reducer;
