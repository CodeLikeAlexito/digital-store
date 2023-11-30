// ProductForm.js

import React, { useState } from 'react';
import './ProductForm.css'; // Import your CSS file

const ProductForm = (props) => {
  const [productDetails, setProductDetails] = useState('');
  const [amount, setAmount] = useState(0);
  const [productDescription, setProductDescription] = useState('');
  const [quantity, setQuantity] = useState(0);

  const enteredProductDetailsHandler = (event) => {
    setProductDetails(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };

  const enteredProductDescriptionHandler = (event) => {
    setProductDescription(event.target.value);
  };

  const incrementQuantityOnClick = () => {
    setQuantity((prevCount) => prevCount + 1);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const formData = {
      productDetails: productDetails,
      productDescription: productDescription,
      quantity: quantity,
    };

    props.onSaveProductData(formData);

    setProductDetails('');
    setProductDescription('');
    setAmount(0);
    setQuantity(0);
  };

  return (
    <form onSubmit={submitHandler} key={props.id} className="product-form">
      <div className="form-group">
        <label>
          Product Details
          <input
            type="text"
            className="form-control"
            value={productDetails}
            name="productDetails"
            onChange={enteredProductDetailsHandler}
          />
        </label>
      </div>
      <div className="form-group">
        <label>
          Amount
          <input
            type="number"
            min="0.01"
            step="0.01"
            className="form-control"
            value={amount}
            name="amount"
            onChange={amountChangeHandler}
          />
        </label>
      </div>
      <div className="form-group">
        <label>
          Product Description
          <input
            type="text"
            className="form-control"
            value={productDescription}
            name="productDescription"
            onChange={enteredProductDescriptionHandler}
          />
        </label>
        <p>{productDescription.length >= 3 ? 'Valid message' : 'Invalid message'}</p>
      </div>
      <div className="form-group">
        <label>
          Quantity: {quantity}  
        </label>
        <button type="button" className="btn btn-primary" onClick={incrementQuantityOnClick}>
          Increment
        </button>
      </div>
      <br />
      <div className="form-group">
        <button type="submit" className="btn btn-success">
          Submit Form
        </button>
      </div>
    </form>
  );
};

export default ProductForm;
