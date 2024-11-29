import React, { createContext, useState, useContext } from "react";

// Crear el contexto del carrito
const CartContext = createContext();

// Hook personalizado para usar el contexto del carrito
export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  // Estado para los elementos del carrito
  const [cartItems, setCartItems] = useState([]);

  // Función para agregar un producto al carrito
  const addToCart = (item, quantity) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id);
      if (existingItem) {
        // Si el producto ya está en el carrito, actualizar la cantidad
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + quantity } : i
        );
      } else {
        // Si el producto no está en el carrito, agregarlo
        return [...prevItems, { ...item, quantity }];
      }
    });
  };

  // Función para eliminar un producto del carrito
  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  // Función para actualizar la cantidad de un producto en el carrito
  const updateQuantity = (itemId, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Función para obtener el número total de productos en el carrito
  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  // Proveedor del contexto con los valores del carrito
  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        getTotalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
