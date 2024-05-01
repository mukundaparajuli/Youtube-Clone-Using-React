import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./AppSlice";
import searchSlice from "../Components/searchSlice";
import chatSlice from "./chatSlice";
const Store = configureStore({
  reducer: {
    app: appSlice,
    search: searchSlice,
    chat: chatSlice,
  },
});
export default Store;
