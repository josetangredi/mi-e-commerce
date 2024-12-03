import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/firebase";
import ProductsList from "./ProductsList";
import { Spinner } from "react-bootstrap";

const ItemListContainer = ({ greeting }) => {
  const { categoryName } = useParams(); // Obtener la categoría de la URL
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const productsCollection = collection(db, "productos");

        let productsQuery = productsCollection;

        if (categoryName) {
          productsQuery = query(
            productsCollection,
            where("category", "==", categoryName)
          );
        }

        const snapshot = await getDocs(productsQuery);
        const productsList = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setProducts(productsList);
      } catch (error) {
        console.error("Error al obtener productos:", error);
      }
      setLoading(false);
    };

    fetchProducts();
  }, [categoryName]);

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
