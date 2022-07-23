import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HomeAdmin({ homePage }) {
  return (
    <div>
      <div className="flex justify-center ">
        <img
          src={`${homePage.image_url}`}
          alt="Home_image"
          className="w-full lg:w-[1680px]"
        />
      </div>
      <div className="flex-col pt-7">
        <h1 className="text-2xl md:text-4xl text-center">{homePage.title} </h1>
        <h4 className="text-l md:text-2xl text-center mt-4">
          {homePage.body}{" "}
        </h4>
      </div>
      <div className="flex justify-center ">
        <div className="text-end w-full lg:w-[1680px]">
          <Link
            to={`/admin/edit/${homePage._id}`}
            className="inline-flex menuItems-center py-2 px-3 text-lg font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Edit
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomeAdmin;
