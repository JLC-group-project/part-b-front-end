import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Nav from "./components/Nav";
import AuthNav from "./components/AuthNav";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Admin from "./pages/Admin";
import Orders from "./pages/Orders";
import Profile from "./pages/Profile";
import ProtectedRoute from "./components/ProtectedRoute";

const api = import.meta.env.VITE_API_ENDPOINT || "http://localhost:4000/api/v1";
const url = import.meta.env.VITE_URL || "http://localhost:3000";

function App() {

  const { user, isAuthenticated, isLoading } = useAuth0();
  const [orders, setOrders] = useState([]);

  // Load Orders
  useEffect(() => {
    fetch("http://localhost:4000/api/v1/orders")
      .then((response) => response.json())
      .then((json) => {
        setOrders(json)
      });
  }, []);

  return (
    <BrowserRouter>
      {isAuthenticated ? <AuthNav /> : <Nav />}
      <Routes>
        {/* End User Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />

        {/* Admin Routes */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute component={Admin} url={url} />
          }
        />

        {/* Order Routes */}

        {/* <Route
          path="/admin/orders"
          element={<Orders orders={orders} history={false} />}
        /> */}

        <Route
          path="/admin/orders"
          element={
            <ProtectedRoute component={Orders} orders={orders} history={false} />
          }
        />

        {/* <Route
          path="/admin/orders/history"
          element={<Orders orders={orders} history={true} />}
        /> */}

        <Route
          path="/admin/orders/history"
          element={
            <ProtectedRoute component={Orders} orders={orders} history={true} />
          }
        />

        {/* <Route path="/admin/profile" element={<Profile />} /> */}
        {/* <ProtectedRoute path="/admin/profile" component={Profile} /> */}
        <Route
          path="/admin/profile"
          element={<ProtectedRoute component={Profile} />}
        />

        <Route path="*" element={<h4>Page not Found!</h4>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
