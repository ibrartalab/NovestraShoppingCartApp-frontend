import React from "react";
import { BsFillBagPlusFill } from "react-icons/bs";
import { LuSearch } from "react-icons/lu";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar flex items-center justify-between p-4 px-20">
      <div className="logo text-white text-xl">NShopping</div>
      <div className="navlinks text-white flex gap-6">
        <NavLink to="#">Home</NavLink>
        <NavLink to="#">Products</NavLink>
        <NavLink to="#">About</NavLink>
        <NavLink to="#">Contact</NavLink>
      </div>
      <div className="actions flex items-center gap-4 text-white">
        <div className="search text-lg">
          <LuSearch />
        </div>
        <div className="cart text-lg">
          <BsFillBagPlusFill />
        </div>
      </div>
    </div>
  );    
};

export default Navbar;
