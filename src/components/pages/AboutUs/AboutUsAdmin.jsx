import React from "react";
import { Link } from "react-router-dom";

function AboutUsAdmin() {
  return (
    <div>
      <div>
        <img src="#" alt="AboutUs_image" />
      </div>
      {/* <div><h2>{AboutUs.content}</h2></div> */}
      <Link
        to={`/admin/about_us/edit`}
        className="inline-flex menuItems-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Edit
      </Link>
    </div>
  );
}

export default AboutUsAdmin;
