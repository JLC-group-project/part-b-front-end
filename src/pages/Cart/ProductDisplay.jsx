import React from "react";

function ProductDisplay({ cartItems }) {
  //   const { id, qty, name } = cartItems;
  return (
    <section>
      {cartItems.map((item) => (
        <div key={item.id}>
          <h4>Name:{item.name}</h4>
          <h4>Quanity:{item.qty}</h4>
          <h4>${item.qty * item.price}</h4>
        </div>
      ))}
      <form
        action="http://localhost:4000/create-checkout-session"
        method="POST"
      >
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Checkout
        </button>
      </form>
    </section>
  );
}

export default ProductDisplay;
