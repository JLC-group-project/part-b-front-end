import React from "react";
import {useNavigate} from "react-router-dom";

function Cart({ cartItems, onAdd, onRemove, setCartItems, menuItems, onDelete, }) {
  // Calculates the total price of all items in the cart
  const totalPrice = cartItems.reduce(
    (a, c) => a + c.quantity * c.item.price,
    0
  );
  const navigate = useNavigate();

  // Check if cart is empty
  function checkEmptyCart() {
    if (cartItems.length != 0) {
      navigate("./checkout")
    } else {
      alert("Cart is Empty");
    }
  }

  // Resets the cart
  const handleReset = (event) => {
    event.preventDefault();
    setCartItems([]);
  };

  // Finds the URl of the item in the menu
  function findImageUrl(order) {
    const menuItem = menuItems.find((i) => i._id === order.item._id);
    return menuItem.image_url;
  }

  return (
    <div className="flex justify-center">
      <div className="w-[1200px]">
        {/* title*/}
        <div className="m-10">
          <h2 className="text-4xl text-center  font-bold  text-gray-900">
            Your Orders
          </h2>
        </div>
        <div className="flex flex-wrap justify-end">
          <div className="mb-4 flex-col items-center w-full justify-between ">
            {cartItems.length === 0 && <h1>Cart is empty</h1>}
            {cartItems.map((order,index) => (
              <div key={index} className="bg-gray-800 rounded relative mt-5 flex ">
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
                          ${(order.quantity * order.item.price).toFixed(2)}
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
                <div className="absolute top-5 right-5">
                  <button
                    onClick={() => onDelete(order)}
                    className="text-white bg-gray-500 hover:bg-gray-600 focus:ring-gray-700 font-bold rounded-full text-m  text-center w-6 h-6"
                  >
                    X
                  </button>
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
          <div className="">
            {/* Handle reset */}
            <button
              className="bg-red-600 w-28 text-l hover:bg-red-700 text-white font-bold py-2 px-4 mx-2 rounded"
              onClick={handleReset}
            >
              Clear
            </button>
            <button
              // to="checkout"
              className="bg-blue-500 w-28 text-l hover:bg-blue-700 text-white font-bold py-2 px-4 mx-2 rounded"
              onClick={checkEmptyCart}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
