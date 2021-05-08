import { createSlice } from "@reduxjs/toolkit";
import {pairs} from "../../data/pairs"

const doToken = (number,token) => {
  switch (token) {
    case "+":
      return (number + 1) % 256;
    case "<":
      return (number * 2) % 256;
    case "~":
      return 255 - number;
    case ">":
      return Math.floor(number / 2);
    case "-":
      return (number === 0) ? 255 : number - 1
    default:
      console.log("Invalid Token");
  }
}

const sample = (array) => {
  let max = array.length;
  let index = Math.floor(Math.random() * max);
  return array[index];
};

export const slice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
    level: 3,
    pair: [0,0],
    steps: [],
  },
  reducers: {
    doStep: (state, action) => {
      const number = state.value;
      const token = action.payload;
      const newNumber = doToken(number, token);
      const newStep = {number: newNumber, token}
      state.value = newNumber
      state.steps.push(newStep);
    },
    setLevel: (state, action) => {
      const newLevel = action.payload;
      state.value = newLevel;
    },
    newGame: (state) => {
      let pair = sample(pairs[state.level]);
      state.pair = pair
      console.log("pair: " + state.pair)
      state.value = pair[0]
      state.steps = []
    },
  },
});

export const {
  doStep,
  newGame,
} = slice.actions;

export const selectCount = (state) => state.counter.value;
export const selectSteps = state => state.counter.steps
export const selectPair = state => state.counter.pair
export const selectLevel = state => state.counter.level

export default slice.reducer;
