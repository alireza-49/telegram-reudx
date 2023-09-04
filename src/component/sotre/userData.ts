import { userData } from "@/randomUserData/userData";
import { createSlice } from "@reduxjs/toolkit";
const initialState: userData = {
  avatar: "/avatar.png",
  id: "askld;jf",
  userName: "mamamamsdklsjaflka",
};
export const userDataSlice = createSlice({
  initialState,
  name: "userData",
  reducers: {
    change_avatar: (state, action) => (state.avatar = action.payload),
    change_id: (state, action) => (state.id = action.payload),
    change_useName: (state, action) => (state.userName = action.payload),
  },
});

export const { change_avatar, change_id, change_useName } =
  userDataSlice.actions;
