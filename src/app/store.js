import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../state/counterSlice'
import displayReducer from '../state/displaySlice'
import tokensReducer from '../state/tokensSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    display: displayReducer,
    tokens: tokensReducer
  },
});
