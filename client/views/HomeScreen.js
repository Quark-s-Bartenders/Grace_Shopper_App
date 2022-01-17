import React from 'react';
import useEffect from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './viewStyles/HomeScreen.css';

import Product from '../components/Product.js';

import { getProducts as listProducts } from '../store/actions/productActions';

const HomeScreen = () => {
  // NEED TO WORK ON REDUX

  // const dispatch = useDispatch();
  // const getProducts = useSelector((state) => state.getProducts);
  // const { products, loading, error } = getProducts;

  // useEffect(() => {
  //   dispatch(listProducts());
  // }, [dispatch]);

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
