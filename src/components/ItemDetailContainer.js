import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getItemById } from "../asyncMocks";
import { Spinner } from "react-bootstrap";
import { useCart } from "../context/CartContext"; // Importamos el contexto para agregar al carrito
import "../styles/index.css";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [itemCount, setItemCount] = useState(1);
  const navigate = useNavigate();

  const { addToCart } = useCart(); // Accedemos a la función addToCart

  useEffect(() => {
    const fetchItem = async () => {
      setLoading(true);
      const response = await getItemById(id);
      setItem(response);
      setLoading(false);
    };

    fetchItem();
  }, [id]);

  const handleItemCountChange = (e) => {
    setItemCount(e.target.value);
  };

  const handleAddToCart = () => {
    if (item) {
      addToCart(item, parseInt(itemCount)); // Agregar el producto al carrito con la cantidad
    }
  };

  if (loading) {
    return (
      <div className="loading-container">
        <Spinner animation="border" role="status" />
      </div>
    );
  }

  return (
    <div className="product-details">
      {item && (
        <>
          <img src={item.image} alt={item.title} />
          <div className="product-info">
            <h2 className="product-title">{item.title}</h2>
            <p className="product-description">{item.description}</p>
            <p className="product-price">${item.price}</p>

            <div className="item-count">
              <label htmlFor="itemCount">Cantidad:</label>
              <input
                type="number"
                id="itemCount"
                min="1"
                value={itemCount}
                onChange={handleItemCountChange}
                style={{
                  width: "50px",
                  height: "25px",
                  textAlign: "center",
                }}
              />
            </div>

            <div className="button-container">
              <button className="custom-button" onClick={handleAddToCart}>
                Añadir {itemCount} al carrito
              </button>
              <button className="back-button" onClick={() => navigate(-1)}>
                Volver
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ItemDetailContainer;
