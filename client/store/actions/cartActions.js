import { ADD_TO_CART, REMOVE_FROM_CART } from '../constants/cartConstants';
import axios from 'axios';

// ADD TO CART
export const addToCart = (id, qty) => async (dispatch) => {
  const { data } = await axios.get('');
  dispatch({
    type: ADD_TO_CART,
    payload: {
      name: data.name,
      image: data.image,
      price: data.price,
      quantity: data.quantity,
      description: data.description
    }
  });
  localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
};

// REMOVE FROM CART
export const removeFromCart = () => async (dispatch, getState) => {
  dispatch({
    type: REMOVE_FROM_CART,
    payload: id
  });

  localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
};
