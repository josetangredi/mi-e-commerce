import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore"; // Importar las funciones necesarias de Firebase
import { db } from "../firebase/firebase"; // Importar la instancia de Firestore
import { Spinner } from "react-bootstrap";
import { useCart } from "../context/CartContext"; // Importamos el contexto para agregar al carrito
import "../styles/index.css";

const ItemDetailContainer = () => {
  const { id } = useParams(); // Obtener el id del producto desde la URL
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [itemCount, setItemCount] = useState(1);
  const navigate = useNavigate();

  const { addToCart } = useCart(); // Accedemos a la función addToCart del contexto

  useEffect(() => {
    const fetchItem = async () => {
      setLoading(true);
      try {
        const docRef = doc(db, "productos", id); // Referencia al documento del producto en Firestore
        const docSnap = await getDoc(docRef); // Obtenemos el documento

        if (docSnap.exists()) {
          setItem({
            id: docSnap.id,
            ...docSnap.data(),
          });
        } else {
          console.log("No such product!");
          navigate("/404"); // Redirigir si el producto no existe
        }
      } catch (error) {
        console.error("Error fetching product:", error);
        navigate("/404"); // Redirigir si hay error al obtener el producto
      }
      setLoading(false);
    };

    fetchItem();
  }, [id, navigate]); // El efecto se ejecuta cuando cambia el id del producto

  const handleItemCountChange = (e) => {
    const value = Math.max(1, parseInt(e.target.value)); // Evitar valores menores que 1
    setItemCount(value);
  };

  const handleAddToCart = () => {
    if (itemCount > 0 && item) {
      addToCart(item, itemCount); // Agregar el producto al carrito con la cantidad seleccionada
    } else {
      alert("Por favor, selecciona una cantidad válida."); // Validación si la cantidad es inválida
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
          <img
            src={item.image}
            alt={item.title}
            onError={(e) => (e.target.src = "/default-image.png")}
          />{" "}
          {/* Imagen por defecto en caso de error */}
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
