import React from "react";
import ProductsList from "./ProductsList";

export default function ProductsContainer() {
  return (
    <div>
      <h2 className="products-title">Productos Disponibles</h2>
      <ProductsList />
    </div>
  );
}
