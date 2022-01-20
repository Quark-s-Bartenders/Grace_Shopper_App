import React from "react";
import "./componentStyles/Order.css";

const Order = (props) => {
  
  return (
    <div className="order">
      <div className="order_info">
        <p className="order_processed">Is Processed: {JSON.stringify(props.order.isProcessed)}</p>
        <p className="product_id">Product ID: {props.order.productId}</p>
        <p className="user_id">User ID: {props.order.userId}</p>
        <p className="quantity">Quantity: {props.order.quantity}</p>
        <p className="total_price">Total Price: ${props.order.totalPrice}</p>
      </div>
    </div>
  );
};

export default Order;
