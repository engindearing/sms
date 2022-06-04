import { createSlice } from "@reduxjs/toolkit";

let initialState = { currentUser: {}, isLoggedIn: false }

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.currentUser = action.payload;
      state.isLoggedIn = true;
    },

    signOut(state) {
      state = initialState
    },
  },
});

export const { setUser, signOut } = userSlice.actions;

export default userSlice.reducer;

