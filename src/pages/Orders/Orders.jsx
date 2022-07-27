import { React, useEffect, useState } from "react";
import OrderAccordion from "../../components/OrderAccordion";
import Order from "./Order";

function Orders({ orders, history, api }) {
  const [visibleOrders, setVisibleOrders] = useState([]);

  // Filter the array to display currently processed orders or completed orders
  useEffect(() => {
    let displayOrders = [];
    if (history === false) {
      displayOrders = orders.filter((order) => order.complete == false);
    } else {
      displayOrders = orders.filter((order) => order.complete == true);
    }
    setVisibleOrders(displayOrders);
  }, [history, orders]);

  // Remove order from orders list and refresh the page
  function removeOrder(event, index) {
    const newOrder = [...visibleOrders];
    newOrder.splice(index, 1);
    window.location.reload(false);
  }

  // Update complete status of an order to true, update database and refresh the page 
  function handleClick(id, event, index) {
    fetch(`${api}/orders/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        complete: true,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        removeOrder(event, index);
      });
  }

  function handleClick2() {
    console.log("PRINT");
  }

  return (
    <div className="flex-col ">
      {/* Check if we're on order page or order history page */}
      {history === false ? (
        <div className="flex justify-center my-8">
          <h1 className="text-5xl font-bold">Orders List</h1>
        </div>
      ) : (
        <div className="flex justify-center my-8">
          <h1 className="text-5xl font-bold">Orders History</h1>
        </div>
      )}
      <div className=" flex justify-center ">
        <div className="flex flex-wrap round w-[1680px] justify-evenly text-white">
          {/* Checking if list is empty, if it is then display "Empty List"  */}
          {visibleOrders.length > 0 ? (
            // Display an order from one customer
            visibleOrders.map((order, index) => (
              <div
                key={order._id}
                className="rounded shadow-lg min-w-[400px]  min-h-[100px] overflow-hidden  mx-5 mt-8 bg-gray-700 relative"
              >
                <h1
                  className="text-center overflow-hidden before:h-[1px] after:h-[1px] after:bg-white font-bold
           after:inline-block after:relative after:align-middle after:w-1/3 
           before:bg-white before:inline-block before:relative before:align-middle 
           before:w-1/3 before:right-2 after:left-2 text-xl p-4"
                >{`Order [${index + 1}]`}</h1>
                <h1
                  className="text-center overflow-hidden before:h-[1px] after:h-[1px] after:bg-white font-bold
           after:inline-block after:relative after:align-middle after:w-1/3 
           before:bg-white before:inline-block before:relative before:align-middle 
           before:w-1/3 before:right-2 after:left-2 text-xl p-4"
                >
                  {"Customer"}
                </h1>
                <div className="px-6">
                  <h1 className="font-bold">
                    Name:
                    <span className="text-xl">{` ${`${order.customer_info.first_name} 
                      ${order.customer_info.last_name}`}`}</span>
                  </h1>
                  <h1 className="font-bold">
                    Email:
                    <span className="text-xl">{` ${order.customer_info.email}`}</span>
                  </h1>
                  <h1 className="font-bold">
                    Ph:
                    <span className="text-xl">{` ${order.customer_info.phone_number}`}</span>
                  </h1>
                  <hr className="mt-4" />
                </div>
                <div>
                  {/* Check if we're on order page or order history page */}
                  {history === false ? (
                    <div className="mb-5 px-6 py-4">
                      {/* Display all the items in the cart */}
                      <Order {...order} />
                      <br />
                      <div className="absolute bottom-4 right-5">
                        <button
                          onClick={(event) =>
                            handleClick(order._id, event, index)
                          }
                          className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
                        >
                          Complete
                        </button>
                      </div>
                      {/* </Card> */}
                    </div>
                  ) : (
                    <>
                      <div className="mb-5 px-6 py-4 ">
                        <OrderAccordion title={order._id}>
                          <Order {...order} />
                          <br />
                          <div className="absolute bottom-4 right-5 hidden">
                            <button
                              onClick={(event) => handleClick2()}
                              className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
                            >
                              Print
                            </button>
                          </div>
                        </OrderAccordion>
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className=" flex justify-center ">
              <div className="flex flex-wrap round w-[1680px] justify-evenly text-white ">
                <div className="rounded  shadow-lg min-w-[300px]  overflow-hidden  mx-5 mt-8 bg-gray-700 relative">
                  <h1
                    className="text-center overflow-hidden before:h-[1px] after:h-[1px] after:bg-white font-bold
           after:inline-block after:relative after:align-middle after:w-1/4 
           before:bg-white before:inline-block before:relative before:align-middle 
           before:w-1/4 before:right-2 after:left-2 text-xl p-4"
                  >
                    Empty List
                  </h1>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default Orders;
