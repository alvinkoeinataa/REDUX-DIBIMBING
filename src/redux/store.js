import { applyMiddleware, createStore } from "redux";
import { authReducer } from "./reducers/authReducer";
import { reducers } from "./reducers";
import thunk from "redux-thunk";

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
