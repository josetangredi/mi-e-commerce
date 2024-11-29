import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams(); // Obtiene el id del producto desde la URL

  // Datos simulados del producto, en un caso real probablemente obtendrás esto de una API
  const products = [
    {
      id: 1,
      name: "Producto 1",
      price: 100,
      description: "Descripción del Producto 1",
      imageUrl: "/producto1.1.webp",
      imageUrl: "/producto1..webp",
    },
    {
      id: 2,
      name: "Producto 2",
      price: 200,
      description: "Descripción del Producto 2",
      imageUrl: "/producto1.2.webp",
    },
    {
      id: 3,
      name: "Producto 3",
      price: 300,
      description: "Descripción del Producto 3",
      imageUrl: "/producto1.3.webp",
    },
  ];

  const product = products.find((p) => p.id === parseInt(id)); // Buscar el producto por ID

  if (!product) return <p>Producto no encontrado</p>;

  return (
    <div className="product-detail">
      <h2>{product.name}</h2>
      <img
        src={product.imageUrl}
        alt={product.name}
        style={{ width: "300px", height: "auto" }}
      />
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
    </div>
  );
};

export default ProductDetail;
