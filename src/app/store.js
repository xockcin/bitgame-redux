import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import displayReducer from '../features/display/displaySlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    display: displayReducer
  },
});
