import { createSlice } from "@reduxjs/toolkit";

const getAscii = num => {
  const special = [
    "NUL",
    "SOH",
    "STX",
    "ETX",
    "EOT",
    "ENQ",
    "ACK",
    "BEL",
    "BS",
    "TAB",
    "LF",
    "VT",
    "FF",
    "CR",
    "SO",
    "SI",
    "DLE",
    "DC1",
    "DC2",
    "DC3",
    "DC4",
    "NAK",
    "SYN",
    "ETB",
    "CAN",
    "EM",
    "SUB",
    "ESC",
    "FS",
    "GS",
    "RS",
    "US",
    "SP",
  ]

  if (num < 33) {
    return special[num];
  } else if (num === 127) {
    return "DEL";
  } else {
    return String.fromCharCode(num);
  }
}

const display = (number, mode) => {
  if (mode === "dec") {
    return number.toString(10);
  } else if (mode === "hex") {
    return number.toString(16);
  } else if (mode === "ascii") {
    return getAscii(number);
  }
}

export const slice = createSlice({
  name: "display",
  initialState: {
    mode: "dec",
    showGoal: false,
  },
  reducers: {
    setMode: (state, action) => {
      const newMode = action.payload;
      state.mode = newMode;
    },
    showGoal: (state) => {
      state.showGoal=true;
    },
    hideGoal: (state) => {
      state.showGoal = false;
    },
  },
});

export const { setMode, showGoal, hideGoal} = slice.actions;

export default slice.reducer;