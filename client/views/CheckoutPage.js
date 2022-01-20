import React from "react";
import { useSelector } from "react-redux";

import "./viewStyles/CheckoutPage.css";

const CheckoutPage = () => {
  const cartItems = useSelector((state) => state.cartItems);

  let reducedCartItems = [];
  let cartItemIdArray = [];

  for (let item of cartItems) {
    if (cartItemIdArray.includes(item.id)) {
      for (let uniqueItem of reducedCartItems) {
        if (uniqueItem.id === item.id) {
          uniqueItem.cartQuantity++;
        }
      }
    } else {
      item.cartQuantity = 1;
      cartItemIdArray.push(item.id);
      reducedCartItems.push(item);
    }
  }

  let subtotal = cartItems
    .reduce((store, curVal) => store + Number(curVal.price), 0)
    .toFixed(2);

  let tax = (subtotal * 0.045).toFixed(2);

  let total = (Number(subtotal) + Number(tax)).toFixed(2);

  return (
    <>
      <div className="left__info">
        <p className="left__name">Your current order:</p>

        {reducedCartItems.map((cartItem) => {
          return (
            <p key={cartItem.id}>
              <span style={{ fontWeight: "bold" }}>{cartItem.name} </span>
              <span> {"x" + cartItem.cartQuantity}</span>
            </p>
          );
        })}
        <p></p>
        <p>Subtotal: {"$" + subtotal}</p>
        <p>Tax: {"$" + tax} </p>
        <p>Total: {"$" + total} </p>
        <button className="info__button">Place Order</button>
      </div>
    </>
  );
};

export default CheckoutPage;
