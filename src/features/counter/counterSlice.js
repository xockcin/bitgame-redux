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
    case "!":
      return 255
    default:
      console.log("Invalid Token");
  }
}

const doRegToken = (number, register, token) => {
  switch (token) {
    case "&":
      return number & register
    case "|":
      return number | register
    case "^":
      return number ^ register
    default:
      console.log("Invalid Token")
  }
}

const sample = (array) => {
  let index = Math.floor(Math.random() * array.length);
  return array[index];
};

export const slice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
    level: 3,
    pair: [0, 0],
    steps: [],
    register: 0,
  },
  reducers: {
    doStep: (state, action) => {
      const number = state.value;
      const token = action.payload;
      const newNumber = doToken(number, token);
      const newStep = { number: newNumber, token };
      state.value = newNumber;
      state.steps.push(newStep);
    },
    saveToReg: (state) => {
      state.register = state.value;
      const newStep = { number: state.value, token: "=" };
      state.steps.push(newStep);
    },
    doRegStep: (state, action) => {
      const token = action.payload
      const newNumber = doRegToken(state.value, state.register, token)
      const newStep = {number: newNumber, token: token}
      state.value = newNumber
      state.steps.push(newStep)
    },
    bitFlip: (state, action) => {
      const bit = action.payload
      const number = state.value
      if (number & 1<<bit) {
        state.value = number - (2**bit)
      } else {
        state.value = number + 2 ** bit;
      }
    },
    setLevel: (state, action) => {
      const newLevel = action.payload;
      state.level = newLevel;
    },
    newGame: (state) => {
      let pair = sample(pairs[state.level]);
      state.pair = pair;
      console.log("pair: " + state.pair);
      state.value = pair[0];
      state.steps = []
      state.register = 0
    },
  },
});

export const {
  doStep,
  newGame,
  saveToReg,
  regAnd,
  regOr,
  regXor,
  doRegStep,
  bitFlip,
  setLevel
} = slice.actions;

export default slice.reducer;
