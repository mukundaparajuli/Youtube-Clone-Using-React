import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./AppSlice";
const Store = configureStore({
  reducer: {
    app: appSlice,
  },
});
export default Store;
