import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "counter",
  initialState: {
    value: 0
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => {
      if (state.value === 0) {
        state.value = 255;
      } else {
        state.value -= 1;
      }
    },
    leftShift: (state) => {
      state.value = (state.value * 2) % 256;
    },
    rightShift: (state) => {
      state.value = Math.floor(state.value / 2);
    },
    complement: (state) => {
      state.value = 255 - state.value;
    }
  }
});

export const {
  increment,
  decrement,
  leftShift,
  rightShift,
  complement
} = slice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCount = (state) => state.counter.value;

export default slice.reducer;
