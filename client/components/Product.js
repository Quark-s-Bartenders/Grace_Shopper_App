import React from 'react';
import './componentStyles/Product.css';
import { Link } from 'react-router-dom';

const Product = ({ id, name, image, price, quantity, description }) => {
  return (
    <div className='product'>
      <img src={image} alt={name} />

      <div className='product__info'>
        <p className='info__name'>{name}</p>
        <p className='info__description'>{description}</p>
        <p className='info__price'>{price}</p>

        <Link to={`/product/${id}`} className='info__button'>
          View
        </Link>
      </div>
    </div>
  );
};

export default Product;
