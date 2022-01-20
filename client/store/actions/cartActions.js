import { ADD_TO_CART, REMOVE_FROM_CART } from '../constants/cartConstants';
import axios from 'axios';

export const addCartItem = (cartItemData) => {
  return {
    type: ADD_TO_CART,
    payload: cartItemData
  };
};

export const removeCartItem = (cartItemData) => {
  return {
    type: REMOVE_FROM_CART,
    payload: cartItemData
  };
};

export const fetchAddedCartItem = (cartItemId) => {
  return async (dispatch) => {
    try {
      let { data } = await axios.get(`/api/pokeBalls/${cartItemId}`);

      dispatch(addCartItem(data));
    } catch (error) {
      console.log('Error inside the fetchAddedCartItemThunk: ', error);
    }
  };
};

export const fetchRemovedCartItem = (cartItemId) => {
  return async (dispatch) => {
    try {
      let { data } = await axios.get(`/api/pokeBalls/${cartItemId}`);

      dispatch(removeCartItem(data));
    } catch (error) {
      console.log('Error inside the fetchRemovedCartItemThunk: ', error);
    }
  };
};
