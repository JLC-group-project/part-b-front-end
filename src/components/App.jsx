import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./Nav";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Orders from "./pages/Orders";

function App() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/orders")
      .then((response) => response.json())
      .then((json) => {
        // console.log(`order: ${json}`)
        setOrders(json)        
        // let incompleteOrders = json.filter((order) => order.complete == true);
        // setOrders(incompleteOrders);
      });
  }, []);

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/orders" element={<Orders orders={orders} />} />
        <Route path="*" element={<h4>Page not Found!</h4>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
