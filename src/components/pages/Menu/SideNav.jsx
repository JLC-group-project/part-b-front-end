import React from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

function SideNav() {
  const [categories, setCategories] = useState(["Drinks", "Bakery"]);

  return (
    <div>
      <Link to="/menu/Drinks">
        <h1>MENU</h1>
      </Link>
      <ul>
        {categories.map((cat, index) => (
          <li key={index}>
            <Link to={`/menu/${cat}`}>{cat}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideNav;
