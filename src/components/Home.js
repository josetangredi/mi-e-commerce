import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomeContainer from "./components/HomeContainer";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ContactContainer from "./components/ContactContainer";
import { Spinner } from "react-bootstrap";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomeContainer />} />
        <Route path="/products" element={<ItemListContainer />} />
        <Route path="/category/:categoryName" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/contact" element={<ContactContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
