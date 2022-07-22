import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

import Nav from "./Nav";
import Home from "../pages/Home/Home";
import HomeAdmin from "../pages/Home/HomeAdmin";
import HomeAdminEdit from "../pages/Home/HomeAdminEdit";
import AboutUs from "../pages/AboutUs/AboutUs";
import AboutUsAdmin from "../pages/AboutUs/AboutUsAdmin";
import AboutUsAdminEdit from "../pages/AboutUs/AboutUsAdminEdit";
import Menu from "../pages/Menu/Menu";
import MenuAdmin from "../pages/Menu/MenuAdmin";
import CustomiseItem from "./pages/Menu/CustomiseItem";
import CreateItem from "../pages/Menu/CreateItem";
import EditItem from "../pages/Menu/EditItem";
import Cart from "./pages/Cart/Cart";
import CheckoutForm from "./pages/Cart/CheckoutForm";
import ProductDisplay from "./pages/Cart/ProductDisplay";


const api = import.meta.env.VITE_API_ENDPOINT || "http://localhost:4000/api/v1";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const { products } = data;
  const [orderItem, setOrderItem] = useState();
  
  function itemToApp(item) {
    onAdd(item);
  }

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
    {  category: "Bakery", name: "Bagel", price: "$4.50" },
    {  category: "Bakery", name: "Almond Croissant", price: "$4.50" },
  ]);

  const [homePage, setHomePage] = useState({
    title: "About Us",
    body: "About Us Body",
  });
  const [aboutPage, setAboutPage] = useState({
    title: "About Us",
    body: "About Us Body",
  });

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

  
  // this function adds product to cart
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.item._id === product.item._id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.item._id === product.item._id ? { ...exist, quantity: exist.quantity + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { item:product.item,customisation:product.customisation, quantity: 1 }]);
    }
  };

    
  // this function removes items from the cart
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.item._id === product.item._id);
    if (exist.quantity === 1) {
      setCartItems(cartItems.filter((x) => x.item._id !== product._id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.item._id === product.item._id ? { ...exist, quantity: exist.quantity - 1 } : x
        )
      );
    }
  };
  
  return (
    <BrowserRouter>
      <Nav countCartItems={cartItems.length} />
      {/* <CheckoutForm /> */}

      {/* <Cart cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} /> */}

      <Routes>
        <Route path="/" element={<Home homePage={homePage} />} />
        <Route path="/about_us" element={<AboutUs aboutPage={aboutPage} />} />

        <Route
          path="/menu/:cate"
          element={
            <Menu menuItems={menuItems} itemToApp={itemToApp} onAdd={onAdd} />
          }
        />
        <Route
          path="/menu/:item/:id/:price"
          element={<CustomiseItem itemToApp={itemToApp} />}
        />
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              onAdd={onAdd}
              onRemove={onRemove}
              setCartItems={setCartItems}
            />
          }
        />
        <Route path="/admin" element={<HomeAdmin homePage={homePage} />} />
        <Route path="/admin/edit/:id" element={<HomeAdminEdit api={api} />} />
        <Route
          path="/admin/about_us"
          element={<AboutUsAdmin aboutPage={aboutPage} />}
        />
        <Route
          path="/admin/about_us/edit/:id"
          element={<AboutUsAdminEdit api={api} />}
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
