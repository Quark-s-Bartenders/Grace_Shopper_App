import { SET_POKEBALLS } from "../constants/productConstants";

export default function allBallsReducer(state = [], action) {
  switch (action.type) {
    case SET_POKEBALLS:
      return action.payload;
    default:
      return state;
  }
}
