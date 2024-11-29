import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomeContainer from "./components/HomeContainer"; // Importa el HomeContainer
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import CartPage from "./components/CartPage";
import Contact from "./components/ContactContainer";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomeContainer />} /> {/* Ruta al Home */}
          <Route path="/products" element={<ItemListContainer />} />{" "}
          {/* Ruta a todos los productos */}
          <Route
            path="/category/:categoryName"
            element={<ItemListContainer />}
          />{" "}
          {/* Ruta de categoría */}
          <Route path="/item/:id" element={<ItemDetailContainer />} />{" "}
          {/* Ruta para ver el detalle de un producto */}
          <Route path="/cart" element={<CartPage />} /> {/* Ruta al carrito */}
          <Route path="/contact" element={<Contact />} />{" "}
          {/* Ruta de contacto */}
        </Routes>
      </Router>
    </CartProvider>
  );
}
export default App;