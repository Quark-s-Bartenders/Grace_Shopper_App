import React from 'react';
import './viewStyles/CartScreen.css';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';

import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  addCartItem,
  removeCartItem,
  fetchAddedCartItem,
  fetchRemovedCartItem
} from '../store/actions/cartActions';

const CartScreen = () => {
  const cartItems = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();
  const { addCartItem } = bindActionCreators(fetchAddedCartItem, dispatch);

  let reducedCartItems = [];
  let cartItemIdArray = [];

  for (let item of cartItems) {
    if (cartItemIdArray.includes(item.id)) {
      for (let uniqueItem of reducedCartItems) {
        if (uniqueItem.id === item.id) {
          uniqueItem.cartQuantity++;
        }
      }
    } else {
      item.cartQuantity = 1;
      cartItemIdArray.push(item.id);
      reducedCartItems.push(item);
    }
  }

  return (
    <div className='cartscreen'>
      <div className='cartscreen__left'>
        <h2>Shopping Cart</h2>

        {reducedCartItems.map((cartItem) => {
          return <CartItem cartItem={cartItem} key={cartItem.id} />;
        })}
      </div>

      <div className='cartscreen__right'>
        <div className='cartscreen__info'>
          <p>Subtotal {cartItems.length} items</p>
          <p>
            {'$' + cartItems.reduce((store, curVal) => store + Number(curVal.price), 0).toFixed(2)}
          </p>
        </div>
        <div>
          <Link to={'/checkout'} className='info__button'>
            Proceed To Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartScreen;
