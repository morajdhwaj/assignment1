import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./screens/product/Product";
import CartPage from "./screens/cart-page/CartPage";
import ProductDetails from "./screens/ProductDeatils/ProductDetails";
import Navbar from "./components/Navbar";
import Category from "./screens/category/Category";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/category" element={<Category />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/product-details" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
