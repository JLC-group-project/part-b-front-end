import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./Nav";
import Home from "./pages/Home";
import MenuAdmin from "./pages/Menu/MenuAdmin";
import CustomizeItem from "./pages/Menu/CustomizeItem";
import { useState } from "react";
// import Menu from "./pages/Menu/Menu";
import Menu from "./pages/Menu/Menu";
import CreateItem from "./pages/Menu/CreateItem";
import EditItem from "./pages/Menu/EditItem";
import Show from "./pages/Menu/Show";

function App() {
  //hardcode items object and customize to transfer to the components need them
  const items = [
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
  ];
  const customize = {
    ice: "Iced",
    sugar: "1",
    milk: "Regular",
    size: "Medium",
  };

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/menu" element={<Menu />} /> */}
        <Route
          path="/menu/:cate"
          element={<Menu items={items} customize={customize} />}
        />
        <Route
          path="/menu/:cate/:item"
          element={<CustomizeItem items={items} customize={customize} />}
        />
        <Route
          path="/admin/menu/:cate"
          element={<MenuAdmin items={items} customize={customize} />}
        />
        <Route
          path="/admin/menu/create"
          element={<CreateItem items={items} customize={customize} />}
        />

        <Route
          path="/admin/menu/:cate/:item/edit"
          element={<EditItem items={items} customize={customize} />}
        />

        <Route path="*" element={<h4>Page not Found!</h4>} />
        <Route path="/show" element={<Show />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
