import React from "react";
import "./componentStyles/Product.css";
import { Link } from "react-router-dom";

const Product = (props) => {
  return (
    <div className="product">
      <img
        src={props.pokeball.image}
        width="250"
        height="250"
        alt="product name"
      />

      <div className="product__info">
        <p className="info__name">{props.pokeball.name} </p>
        <p className="info__description">{props.pokeball.description}</p>
        <p className="info__price">{"$" + props.pokeball.price}</p>

        <Link to={`/product/${1111}`} className="info__button">
          View
        </Link>
      </div>
    </div>
  );
};

export default Product;
