import React from 'react';
import { Link } from 'react-router-dom';

import './componentStyles/CartItem.css';

const CartItem = () => {
  return (
    <div className='cartitem'>
      <div className='cartitem__image'>
        <img
          src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/016cd9a5-7bee-44c1-b903-9a4867cfd9ea/d86apyw-213a5890-ef42-4c10-9534-2ce0a40468ae.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzAxNmNkOWE1LTdiZWUtNDRjMS1iOTAzLTlhNDg2N2NmZDllYVwvZDg2YXB5dy0yMTNhNTg5MC1lZjQyLTRjMTAtOTUzNC0yY2UwYTQwNDY4YWUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.yZLqccu5VuN2xcTLQvs-bc91ezsb6_a3pxbPRZHMCX0'
          alt='product name'
        />
      </div>

      <Link to={`/product/${1111}`} className='cartitem__name'>
        <p>PokéBall</p>
      </Link>

      <p className='cartitem__price'>$2.99</p>

      <select className='cartitem__select'>
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
        <option value='4'>4</option>
      </select>

      <button className='cartitem__deleteBtn'>
        <i className='fas fa-trash'></i>
      </button>
    </div>
  );
};

export default CartItem;
