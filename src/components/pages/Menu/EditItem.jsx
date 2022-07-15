import React from "react";
import { useParams, Link } from "react-router-dom";
import { useState } from "react";

function EditItem() {
  const { it, cate } = useParams();
  const [picture, setPicture] = useState();
  const [img, setImg] = useState(null);
  const categories = ["Drinks", "Bakery"];
  const [category, setCategory] = useState();
  let item = JSON;

  function onChangePicture(e) {
    if (e.target.files[0]) {
      console.log("picture: ", e.target.files);
      setPicture(e.target.files[0]);
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImg(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  }
  return (
    <div>
      <h3>Edit {it}</h3>
      <div>
        <h3>Choose a product image:</h3>
        <input type="file" onChange={(e) => onChangePicture(e)} />
      </div>
      <div>
        {{ img } && <img src={img} className="object-cover h-96 w-192" />}
      </div>
      <div className="form">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="productprice"
          >
            Product Name:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Latte"
            required
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="productprice"
          >
            Product Price:
          </label>
          <input
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="$5.00"
            required
          />
        </div>
        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="prodectprice"
            required
          >
            Product Category:
          </label>
          <select
            required
            id="default"
            className="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
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
  );
}
export default EditItem;
