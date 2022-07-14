import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Nav from "./Nav";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import AdminHomePage from "./pages/AdminHomePage";
import Cart from "./pages/Cart";
import data from "./data";
import Main from "./pages/Main";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./pages/CheckoutForm";

const stripePromise = loadStripe("pk_test_L1f0e3XAzjsG7jtp4uN7L9ql");

function App() {
  const [cartItems, setCartItems] = useState([]);
  const { products } = data;

  

  // this function adds product to cart
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  // this function removes items from the cart
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
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
        <Route path="/" element={<Home openingHours="0900-1700" />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="Checkout" element={<CheckoutForm />} />
        <Route
          path="/Main"
          element={<Main products={products} onAdd={onAdd} />}
        />
        <Route path="/admin" element={<AdminHomePage />} />
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
        <Route path="*" element={<h4>Page not Found!</h4>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
