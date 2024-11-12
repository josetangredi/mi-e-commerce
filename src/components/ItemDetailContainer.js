import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Importa useNavigate
import { getItemById } from "../asyncMocks"; // Asegúrate de que esta función esté correcta
import { Spinner } from "react-bootstrap";
import "../styles/index.css"; // Si necesitas estilizar

const ItemDetailContainer = () => {
  const { id } = useParams(); // Obtén el id desde la URL
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // Hook para manejar la navegación

  useEffect(() => {
    const fetchItem = async () => {
      setLoading(true);
      const response = await getItemById(id); // Obtén el producto por su ID
      setItem(response);
      setLoading(false);
    };

    fetchItem();
  }, [id]);

  // Si está cargando, muestra el spinner
  if (loading) {
    return (
      <div className="loading-container">
        <Spinner animation="border" role="status" />
      </div>
    );
  }

  // Si ya se cargó el producto, muestra el detalle
  return (
    <div className="product-details">
      {item && (
        <>
          <img src={item.image} alt={item.title} />
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <p>Precio: ${item.price}</p>
          {/* Imágenes adicionales */}
          <div className="additional-images">
            {item.moreImages?.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Imagen adicional ${index + 1}`}
              />
            ))}
          </div>
          {/* Aquí reemplazamos el botón de "Añadir al carrito" por "Volver" */}
          <button onClick={() => navigate(-1)}>Volver</button>{" "}
          {/* Vuelve a la página anterior */}
        </>
      )}
    </div>
  );
};

export default ItemDetailContainer;
