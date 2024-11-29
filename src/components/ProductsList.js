import React from "react";
import { Link } from "react-router-dom";
import "../styles/index.css";

const ProductsList = ({ products }) => {
  if (!products || products.length === 0) {
    return <p>No se encontraron productos para esta categoría.</p>;
  }

  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          {/* Corregir la interpolación de la URL */}
          <Link to={`/item/${product.id}`} className="product-link">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
