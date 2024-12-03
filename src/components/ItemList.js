import React from "react";

const ItemList = ({ products }) => {
  // Si no hay productos, mostramos un mensaje
  if (!products || products.length === 0) {
    return <p>No hay productos disponibles.</p>;
  }

  return (
    <div className="item-list">
      {/* Mapeamos sobre el array de productos y renderizamos un div por cada producto */}
      {products.map((product) => (
        <div key={product.id} className="item">
          <h3>{product.name}</h3>
          <img src={product.image} alt={product.name} />
          <p>Precio: ${product.price}</p>
          <button>
            <a href={`/item/${product.id}`}>Ver Detalle</a>
          </button>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
