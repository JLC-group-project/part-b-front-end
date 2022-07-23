import React, { useState } from "react";
import Cloudinary from "../../components/Cloudinary";
import { Link, useNavigate, useParams } from "react-router-dom";

function HomeAdminEdit({ api }) {
  const [context, setContext] = useState();
  const { id } = useParams();
  const navigate = useNavigate();

  async function editHomeContent(e, context) {
    e.preventDefault;
    await fetch(`${api}/pages/${id}`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(context),
    });
    navigate(`/admin`);
    location.reload(false);
  }

  function handleTitle(e) {
    setContext(() => ({
      ...context,
      title: e.target.value,
    }));
  }

  function handleBody(e) {
    setContext(() => ({
      ...context,
      body: e.target.value,
    }));
  }

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
      <h1 className="text-3xl m-4 text-center">Home Admin</h1>
      <div className="pb-16">
        <Cloudinary getImageUrl={getImageUrl} />
      </div>
      <div className="flex-col ">
        <div className="flex justify-center">
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
        <div className="flex justify-center">
          <div className="px-4">
            <button
              onClick={(e) => editHomeContent(e, context)}
              className="inline-flex w-32 justify-center py-2  text-m font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Save
            </button>
          </div>
          <div className="px-4">
            <Link
              to="/admin"
              className="inline-flex w-32 justify-center py-2  text-m font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
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

export default HomeAdminEdit;
