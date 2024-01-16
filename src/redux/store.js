import { createStore } from "redux";
<<<<<<< HEAD

import rootReducer from "./root-reducer";

const store = createStore(rootReducer);
=======
import logger from "redux-logger";

import rootReducer from "./root-reducer";
import { applyMiddleware } from "redux";

const store = createStore(rootReducer, applyMiddleware(logger));
>>>>>>> starter

export default store;
