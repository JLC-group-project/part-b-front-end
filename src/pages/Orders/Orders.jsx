import { React, useEffect, useState } from "react";
// import Card from "../../components/Card";
import OrderAccordion from "../../components/OrderAccordion";
import Order from "./Order";

function Orders({ orders, history }) {
  const [visibleOrders, setVisibleOrders] = useState([]);
  const [update, setUpdate] = useState({});

  // useEffect(() => {
  //   fetch("http://localhost:4000/orders")
  //     .then((response) => response.json())
  //     .then((json) => {
  //       console.log(`order: ${json}`)
  //       // let incompleteOrders = json.filter((order) => order.complete == false);
  //       // setOrders(incompleteOrders);
  //       // setOrders(json);
  //     });
  // }, []);

  useEffect(() => {
    let displayOrders = [];
    if (history === false) {
      displayOrders = orders.filter((order) => order.complete == false);
    } else {
      displayOrders = orders.filter((order) => order.complete == true);
    }
    setVisibleOrders(displayOrders);
  }, [history, orders]);

  function removeOrder(event, index) {
    const newOrder = [...visibleOrders];
    console.log("key index: ", index);
    newOrder.splice(index, 1);
    console.log(newOrder);
    console.log(event.target);
    window.location.reload(false);

    // orders.forEach((value, index) => {
    //   console.log(index)
    //    console.log(value)
    // if (value._id === id) {
    //   console.log(newOrders)
    //   setVisibleOrders(newOrders)
    // }
    // })
  }

  function handleClick(id, event, index) {
    fetch(`http://localhost:4000/api/v1/orders/${id}`, {
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
        // console.log(`put: ${json}`)
        setUpdate(json);
        removeOrder(event, index);
      });
  }

  function handleClick2() {
    console.log("PRINT");
  }

  return (
    <div className="flex-col ">
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
        <div className="flex flex-wrap round w-[1680px] justify-between text-white ">
          {visibleOrders.length > 0 ? (
            visibleOrders.map((order, index) => (
              <div className="rounded  shadow-lg min-w-[300px]  min-h-[100px] overflow-hidden  mx-5 mt-8 dark:bg-gray-700 relative">
                <h1
                  className="text-center overflow-hidden before:h-[1px] after:h-[1px] after:bg-white font-bold
           after:inline-block after:relative after:align-middle after:w-1/3 
           before:bg-white before:inline-block before:relative before:align-middle 
           before:w-1/3 before:right-2 after:left-2 text-xl p-4"
                >{`Order [${index + 1}]`}</h1>
                <div>
                  {history === false ? (
                    <div className="mb-5 px-6 py-4">
                      {/* <Card key={order._id}> */}
                      <Order {...order} />
                      <br />
                      <div className="absolute bottom-4 right-5">
                        <button
                          onClick={(event) =>
                            handleClick(order._id, event, index)
                          }
                          // onClick={(event) => removeOrder(order._id, event, index)}
                          className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
                        >
                          Complete
                        </button>
                      </div>
                      {/* </Card> */}
                    </div>
                  ) : (
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
                  )}
                </div>
              </div>
            ))
          ) : (
            <h1>Empty List</h1>
          )}
        </div>
      </div>
    </div>
  );
}
export default Orders;
