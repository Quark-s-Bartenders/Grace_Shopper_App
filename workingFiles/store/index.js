// import {createStore, combineReducers, applyMiddleware} from 'redux'
// import {createLogger} from 'redux-logger'
// import thunkMiddleware from 'redux-thunk'
// import {composeWithDevTools} from 'redux-devtools-extension'
// import auth from './auth'

// const reducer = combineReducers({ auth })
// const middleware = composeWithDevTools(
//   applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
// )
// const store = createStore(reducer, middleware)

// export default store
// export * from './auth'

import { createStore, applyMiddleware } from "redux";
import finalReducer from "./reducers";
import thunk from "redux-thunk";

let store = createStore(finalReducer, {}, applyMiddleware(thunk));

export default store;
export * as actionCreators from "./action-creator/allBalls";