import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value = (state.value + 1) % 256
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
    },
  },
});

export const {
  increment,
  decrement,
  leftShift,
  rightShift,
  complement,
} = slice.actions;

export const selectCount = (state) => state.counter.value;

export default slice.reducer;
