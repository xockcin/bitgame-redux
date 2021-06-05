import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "tokens",
  initialState: {
    tokens: 0,
  },
  reducers: {
    spendTokens: (state, action) => {
      const cost = action.payload;
      state.tokens -= cost;
    },
    earnTokens: (state, action) => {
      const credit = action.payload;
      state.tokens += credit;
    },
  },
});

export const { spendTokens,earnTokens } = slice.actions;

export default slice.reducer;
