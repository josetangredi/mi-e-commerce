import React from "react";
import { Link } from "react-router-dom";

const Item = ({ id, name }) => {
  return (
    <div className="item">
      <h3>{name}</h3>
      {/* Corregir la interpolación de la URL */}
      <Link to={`/item/${id}`}>Ver Detalle</Link>
    </div>
  );
};

export default Item;
