import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCategory, getProducts } from "../asyncMocks";
import ProductsList from "./ProductsList";
import { Spinner } from "react-bootstrap";

const ItemListContainer = ({ greeting }) => {
  const { categoryName } = useParams(); // Obtenemos el nombre de la categoría de la URL
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      if (categoryName) {
        const filteredProducts = await getCategory(categoryName); // Filtramos por categoría
        setProducts(filteredProducts);
      } else {
        const allProducts = await getProducts(); // Si no hay categoría, mostramos todos los productos
        setProducts(allProducts);
      }
      setLoading(false);
    };

    fetchProducts();
  }, [categoryName]); // Vuelve a cargar productos cuando cambia la categoría

  if (loading) {
    return (
      <div className="loading-container">
        <Spinner animation="border" role="status" />
      </div>
    );
  }

  return (
    <div>
      <h2 className="titulo-producto">Productos Disponibles</h2>
      <p>{greeting}</p>
      <ProductsList products={products} />
    </div>
  );
};

export default ItemListContainer;