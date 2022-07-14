import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function CustomizeItem({ items }) {
  const ices = ["Hot", "None", "Little", "Iced"];
  const milks = ["Lactose free", "Almond milk", "Skim milk", "Regular"];
  const sizes = ["Large", "Medium", "Small"];
  const sugars = [1, 2, 3, 4, 5];
  const { ite, category } = useParams();
  const [item, setItem] = useState();
  const [ice, setIce] = useState("Iced");
  const [sugar, setSugar] = useState(1);
  const [milk, setMilk] = useState("Regular");
  const [size, setSize] = useState("Medium");

  //Find the right item according to the params
  useEffect(() => {
    setItem(items.find((obj) => obj.name === ite));
  }, []);
  //trigger the change of the item customize object according to the customer's choices.
  function handleSizeChange(e) {
    let value;
    setSize(e.target.value);
    setItem({
      ...item,
      customize: { ...item.customize, size: e.target.value },
    });
  }
  function handleSugarChange(e) {
    let value;
    setSugar(e.target.value);
    setItem({
      ...item,
      customize: { ...item.customize, sugar: e.target.value },
    });
  }
  function handleIceChange(e) {
    let value;
    setIce(e.target.value);
    setItem({
      ...item,
      customize: { ...item.customize, ice: e.target.value },
    });
  }
  function handleMilkChange(e) {
    let value;
    setMilk(e.target.value);
    setItem({
      ...item,
      customize: { ...item.customize, milk: e.target.value },
    });
  }
  console.log(item);

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
          value={size}
          onChange={(event) => handleSizeChange(event)}
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
          value={sugar}
          onChange={(event) => handleSugarChange(event)}
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
          value={milk}
          onChange={(event) => handleMilkChange(event)}
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
          value={ice}
          onChange={(event) => handleIceChange(event)}
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
      <h2>{`${ice},${sugar},${milk},${size}`}</h2>
      <button
        to="#"
        className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        ADD
      </button>
    </>
  );
}

export default CustomizeItem;
