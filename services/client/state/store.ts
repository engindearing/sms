import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./slices/userSlice";

import householdReducer from "./slices/householdSlice";

import logger from "redux-logger";

import thunk from "redux-thunk";

import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    user: userReducer,
    household: householdReducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>(); // Export a hook that can be reused to resolve types

export type RootState = ReturnType<typeof store.getState>;
