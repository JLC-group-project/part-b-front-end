import React from "react";
import { useState, useEffect } from "react";
import loading from "../assets/loading.svg";

function Cloudinary({ getImageUrl }) {
  const [image, setImage] = useState();
  const [url, setUrl] = useState();
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();
  const [load, setLoad] = useState(false);

  function uploadImage() {
    setLoad(true);
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", import.meta.env.VITE_PRESET);
    data.append("cloud_name", import.meta.env.VITE_CLOUDINARY_NAME);
    fetch(import.meta.env.VITE_CLOUDINARY_API, {
      method: "post",
      body: data,
    })
      .then((resp) => resp.json())
      .then((data) => {
        setUrl(data.url);
        setWidth(data.width);
        setHeight(data.height);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getImageUrl(url);
  }, [url]);

  return (
    <div className="flex justify-center mt-8">
      <div className="max-w-2xl rounded-lg shadow-xl bg-gray-50">
        {load ? (
          <div className="m-4">
            <p className="mb-1 text-gray-500">Image Preview</p>
            <p className="mb-2 text-gray-500">{`Dimension: Height-${height}, Width-${width} `}</p>
            <div className="flex items-center justify-center w-full">
              {url ? (
                <img src={url} alt="preview" />
              ) : (
                <img src={loading} alt="Loading" />
              )}
            </div>
          </div>
        ) : (
          <div>
            <div className="m-4">
              <label className="block mb-2 text-gray-500">Image Upload</label>
              <div className="flex items-center justify-center w-full">
                <label className="flex flex-col w-full h-32 border-4 border-blue-200 border-dashed hover:bg-gray-100 hover:border-gray-300">
                  <div className="flex flex-col items-center justify-center pt-7">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-8 text-gray-400 group-hover:text-gray-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>
                    <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                      Attach a file
                    </p>
                  </div>
                  <input
                    type="file"
                    className="opacity-0"
                    onChange={(e) => setImage(e.target.files[0])}
                    required
                  />
                </label>
              </div>
            </div>
            <div className="flex justify-center p-2">
              <button
                onClick={uploadImage}
                className="w-full px-4 py-2 text-white bg-teal-500 rounded shadow-xl"
              >
                Upload
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cloudinary;
