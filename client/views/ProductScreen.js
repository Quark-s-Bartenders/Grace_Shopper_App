import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./viewStyles/ProductScreen.css";

import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../store";
import { setPokeball, fetchPokeball } from "../store/actions/singleBall";

const ProductScreen = () => {
  const pokeBall = useSelector((state) => state.pokeball);
  const dispatch = useDispatch();
  const { setPokeball } = bindActionCreators(actionCreators, dispatch);
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchPokeball(id));
  }, []);

  console.log("Single pokeball consolelog", pokeBall);
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
            <select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </p>
          <p>
            <button type="button">Add To Cart</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;
