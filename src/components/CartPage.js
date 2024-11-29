import React from "react";
import { useCart } from "../context/CartContext";
import "../styles/index.css"; // Archivo de estilos para personalizar el carrito

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  // Verificar si no hay productos en el carrito
  if (cartItems.length === 0) {
    return <p className="not-product">No hay productos en el carrito.</p>;
  }

  // Función para manejar el cambio de cantidad
  const handleQuantityChange = (id, quantity) => {
    if (quantity <= 0) {
      removeFromCart(id); // Eliminar el producto si la cantidad es 0 o menor
    } else {
      updateQuantity(id, quantity); // Actualizar la cantidad del producto
    }
  };

  // Función para manejar la eliminación del producto
  const handleRemove = (id) => {
    removeFromCart(id); // Eliminar el producto del carrito
  };

  // Calcular el total de todos los productos en el carrito
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  };

  return (
    <div className="cart-page">
      <h2 className="cart-title">Mi carrito</h2>
      <div className="cart-items">
        {cartItems.map((item, index) => (
          <div key={index} className="cart-item-card">
            <div className="cart-item-image">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="cart-item-info">
              <h3 className="cart-item-title">{item.title}</h3>
              <p className="cart-item-price">${item.price}</p>
              <div className="quantity-control">
                Cantidad:
                <input
                  className="quantity-input"
                  type="number"
                  value={item.quantity}
                  onChange={(e) =>
                    handleQuantityChange(item.id, parseInt(e.target.value))
                  }
                />
              </div>
              <div className="remove-button">
                <button onClick={() => handleRemove(item.id)}>Eliminar</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Total a pagar */}
      <div className="cart-total">
        <h3>Total: ${calculateTotal().toFixed(2)}</h3>{" "}
        {/* Muestra el total con dos decimales */}
      </div>
    </div>
  );
};

export default CartPage;
