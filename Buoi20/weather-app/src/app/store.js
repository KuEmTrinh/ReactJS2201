import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../components/TextFile";
export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
