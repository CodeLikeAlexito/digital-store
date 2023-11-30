import React from 'react';
import Product from './Product';

const ProductsList = ( {productsList} ) => {

    console.log(productsList);

    return (
        <div>
          {productsList.map(product => (
            <Product
              key={product.id} // Make sure to include a unique key for each item
              productDetails={product.productDetails}
              amount={product.amount}
              productDescription={product.productDescription}
              quantity = {product.quantity}
            />
          ))}
        </div>
      );
};

export default ProductsList;