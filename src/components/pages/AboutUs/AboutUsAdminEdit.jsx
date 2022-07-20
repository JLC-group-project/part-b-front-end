import React, { useState } from "react";
import Cloudinary from "../../Cloudinary";
import { Link, useNavigate } from "react-router-dom";

function AboutUsAdminEdit() {
  const [context, setContext] = useState();
  const navigate = useNavigate();

  async function handleAboutContext(e, context) {
    e.preventDefault;
    await fetch(`#`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(context),
    });
    navigate(`/admin/about_us`);
  }

  return (
    <div>
      <h1>About us admin</h1>
      <Cloudinary />
      <form>
        <label>Context:</label>
        <input
          type="text"
          name="name"
          onChange={(e) => setContext({ context: e.target.value })}
        />
        {console.log(context)}
      </form>
      <div>
        <button
          onClick={(e) => handleAboutContext(e, context)}
          className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Save
        </button>
      </div>
      <div>
        <Link
          to="/admin/about_us"
          className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
          variant="danger"
        >
          Cancel
        </Link>
      </div>
    </div>
  );
}

export default AboutUsAdminEdit;
