import React from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

function Menu({ items }) {
  const { category } = useParams();
  const [categories, setCategories] = useState(["Drinks", "Bakery"]);

  return (
    <>
      <div>
        <Link to="/menu/Drinks">
          <h1>MENU</h1>
        </Link>
        <ul>
          {categories.map((cat, index) => (
            <li key={index}>
              <Link to={`/menu/${cat}`}>{cat}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>{category}</h2>

        {items.map(
          (item) =>
            item.category === category && (
              <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <Link to={`/menu/${item.name}`}>
                  <img className="rounded-t-lg" src="#" />
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
                      item={item}
                    >
                      Customise
                    </Link>
                  ) : (
                    <Link
                      to="#"
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

export default Menu;
