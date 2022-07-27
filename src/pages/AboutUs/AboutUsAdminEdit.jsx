import React, { useState } from "react";
import Cloudinary from "../../components/Cloudinary";
import { Link, useNavigate, useParams } from "react-router-dom";

function AboutUsAdminEdit({ api }) {
  const [context, setContext] = useState();
  const { id } = useParams();
  const navigate = useNavigate();
  //update the about us page object to database
  async function editAboutContext(e, context) {
    e.preventDefault;
    await fetch(`${api}/pages/${id}`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(context),
    });
    navigate(`/admin/about_us`);
    location.reload(false);
  }
  // create an about-us page object with title ,which will be posted to database after everything has been set up
  function handleTitle(e) {
    setContext(() => ({
      ...context,
      title: e.target.value,
    }));
  }
  // create an about-us page object with body ,which will be posted to database after everything has been set up
  function handleBody(e) {
    setContext(() => ({
      ...context,
      body: e.target.value,
    }));
  }
  // create a about us page object with image url ,which will be posted to database after everything has been set up
  function getImageUrl(url) {
    setContext(
      (url = {
        ...context,
        image_url: url,
      })
    );
  }

  return (
    <div>
      <h1 className="text-3xl m-4 text-center">About Us Editing</h1>
      <div className="pb-16">
        <Cloudinary getImageUrl={getImageUrl} />
      </div>
      <div className="flex-col ">
        <div className="flex justify-center">
          {/*this form tag will help to set the about us context object*/}
          <form className="w-full max-w-sm ">
            <div className="flex-col md:items-center mb-6">
              <div className="md:w-1/5">
                <label className="block text-gray-500 font-bold  mb-1  pr-4">
                  Title:
                </label>
              </div>
              <div className="md:w-full">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500"
                  type="text"
                  onChange={(e) => handleTitle(e)}
                  required
                />
              </div>
            </div>
            <div className="flex-col md:items-center mb-6">
              <div className="md:w-1/5">
                <label className="block text-gray-500 font-bold  mb-1  pr-4">
                  Body:
                </label>
              </div>
              <div className="md:w-full">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500"
                  type="text"
                  onChange={(e) => handleBody(e)}
                  required
                />
              </div>
            </div>
          </form>
        </div>
        {/*save button will save the whole object to database, or cancel the editing*/}
        <div className="flex justify-center">
          <div className="px-4">
            <button
              onClick={(e) => editAboutContext(e, context)}
              className="inline-flex w-32 justify-center py-2  text-m font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 "
            >
              Save
            </button>
          </div>
          <div className="px-4">
            <Link
              to="/admin/about_us"
              className="inline-flex w-32 justify-center py-2  text-m font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-800 "
              variant="danger"
            >
              Cancel
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsAdminEdit;
