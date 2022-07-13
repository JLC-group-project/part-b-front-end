import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Nav from "./Nav";
import Home from "./pages/Home";
import CustomizeItem from "./pages/Menu/CustomizeItem";
import Menu from "./pages/Menu/Menu";
import MenuItems from "./pages/Menu/MenuItems";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/menu" element={<Menu />} /> */}
        <Route path="/menu/:category" element={<MenuItems />} />
        <Route path="/menu/:category/:item" element={<CustomizeItem />} />
        <Route path="*" element={<h4>Page not Found!</h4>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
