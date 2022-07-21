import React from "react";

function Order({ price, orders }) {
  return (
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
      <p>Total Price: {price}</p>
    </>
  );
}

export default Order;
