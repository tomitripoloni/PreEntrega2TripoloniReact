import React from "react";
import '../ItemListContainer.css';
import { Link } from 'react-router-dom';


const products = [
    // Productos de gorras
    {
      id: 1,
      name: 'Gorra Roja',
      price: 19.99,
      imageUrl: '/img/gorra roja.jpg',
      description: 'Descripción de la gorra roja'
    },
    {
      id: 2,
      name: 'Gorra Negra',
      price: 21.99,
      imageUrl: '/img/gorra negra.jpg',
      description: 'Descripción de la gorra negra'
    },
    {
      id: 3,
      name: 'Gorra Azul',
      price: 19.99,
      imageUrl: '/img/gorra azul.jpg',
      description: 'Descripción de la gorra azul'
    }
    
]

const Gorras = () => {
    return (
      <div className="item-list-container">
        <h2 className="greeting">Catalogo de Gorras</h2>
        <div className="item-list">
          {products.map((product) => (
            <div key={product.id} className="item">
              <img src={product.imageUrl} alt={product.name} className="item-image" />
              <h3 className="item-name">{product.name}</h3>
              <p className="item-price">${product.price.toFixed(2)}</p>
              <Link to={`/gorras/${product.id}`} className="btn btn-danger">Ver detalle</Link>
            </div>
          ))}
        </div>
      </div>
    );
  };

  export default Gorras;