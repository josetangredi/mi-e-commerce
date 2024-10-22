// src/App.js
import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

const App = () => {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="¡Bienvenido a La Urdimbre!" />
      {/* Aquí puedes agregar más contenido para tu landing page */}
    </div>
  );
};

export default App;
