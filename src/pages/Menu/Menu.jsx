import React from "react";
import { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Loading from "../../components/Loading";

function Menu({ menuItems, itemToApp, onAdd }) {
  const { cate } = useParams();
  const [categories, setCategories] = useState(["Drinks", "Bakery"]);

  // add the product to cart component
  function handleAdd(e, item) {
    e.preventDefault;
    const newItem = {
      item,
      customisation: { milk: "Nil", ice: "Nil", sugar: "Nil", size: "Nil" },
    };
    itemToApp(newItem);
  }

  return menuItems ? (
    <div className="flex justify-center">
      <div className="flex  w-full justify-center md:w-[1480px]">
        {/* this is the sidenav bar*/}
        <div className=" invisible mt-8 md:visible md:w-1/5 md:h-m">
          <Link to="/menu/Drinks" className="inline-block mb-4">
            <h1 className="text-3xl font-bold pl-3 ">Menu</h1>
          </Link>
          <ul className="text-sm w-full font-medium  text-gray-500 ">
            {categories.map((cat, index) => (
              <li
                key={index}
                className="border-b hover:bg-gray-700 hover:text-white rounded"
              >
                <Link to={`/menu/${cat}`}>
                  <h1 className="text-xl p-3">{cat}</h1>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* this is the card component to display all the products fetched from the database */}
        <div className=" flex-wrap pl-4 md:w-3/4 ">
          <h1 className="text-5xl font-bold m-4">{cate}</h1>
          <div className="flex flex-wrap">
            {menuItems.map(
              (item) =>
                item.category === cate && (
                  <div
                    key={item._id}
                    className="sm:max-w-xs md:max-w-xs rounded-lg border shadow-md bg-gray-700 m-4 border-gray-200"
                  >
                    <div>
                      <img
                        className="rounded-t-lg h-[318px] w-[318px]"
                        src={`${item.image_url}`}
                      />
                    </div>
                    <div className="p-5">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight  text-white">
                        {item.name}
                      </h5>
                      <p className="mb-3 font-normal text-white">
                        {`$${item.price}`}
                      </p>
                      {/*Ternary Operators to change the button as bakery do not need customize */}
                      <div className="flex justify-end">
                        {item.category === "Drinks" ? (
                          <Link
                            to={`/menu/${item.name}/${item.price}/${item._id}`}
                            className="inline-flex menuItems-center py-2 px-3 text-sm font-medium text-center text-white rounded-lg  focus:ring-4 focus:outline-none bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
                            item={item}
                          >
                            Customize
                          </Link>
                        ) : (
                          <button
                            onClick={(e) => handleAdd(e, item)}
                            // onClick={() => onAdd(item)}
                            // onClick={console.log(item)}
                            className="w-32 inline-flex justify-center menuItems-center py-2 px-3 text-m font-medium text-center text-white  rounded focus:ring-4 focus:outline-none bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
                          >
                            Add To Cart
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                )
            )}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
}

export default Menu;
