import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import navReducer from '../features/nav/navSlice';
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    nav: navReducer,
  },
});
