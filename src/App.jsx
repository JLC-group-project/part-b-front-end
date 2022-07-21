import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/pages/Home/Home";
import MenuAdmin from "./components/pages/Menu/MenuAdmin";
import CustomizeItem from "./components/pages/Menu/CustomizeItem";
import { useState, useEffect } from "react";
import Menu from "./components/pages/Menu/Menu";
import CreateItem from "./components/pages/Menu/CreateItem";
import EditItem from "./components/pages/Menu/EditItem";
import AboutUs from "./components/pages/AboutUs/AboutUs";
import HomeAdmin from "./components/pages/Home/HomeAdmin";
import HomeAdminEdit from "./components/pages/Home/HomeAdminEdit";
import AboutUsAdmin from "./components/pages/AboutUs/AboutUsAdmin";
import AboutUsAdminEdit from "./components/pages/AboutUs/AboutUsAdminEdit";

const api = import.meta.env.VITE_API_ENDPOINT || "http://localhost:4000/api/v1";

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
  const [homePage, setHomePage] = useState({
    title: "About Us",
    body: "About Us Body",
  });
  const [aboutPage, setAboutPage] = useState({
    title: "About Us",
    body: "About Us Body",
  });

  function itemToApp(item) {
    // setOrderItem(item);

    let cart = JSON.parse(sessionStorage.getItem("cart"));
    cart = [...cart, item];
    sessionStorage.setItem("cart", JSON.stringify(cart));
  }

  // Initialise session storage
  useEffect(() => {
    // Access cart from session storage
    let cart = sessionStorage.getItem("cart");
    // If cart doesn't exist
    if (cart === null) {
      // Initialize cart as an empty array
      sessionStorage.setItem("cart", JSON.stringify([]));
    }
  }, []);

  useEffect(() => {
    async function multiFetches() {
      const [res1, res2, res3] = await Promise.all([
        fetch(`${api}/menu`),
        fetch(`${api}/pages/62d78186109da67b9e32bc6e`),
        fetch(`${api}/pages/62d781c0109da67b9e32bc71`),
      ]);
      setMenuItems(await res1.json());
      setAboutPage(await res2.json());
      setHomePage(await res3.json());
    }
    multiFetches();
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
    await fetch(`${api}/menu/${item}`, {
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
        <Route path="/" element={<Home homePage={homePage} />} />
        <Route path="/about_us" element={<AboutUs aboutPage={aboutPage} />} />
        <Route
          path="/admin/about_us"
          element={<AboutUsAdmin aboutPage={aboutPage} />}
        />
        <Route
          path="/admin/about_us/edit/:id"
          element={<AboutUsAdminEdit api={api} />}
        />
        <Route path="/admin" element={<HomeAdmin homePage={homePage} />} />
        <Route path="/admin/edit/:id" element={<HomeAdminEdit api={api} />} />
        <Route
          path="/menu/:cate"
          element={<Menu menuItems={menuItems} itemToApp={itemToApp} />}
        />
        <Route
          path="/menu/:item/:id/:price"
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
