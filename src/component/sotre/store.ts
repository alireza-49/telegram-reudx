import { configureStore } from "@reduxjs/toolkit";
import { userDataSlice } from "./userData";
import { settingSlice } from "./settings";
import { constactsSlice } from "./contacts";

export const store = configureStore({
  reducer: {
    userData: userDataSlice.reducer,
    settings: settingSlice.reducer,
    contacts: constactsSlice.reducer,
  },
});
