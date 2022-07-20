import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

import Nav from "./Nav";
import Cart from "./pages/Cart";
import data from "./data";
import Main from "./pages/Main";
import CheckoutForm from "./pages/CheckoutForm";
import ProductDisplay from "./pages/ProductDisplay";
import Home from "./pages/Home/Home";
import MenuAdmin from "./pages/Menu/MenuAdmin";
import CustomizeItem from "./pages/Menu/CustomizeItem";
// import Menu from "./pages/Menu/Menu";
import Menu from "./pages/Menu/Menu";
import CreateItem from "./pages/Menu/CreateItem";
import EditItem from "./pages/Menu/EditItem";
import AboutUs from "./pages/AboutUs/AboutUs";
import HomeAdmin from "./pages/Home/HomeAdmin";
import HomeAdminEdit from "./pages/Home/HomeAdminEdit";
import AboutUsAdmin from "./pages/AboutUs/AboutUsAdmin";
import AboutUsAdminEdit from "./pages/AboutUs/AboutUsAdminEdit";

const api = import.meta.env.VITE_API_ENDPOINT || "http://localhost:4000/api/v1";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const { products } = data;
  const [orderItem, setOrderItem] = useState();
  
  console.log(orderItem);
  function itemToApp(item) {
    setOrderItem(item);
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

  
  // this function adds product to cart
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x._id === product._id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x._id === product._id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  // this function removes items from the cart
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x._id === product._id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x._id !== product._id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x._id === product._id ? { ...exist, qty: exist.qty - 1 } : x
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
        <Route path="Checkout" element={<CheckoutForm />} />
        <Route
          path="/Main"
          element={<Main products={products} onAdd={onAdd} />}
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
        <Route
          path="/ProductDisplay"
          element={<ProductDisplay cartItems={cartItems} />}
        />
        {/* Leslie's code */}
        <Route path="/" element={<Home />} />
        <Route path="/about_us" element={<AboutUs />} />
        <Route path="/admin/about_us" element={<AboutUsAdmin />} />
        <Route path="/admin/about_us/edit" element={<AboutUsAdminEdit />} />
        <Route path="/admin/home" element={<HomeAdmin />} />
        <Route path="/admin/home/edit" element={<HomeAdminEdit />} />
        <Route
          path="/menu/:cate"
          element={
            <Menu menuItems={menuItems} itemToApp={itemToApp} onAdd={onAdd} />
          }
        />
        <Route
          path="/menu/:cate/:item"
          element={<CustomizeItem itemToApp={itemToApp} onAdd={onAdd} />}
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
