import React from "react";
import { useCart } from "../context/CartContext"; // Importar el hook useCart

const CartWidget = () => {
  const { getTotalItems } = useCart(); // Usamos getTotalItems para obtener la cantidad total de productos

  return (
    <div className="cart-widget">
      <i
        className="bi bi-cart custom-cart-icon"
        style={{ color: "black", fontSize: "24px" }} // Aplica color negro
      ></i>
      {getTotalItems() > 0 && (
        <span className="badge rounded-pill bg-danger cart-number">
          {getTotalItems()}
        </span>
      )}
    </div>
  );
};

export default CartWidget;
