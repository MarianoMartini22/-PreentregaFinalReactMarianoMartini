import React, { useContext, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import './CartWidget.css';
import { CartContext } from '../contexts/CartContext';
import { Link } from 'react-router-dom';
import CartTable from './CartTable';

const CartWidget = () => {
  const [count, setCount] = useState(0);
  const [modalVisible, setMVisible] = useState(false);
  const { cartItems, montoTotal } = useContext(CartContext);

  useEffect(() => {
    let totalCount = 0;
    cartItems.map((item) => totalCount += item.quantity);
    setCount(totalCount);
  }, [cartItems]);

  return (
    <>
      <div className="cart-items" onClick={() => setMVisible(!modalVisible)}>
        <FontAwesomeIcon icon={faCartShopping} className="cart" />
        {count > 0 && (
          <div className="cartCount">
            <span className="cartCountNum">{count}</span>
          </div>
        )}
      </div>
      {
        (modalVisible) && 
        <>
          <div className='cart-arrow'></div>
            <div className="modal-cart">
                <CartTable />
                {
                  (cartItems.length > 0) ?
                  <div className='btn-container'>
                    <span className='no-items'>Total: ${ montoTotal }</span>
                    <Link className='btn btn-success m-3' to={'/checkout'} onClick={() => setMVisible(false)}>Finalizar Compra</Link>
                  </div> : ''
                }
            </div>
        </>
      }
    </>
  );
};

export default CartWidget;
