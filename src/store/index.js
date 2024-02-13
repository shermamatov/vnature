import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import { tourReducer } from "./reducers/tourReducer";

const rootReducer = combineReducers({ tours: tourReducer });
export const store = createStore(rootReducer, applyMiddleware(thunk));
