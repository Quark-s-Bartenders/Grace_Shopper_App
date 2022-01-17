import React from 'react';

// Hooks import
import useEffect from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Home Sceen Styles
import './viewStyles/HomeScreen.css';

// Component import
import Product from '../components/Product.js';

// Actions import
import { getProducts as listProducts } from '../store/actions/productActions';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div className='homescreen'>
      <h2 className='homescreen__title'>Latest Poke Balls</h2>
      <div className='homescreen__products'>
        {/* TEST PRODUCT HARDCODE: <Product /> */}
        {loading ? (
          <h1>Loading...</h1>
        ) : error ? (
          <h1>{error}</h1>
        ) : (
          products.map((product) => (
            <Product
              key={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              description={product.description}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default HomeScreen;
