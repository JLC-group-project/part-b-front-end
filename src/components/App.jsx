import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./Nav";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import AdminHomePage from "./pages/AdminHomePage";

function App() {

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              openingHours="0900-1700"
            />
          }
        />
        <Route path="/menu" element={<Menu />} />
        <Route path="/admin" element={<AdminHomePage />} />
        <Route path="*" element={<h4>Page not Found!</h4>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
