import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <article style={{ border: "1px solid grey", padding: 10 }}>
      <h3>{product.title}</h3>
      <img src={product.image} alt={product.title} />
      <p>${product.price}</p>
      <button>
        <Link to={`/item/${product.id}`}>Más detalles</Link>{" "}
      </button>
    </article>
  );
}
