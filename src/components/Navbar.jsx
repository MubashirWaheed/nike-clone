/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { ReactComponent as Logo } from "../assets/icons/logo.svg";
import { ReactComponent as Bag } from "../assets/icons/bag.svg";
import { ReactComponent as Search } from "../assets/icons/search.svg";
import { ReactComponent as Hamburger } from "../assets/icons/hamburger.svg";
import { ReactComponent as Heart } from "../assets/icons/heart.svg";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-white flex justify-between px-4 py-3">
        <div>
          <Logo fill="#111" />
        </div>
        <div className="flex"></div>
        <div className="flex items-center ">
          <Search className="mx-1" />
          <Heart className="hidden mx-1" />
          <Bag className="mx-1" />
          {/* conditional rendering for  this  */}
          <Hamburger className="ml-1 cursor-pointer " />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
