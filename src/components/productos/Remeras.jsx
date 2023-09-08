import React from "react";
import '../ItemListContainer.css';
import { Link } from 'react-router-dom';


const products = [
  // Productos de remeras
  {
    id: 4,
    name: 'Remera Blanca',
    price: 24.99,
    imageUrl: '/img/remera blanca.jpg',
    description: 'Descripción de la remera blanca'
  },
  {
    id: 5,
    name: 'Remera Negra',
    price: 24.99,
    imageUrl: '/img/remera negra.jpeg',
    description: 'Descripción de la remera negra'
  },
  {
    id: 6,
    name: 'Remera Roja',
    price: 24.99,
    imageUrl: '/img/remera roja.jpeg',
    description: 'Descripción de la remera roja'
  }
  
]

const Remeras = () => {
    return (
      <div className="item-list-container">
        <h2 className="greeting">Catalogo de Remeras</h2>
        <div className="item-list">
          {products.map((product) => (
            <div key={product.id} className="item">
              <img src={product.imageUrl} alt={product.name} className="item-image" />
              <h3 className="item-name">{product.name}</h3>
              <p className="item-price">${product.price.toFixed(2)}</p>
              <Link to={`/remeras/${product.id}`} className="btn btn-danger">Ver detalle</Link>
            </div>
          ))}
        </div>
      </div>
    );
  };

  export default Remeras;