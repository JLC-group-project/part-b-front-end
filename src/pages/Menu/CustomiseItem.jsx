import { useParams, Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";

function CustomizeItem({ itemToApp }) {
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
  const navigate = useNavigate();

  function handleAdd(e, item, price, id, customisation) {
    e.preventDefault;
    const newItem = {
      item: { name: item, price: price, _id: id },
      customisation,
    };
    navigate("/menu/Drinks");
    itemToApp(newItem);
  }

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
    <div>
      <div className="flex justify-center py-10">
        <h1 className="text-4xl font-bold ">Customisation</h1>
      </div>
      <div className="flex justify-center">
        <div className="w-1/4 flex-col">
          <div className="flex-col md:items-center mb-6  ">
            <div className="md:w-3/5">
              <label className="block text-gray-700 font-bold  mb-1  pr-4">
                Size
              </label>
            </div>
            <div className="md:w-full">
              <select
                required
                id="default"
                className="bg-gray-200 border border-gray-200  mb-6 text-m  rounded focus:ring-blue-500 focus:border-gray-200 block w-full p-2.5  placeholder-gray-400 text-gray-500  "
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
          </div>
          <div className="flex-col md:items-center mb-6  ">
            <div className="md:w-3/5">
              <label className="block text-gray-700 font-bold  mb-1  pr-4">
                Sugar Level
              </label>
            </div>
            <div className="md:w-full">
              <select
                required
                id="default"
                className="bg-gray-200 border border-gray-200  mb-6 text-m  rounded focus:ring-blue-500 focus:border-gray-200 block w-full p-2.5  placeholder-gray-400 text-gray-500  "
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
          </div>
          <div className="flex-col md:items-center mb-6  ">
            <div className="md:w-3/5">
              <label className="block text-gray-700 font-bold  mb-1  pr-4">
                Milk Choice
              </label>
            </div>
            <div className="md:w-full">
              <select
                required
                id="default"
                className="bg-gray-200 border border-gray-200  mb-6 text-m  rounded focus:ring-blue-500 focus:border-gray-200 block w-full p-2.5  placeholder-gray-400 text-gray-500  "
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
          </div>
          <div className="flex-col md:items-center mb-6  ">
            <div className="md:w-3/5">
              <label className="block text-gray-700 font-bold  mb-1  pr-4">
                Ice Level
              </label>
            </div>
            <div className="md:w-full">
              <select
                required
                id="default"
                className="bg-gray-200 border border-gray-200  mb-6 text-m  rounded focus:ring-blue-500 focus:border-gray-200 block w-full p-2.5  placeholder-gray-400 text-gray-500  "
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
          </div>
          <div className="flex justify-end">
            <button
              onClick={(e) => handleAdd(e, item, id, price, customisation)}
              // onClick={onAdd(id)}
              className="inline-flex menuItems-center w-[128px] justify-center py-2 px-3 text-l font-bold text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-800 "
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomizeItem;
