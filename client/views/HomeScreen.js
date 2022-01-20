import React from 'react';
import { useEffect } from 'react';
import './viewStyles/HomeScreen.css';

import Product from '../components/Product.js';

import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setPokeballs, fetchPokeballs } from '../store/actions/allBalls';

const HomeScreen = () => {
  const pokeBalls = useSelector((state) => state.pokeballs);
  const dispatch = useDispatch();
  const { setPokeballs } = bindActionCreators(fetchPokeballs, dispatch);

  useEffect(() => {
    dispatch(fetchPokeballs());
  }, []);

  return (
    <div className='homescreen'>
      <h2 className='homescreen__title'>Latest Poke Balls</h2>
      <div className='homescreen__products'>
        {pokeBalls.map((pokeball) => {
          return <Product pokeball={pokeball} key={pokeball.id} />;
        })}
      </div>
    </div>
  );
};

export default HomeScreen;
