import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./userSlice";

import householdReducer from "./householdSlice";

import logger from "redux-logger";

import thunk from "redux-thunk";

export const store = configureStore({
  reducer: {
    user: userReducer,
    household: householdReducer,
  },

  middleware: [logger, thunk],
});
