import React, { useState } from 'react';
import './Cart.css'; // Import your CSS file for styling

const Cart = () => {
  // Assuming each item in the cart is an object with id, name, price, and quantity properties
  const [cartItems, setCartItems] = useState([]);

  // Function to remove an item from the cart
  const removeFromCart = (itemId) => {
    const updatedCart = cartItems.filter(item => item.id !== itemId);
    setCartItems(updatedCart);
  };

  // Calculate the total price of items in the cart
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="cart-container">
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cartItems.map(item => (
              <li key={item.id}>
                <span>{item.name}</span>
                <span>${item.price.toFixed(2)}</span>
                <span>Quantity: {item.quantity}</span>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <p>Total: ${calculateTotalPrice().toFixed(2)}</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
