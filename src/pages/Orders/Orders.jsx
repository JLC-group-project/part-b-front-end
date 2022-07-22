import { React, useEffect, useState } from "react";
import Card from "../../components/Card";
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
    <>
      {visibleOrders.length > 0 ? (
        visibleOrders.map((order, index) => (
          <>
            {history === false ? (
              <Card key={order._id}>
                <Order {...order} />
                <br />
                <button
                  onClick={(event) => handleClick(order._id, event, index)}
                  // onClick={(event) => removeOrder(order._id, event, index)}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                >
                  Complete
                </button>
              </Card>
            ) : (
              <OrderAccordion title={order._id}>
                  <Order {...order} />
                  <br />
                  <button
                    onClick={(event) => handleClick2()}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                  >
                    Print
                  </button>
              </OrderAccordion>
            )}
          </>
        ))
      ) : (
        <h1>Empty List</h1>
      )}
    </>
  );
}
export default Orders;
