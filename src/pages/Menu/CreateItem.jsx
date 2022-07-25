import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Cloudinary from "../../components/Cloudinary";

function CreateItem({ addMenuItem }) {
  const [product, setProduct] = useState({});
  const navigate = useNavigate();

  const categories = ["Drinks", "Bakery"];

  function handleProductName(e) {
    setProduct(() => ({
      ...product,
      name: e.target.value,
    }));
  }

  function handleProductPrice(e) {
    setProduct(() => ({
      ...product,
      price: e.target.value,
    }));
  }

  function handleProductCategory(e) {
    setProduct(() => ({
      ...product,
      category: e.target.value,
    }));
  }

  function getImageUrl(url) {
    setProduct({ ...product, image_url: url });
  }

  async function submit(e, product) {
    e.preventDefault;
    await addMenuItem(product);
    navigate(`/admin/menu/${product.category}`);
  }

  return (
    <div>
      <h1 className="text-3xl m-4 text-center">Create Product</h1>
      <div className="pb-16">
        <Cloudinary getImageUrl={getImageUrl} />
      </div>
      <div className="flex-col ">
        <div className="justify-center flex">
          <div className="w-full max-w-sm ">
            <div className="flex-col md:items-center mb-6">
              <div className="md:w-2/5">
                <label className="block text-gray-500 font-bold  mb-1  pr-4">
                  Product Name:
                </label>
              </div>
              <div className="md:w-full">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500"
                  type="text"
                  placeholder="Latte"
                  required
                  onChange={(event) => handleProductName(event)}
                />
              </div>
            </div>
            <div className="flex-col md:items-center mb-6">
              <div className="md:w-/5">
                <label className="block text-gray-500 font-bold  mb-1  pr-4">
                  Product Price:
                </label>
              </div>
              <div className="md:w-full">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500"
                  type="text"
                  placeholder="5.00"
                  required
                  onChange={(event) => handleProductPrice(event)}
                />
              </div>
            </div>
            <div className="flex-col md:items-center mb-6  ">
              <div className="md:w-3/5">
                <label className="block text-gray-500 font-bold  mb-1  pr-4">
                  Product Category:
                </label>
              </div>
              <div className="md:w-full">
                <select
                  required
                  id="default"
                  className="bg-gray-200 border border-gray-200 text-gray-700 mb-6 text-m  rounded focus:ring-blue-500 focus:border-gray-200 block w-full p-2.5 placeholder-gray-400 "
                  onChange={(event) => handleProductCategory(event)}
                >
                  <option>Choose the Category</option>
                  {categories.map((each, index) => {
                    return (
                      <option key={index} value={each}>
                        {each}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="px-4">
            <button
              onClick={(e) => submit(e, product)}
              className="inline-flex w-32 justify-center py-2  text-m font-medium text-center text-white focus:ring-4 focus:outline-none bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
            >
              Save
            </button>
          </div>
          <div className="px-4">
            <Link
              to="/admin/menu/Drinks"
              className="inline-flex w-32 justify-center py-2  text-m font-medium text-center text-whitefocus:ring-4 focus:outline-none bg-red-600 hover:bg-red-700 focus:ring-red-800"
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
export default CreateItem;
