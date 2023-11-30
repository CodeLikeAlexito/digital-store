// ProductList.js

import React from 'react';
import ProductCard from './ProductCard'; // Adjust the import path based on your project structure
import './ClothesList.css'; // Import your CSS file

const ClothesList = () => {
  const clothes = [
    {
      id: 1,
      name: 'Casual T-Shirt',
      price: 19.99,
      imageUrl: 'https://t3.ftcdn.net/jpg/00/96/74/82/360_F_96748234_L1OpQlE8LQJmmjGpeQZvcOVOkhxCPzCa.jpg',
      description: 'Comfortable and stylish casual t-shirt for everyday wear.',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['White', 'Black', 'Gray'],
      material: 'Cotton',
      brand: 'Fashion Forward',
    },
    {
      id: 2,
      name: 'Slim Fit Jeans',
      price: 39.99,
      imageUrl: 'https://media.istockphoto.com/id/184354439/photo/woman-dress.jpg?s=612x612&w=0&k=20&c=YiBWfT3LqBLBKs6aK2k83FHcdHt738l0kvcsqs4uAd4=',
      description: 'Slim fit jeans with a modern and trendy look.',
      sizes: ['28', '30', '32', '34'],
      colors: ['Blue', 'Black', 'Indigo'],
      material: 'Denim',
      brand: 'Urban Chic',
    },
    {
      id: 3,
      name: 'Cozy Hoodie',
      price: 29.99,
      imageUrl: 'https://example.com/cozy-hoodie.jpg',
      description: 'Warm and comfortable hoodie for chilly days.',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Red', 'Navy', 'Gray'],
      material: 'Fleece',
      brand: 'Cozy Comforts',
    },
  ];

  return (
    <div>
      <h1>Featured Products</h1>
      <div className="product-list">
        {clothes.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ClothesList;
