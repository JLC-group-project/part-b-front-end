import React from "react";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading";

function AboutUsAdmin({ aboutPage }) {
  {
    /*ternary rendering if no about page data fetched will show loading gif image*/
  }
  return aboutPage ? (
    <div>
      {/*display the about us page image*/}
      <div className="flex justify-center ">
        <img
          src={aboutPage.image_url}
          alt="AboutUs_image"
          className="max-w-[1200px]"
        />
      </div>
      {/*display the about us page slogan title and body*/}
      <div className="flex-col pt-7">
        <h1 className="text-2xl md:text-4xl text-center">{aboutPage.title} </h1>
        <h4 className="text-l md:text-2xl text-center mt-4">
          {aboutPage.body}{" "}
        </h4>
      </div>
      {/*Edit button linking to the about us editing page, which admin aide can edit the image, title and body of the about us page*/}
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
  ) : (
    <Loading />
  );
}

export default AboutUsAdmin;
