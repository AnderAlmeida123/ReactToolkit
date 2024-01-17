import { createStore } from "redux";
import logger from "redux-logger";

import rootReducer from "./root-reducer";
import { applyMiddleware } from "redux";

const store = createStore(rootReducer, applyMiddleware(logger));

export default store;
