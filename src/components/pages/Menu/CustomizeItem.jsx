import { Link, useParams } from "react-router-dom";
import { useState } from "react";

function CustomizeItem() {
  const ices = ["hot", "none", "little", "iced"];
  const milks = ["Lactose free", "Almond milk", "Skim milk", "Regular"];
  const sizes = ["Large", "Medium", "Small"];
  const sugars = [1, 2, 3, 4, 5];
  const { item, category } = useParams();
  const [ice, setIce] = useState("iced");
  const [sugar, setSugar] = useState(1);
  const [milk, setMilk] = useState();
  const [size, setSize] = useState(["Large", "Medium", "Small"]);

  function handleIce(event) {
    setSize(event.target.value);
  }
  function handleMilk(event) {
    setIce(event.target.value);
  }
  function handleSugar(event) {
    setIce(event.target.value);
  }
  function handleSize(event) {
    setIce(event.target.value);
  }
  return (
    <>
      <div>
        <label
          for="default"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
        >
          Size
        </label>
        <select
          id="default"
          class="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={size}
          onChange={(event) => handleSize(event)}
        >
          <option selected>Choose the size of you drink </option>
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
          for="default"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
        >
          Ice Level
        </label>
        <select
          id="default"
          class="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={ice}
          onChange={(event) => handleIce(event)}
        >
          <option selected>Choose your ice level</option>
          {ices.map((each, index) => {
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
          for="default"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
        >
          Sugar level
        </label>
        <select
          id="default"
          class="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={sugar}
          onChange={(event) => handleSugar(event)}
        >
          <option selected>Choose your sugar level</option>
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
          for="default"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
        >
          Milk
        </label>
        <select
          id="default"
          class="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={milk}
          onChange={(event) => handleMilk(event)}
        >
          <option selected>Choose your Milk</option>
          {milks.map((each, index) => {
            return (
              <option key={index} value={each}>
                {each}
              </option>
            );
          })}
        </select>
        <Link
          to="#"
          className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          ADD
        </Link>
      </div>
    </>
  );
}

export default CustomizeItem;
