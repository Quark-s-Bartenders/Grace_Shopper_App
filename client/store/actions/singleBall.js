import axios from 'axios';
import { SET_SINGLE_BALL } from '../constants/productConstants';

// SINGLE BALL ACTION CREATOR
export const setSingleBall = (ball) => {
  return {
    type: SET_SINGLE_BALL,
    payload: ball
  };
};

export const fetchSingleBall = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/pokeBalls/${id}`);

      dispatch(setSingleBall(data));
    } catch (error) {
      console.log('Error: ', error);
    }
  };
};
