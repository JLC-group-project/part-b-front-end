import React from "react";

function Cart({ cartItems, onAdd, onRemove }) {
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.14;
  const totalPrice = itemsPrice + taxPrice;

  return (
    <div className="max-w-sm">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
          Cart Items
        </h2>
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item) => (
          <div key={item.id}>
            <div>{item.name}</div>
            <div>
              <button
                onClick={() => onRemove(item)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                -
              </button>{" "}
              <button
                onClick={() => onAdd(item)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                +
              </button>
            </div>

            <div>
              {item.qty} x ${item.price.toFixed(2)}
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div>
              <div>Items Price</div>
              <div className="ml-4">${itemsPrice.toFixed(2)}</div>
            </div>
            <div>
              <div>GST</div>
              <div>${taxPrice.toFixed(2)}</div>
            </div>

            <div>
              <div>
                <strong>Total Price</strong>
              </div>
              <div>
                <strong>${totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            <div>
              <button onClick={() => alert("Implement Checkout!")}>
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;
