import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import Order from "../Orders/Order";

function Success({ api }) {
  const [receipt, setReceipt] = useState();
  const { id } = useParams();

  // Fetch order from database and mount the information
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
          <div className="rounded shadow-lg min-w-[400px] min-h-[100px] overflow-hidden mx-5 mt-8 bg-gray-700 relative">
            <h1
              className="text-center overflow-hidden before:h-[1px] after:h-[1px] after:bg-white font-bold
           after:inline-block after:relative after:align-middle after:w-1/3 
           before:bg-white before:inline-block before:relative before:align-middle 
           before:w-1/3 before:right-2 after:left-2 text-xl p-4"
            >
              {`Receipt`}
            </h1>
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
                <span className="text-xl">{` ${`${receipt.customer_info.first_name} 
                  ${receipt.customer_info.last_name}`}`}</span>
              </h1>
              <h1 className="font-bold">
                Email:
                <span className="text-xl">{` ${receipt.customer_info.email}`}</span>
              </h1>
              <h1 className="font-bold">
                Ph:
                <span className="text-xl">{` ${receipt.customer_info.phone_number}`}</span>
              </h1>
              <hr className="mt-4" />
            </div>
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
