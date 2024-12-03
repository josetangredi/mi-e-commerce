import React, { useState } from "react";

const ItemQuantitySelector = ({ stock, onAdd }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    if (quantity < stock) setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <div>
      <button onClick={handleDecrease} disabled={quantity === 1}>
        -
      </button>
      <span>{quantity}</span>
      <button onClick={handleIncrease} disabled={quantity === stock}>
        +
      </button>
      <button onClick={() => onAdd(quantity)}>Agregar al carrito</button>
    </div>
  );
};

export default ItemQuantitySelector;
