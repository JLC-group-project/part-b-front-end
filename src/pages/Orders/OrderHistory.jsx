import React, { useState } from "react";

function OrderHistory({ price, orders }) {
  const [show, setShow] = useState(false);

  const toggleOrder = () => {
    // toggle show on or off
    setShow(!show);
  };

  return (
    <>
      <div>
        <span>Customer: </span>
        <p>Total Price: {price}</p>
        {show == false ? (
          <>
            <button
              onClick={toggleOrder}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
            >
              <svg
                className="fill-current w-4 h-4 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
              </svg>
              <span>More...</span>
            </button>
          </>
        ) : (
          <>
            {orders.map((order, index) => (
              <div key={index}>
                <p>Quantity: {order.quantity}</p>
                <p>Name: {order.item.name}</p>
                <p>Price: {order.item.price}</p>
                <hr />
                <br />
              </div>
            ))}
            <button
              onClick={toggleOrder}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
            >
              <svg
                className="fill-current w-4 h-4 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
              </svg>
              <span>Less...</span>
            </button>
          </>
        )}
      </div>
    </>
  );
}

export default OrderHistory;
