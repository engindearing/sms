import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./slices/userSlice";

import householdReducer from "./slices/householdSlice";

import logger from "redux-logger";

import thunk from "redux-thunk";

export const store = configureStore({
  reducer: {
    user: userReducer,
    household: householdReducer,
  },

  middleware: [logger, thunk],
});
