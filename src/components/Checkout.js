import React from "react";
import { useCart } from "../context/CartContext";

const Checkout = () => {
  const { cartItems, getTotalItems } = useCart();

  if (cartItems.length === 0) {
    return <p>No hay productos en el carrito.</p>;
  }

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h2>Resumen de Compra</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.title} x {item.quantity} = ${item.price * item.quantity}
          </li>
        ))}
      </ul>
      <p>Total: ${total}</p>
      <button>Finalizar Compra</button>
    </div>
  );
};

export default Checkout;
