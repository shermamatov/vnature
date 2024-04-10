import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import { tourReducer } from "./reducers/tourReducer";
import { adminReducer } from "./reducers/adminReducer";

const rootReducer = combineReducers({
    tours: tourReducer,
    admin: adminReducer,
});
export const store = createStore(rootReducer, applyMiddleware(thunk));
