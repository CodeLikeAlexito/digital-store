import React from 'react';

import './NewProduct.css';
import ProductForm from './ProductForm';

const NewProduct = (props) => {

    const saveProductDataHandler = (enteredProductData) => {
        const productData = {
            ...enteredProductData,
            id: Math.random().toString()
        };
        props.onAddProduct(productData);
    };

    return <div>
        <ProductForm onSaveProductData={saveProductDataHandler}/>
    </div>
}

export default NewProduct;