// ProductCard.js

import React from 'react';
import './ProductCard.css'; // Import your CSS file

const ProductCard = ({ product }) => {
  const {
    name,
    price,
    imageUrl,
    description,
    sizes,
    colors,
    material,
    brand,
    // Add other attributes as needed
  } = product;

  return (
    <div className="product-card">
      <img src={imageUrl} alt={name} className="product-image" />
      <div className="product-details">
        <h2 className="product-name">{name}</h2>
        <p className="product-description">{description}</p>
        <p className="product-price">${price}</p>
        <p className="product-info">
          <strong>Sizes:</strong> {sizes.join(', ')}
        </p>
        <p className="product-info">
          <strong>Colors:</strong> {colors.join(', ')}
        </p>
        <p className="product-info">
          <strong>Material:</strong> {material}
        </p>
        <p className="product-info">
          <strong>Brand:</strong> {brand}
        </p>
        {/* Add more details as needed */}
        <button className="btn btn-primary">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
