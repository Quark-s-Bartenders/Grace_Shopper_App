import { SET_POKEBALL } from "../constants/productConstants";

export default function ballReducer(state = [], action) {
  switch (action.type) {
    case SET_POKEBALL:
      return action.payload;
    default:
      return state;
  }
}
