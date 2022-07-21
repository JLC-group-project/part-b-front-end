import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function CustomizeItem({ itemToApp, onAdd }) {
  const ices = ["Hot", "None", "Little", "Iced"];
  const milks = ["Lactose free", "Almond milk", "Skim milk", "Regular"];
  const sizes = ["Large", "Medium", "Small"];
  const sugars = [1, 2, 3, 4, 5];
  const { item, id, price } = useParams();
  const [customisation, setCustomisation] = useState({
    size: "Medium",
    sugar: "1",
    milk: "Regular",
    ice: "Iced",
  });

  

  function handleAdd(e, item, price, id, customisation) {
    e.preventDefault;
    const newItem = {
      item:{ name: item, price: price, _id: id },
      customisation,
    };
    console.log(newItem);
    // onAdd(item,price,id);
    itemToApp(newItem);
  }

  // function addToCart(e) {
  //    e.preventDefault;
  //   const newItem = { _id: "62d5697aef6a7a8a4ab88297", item, customisation };
  //   onAdd(newItem);
  // }

  function handleCustomizeSugar(e) {
    setCustomisation(() => ({
      ...customisation,
      sugar: e.target.value,
    }));
  }

  function handleCustomizeIce(e) {
    setCustomisation(() => ({
      ...customisation,
      ice: e.target.value,
    }));
  }

  function handleCustomizeSize(e) {
    setCustomisation(() => ({
      ...customisation,
      size: e.target.value,
    }));
  }

  function handleCustomizeMilk(e) {
    setCustomisation(() => ({
      ...customisation,
      milk: e.target.value,
    }));
  }

  return (
    <>
      <div>
        <label
          htmlFor="default"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
        >
          Size
        </label>
        <select
          id="default"
          className="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Choose the size of you drink"
          value={customisation.size}
          onChange={(event) => handleCustomizeSize(event)}
        >
          <option>Choose the size of you drink </option>
          {sizes.map((each, index) => {
            return (
              <option key={index} value={each}>
                {each}
              </option>
            );
          })}
        </select>
      </div>
      <div>
        <label
          htmlFor="default"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
        >
          Sugar Level
        </label>
        <select
          id="default"
          className="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={customisation.sugar}
          onChange={(event) => handleCustomizeSugar(event)}
        >
          <option>Choose the sugar level</option>
          {sugars.map((each, index) => {
            return (
              <option key={index} value={each}>
                {each}
              </option>
            );
          })}
        </select>
      </div>
      <div>
        <label
          htmlFor="default"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
        >
          Milk Choice
        </label>
        <select
          id="default"
          className="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={customisation.milk}
          onChange={(event) => handleCustomizeMilk(event)}
        >
          <option>Choose the milk</option>
          {milks.map((each, index) => {
            return (
              <option key={index} value={each}>
                {each}
              </option>
            );
          })}
        </select>
      </div>
      <div>
        <label
          htmlFor="default"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
        >
          Ice Level
        </label>
        <select
          id="default"
          className="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={customisation.ice}
          onChange={(event) => handleCustomizeIce(event)}
        >
          <option>Choose the Ice level</option>
          {ices.map((each, index) => {
            return (
              <option key={index} value={each}>
                {each}
              </option>
            );
          })}
        </select>
      </div>
      <button
        onClick={(e) => handleAdd(e, item, id, price, customisation)}
        // onClick={onAdd(id)}
        className="inline-flex menuItems-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Add To Cart
      </button>
    </>
  );
}

export default CustomizeItem;
