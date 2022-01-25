import { combineReducers } from "redux";
import userReducer from "./users/userReducer";

const appReducer = combineReducers({
  user: userReducer,
});

const rootReducer = (state: any, action: any) => {
  if (action.type === "LOG_OUT") {
    return appReducer(undefined, action);
  }

  return appReducer(state, action);
};

export type RootState = ReturnType<typeof appReducer>;

export default rootReducer;
