import { SET_ORDER } from "../constants/orderConstants";

export default function orderReducer(state = [], action) {
  switch (action.type) {
    case SET_ORDER:
      return [...state, action.payload];
    default:
      return state;
  }
}
