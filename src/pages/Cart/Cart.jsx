import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

function Cart({ cartItems, onAdd, onRemove, setCartItems, menuItems }) {
  const totalPrice = cartItems.reduce(
    (a, c) => a + c.quantity * c.item.price,
    0
  );
  const taxPrice = totalPrice * 0.1;

  const api =
    import.meta.env.VITE_API_ENDPOINT || "http://localhost:4000/api/v1";
  const navigate = useNavigate();

  const navigateToProductDisplay = () => {
    // 👇️ navigate to /contacts
    navigate("../ProductDisplay");
  };

  function retrieveOrders() {
    let newOrders = cartItems;
    console.log(newOrders.length);
    // for (let i = 0; i < newOrders.length; i++) {
    //   newOrders[i].item = cartItems[i].item._id;
    // }
    console.log(newOrders);
    postOrder(newOrders);
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
      }),
    });
    const returnOrder = await res.json();
    console.log(returnOrder);
    // const returnedEntry = await res.json();
    // dispatch({
    //   type: "newCheckout",
    //   data: returnedCheckout,
    // });
    // return newCheckout;
  }

  async function submit(e) {
    e.preventDefault();
    const id = await addOrder(cartItems);
    nav(`/entry/${id}`);
  }

  // const newArray = cartItems.map(e =>e.id, e.name, e.qty);
  // const iterator = cartItems.values()

  // for (const value of iterator) {
  //   console.log(value)
  // }

  function sanitizedLineItems(lineItems) {
    return lineItems.reduce((data, lineItem) => {
      const item = data;
      let variantData = null;
      if (lineItem.length > 1) {
        variantData = {
          [lineItem[0].group_id]: lineItem[0].option_id,
        };
      }
      item[lineItem.id] = {
        quantity: lineItem.qty,
        id: lineItem.id,
      };
      return item;
    }, {});
  }

  const handleCheckout = (event) => {
    event.preventDefault();
    // const cart = sanitizedLineItems(cartItems);
    console.log(cartItems);
  };

  const handleReset = (event) => {
    event.preventDefault();
    setCartItems([]);
  };

  function findImageUrl(order) {
    const menuItem = menuItems.find((i) => i._id === order.item._id);
    return menuItem.image_url;
  }

  return (
    <div className="flex justify-center">
      <div className="w-[1680px]">
        {/* title*/}
        <div className="m-10">
          <h2 className="text-4xl text-center  font-bold  text-gray-900">
            Your Orders
          </h2>
        </div>
        <div className="">
          <div className="mb-4 flex-col items-center w-2/3 justify-between ">
            {cartItems.length === 0 && <h1>Cart is empty</h1>}
            {cartItems.map((order) => (
              // one item
              <div className="bg-gray-800 rounded  mt-5 flex ">
                <div className="mr-10">
                  <img
                    src={findImageUrl(order)}
                    className="w-[200px] rounded h-[200px]"
                  />
                </div>
                <div className="mt-6 relative">
                  <ul>
                    <div>
                      <li
                        key={order.item._id}
                        className="truncate text-sm font-medium  text-white"
                      >
                        <h1 className="text-2xl">
                          {order.quantity} x {order.item.name}
                        </h1>
                        <h1 className="text-xl">
                          ${order.quantity * order.item.price}
                        </h1>
                      </li>
                    </div>
                  </ul>
                  <div className="flex absolute bottom-3">
                    <button
                      onClick={() => onRemove(order)}
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-16 rounded-l-lg"
                    >
                      -
                    </button>
                    <p className="flex items-center justify-center text-2xl  font-bold text-gray-800  bg-white w-24">
                      {order.quantity}
                    </p>
                    <button
                      onClick={() => onAdd(order)}
                      className="bg-blue-500 w-16 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-lg"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
            {cartItems.length !== 0 && (
              <div>
                <hr className="mt-5" />
                <div className="flex justify-between p-3">
                  <div className="truncate text-3xl font-bold text-gray-900 ">
                    Total
                  </div>
                  <div className="truncate text-3xl font-bold  text-gray-900">
                    {`$${totalPrice.toFixed(2)}`}
                  </div>
                </div>
                <div>
                  <div className="truncate pl-3 text-sm font-medium text-gray-900 ">
                    (GST included)
                  </div>
                </div>
                <hr />
              </div>
            )}
          </div>
          <div className="w-1/4">
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
        </div>
      </div>
    </div>
  );
}

export default Cart;
