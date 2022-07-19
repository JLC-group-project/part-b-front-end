import {React, useEffect, useState} from 'react'
import Card from '../Card'
import Order from './Order';

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/orders")
      .then((response) => response.json())
      .then((json) => {
        // console.log(`order: ${json}`)
        // let doneTodos = todos.filter((todo) => todo.complete == true);
        setOrders(json);
      });
  }, []);

  function handleClick(id) {
    fetch(`http://localhost:4000/orders/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        complete: true
      }),
    })
  }

    // function handleClick2() {
    //   fetch(`http://localhost:4000/menu`, {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       name: "Test1",
    //       category: "Drinks",
    //       price: 2.3333333
    //     }),
    //   });
    // }

  return (
    <>
      {orders.map((order) => (
        <Card key={order._id}>
          <Order {...order} />
          <button
            onClick={() => handleClick(order._id)}
            // onClick={() => handleClick2()}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          >
            Complete
          </button>
        </Card>
      ))}
    </>
  );
}
export default Orders