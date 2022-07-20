import {React, useEffect, useState} from 'react'
import Card from '../Card'
import Order from './Order';
import OrderHistory from './OrderHistory';

function Orders({ orders, history }) {
  const [visibleOrders, setVisibleOrders] = useState([]);
  const [update, setUpdate] = useState({})

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
    let displayOrders = []
    if (history === false) {
      displayOrders = orders.filter((order) => order.complete == false);
    } else {
      displayOrders = orders.filter((order) => order.complete == true);  
    }
      setVisibleOrders(displayOrders)
    }, [history, orders])

  function removeOrder(event, index) {
    const newOrder = [...visibleOrders]
    console.log("key index: ", index);
    newOrder.splice(index, 1)
    console.log(newOrder)
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
        setUpdate(json)
        removeOrder(event, index);
      });
    
  }

  function handleClick2() {
    console.log("PRINT")
  }

  // function handleClick2() {
  //     let jsonbordersy = {orders:[], complete: false, price: 40}
  //   for (order of cart) {
        
  //     }
  //     fetch(`http://localhost:4000/menu`, {
  //       methorders: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       bordersy: JSON.stringify({
  //         order: "Test1",
  //         category: "Drinks",
  //         price: 2.3333333
  //       }),
  //     });
  //   }

  return (
    <>
      {visibleOrders.length > 0 ? (
        visibleOrders.map((order, index) => (
          <Card key={order._id}>
            {history === false ? (
              <>
            <Order {...order} />
              <button
                onClick={(event) => handleClick(order._id, event, index)}
                // onClick={(event) => removeOrder(order._id, event, index)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              >
                Complete
              </button>
              </>
            ) : (
                <>
                  <OrderHistory {...order} />
              <button
                onClick={(event) => handleClick2()}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              >
                Print
              </button>
              </>
            )}
          </Card>
        ))
      ) : (
        <h1>Empty List</h1>
      )}
    </>
  );
}
export default Orders