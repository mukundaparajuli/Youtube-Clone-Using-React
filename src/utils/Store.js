import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./AppSlice";
import searchSlice from "../Components/searchSlice";
const Store = configureStore({
  reducer: {
    app: appSlice,
    search: searchSlice,
  },
});
export default Store;
