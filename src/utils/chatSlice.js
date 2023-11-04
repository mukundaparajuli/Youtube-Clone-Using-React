import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_LIVE_CHAT } from "./Config";

const chatSlice = createSlice({
  name: "chatSlice",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, actions) => {
      state.messages.splice(OFFSET_LIVE_CHAT,1);
      state.messages.unshift(actions.payload);
    },
  },
});
export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;
