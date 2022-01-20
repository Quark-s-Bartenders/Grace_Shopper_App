import { SET_ORDERS } from '../constants/orderConstants';

export default function orderReducer(state = [], action) {
  switch (action.type) {
    case SET_ORDERS:
      console.log('Within SET_ORDERS');
      return action.payload;
    default:
      return state;
  }
}
