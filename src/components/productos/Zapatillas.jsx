import React from "react";
import '../ItemListContainer.css';
import { Link } from 'react-router-dom';


const products = [
  // Productos de zapatillas
  {
    id: 7,
    name: 'Zapatillas Blancas',
    price: 59.99,
    imageUrl: '/img/zapatillas blancas.png',
    description: 'Descripción de las zapatillas blancas'
  },
  {
    id: 8,
    name: 'Zapatillas Negras',
    price: 59.99,
    imageUrl: '/img/zapatillas negras.png',
    description: 'Descripción de las zapatillas negras'
  },
  {
    id: 9,
    name: 'Zapatillas Rojas',
    price: 59.99,
    imageUrl: '/img/zapatillas atardecer.jpg',
    description: 'Descripción de las zapatillas rojas'
  }
  
]

const Zapatillas = () => {
    return (
      <div className="item-list-container">
        <h2 className="greeting">Catalogo de Zapatillas</h2>
        <div className="item-list">
          {products.map((product) => (
            <div key={product.id} className="item">
              <img src={product.imageUrl} alt={product.name} className="item-image" />
              <h3 className="item-name">{product.name}</h3>
              <p className="item-price">${product.price.toFixed(2)}</p>
              <Link to={`/zapatillas/${product.id}`} className="btn btn-danger">Ver detalle</Link>
            </div>
          ))}
        </div>
      </div>
    );
  };

  export default Zapatillas;