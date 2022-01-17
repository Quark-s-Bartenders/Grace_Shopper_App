import React from 'react';
import './viewStyles/HomeScreen.css';

import Product from '../components/Product.js';

const HomeScreen = () => {
  return (
    <div className='homescreen'>
      <h2 className='homescreen__title'>Latest Poke Balls</h2>
      <div className='homescreen__products'>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
};

export default HomeScreen;
