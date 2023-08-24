import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="w-full space-x-5 bg-gray-300">
        <Link to="/">Product</Link>
        <Link to="/category">Category</Link>
        <Link to="/cart">cart</Link>
        <Link to="/product-details">Product Details</Link>
      </nav>
    </div>
  );
};

export default Navbar;
