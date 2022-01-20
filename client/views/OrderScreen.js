import React, { useEffect } from 'react';
import './viewStyles/OrderScreen.css';

import Order from '../components/Order.js';

import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../store';
import { setOrders, fetchOrders } from '../store/actions/allOrders';

const OrderScreen = () => {
  const orders = useSelector((state) => state.order);
  const dispatch = useDispatch();
  const { setOrders } = bindActionCreators(fetchOrders, dispatch);

  useEffect(() => {
    dispatch(fetchOrders());
  }, []);

  return (
    <div className='orderscreen'>
      <h2 className='orderscreen__title'>Latest Orders</h2>
      <div className='orderscreen__orders'>
        <button>Get All Orders</button>
        <button>Add Order</button>
        <button>Edit Order</button>
        <button>Remove Order</button>
        {orders.map((order) => {
          console.log('Order prints as: ', order);
          return <Order key={order.id} order={order} />;
        })}
      </div>
    </div>
  );
};

export default OrderScreen;
