import React from "react";

function Order({ total_price, orders }) {
  return (
    <div>
      <div className="mb-10">
        <ul>
          {orders.map((order, index) => (
            <div key={index} className="mb-6">
              <h1 className="text-xl text-center mb-3">{`ITEM [${
                index + 1
              }]`}</h1>
              <li key={index}>
                <h1 className="font-bold">
                  Quantity:
                  <span className="text-2xl">{` ${order.quantity} pcs`}</span>
                </h1>
                <h1 className="font-bold my-2">
                  Name:
                  <span className="text-2xl">{` ${order.item.name}`}</span>
                </h1>
                {order.customisation.milk != "Nil" && (
                  <>
                    <p className="font-bold my-2">Customisation: </p>
                    <h1 className="font-bold">
                      Milk:
                      <span className="text-xl">{` ${order.customisation.milk}`}</span>
                    </h1>
                    <h1 className="font-bold">
                      Ice:
                      <span className="text-xl">{` ${order.customisation.ice}`}</span>
                    </h1>
                    <h1 className="font-bold">
                      Sugar:
                      <span className="text-xl">{` ${order.customisation.sugar} teaspoon`}</span>
                    </h1>
                    <h1 className="font-bold">
                      Size:
                      <span className="text-xl">{` ${order.customisation.size}`}</span>
                    </h1>
                  </>
                )}
                <hr className="mt-4" />
              </li>
            </div>
          ))}
        </ul>
      </div>
      <div className="absolute bottom-5 text-l">
        <h1>Total Price: ${total_price}</h1>
      </div>
    </div>
  );
}

export default Order;
