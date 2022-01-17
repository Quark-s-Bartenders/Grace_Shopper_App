import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './viewStyles/ProductScreen.css';

// ACTION TYPE IMPORT
import { getProductDetails } from '../store/actions/productActions';
import { addToCart } from '../store/actions/cartActions';

const ProductScreen = ({ match, history }) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.getProductDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    if (product && match.params.id !== product.id) {
      dispatch(getProductDetails(match.params.id));
    }
  }, [dispatch, product, match]);

  const addToCartHandler = () => {
    dipatch(addToCart(product.id, quantity));
    history.push('/cart');
  };

  return (
    <div className='productscreen'>
      {loading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <h1>{error}</h1>
      ) : (
        <React.Fragment>
          <div className='productscreen__left'>
            <div className='left__image'>
              <img src={product.image} alt={product.name} />
            </div>
            <div className='left__info'>
              <p className='left__name'>{product.name}</p>
              <p>Price: \$\{product.price}</p>
              <p>{product.description}</p>
            </div>
          </div>

          <div className='productscreen__right'>
            <div className='right__info'>
              <p>
                Price: <span>\$\{product.price}</span>
              </p>
              <p>
                Status: <span>{product.quantity > 0 ? 'In Stock' : 'Out of Stock'}</span>
              </p>
              <p>
                Quantity
                <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
                  {[...Array(product.quantity).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </select>
              </p>
              <p>
                <button type='button' onClick={addToCartHandler}>
                  Add To Cart
                </button>
              </p>
            </div>
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

export default ProductScreen;
