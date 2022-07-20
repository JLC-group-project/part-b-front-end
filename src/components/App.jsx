import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./Nav";
import Home from "./pages/Home/Home";
import MenuAdmin from "./pages/Menu/MenuAdmin";
import CustomizeItem from "./pages/Menu/CustomizeItem";
import { useState, useEffect } from "react";
// import Menu from "./pages/Menu/Menu";
import Menu from "./pages/Menu/Menu";
import CreateItem from "./pages/Menu/CreateItem";
import EditItem from "./pages/Menu/EditItem";
import AboutUs from "./pages/AboutUs/AboutUs";
import HomeAdmin from "./pages/Home/HomeAdmin";
import HomeAdminEdit from "./pages/Home/HomeAdminEdit";
import AboutUsAdmin from "./pages/AboutUs/AboutUsAdmin";
import AboutUsAdminEdit from "./pages/AboutUs/AboutUsAdminEdit";

const api = import.meta.env.VITE_API_ENDPOINT || "http://localhost:4040";

function App() {
  //hardcode items object and customize to transfer to the components need them
  const [menuItems, setMenuItems] = useState([
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

  const [orderItem, setOrderItem] = useState();
  function itemToApp(item) {
    setOrderItem(item);
  }

  useEffect(() => {
    async function getMenuItems() {
      const res = await fetch(`${api}/menu`);
      setMenuItems(await res.json());
    }
    getMenuItems();
  }, []);

  async function addMenuItem(product) {
    const res = await fetch(`${api}/menu`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
    const returnItem = await res.json();
    setMenuItems([returnItem, ...menuItems]);
  }

  async function editMenuItem(item, product) {
    const res = await fetch(`${api}/menu/${item}`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
  }

  async function deleteMenuItem(item) {
    const id = item._id;
    await fetch(`${api}/menu/${id}`, {
      method: "delete",
    });
    location.reload(false);
  }

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about_us" element={<AboutUs />} />
        <Route path="/admin/about_us" element={<AboutUsAdmin />} />
        <Route path="/admin/about_us/edit" element={<AboutUsAdminEdit />} />
        <Route path="/admin/home" element={<HomeAdmin />} />
        <Route path="/admin/home/edit" element={<HomeAdminEdit />} />
        <Route
          path="/menu/:cate"
          element={<Menu menuItems={menuItems} itemToApp={itemToApp} />}
        />
        <Route
          path="/menu/:cate/:item"
          element={<CustomizeItem itemToApp={itemToApp} />}
        />
        <Route
          path="/admin/menu/:cate"
          element={
            <MenuAdmin menuItems={menuItems} deleteMenuItem={deleteMenuItem} />
          }
        />
        <Route
          path="/admin/menu/create"
          element={<CreateItem addMenuItem={addMenuItem} />}
        />

        <Route
          path="/admin/menu/:cate/:item/edit"
          element={<EditItem editMenuItem={editMenuItem} />}
        />

        <Route path="*" element={<h4>Page not Found!</h4>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
