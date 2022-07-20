import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

function Menu({ menuItems, itemToApp }) {
  const { cate } = useParams();
  const [categories, setCategories] = useState(["Drinks", "Bakery"]);
  const [product, setProduct] = useState();
  const navigate = useNavigate();

  function handleAdd(e, item) {
    e.preventDefault;
    const newItem = { item, customization: null };
    itemToApp(newItem);
    // navigate(`#`)
  }

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
        <h2>{cate}</h2>
        {menuItems.map(
          (item) =>
            item.category === cate && (
              <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <div>
                  <img className="rounded-t-lg" src="#" />
                </div>
                <div className="p-5">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {item.name}
                  </h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {`$${item.price}`}
                  </p>
                  {/*Ternary Operators to change the button as bakery do not need customize */}
                  {item.category === "Drinks" ? (
                    <Link
                      // to={`/menu/${item.category}/${item.name}`}
                      to={`/menu/${item.category}/${item._id}`}
                      className="inline-flex menuItems-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      item={item}
                    >
                      Customize
                    </Link>
                  ) : (
                    <button
                      onClick={(e) => handleAdd(e, item)}
                      className="inline-flex menuItems-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Add To Cart
                    </button>
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
