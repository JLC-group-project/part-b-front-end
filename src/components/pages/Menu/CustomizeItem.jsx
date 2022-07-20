import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function CustomizeItem({ itemToApp }) {
  const ices = ["Hot", "None", "Little", "Iced"];
  const milks = ["Lactose free", "Almond milk", "Skim milk", "Regular"];
  const sizes = ["Large", "Medium", "Small"];
  const sugars = [1, 2, 3, 4, 5];
  const { item, category } = useParams();
  const [customization, setCustomization] = useState({
    size: "Medium",
    sugar: "1",
    milk: "Regular",
    ice: "Iced",
  });

  function handleAdd(e, item, customization) {
    e.preventDefault;
    const newItem = { item, customization };
    itemToApp(newItem);
    // navigate(`#`)
  }

  function handleCustomizeSugar(e) {
    setCustomization(() => ({
      ...customization,
      sugar: e.target.value,
    }));
  }

  function handleCustomizeIce(e) {
    setCustomization(() => ({
      ...customization,
      ice: e.target.value,
    }));
  }

  function handleCustomizeSize(e) {
    setCustomization(() => ({
      ...customization,
      size: e.target.value,
    }));
  }

  function handleCustomizeMilk(e) {
    setCustomization(() => ({
      ...customization,
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
          value={customization.size}
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
          value={customization.sugar}
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
          value={customization.milk}
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
          value={customization.ice}
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
        onClick={(e) => handleAdd(e, item, customization)}
        className="inline-flex menuItems-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Add To Cart
      </button>
    </>
  );
}

export default CustomizeItem;
