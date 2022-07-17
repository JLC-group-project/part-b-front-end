import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./Nav";
import Home from "./pages/Home";
import MenuAdmin from "./pages/Menu/MenuAdmin";
import CustomizeItem from "./pages/Menu/CustomizeItem";
import { useState, useEffect } from "react";
// import Menu from "./pages/Menu/Menu";
import Menu from "./pages/Menu/Menu";
import CreateItem from "./pages/Menu/CreateItem";
import EditItem from "./pages/Menu/EditItem";
import Show from "./pages/Menu/Show";

const api = import.meta.env.VITE_API_ENDPOINT || "http:// localhost:4000";

function App() {
  //hardcode items object and customize to transfer to the components need them
  const [items, setItems] = useState([
    {
      category: "Drinks",
      name: "Latte",
      price: "$5.00",
    },
    {
      category: "Drinks",
      name: "Tea",
      price: "$4.50",
    },
    { category: "Bakery", name: "Bagel", price: "$4.50" },
    { category: "Bakery", name: "Almond Croissant", price: "$4.50" },
  ]);

  function addItem(product) {
    setItems([...items, product]);
    return items;
  }
  function editItem(name, product) {
    const indexOfObject = items.findIndex((object) => {
      object.name === name;
    });
    setItems([...items.splice(indexOfObject, 1), product]);
    return items;
  }

  // useEffect(() => (
  //   async function getItems() {
  //     // const res = await fetch(`${api}/menu`);
  //     const res = fetch("localhost:4000/menu");
  //     setItems(await res.json());
  //     // dispatch({
  //     //   type: "setItems",
  //     //   data: await res.json(),
  //     // });
  //   }
  //   // getItems();
  // ), [])

  const customize = {
    ice: "Iced",
    sugar: "1",
    milk: "Regular",
    size: "Medium",
  };

  // useEffect(async () => {
  //   const res = fetch("http://localhost:4000/menu");
  //   setItems(await res.json());
  //   console.log("HELLO" + res);
  // });

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/menu" element={<Menu />} /> */}
        <Route path="/menu/:cate" element={<Menu items={items} />} />
        <Route
          path="/menu/:cate/:item"
          element={<CustomizeItem items={items} customize={customize} />}
        />
        <Route path="/admin/menu/:cate" element={<MenuAdmin items={items} />} />
        <Route
          path="/admin/menu/create"
          element={<CreateItem addItem={addItem} />}
        />

        <Route
          path="/admin/menu/:cate/:item/edit"
          element={<EditItem editItem={editItem} />}
        />

        <Route path="*" element={<h4>Page not Found!</h4>} />
        <Route path="/show" element={<Show />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
