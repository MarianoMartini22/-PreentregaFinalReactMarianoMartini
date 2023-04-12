import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import './CartWidget.css';

const CartWidget = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="cart-items" onClick={() => setCount(count + 1)}>
      <FontAwesomeIcon icon={faCartShopping} className='cart'/>
      {count > 0 && <div className="cartCount"><span className='cartCountNum'>{count}</span></div>}
    </div>
  );
};

export default CartWidget;
