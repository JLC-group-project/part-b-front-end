import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

function Menu({ menuItems, deleteMenuItem }) {
  const { cate } = useParams();
  const categories = ["Drinks", "Bakery"];
  const navigate = useNavigate();

  async function handleDeleted(e, item) {
    e.preventDefault;
    await deleteMenuItem(item);
    navigate(`/admin/menu/${item.category}`);
  }

  // return (
  //   <>
  //     <div>
  //       <Link to="/admin/menu/Drinks">
  //         <h1>MENU</h1>
  //       </Link>
  //       <ul>
  //         {categories.map((cat, index) => (
  //           <li key={index}>
  //             <Link to={`/admin/menu/${cat}`}>{cat}</Link>
  //           </li>
  //         ))}
  //       </ul>
  //       <Link
  //         to="/admin/menu/create"
  //         className="inline-flex menuItems-center py-2 px-3 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
  //       >
  //         Create
  //       </Link>
  //     </div>
  //     <div>
  //       <h2>{cate}</h2>

  //       {menuItems.map(
  //         (item) =>
  //           item.category === cate && (
  //             <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
  //               <div>
  //                 <img className="rounded-t-lg" src={`${item.image_url}`} />
  //               </div>
  //               <div className="p-5">
  //                 <Link to={`/admin/menu/${item.category}/${item.name}/edit`}>
  //                   <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
  //                     {item.name}
  //                   </h5>
  //                 </Link>
  //                 <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
  //                   {item.price}
  //                 </p>

  //               </div>
  //             </div>
  //           )
  //       )}
  //     </div>
  //   </>
  // );
  return (
    <div className="flex justify-center">
      <div className="flex  w-full justify-center md:w-[1480px]">
        <div className=" invisible mt-8 md:visible md:w-1/5 md:h-m">
          <Link to="/admin/menu/Drinks" className="inline-block mb-4">
            <h1 className="text-3xl font-bold pl-3 ">Menu</h1>
          </Link>
          <ul className="text-sm w-full font-medium  dark:text-gray-500 ">
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
        </div>
        <div className=" flex-wrap pl-4 md:w-3/4 ">
          <h1 className="text-5xl font-bold m-4">{cate}</h1>
          <div className="flex flex-wrap">
            {menuItems.map(
              (item) =>
                item.category === cate && (
                  <div className="sm:max-w-xs md:max-w-xs bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-700 m-4 dark:border-gray-200">
                    <div>
                      <img
                        className="rounded-t-lg h-[318px] w-[318px]"
                        src={`${item.image_url}`}
                      />
                    </div>
                    <div className="p-5">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {item.name}
                      </h5>
                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        {`$${item.price}`}
                      </p>
                      <div className="flex justify-end ">
                        <div className="px-1">
                          <Link
                            to={`/admin/menu/${item.category}/${item.name}/edit`}
                            className="inline-flex w-24 justify-center menuItems-center py-2 px-3 text-m font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            item={item}
                          >
                            Edit
                          </Link>
                        </div>
                        <div>
                          <button
                            className="inline-flex w-24  justify-center menuItems-center py-2 px-3 text-m font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
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
  );
}

export default Menu;
