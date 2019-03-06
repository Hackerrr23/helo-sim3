import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import promiseMiddleWare from "redux-promise-middleware";
import reducer from "./reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(reducer, applyMiddleware(promiseMiddleWare));
