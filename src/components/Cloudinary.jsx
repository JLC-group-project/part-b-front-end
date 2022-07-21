import React from "react";
import { useState, useEffect } from "react";

function Cloudinary({ getImageUrl }) {
  const [image, setImage] = useState();
  const [url, setUrl] = useState();
  const [loading, setLoading] = useState(true);

  function uploadImage() {
    setLoading(false);
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "coderscafe");
    data.append("cloud_name", "dapawns9w");
    fetch("https://api.cloudinary.com/v1_1/dapawns9w/image/upload", {
      method: "post",
      body: data,
    })
      .then((resp) => resp.json())
      .then((data) => {
        setUrl(data.url);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getImageUrl(url);
  }, [url]);

  return (
    <div>
      <div>
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          required
        ></input>
        <button
          onClick={uploadImage}
          className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Upload
        </button>
      </div>
      <div>
        <h1>Preview:</h1>
        <div>{loading || url ? <img src={url} /> : <h3>Loading...</h3>}</div>
      </div>
    </div>
  );
}

export default Cloudinary;
