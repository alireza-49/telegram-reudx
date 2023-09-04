import { Settings } from "@/randomUserData/userData";
import { createSlice } from "@reduxjs/toolkit";

const initialState: Settings = {
  bgColor: "#fff",
  language: "en",
  theme: "dark",
};

export const settingSlice = createSlice({
  initialState,
  name: "settings",
  reducers: {
    changeTheme: (state, action) => {
      state.theme = action.payload;
    },
    changeBG: (state, aciton) => (state.bgColor = aciton.payload),
    changeLanguage: (state, aciton) => (state.language = aciton.payload),
  },
});

export const { changeBG, changeLanguage, changeTheme } = settingSlice.actions;
