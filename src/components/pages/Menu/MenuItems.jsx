import React from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import SideNav from "./SideNav";

function MenuItems({ cate }) {
  const { category } = useParams();

  const [items, setItems] = useState([
    {
      category: "Drinks",
      name: "Latte",
      price: "$5.00",
      customize: { iced: "little", sugar: 1, milk: "Regular" },
    },
    {
      category: "Drinks",
      name: "Tea",
      price: "$4.50",
      customize: { iced: "iced", sugar: 2, milk: "Regular" },
    },
    { category: "Bakery", name: "Bagel", price: "$4.50" },
    { category: "Bakery", name: "Almond Croissant", price: "$4.50" },
  ]);
  // function categoryCheck(){
  //   if items.category
  // }
  return (
    <>
      <SideNav />
      <div>
        <h2>{category}</h2>
        {items.map(
          (item) =>
            item.category === category && (
              <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <Link to={`/menu/${item.name}`}>
                  <img
                    className="rounded-t-lg"
                    src="#"
                    // alt={item.name}
                  />
                </Link>
                <div className="p-5">
                  <Link to={`/menu/${item.name}`}>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {item.name}
                    </h5>
                  </Link>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {item.price}
                  </p>
                  {item.category === "Drinks" ? (
                    <Link
                      to={`/menu/${item.category}/${item.name}`}
                      className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Customise
                    </Link>
                  ) : (
                    <Link
                      to={`/menu/${item.category}/${item.name}`}
                      className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      ADD
                    </Link>
                  )}
                </div>
              </div>
            )
        )}
      </div>
    </>
  );
}

export default MenuItems;
