import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./userSlice";

import logger from "redux-logger";

export const store = configureStore({
  reducer: {
    users: userReducer,
  },

  middleware: [logger],
});
