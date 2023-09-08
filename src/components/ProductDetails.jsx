import React from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetails.css';
import { products } from './productos';

const ProductDetails = () => {
  const { section, id } = useParams();

  // Filtrar productos por sección
  const filteredProducts = products[section];

  // Buscar el producto por su id en la lista de productos filtrada
  const product = filteredProducts.find((product) => product.id === parseInt(id));

  if (!product) {
    return <div className="product-details">Producto no encontrado</div>;
  }

  return (
    <div className="product-details">
      <img src={product.imageUrl} alt={product.name} className="product-image" />
      <div className="product-details-info">
        <h2 className="product-title">{product.name}</h2>
        <p className="product-price">${product.price.toFixed(2)}</p>
        <p className="product-description">{product.description}</p>
        <button className="buy-button">Comprar</button>
      </div>
    </div>
  );
};

export default ProductDetails;
