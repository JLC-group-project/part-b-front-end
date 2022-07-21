import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HomeAdmin({ homePage }) {
  return (
    <div>
      <div>
        <img src={`${homePage.image_url}`} alt="Home_image" />
      </div>
      <h1>{homePage.title}</h1>
      <h2>{homePage.body}</h2>

      <Link
        to={`/admin/edit/${homePage._id}`}
        className="inline-flex menuItems-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Edit
      </Link>
    </div>
  );
}

export default HomeAdmin;
