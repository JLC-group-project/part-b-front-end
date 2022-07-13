import React from "react";
import Product from "../Product";


function Main({ products, onAdd}) {
  return (
    <div className="container mx-auto">
      <h2>Products</h2>
      {products.map((product) => (
        <Product key={product.id} product={product} onAdd={onAdd} />
      ))}
    </div>
  );
}

export default Main;
