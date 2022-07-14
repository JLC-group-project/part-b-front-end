import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Nav from "./Nav";
import Home from "./pages/Home";
import MenuAdmin from "./pages/Menu/MenuAdmin";
import CustomizeItem from "./pages/Menu/CustomizeItem";
import { useState } from "react";
// import Menu from "./pages/Menu/Menu";
import Menu from "./pages/Menu/Menu";

function App() {
  //hardcode items object
  const items = [
    {
      category: "Drinks",
      name: "Latte",
      price: "$5.00",
      customize: { ice: "Iced", sugar: "1", milk: "Regular", size: "Medium" },
    },
    {
      category: "Drinks",
      name: "Tea",
      price: "$4.50",
      customize: { ice: "Iced", sugar: "1", milk: "Regular", size: "Medium" },
    },
    { category: "Bakery", name: "Bagel", price: "$4.50" },
    { category: "Bakery", name: "Almond Croissant", price: "$4.50" },
  ];

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/menu" element={<Menu />} /> */}
        <Route path="/menu/:category" element={<Menu items={items} />} />
        <Route
          path="/menu/:category/:ite"
          element={<CustomizeItem items={items} />}
        />
        <Route
          path="/admin/menu/:category"
          element={<MenuAdmin items={items} />}
        />
        <Route
          path="/admin/menu/:category/"
          element={<MenuAdmin items={items} />}
        />

        <Route path="*" element={<h4>Page not Found!</h4>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
