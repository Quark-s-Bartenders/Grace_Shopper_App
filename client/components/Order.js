import React from "react";
import "./componentStyles/Order.css";
import { Link } from "react-router-dom";

const Order = (props) => {
  return (
    <div className="order">
      <div className="order__info">
        <p className="is_processed">{props.order.isProcessed} </p>
      </div>
    </div>
  );
};

export default Order;
