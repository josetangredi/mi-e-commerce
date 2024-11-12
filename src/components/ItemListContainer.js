import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCategory, getProducts } from "../asyncMocks";
import ProductsList from "./ProductsList";
import { Spinner } from "react-bootstrap";

const ItemListContainer = ({ greeting }) => {
  const { categoryName } = useParams(); // Ahora obtenemos el nombre de la categoría
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      if (categoryName) {
        const filteredProducts = await getCategory(categoryName); // Usar nombre de la categoría
        setProducts(filteredProducts);
      } else {
        const allProducts = await getProducts(); // Si no hay categoría, mostrar todos los productos
        setProducts(allProducts);
      }
      setLoading(false);
    };

    fetchProducts();
  }, [categoryName]); // Dependiendo de 'categoryName', se vuelven a cargar los productos

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
