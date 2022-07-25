import React from "react";
import { Link } from "react-router-dom";

function AboutUsAdmin({ aboutPage }) {
  return (
    <div>
      <div className="flex justify-center ">
        <img
          src={aboutPage.image_url}
          alt="AboutUs_image"
          className="max-w-[1200px]"
        />
      </div>
      <div className="flex-col pt-7">
        <h1 className="text-2xl md:text-4xl text-center">{aboutPage.title} </h1>
        <h4 className="text-l md:text-2xl text-center mt-4">
          {aboutPage.body}{" "}
        </h4>
      </div>
      <div className="flex justify-center ">
        <div className="text-center w-full mt-4 lg:w-[1680px]">
          <Link
            to={`/admin/about_us/edit/${aboutPage._id}`}
            className="inline-flex menuItems-center py-2 px-3 text-lg font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-800"
          >
            Edit
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AboutUsAdmin;
