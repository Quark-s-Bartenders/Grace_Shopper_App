import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// Reducers
import { cartReducer } from './reducers/cartReducers';
import { getProductDetailsReducer, getProductsReducer } from './reducers/productReducers';
import allBallsReducer from './reducers/allBallsReducer';
import singleBallReducer from './reducers/singleBallReducer';

const reducer = combineReducers({
  cart: cartReducer,
  getProducts: getProductsReducer,
  getProductDetails: getProductDetailsReducer,
  pokeballs: allBallsReducer,
  getSingleBall: singleBallReducer
});

const middleware = [thunk];

const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
export * as actionCreators from './actions/allBalls';
