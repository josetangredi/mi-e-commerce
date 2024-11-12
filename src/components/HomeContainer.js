import React from "react";
import { Link } from "react-router-dom";

export default function HomeContainer() {
  return (
    <div className="home-container">
      <div className="home-content">
        <div className="home-text">
          <h1 className="home-title">Bienvenido a Nuestra Tienda</h1>
          <p className="home-description">
            Descubre nuestros productos únicos y de alta calidad para tu hogar.
            Tenemos todo lo que necesitas para darle ese toque especial a tu
            espacio.
          </p>
          <Link to="/products" className="home-button">
            Ver Más
          </Link>
        </div>
        <div className="home-image">
          <img
            src="./images/ideas5.jpg"
            alt="Imagen destacada de la tienda"
            className="home-image-img"
          />
        </div>
      </div>
    </div>
  );
}
