import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "searchSlice",
  initialState: {},
  reducers: {
    cacheResults: (state, actions) => {
      state = Object.assign(state, actions.payload);
    },
  },
});
export default searchSlice.reducer;
export const { cacheResults } = searchSlice.actions;
