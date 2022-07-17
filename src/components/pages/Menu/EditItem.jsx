import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function EditItem({ editItem }) {
  const { item, cate } = useParams();
  const [product, setProduct] = useState({});
  const [picture, setPicture] = useState();
  const [img, setImg] = useState(null);
  const categories = ["Drinks", "Bakery"];
  const navigate = useNavigate();

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
    setProduct((item) => ({
      ...product,
      category: e.target.value,
    }));
  }

  async function submit(e) {
    e.preventDefault;
    await editItem(item, product);
    console.log("Hello" + product.name);
    navigate(`/admin/menu/${product.category}`);
  }

  return (
    <div>
      <h3>Edit {item}</h3>
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
            placeholder={item}
            required
            onChange={(event) => handleProductName(event)}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="product price"
          >
            Product Price:
          </label>
          <input
            className="shadow appearance-none border border-grey-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="$5.00"
            required
            onChange={(event) => handleProductPrice(event)}
          />
        </div>
        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="productprice"
            required
          >
            Product Category:
          </label>
          <select
            required
            id="default"
            className="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
        <h1>{console.log(product)}</h1>
        <h1>{`${product.name}`}</h1>
        <h1>{`${product.price}`}</h1>
        <h1>{`${product.category}`}</h1>
        <div>
          <button
            onClick={submit}
            className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Save
          </button>
        </div>
        <div>
          <Link
            to="/admin/menu/Drinks"
            className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
            variant="danger"
          >
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
}
export default EditItem;
