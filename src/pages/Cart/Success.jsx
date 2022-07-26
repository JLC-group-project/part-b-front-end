import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import Order from "../Orders/Order";

function Success({ api }) {
  const [receipt, setReceipt] = useState();
  const { id } = useParams();

  // mount order
  useEffect(() => {
    fetch(`${api}/orders/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setReceipt(data);
      });
  });

  return receipt ? (
    <div className="flex-col">
      <div className="flex justify-center my-8">
        <h1 className="text-5xl font-bold">Payment Received!</h1>
      </div>
      <div className=" flex justify-center ">
        <div className="flex flex-wrap round w-[1680px] justify-evenly text-white ">
          <div className="rounded  shadow-lg min-w-[300px]  min-h-[100px] overflow-hidden  mx-5 mt-8 bg-gray-700 relative">
            <h1
              className="text-center overflow-hidden before:h-[1px] after:h-[1px] after:bg-white font-bold
           after:inline-block after:relative after:align-middle after:w-1/3 
           before:bg-white before:inline-block before:relative before:align-middle 
           before:w-1/3 before:right-2 after:left-2 text-xl p-4"
            >{`Receipt`}</h1>
            <div className="mb-5 px-6 py-4">
              <Order
                total_price={receipt.total_price}
                orders={receipt.orders}
              />
              <br />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center my-8">
        <h1 className="text-5xl font-bold">Pick up in 30 minutes!</h1>
      </div>
    </div>
  ) : (
    <Loading />
  );
}

export default Success;
