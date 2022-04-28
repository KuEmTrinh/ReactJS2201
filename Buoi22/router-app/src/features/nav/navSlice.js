import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  userId: null,
};

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    getUserInfomation: (state, action) => {
      state.userId = action.payload._delegate.uid;
    },
  },
});
export const { getUserInfomation } = navSlice.actions;

export default navSlice.reducer;
