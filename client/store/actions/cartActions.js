// import { ADD_TO_CART, REMOVE_FROM_CART } from '../constants/cartConstants';
// import axios from 'axios';

// // ADD TO CART
// export const addToCart = (id, qty) => async (dispatch) => {
//   const { data } = await axios.get('');
//   dispatch({
//     type: ADD_TO_CART,
//     payload: {
//       name: data.name,
//       image: data.image,
//       price: data.price,
//       quantity: data.quantity,
//       description: data.description
//     }
//   });
//   localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
// };

// // REMOVE FROM CART
// export const removeFromCart = () => async (dispatch, getState) => {
//   dispatch({
//     type: REMOVE_FROM_CART,
//     payload: id
//   });

//   localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
// };

import { ADD_TO_CART, REMOVE_FROM_CART } from "../constants/cartConstants";
import axios from "axios";

// pokeballs action creator
export const addCartItem = (cartItemData) => {
  return {
    type: ADD_TO_CART,
    payload: cartItemData,
  };
};

export const removeCartItem = (cartItemData) => {
  return {
    type: REMOVE_FROM_CART,
    payload: cartItemData,
  };
};

export const fetchAddedCartItem = (cartItemId) => {
  return async (dispatch) => {
    try {
      let { data } = await axios.get(`/api/pokeBalls/${cartItemId}`);

      dispatch(addCartItem(data));
    } catch (error) {
      console.log("Error inside the fetchAddedCartItemThunk: ", error);
    }
  };
};

export const fetchRemovedCartItem = (cartItemId) => {
  return async (dispatch) => {
    try {
      let { data } = await axios.get(`/api/pokeBalls/${cartItemId}`);

      dispatch(removeCartItem(data));
    } catch (error) {
      console.log("Error inside the fetchRemovedCartItemThunk: ", error);
    }
  };
};
