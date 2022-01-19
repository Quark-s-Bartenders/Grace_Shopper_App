import React from "react";
import { useEffect } from "react";
import "./viewStyles/OrderScreen.css";

import Order from "../components/Order.js";

import { getOrders as listOrders } from "../store/actions/storeActions";

import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../store";
import { setOrders, fetchOrders } from "../store/actions/allOrders";

const OrderScreen = () => {
  const orders = useSelector((state) => state.order);
  const dispatch = useDispatch();
  const { setOrders } = bindActionCreators(fetchOrders, dispatch);

  useEffect(() => {
    dispatch(fetchOrders());
  }, []);

  console.log("orders printed as: ", orders);
  console.log("setOrders printed as: ", setOrders);
  //console.log("fetchOrders printed as: ", fetchOrders);

  return (
    <div className="orderscreen">
      <h2 className="orderscreen__title">Latest Orders</h2>
      <div className="orderscreen__orders">
        {orders.map((order) => {
          return <Order key={order.id} order={order} />;
        })}
      </div>
    </div>
  );
};

export default OrderScreen;
