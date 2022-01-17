import { SET_SINGLE_BALL } from '../constants/productConstants';

export default function singleBallReducer(state = [], action) {
  switch (action.type) {
    case SET_SINGLE_BALL:
      return action.payload;
    default:
      return state;
  }
}
