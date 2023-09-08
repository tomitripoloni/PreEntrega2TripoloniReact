import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ProductDetails from './components/ProductDetails';
import Gorras from './components/productos/Gorras';
import Remeras from './components/productos/Remeras';
import Zapatillas from './components/productos/Zapatillas';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="gif-background">
        <img src="./public/img/fondonike.jpg" alt="Fondo GIF" />
      </div>
      <Routes>
        <Route path="/" element={<   inicio />} />
        <Route path="/gorras" element={<Gorras />} />
        <Route path="/remeras" element={<Remeras />} />
        <Route path="/zapatillas" element={<Zapatillas />} />
        <Route
          path="/:section/:id"
          element={<ProductDetails />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
