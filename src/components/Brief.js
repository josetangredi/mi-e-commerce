import React from "react";
import { useCart } from "../context/CartContext";

const Brief = () => {
  const { cartItems, getTotalItems } = useCart();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  return (
    <div>
      <h2>Resumen de Compra</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.title} x {item.quantity} - ${item.quantity * item.price}
          </li>
        ))}
      </ul>
      <p>Total de productos: {getTotalItems()}</p>
      <p>Total: ${totalPrice}</p>
      <button>Finalizar Compra</button>
    </div>
  );
};

export default Brief;
