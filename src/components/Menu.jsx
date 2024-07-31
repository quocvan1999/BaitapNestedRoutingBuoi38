import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <div className="bg-white shadow-xl h-full">
      <h1 className="font-bold text-2xl text-center py-3">Dashboard</h1>
      <ul className="px-3">
        <li>
          <NavLink
            to="/product-management"
            className={({ isActive }) =>
              `w-full block p-2 rounded-md text-orange-400 font-medium ${
                isActive ? "text-white bg-orange-400" : ""
              }`
            }
          >
            Products
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
