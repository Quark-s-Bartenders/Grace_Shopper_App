import { SET_ORDERS } from "../constants/orderConstants";

export default function orderReducer(state = [], action) {
  console.log("In the orderReducer. Action Type is: ", action.type)
  console.log("In the orderReducer. State is: ", state)
  switch (action.type) {
    case SET_ORDERS:
      console.log("Within SET_ORDERS")
      return action.payload;
    default:
      return state;
  }
}
