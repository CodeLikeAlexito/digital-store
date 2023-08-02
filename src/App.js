import React, { useState } from 'react';
import NewProduct from './NewProduct/NewProduct';
import ProductForm from './NewProduct/ProductForm';

function App() {

  const addProductHandler = product => {
    console.log("App.js");
    console.log(product);
  }

  return (
    <div className="App">
      <NewProduct onAddProduct={addProductHandler}/>
    </div>
  );
}
 
export default App;
