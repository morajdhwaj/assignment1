import React from "react";

const ProductDetails = (route) => {
  const { item } = route.params;
  console.log("item", item);
  return (
    <div>
      <h1>Product Details</h1>
    </div>
  );
};

export default ProductDetails;
