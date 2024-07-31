import React from "react";
import { Outlet } from "react-router-dom";
import Menu from "../components/Menu";

const HomePage = () => {
  return (
    <div className="w-full h-[100vh] flex ">
      <div className="w-[250px] h-full">
        <Menu />
      </div>
      <div className="w-[calc(100%-250px)] h-full bg-gray-100 p-3 overflow-y-scroll">
        <Outlet />
      </div>
    </div>
  );
};

export default HomePage;
