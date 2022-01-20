import axios from "axios";
import { SET_ORDERS } from "../constants/orderConstants";

// pokeballs action creator
export const setOrders = (ordersData) => {
  return {
    type: SET_ORDERS,
    payload: ordersData,
  };
};

export const fetchOrders = () => {
  return async (dispatch) => {
    try {
      let { data } = await axios.get("/api/orders");
      dispatch(setOrders(data));
    } catch (error) {
      console.log("Error inside the fetchOrdersThunk: ", error);
    }
  };
};
