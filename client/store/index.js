import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// Reducers
import cartReducer from "./reducers/cartReducers";
import allBallsReducer from "./reducers/allBallsReducer";
import ballReducer from "./reducers/ballReducer";
import orderReducer from "./reducers/orderReducer";

const reducer = combineReducers({
  cartItems: cartReducer,
  pokeballs: allBallsReducer,
  pokeball: ballReducer,
  order: orderReducer
});

const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;