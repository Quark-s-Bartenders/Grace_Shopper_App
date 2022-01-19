import React from "react";
import { Link } from "react-router-dom";

import "./componentStyles/CartItem.css";
import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

import {
  removeCartItem,
  fetchRemovedCartItem,
} from "../store/actions/cartActions";

const CartItem = (props) => {
  const pokeBall = useSelector((state) => state.pokeball);
  const dispatch = useDispatch();
  const { removeCartItem } = bindActionCreators(
    { fetchRemovedCartItem },
    dispatch
  );

  function handleClick() {
    dispatch(fetchRemovedCartItem(props.cartItem.id));
  }

  return (
    <div className="cartitem">
      <div className="cartitem__image">
        <img src={"/" + props.cartItem.image} alt="product name" />
      </div>

      <Link to={`/product/${props.cartItem.id}`} className="cartitem__name">
        <p>{props.cartItem.name}</p>
      </Link>

      <p className="cartitem__price">{"$" + props.cartItem.price}</p>

      <p className="cartitem__price">
        <span>Quantity</span>
        <span>: {props.cartItem.cartQuantity}</span>
      </p>

      <button onClick={handleClick} className="cartitem__deleteBtn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default CartItem;
