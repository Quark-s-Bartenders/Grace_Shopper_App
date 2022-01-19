// import * as actionTypes '../constants/orderConstants';
import {
  GET_ORDERS_REQUEST,
  GET_ORDERS_SUCCESS,
  GET_ORDERS_FAIL,
  GET_ORDER_DETAILS_REQUEST,
  GET_ORDER_DETAILS_SUCCESS,
  GET_ORDER_DETAILS_FAIL,
  GET_ORDER_DETAILS_RESET
} from '../constants/orderConstants';
import axios from 'axios';

// GET ALL PRODUCTS
export const getOrders = () => async (dispatch) => {
  try {
    dispatch({ type: GET_ORDERS_REQUEST });

    const { data } = await axios.get('/api/orders');

    dispatch({
      type: GET_ORDERS_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: GET_ORDERS_FAIL,
      payload:
        error.response && error.response.data.message ? error.response.data.message : error.message
    });
  }
};

// GET INDIVIDUAL PRODUCT DETAILS
export const getOrderDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_ORDER_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/orders/${id}`);

    dispatch({
      type: GET_ORDER_DETAILS_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: GET_ORDERS_FAIL,
      payload:
        error.response && error.response.data.message ? error.response.data.message : error.message
    });
  }
};

// REMOVE PRODUCT
export const removeOrderDetails = () => (dispatch) => {
  dispatch({
    type: GET_ORDER_DETAILS_RESET
  });
};
