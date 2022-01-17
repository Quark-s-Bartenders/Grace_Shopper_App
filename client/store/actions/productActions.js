// import * as actionTypes '../constants/productConstants';
import {
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAIL,
  GET_PRODUCT_DETAILS_REQUEST,
  GET_PRODUCT_DETAILS_SUCCESS,
  GET_PRODUCT_DETAILS_FAIL,
  GET_PRODUCT_DETAILS_RESET
} from '../constants/productConstants';
import axios from 'axios';

// GET ALL PRODUCTS
export const getProducts = () => async (dispatch) => {
  try {
    dispatch({ type: GET_PRODUCTS_REQUEST });

    const { data } = await axios.get('/api/pokeBalls');

    dispatch({
      type: GET_PRODUCTS_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: GET_PRODUCTS_FAIL,
      payload:
        error.response && error.response.data.message ? error.response.data.message : error.message
    });
  }
};

// GET INDIVIDUAL PRODUCT DETAILS
export const getProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_PRODUCT_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/pokeBalls/${id}`);

    dispatch({
      type: GET_PRODUCT_DETAILS_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: GET_PRODUCTS_FAIL,
      payload:
        error.response && error.response.data.message ? error.response.data.message : error.message
    });
  }
};

// REMOVE PRODUCT
export const removeProductDetails = () => (dispatch) => {
  dispatch({
    type: GET_PRODUCT_DETAILS_RESET
  });
};
