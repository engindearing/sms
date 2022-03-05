import { createStore, applyMiddleware } from "redux";

import logger from "redux-logger";
import thunk from "redux-thunk";

import rootReducer from "./rootReducer";

const middlewares = [logger, thunk];

let store = createStore(rootReducer, applyMiddleware(...middlewares));
//eslint-disable-next-line
export { store };