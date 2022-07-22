import React from "react";

function Order({ total_price, orders }) {
  return (
    <>
      {orders.map((order, index) => (
        <div key={index}>
          <p>Quantity: {order.quantity}</p>
          <p>Name: {order.item.name}</p>
          {order.customisation.milk != "Nil" && (
            <>
              <p>Customisation</p>
              <p>Milk:{order.customisation.milk}</p>
              <p>Ice:{order.customisation.ice}</p>
              <p>Sugar:{order.customisation.sugar}</p>
              <p>Size:{order.customisation.size}</p>
            </>
          )}
          <p>Price: ${order.item.price}</p>
          <hr />
          <br />
        </div>
      ))}
      <p>Total Price: ${total_price}</p>
    </>
  );
}

export default Order;
