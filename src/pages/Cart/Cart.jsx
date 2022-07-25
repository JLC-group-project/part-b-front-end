import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";


function Cart({ cartItems, onAdd, onRemove, setCartItems,onDelete }) {
  const itemsPrice = cartItems.reduce((a, c) => a + c.quantity * c.item.price, 0);
  const taxPrice = itemsPrice * 0.14;
  const totalPrice = itemsPrice + taxPrice;
  const api = import.meta.env.VITE_API_ENDPOINT || "http://localhost:4000/api/v1";
  const navigate = useNavigate();

  function retrieveOrders() {
    let newOrders = cartItems
    console.log(newOrders.length)
    for (let i = 0; i < newOrders.length; i++) {
      newOrders[i].item = cartItems[i].item._id
      console.log(cartItems[i].item._id)
    }
    console.log(newOrders)
    postOrder(newOrders)
    // console.log(newOrders);
  }

  async function postOrder(newOrders) {
    // const currentOrders = retrieveOrders();
    // const newCheckout = { cartItems, totalPrice };
    const res = await fetch(`${api}/orders`, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      // put orders in body
      body: JSON.stringify({
        orders: newOrders,
        complete: false,
        total_price: totalPrice.toFixed(2),
      })
        
    });
    const returnOrder = await res.json();
    console.log(returnOrder)
    // const returnedEntry = await res.json();
    // dispatch({
    //   type: "newCheckout",
    //   data: returnedCheckout,
    // });
    // return newCheckout;
  }

  return (
    <div>
      {/* container */}
      <div className="mb-4 flex items-center justify-between bg-orange-200">
        <h2 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
          Cart Items
        </h2>
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((order) => (
          // one item
          <div key={order.item._id}>
            <div className="truncate text-sm font-medium text-gray-900 dark:text-white">
              {order.item.name}
            </div>
            <div>
              <button
                onClick={() => onRemove(order)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                -
              </button>{" "}
              <button
                onClick={() => onAdd(order)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                +
              </button>
              <button
                onClick={() => onDelete(order)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Delete
              </button>
            </div>

            <div className="truncate text-sm font-medium text-gray-900 dark:text-white">
              {order.quantity} x ${parseFloat(order.item.price).toFixed(2)}
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
                onClick={retrieveOrders}
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
