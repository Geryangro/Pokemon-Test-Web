import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import { articleReducer } from "./Reducer";

// Connect to Redux Devtool
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create Global Store
const store = createStore(
  articleReducer,
  composeEnhancers(applyMiddleware(thunk))
);
export default store;
