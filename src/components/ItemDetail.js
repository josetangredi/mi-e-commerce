import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import ItemCount from "./ItemCount"; // Importamos el componente ItemCount

const ItemDetail = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const docRef = doc(db, "products", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setProduct(docSnap.data());
        } else {
          console.log("No se encontró el producto");
        }
      } catch (error) {
        console.error("Error fetching product details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = (quantity) => {
    // Aquí puedes agregar la lógica para añadir al carrito
    console.log(`Producto agregado al carrito: ${quantity} unidades`);
  };

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="item-detail">
      <h1>{product.name}</h1>
      <img src={product.imageUrl} alt={product.name} />
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
      <p>Stock disponible: {product.stock}</p>

      {/* Aquí integramos ItemCount */}
      <ItemCount
        stock={product.stock}
        initial={1} // Inicializamos la cantidad en 1
        onAdd={handleAddToCart} // Llamamos a la función para agregar al carrito
      />
    </div>
  );
};

export default ItemDetail;
