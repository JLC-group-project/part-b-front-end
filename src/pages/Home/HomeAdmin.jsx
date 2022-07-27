import React from "react";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading";

function HomeAdmin({ homePage }) {
  {
    /*trinary rendering if not home page fetched will show loading*/
  }
  return homePage ? (
    <div>
      {/*display the home page image*/}
      <div className="flex justify-center ">
        <img
          src={`${homePage.image_url}`}
          alt="Home_image"
          className="max-w-[600px]"
        />
      </div>
      {/*display the home page slogan title and body*/}
      <div className="flex-col pt-7">
        <h1 className="text-2xl md:text-4xl text-center">{homePage.title} </h1>
        <h4 className="text-l md:text-2xl text-center mt-4">{homePage.body}</h4>
      </div>
      {/*Edit button link to the about us page editing page*/}
      <div className="flex justify-center ">
        <div className="text-center mt-4">
          <Link
            to={`/admin/edit/${homePage._id}`}
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

export default HomeAdmin;
