/** @format */

import { createStore, applyMiddleware } from "redux";
import ThunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import rootReducer from "./reducers/root.reducer";
import { loadState } from "./localstorage";

const LoggerMiddleware = createLogger();
const persistedState = loadState();
// const composeEnhancers =
//   typeof window === 'object' &&
//   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
//       // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
//     }) : compose;

// const enhancer = composeEnhancers(
//     applyMiddleware( ThunkMiddleware),  // other store enhancers if any
// );
const store = createStore(
  rootReducer,
  persistedState,
  applyMiddleware(LoggerMiddleware, ThunkMiddleware),
);

export default store;