import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Order from "../Orders/Order";

function Success({ api }) {
  // mount order

  const [order, setOrder] = useState();

  useEffect(() => {
    const { id } = useParams();
    console.log(id)
    console.log("Mounted");
    fetch(`${api}/orders/${id}`)
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, []);

  const o = [
    {
      _id: "62dcc7e175bd6abc44e1e2ae",
      orders: [
        {
          customisation: {
            milk: "Nil",
            ice: "Nil",
            sugar: "Nil",
            size: "Nil",
          },
          quantity: 1,
          item: {
            _id: "62d69e23e80ca2790d70ddc3",
            category: "Bakery",
            name: "Carrot Cake",
            price: "7.95",
            image_url:
              "http://res.cloudinary.com/dapawns9w/image/upload/v1658401442/tqekb89zxvtp5wcxvvue.jpg",
          },
          _id: "62dcc7e175bd6abc44e1e2af",
        },
      ],
      total_price: 9.06,
      complete: true,
      __v: 0,
    },
  ];

  return (
    <div className="flex-col">
      <div className="flex justify-center my-8">
        <h1 className="text-5xl font-bold">Payment Received!</h1>
      </div>
      <div className=" flex justify-center ">
        <div className="flex flex-wrap round w-[1680px] justify-evenly text-white ">
          {o.map((order, index) => (
            <div className="rounded  shadow-lg min-w-[300px]  min-h-[100px] overflow-hidden  mx-5 mt-8 bg-gray-700 relative">
              <h1
                className="text-center overflow-hidden before:h-[1px] after:h-[1px] after:bg-white font-bold
           after:inline-block after:relative after:align-middle after:w-1/3 
           before:bg-white before:inline-block before:relative before:align-middle 
           before:w-1/3 before:right-2 after:left-2 text-xl p-4"
              >{`Receipt`}</h1>
              <div className="mb-5 px-6 py-4">
                <Order key={index} {...order} />
                <br />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center my-8">
        <h1 className="text-5xl font-bold">Pick up in 30 minutes!</h1>
      </div>
    </div>
  );
}

export default Success;
