import React from 'react';
import './Navbar.css'; // Import your CSS file for styling

const Navbar = () => {
  return (
    <nav>
      <a href="#products">Products</a>
      <a href="#special-offers">Special Offers</a>
      <a href="#cart">Cart</a>
      <a href="#contact">Contact</a>
    </nav>
  );
};

export default Navbar;
