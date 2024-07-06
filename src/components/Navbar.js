import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./active.css";

const Navbar = () => {
  return (
    <div className="w-full h-20 bg-gray-300 drop-shadow-2xl sticky top-0 flex items-center justify-between px-8">
      <h1 className="text-zinc-700 text-2xl">Clothing brand</h1>
      <nav className="w-[40rem] flex justify-around">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/Catalog">Products</NavLink>
        <NavLink to="/About">About us</NavLink>
        <NavLink to="/Contact">Contact us</NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
