import React from 'react';
import { FaShoppingCart } from 'react-icons/fa'; 
import 'bootstrap/dist/css/bootstrap.min.css';

const CartWidget = () => {
  const itemsInCart = 5; 

  return (
    <div className="position-relative">
      <FaShoppingCart size={24} />
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        {itemsInCart}
        <span className="visually-hidden">unread messages</span>
      </span>
    </div>
  );
};

export default CartWidget;
