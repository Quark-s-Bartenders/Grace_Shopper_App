import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./viewStyles/ProductScreen.css";

import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
// import { actionCreators } from "../store";
import { setPokeball, fetchPokeball } from "../store/actions/singleBall";
import { fetchPokeballs } from "../store/actions/allBalls";
import {
  addCartItem,
  removeCartItem,
  fetchAddedCartItem,
  fetchRemovedCartItem,
} from "../store/actions/cartActions";

const ProductScreen = () => {
  const pokeBall = useSelector((state) => state.pokeball);
  const dispatch = useDispatch();
  const { setPokeball, addCartItem, removeCartItem } = bindActionCreators(
    { fetchPokeball, fetchAddedCartItem, fetchRemovedCartItem },
    dispatch
  );
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchPokeball(id));
  }, []);

  function handleChange(e) {
    setDropDownValue(e.target.value);
  }
  const [dropDownValue, setDropDownValue] = useState(1);

  function handleClick() {
    for (let i = 0; i < dropDownValue; i++) {
      dispatch(fetchAddedCartItem(id));
    }
    window.alert("Successfully added to cart!");
  }

  return (
    <div className="productscreen">
      <div className="productscreen__left">
        <div className="left__image">
          <img src={"/" + pokeBall.image} alt="product name" />
        </div>

        <div className="left__info">
          <p className="left__name">{pokeBall.name}</p>
          <p>{"$" + pokeBall.price}</p>
          <p>{pokeBall.description}</p>
        </div>
      </div>

      <div className="productscreen__right">
        <div className="right__info">
          <p>
            Price: <span>$2.99</span>
          </p>
          <p>
            Status: <span>In Stock</span>
          </p>
          <p>
            Quantity
            <select onChange={handleChange}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </p>
          <p>
            <button type="button" onClick={handleClick}>
              Add To Cart
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;
