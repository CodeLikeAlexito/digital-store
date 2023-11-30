import React, { useState } from 'react';
import NewProduct from './NewProduct/NewProduct';
import ProductForm from './NewProduct/ProductForm';
import Todo from './Todo/Todo';
import ProductsList from './NewProduct/ProductsList';
import Test from './Test/Test';
import ProductCard from './NewProduct/ProductCard';
import ClothesList from './NewProduct/ClothesList';
import Navbar from './Navigation/Navbar';
import Cart from './Cart/Cart';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const DUMMY_TODOS = [
  'Learn React',
  'Practice React',
  'Profit!'
];

const productListMock = [
  {id: 1, productDetails: "Product 1", productDescription: "Description 1", amount: 123, quantity: 2},
  {id: 2, productDetails: "Product 2", productDescription: "Description 2", amount: 621, quantity: 5}
];

const App = () => {

  const sampleProduct = {
    name: 'Sample Product',
    price: 29.99,
    imageUrl: 'https://example.com/sample-product.jpg',
    description: 'This is a sample product description.',
    sizes: ['S', 'M', 'L'],
    colors: ['Red', 'Blue', 'Green'],
    material: 'Cotton',
    brand: 'Sample Brand',
  };

  const [productList, setProductList] = useState(productListMock);
  const [selectedOption, setSelectedOption] = useState('all');


  const addProductHandler = product => {
    console.log("App.js");
    console.log(product);
    const newProduct = {
      id: product.id,
      productDetails: product.productDetails,
      productDescription: product.productDescription,
      quantity: product.quantity,
    };

    setProductList(prevProductList => [
      ...prevProductList,
      newProduct
    ]);

  }

  const handleSelectChange = event => {
    const selectedValue = event.target.value;
    console.log('Selected option:' + selectedValue);
    console.log('Product list lenght: ' + productList.length);
    setSelectedOption(selectedValue);
  };

  const filteredProducts = productList.filter(product => {
    return selectedOption === 'all' ? productList : product.quantity == selectedOption;
  });

  let productContent = <p>No products found</p>;

  if(filteredProducts.length > 0) {
    productContent = <ProductsList productsList={filteredProducts} />;
  }

  // const [todo, setTodo] = useState(DUMMY_TODOS);

  // const addTodoHandler = todo => {
  //   console.log("Clicked");
  //   setTodo((prevTodo) => {
  //     return [todo, ...prevTodo];
  //   });
  // }

  return (
    <div className="App">
      <Navbar />
      {/* <NewProduct onAddProduct={addProductHandler}/> */}
      {/* <ProductCard product={sampleProduct}/> */}
      {/* <div>
        <label htmlFor="dropdown">Select an option:</label>
        <select id="dropdown" value={selectedOption} onChange={handleSelectChange}>
          <option value="all">Select quantity...</option>
          <option value="1">Quantity 1</option>
          <option value="2">Quantity 2</option>
          <option value="3">Quantity 3</option>
        </select>
        <p>You selected: {selectedOption}</p>
        <h1>List of Products:</h1>
        {productContent} */}
        {/* <ProductsList productsList = {selectedOption === 'all' ? productList : productList.filter(product => product.quantity == selectedOption) } />  */}
      {/* </div> */}
      {/* <button onClick={addTodoHandler}>Add new todo</button>
      <ul>
          {DUMMY_TODOS.map(todo => <Todo text={todo} />)}
      </ul> */}
      <ClothesList />
      <Cart />
      {/* <Test /> */}
    </div>
  );
}
 
export default App;


/*

      <ul>
        Todo: Output todos
        <Todo items={DUMMY_TODOS}></Todo>
      </ul>

*/