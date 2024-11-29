import React from "react";
import { useCart } from "../context/CartContext"; // Importar el contexto

const Cart = () => {
  const { cart } = useCart(); // Acceder al carrito

  return (
    <div>
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>No hay productos en el carrito</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.title} - ${item.price} x {item.quantity}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
