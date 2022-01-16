import React from 'react';
import './Product.css';
import { Link } from 'react-router-dom';

const Product = () => {
  return (
    <div className='product'>
      <img
        src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/016cd9a5-7bee-44c1-b903-9a4867cfd9ea/d86apyw-213a5890-ef42-4c10-9534-2ce0a40468ae.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzAxNmNkOWE1LTdiZWUtNDRjMS1iOTAzLTlhNDg2N2NmZDllYVwvZDg2YXB5dy0yMTNhNTg5MC1lZjQyLTRjMTAtOTUzNC0yY2UwYTQwNDY4YWUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.yZLqccu5VuN2xcTLQvs-bc91ezsb6_a3pxbPRZHMCX0'
        alt='product name'
      />

      <div className='product__info'>
        <p className='info__name'>Product 1</p>
        <p className='info__description'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum repudiandae dolorem
          accusamus, doloremque iure porro odit minus? Voluptates nihil, voluptate magni ea quos
          numquam optio exercitationem! A accusamus rem atque?
        </p>
        <p className='info__price'>$499.99</p>

        <Link to={`/product/${1111}`} className='info__button'>
          View
        </Link>
      </div>
    </div>
  );
};

export default Product;
