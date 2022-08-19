/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { ReactComponent as Logo } from "../assets/icons/logo.svg";
import { ReactComponent as Bag } from "../assets/icons/bag.svg";
import { ReactComponent as Search } from "../assets/icons/search.svg";
import { ReactComponent as Hamburger } from "../assets/icons/hamburger.svg";
import { ReactComponent as Heart } from "../assets/icons/heart.svg";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  return (
    <div>
      <nav className="bg-white flex justify-between px-4 py-3">
        <div>
          <Logo fill="#111" />
        </div>
        <div className="flex"></div>
        <div className="flex items-center gap-4">
          <Search className="" />
          <Heart className="hidden" />
          <Bag className="" />
          <Hamburger
            onClick={() => setSidebar(true)}
            className="cursor-pointer "
          />
        </div>
      </nav>
      <Sidebar setSidebar={setSidebar} sidebar={sidebar} />
    </div>
  );
};

export default Navbar;
