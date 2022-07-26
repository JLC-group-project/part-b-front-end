import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Nav from "./Nav";
import AuthNav from "./AuthNav";
import Home from "../pages/Home/Home";
import HomeAdmin from "../pages/Home/HomeAdmin";
import HomeAdminEdit from "../pages/Home/HomeAdminEdit";
import AboutUs from "../pages/AboutUs/AboutUs";
import AboutUsAdmin from "../pages/AboutUs/AboutUsAdmin";
import AboutUsAdminEdit from "../pages/AboutUs/AboutUsAdminEdit";
import Menu from "../pages/Menu/Menu";
import MenuAdmin from "../pages/Menu/MenuAdmin";
import CustomiseItem from "../pages/Menu/CustomiseItem";
import CreateItem from "../pages/Menu/CreateItem";
import EditItem from "../pages/Menu/EditItem";
import Cart from "../pages/Cart/Cart";
import CheckoutForm from "../pages/Cart/CheckoutForm";
import ProductDisplay from "../pages/Cart/ProductDisplay";
import Orders from "../pages/Orders/Orders";
import Profile from "../pages/Profile";
import ProtectedRoute from "./ProtectedRoute";
import Footer from "./Footer";

const api = import.meta.env.VITE_API_ENDPOINT || "http://localhost:4000/api/v1";
const url = import.meta.env.VITE_URL || "http://localhost:3000";

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

  const [homePage, setHomePage] = useState({
    title: "About Us",
    body: "About Us Body",
  });
  const [aboutPage, setAboutPage] = useState({
    title: "About Us",
    body: "About Us Body",
  });

  // Authentication Hook
  const { user, isAuthenticated, isLoading } = useAuth0();

  // Orders Hook
  const [orders, setOrders] = useState([]);

  const [cartItems, setCartItems] = useState([]);
  const [orderItem, setOrderItem] = useState();

  useEffect(() => {
    async function multiFetches() {
      const [res1, res2, res3, res4] = await Promise.all([
        fetch(`${api}/menu`),
        fetch(`${api}/pages/62d78186109da67b9e32bc6e`),
        fetch(`${api}/pages/62d781c0109da67b9e32bc71`),
        fetch(`${api}/orders`),
      ]);
      setMenuItems(await res1.json());
      setAboutPage(await res2.json());
      setHomePage(await res3.json());
      setOrders(await res4.json());
    }
    multiFetches();
  }, []);

  function itemToApp(item) {
    onAdd(item);
  }

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
          x.item._id === product.item._id
            ? { ...exist, quantity: exist.quantity + 1 }
            : x
        )
      );
    } else {
      setCartItems([
        ...cartItems,
        {
          item: product.item,
          customisation: product.customisation,
          quantity: 1,
        },
      ]);
    }
  };

  // this function removes items from the cart
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.item._id === product.item._id);
    if (exist.quantity === 1) {
      setCartItems(cartItems.filter((x) => x.item._id !== product.item._id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.item._id === product.item._id
            ? { ...exist, quantity: exist.quantity - 1 }
            : x
        )
      );
    }
  };

  const onDelete = (product) => {
    setCartItems(cartItems.filter((x) => x.item._id !== product.item._id));
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen relative">
        {isAuthenticated ? (
          <AuthNav />
        ) : (
          <Nav countCartItems={cartItems.length} />
        )}
        {/* <CheckoutForm /> */}

        {/* <Cart cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} /> */}
        <div className="pb-20 overflow-hidden">
          <Routes>
            {/* End User Routes */}
            <Route path="/" element={<Home homePage={homePage} />} />
            <Route
              path="/about_us"
              element={<AboutUs aboutPage={aboutPage} />}
            />
            <Route
              path="/menu/:cate"
              element={
                <Menu
                  menuItems={menuItems}
                  itemToApp={itemToApp}
                  onAdd={onAdd}
                />
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
                  menuItems={menuItems}
                  onAdd={onAdd}
                  onRemove={onRemove}
                  setCartItems={setCartItems}
                  onDelete={onDelete}
                />
              }
            />
            {/* Admin Routes */}
            <Route
              path="/admin"
              element={
                <ProtectedRoute component={HomeAdmin} homePage={homePage} />
              }
            />
            <Route
              path="/admin/edit/:id"
              element={<ProtectedRoute component={HomeAdminEdit} api={api} />}
            />
            <Route
              path="/admin/about_us"
              element={
                <ProtectedRoute
                  component={AboutUsAdmin}
                  aboutPage={aboutPage}
                />
              }
            />
            <Route
              path="/admin/about_us/edit/:id"
              element={
                <ProtectedRoute component={AboutUsAdminEdit} api={api} />
              }
            />
            {/* Menu Routes */}
            <Route
              path="/admin/menu/:cate"
              element={
                <ProtectedRoute
                  component={MenuAdmin}
                  menuItems={menuItems}
                  deleteMenuItem={deleteMenuItem}
                />
              }
            />
            <Route
              path="/admin/menu/create"
              element={
                <ProtectedRoute
                  component={CreateItem}
                  addMenuItem={addMenuItem}
                />
              }
            />{" "}
            <Route
              path="/admin/menu/:cate/:item/edit"
              element={
                <ProtectedRoute
                  component={EditItem}
                  editMenuItem={editMenuItem}
                />
              }
            />
            {/* Order Routes */}
            <Route
              path="/admin/orders"
              element={
                <ProtectedRoute
                  component={Orders}
                  orders={orders}
                  history={false}
                  api={api}
                />
              }
            />
            <Route
              path="/admin/orders/history"
              element={
                <ProtectedRoute
                  component={Orders}
                  orders={orders}
                  history={true}
                />
              }
            />
            <Route
              path="/admin/profile"
              element={<ProtectedRoute component={Profile} />}
            />
            {/* Missing Pages */}
            <Route path="*" element={<h4>Page not Found!</h4>} />
          </Routes>
        </div>
        <div className="absolute inset-x-0 bottom-0 ">
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
