import React from "react";
import Product from "../Product";

function Cart({ cartItems, onAdd, onRemove, setCartItems }) {
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.14;
  const totalPrice = itemsPrice + taxPrice;

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(cartItems);
  };

  // const onRemove = (product) => {
  //   const exist = cartItems.find((x) => x.id === product.id);
  //   if (exist.qty === 1) {
  //     setCartItems(cartItems.filter((x) => x.id !== product.id));
  //   } else {
  //     setCartItems(
  //       cartItems.map((x) =>
  //         x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
  //       )
  //     );
  //   }
  // };

  const handleReset = (event) => {
    event.preventDefault();
    setCartItems([]);
  };

  return (
    <div>
      {/* container */}
      <div className="mb-4 flex items-center justify-between bg-orange-200">
        <h2 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
          Cart Items
        </h2>
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item) => (
          // one item
          <div key={item.id}>
            <div className="truncate text-sm font-medium text-gray-900 dark:text-white">
              {item.name}
            </div>
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

            <div className="truncate text-sm font-medium text-gray-900 dark:text-white">
              {item.qty} x ${item.price.toFixed(2)}
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div>
              <div className="truncate text-sm font-medium text-gray-900 dark:text-white">
                Items Price
              </div>
              <div className="truncate text-sm font-medium text-gray-900 dark:text-white">
                ${itemsPrice.toFixed(2)}
              </div>
            </div>
            <div>
              <div className="truncate text-sm font-medium text-gray-900 dark:text-white">
                GST
              </div>
              <div className="truncate text-sm font-medium text-gray-900 dark:text-white">
                ${taxPrice.toFixed(2)}
              </div>
            </div>

            <div>
              <div>
                <strong className="truncate text-sm font-medium text-gray-900 dark:text-white">
                  Total Price
                </strong>
              </div>
              <div>
                <strong className="truncate text-sm font-medium text-gray-900 dark:text-white">
                  ${totalPrice.toFixed(2)}
                </strong>
              </div>
            </div>
            <hr />
            <div>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleSubmit}
              >
                Checkout
              </button>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleReset}
              >
                Reset
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;
