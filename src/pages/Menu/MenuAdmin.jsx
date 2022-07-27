import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Loading from "../../components/Loading";

function Menu({ menuItems, deleteMenuItem }) {
  const { cate } = useParams();
  const categories = ["Drinks", "Bakery"];
  const navigate = useNavigate();
  // when press the delete button ,this function will be called
  async function handleDeleted(e, item) {
    e.preventDefault;
    await deleteMenuItem(item);
    navigate(`/admin/menu/${item.category}`);
  }

  return menuItems ? (
    <div className="flex justify-center">
      <div className="flex  w-full justify-center md:w-[1480px]">
        {/* this is the side nav bar*/}
        <div className=" invisible mt-8 md:visible md:w-1/5 md:h-m">
          <Link to="/admin/menu/Drinks" className="inline-block mb-4">
            <h1 className="text-3xl font-bold pl-3 ">Menu</h1>
          </Link>
          <ul className="text-sm w-full font-medium  text-gray-500 ">
            {categories.map((cat, index) => (
              <li
                key={index}
                className="border-b hover:bg-gray-700 hover:text-white rounded"
              >
                <Link to={`/admin/menu/${cat}`}>
                  <h1 className="text-xl p-3">{cat}</h1>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 ml-3 ">
            <Link
              to="/admin/menu/create"
              className="inline-flex justify-center h-[48px] w-full text-xl texts-center p-3 leading-none border rounded
              text-gray-500 border-gray-500 hover:border-transparent hover:text-white
              hover:bg-gray-700  lg:mt-0"
            >
              CREATE
            </Link>
          </div>
        </div>
        {/* this is the card component to display all the products fetched from the database , edit button will navigate the page to edit product page. delete will call the function to delete the products from thr database */}
        <div className=" flex-wrap pl-4 md:w-3/4 ">
          <h1 className="text-5xl font-bold m-4">{cate}</h1>
          <div className="flex flex-wrap">
            {menuItems.map(
              (item) =>
                item.category === cate && (
                  <div className="sm:max-w-xs md:max-w-xs  rounded-lg border border-gray-200 shadow-md bg-gray-700 m-4 ">
                    <div>
                      <img
                        className="rounded-t-lg h-[318px] w-[318px]"
                        src={`${item.image_url}`}
                      />
                    </div>
                    <div className="p-5">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                        {item.name}
                      </h5>
                      <p className="mb-3 font-normal text-white">
                        {`$${item.price}`}
                      </p>
                      <div className="flex justify-end ">
                        <div className="px-1">
                          <Link
                            to={`/admin/menu/${item.category}/${item.name}/edit`}
                            className="inline-flex w-24 justify-center menuItems-center py-2 px-3 text-m font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none  bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
                            item={item}
                          >
                            Edit
                          </Link>
                        </div>
                        <div>
                          <button
                            className="inline-flex w-24  justify-center menuItems-center py-2 px-3 text-m font-medium text-center text-white  rounded-lg focus:ring-4 focus:outline-none  bg-red-600 hover:bg-red-700 focus:ring-red-800"
                            item={item}
                            onClick={(e) => handleDeleted(e, item)}
                            variant="danger"
                          >
                            Delete
                          </button>
                        </div>
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
