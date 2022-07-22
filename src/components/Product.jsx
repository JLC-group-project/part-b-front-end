import React from "react";

function Product({ product, onAdd }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src={product.image} alt={product.name} />
      <h3>Product name: {product.name}</h3>
      <div>Pirce:${product.price}</div>
      <div>
        <button
          onClick={() => onAdd(product)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Product;
