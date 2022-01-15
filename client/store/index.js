import { createStore, applyMiddleware } from "redux";
import finalReducer from "./reducers";
import thunk from "redux-thunk";

let store = createStore(finalReducer, {}, applyMiddleware(thunk));

export default store;
export * as actionCreators from "./action-creator/allBalls";
