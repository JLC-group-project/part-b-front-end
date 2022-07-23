import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

function Menu({ menuItems, itemToApp, onAdd }) {
  const { cate } = useParams();
  const [categories, setCategories] = useState(["Drinks", "Bakery"]);
  // const [product, setProduct] = useState();
  const navigate = useNavigate();

  function handleAdd(e, item) {
    e.preventDefault;
    const newItem = {
      item,
      customisation: { milk: "Nil", ice: "Nil", sugar: "Nil", size: "Nil" },
    };
    itemToApp(newItem);
    // navigate(`/about_us`);
  }

  return (
    <div className="flex w-full lg:w-[1680px]">
      <div className="invisible md:visible md:max-w-[1680] md:w-1/4">
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
      <div className=" md:w-3/4">
        <h1 className="text-5xl font-bold">{cate}</h1>
        <div className="flex flex-wrap">
          {menuItems.map(
            (item) =>
              item.category === cate && (
                <div className="sm:max-w-sm md:max-w-m bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <div>
                    <img className="rounded-t-lg" src={`${item.image_url}`} />
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
                        to={`/menu/${item.name}/${item.price}/${item._id}`}
                        className="inline-flex menuItems-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        item={item}
                      >
                        Customize
                      </Link>
                    ) : (
                      <button
                        onClick={(e) => handleAdd(e, item)}
                        // onClick={() => onAdd(item)}
                        // onClick={console.log(item)}
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
      </div>
    </div>
  );
}

export default Menu;
