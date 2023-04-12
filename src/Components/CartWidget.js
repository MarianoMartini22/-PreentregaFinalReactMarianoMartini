import React, { useState } from 'react';

const CartWidget = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="cart-items" onClick={() => setCount(count + 1)}>
      <img src="https://cdn3d.iconscout.com/3d/premium/thumb/cart-5590712-4652404.png" alt=''/>
      {count > 0 && <div className="cart">{count}</div>}
    </div>
  );
};

export default CartWidget;
