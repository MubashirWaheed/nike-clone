/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { ReactComponent as Logo } from "../assets/icons/logo.svg";
import { ReactComponent as Bag } from "../assets/icons/bag.svg";
import { ReactComponent as Search } from "../assets/icons/search.svg";
import { ReactComponent as Hamburger } from "../assets/icons/hamburger.svg";
import { ReactComponent as Heart } from "../assets/icons/heart.svg";
import Sidebar from "./Sidebar";
import { motion } from "framer-motion";

const container = {
  rest: {},
  hover: {
    transition: {
      when: "beforeChildren",
      // staggerChildren: 2,
    },
  },
};

const divVariants = {
  rest: {
    height: 0,
    opacity: 0,
    ease: "easeOut",
    duration: 0.2,
    type: "tween",
  },
  hover: {
    display: "block",
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.5,
      delayChildren: 0.5,
      // tween
      type: "tween",
      // stiffness: 40,
      // damping: 3,
      ease: "easeIn",
    },
  },
};

const linksVariants = {
  rest: {
    opacity: 0,
  },
  hover: {
    // delay: 4,
    opacity: 1,
    // 0,
  },
};

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  return (
    <div className=" flex justify-center ">
      <nav className=" w-full flex items-center px-4 py-3 desktop:max-w-[1400px] justify-center">
        {/* Logo */}
        <div className="justify-self-start w-full  ">
          <Logo fill="#111" />
        </div>

        {/* Links */}
        <div className="hidden desktop:flex items-center">
          <motion.div
            className="flex "
            variants={container}
            initial="rest"
            whileHover="hover"
            animate="rest"
          >
            <div className="whitespace-nowrap  py-3 px-3 cursor-pointer border-b-2 border-transparent hover:border-primary ">
              <p className="">New & Featured</p>
              <motion.div
                variants={divVariants}
                className="opacity-0 fixed hidden mt-[13.5px] z-10  w-full left-0 bg-white"
              >
                {/* inner link */}
                <div className="flex gap-36 justify-center  py-20">
                  <div className="flex flex-col  text-left">
                    <p className="pb-3 text-primary">New & featured</p>
                    <ul>
                      <li className="text-secondary hover:text-primary">
                        <a href="#">Memeber Exclusive Sale</a>
                      </li>
                      <li className="text-secondary hover:text-primary">
                        <a href="#">New Arrival</a>
                      </li>
                      <li className="text-secondary hover:text-primary">
                        <a href="#">Best of Air Max</a>
                      </li>
                      <li className="text-secondary hover:text-primary">
                        <a href="#">Back to School</a>
                      </li>
                      <li className="text-secondary hover:text-primary">
                        <a href="#">Backpacks</a>
                      </li>
                      <li className="text-secondary hover:text-primary">
                        <a href="#">Sale</a>
                      </li>
                    </ul>
                  </div>
                  {/* inner link */}
                  <div className="flex flex-col  text-left">
                    <p className="pb-3 text-primary">New for Men</p>
                    <ul>
                      <li className="text-secondary hover:text-primary">
                        <a href="#">Shoes</a>
                      </li>
                      <li className="text-secondary hover:text-primary">
                        <a href="#">Clothing</a>
                      </li>
                      <li className="text-secondary hover:text-primary">
                        <a href="#">Equipment</a>
                      </li>
                      <li className="text-secondary hover:text-primary">
                        <a href="#">All New</a>
                      </li>
                    </ul>
                  </div>
                  {/* Inner link */}
                  <div className="flex flex-col  text-left">
                    <p className="pb-3 text-primary">New for Women</p>
                    <ul>
                      <li className="text-secondary hover:text-primary">
                        <a href="#">Shoes</a>
                      </li>
                      <li className="text-secondary hover:text-primary">
                        <a href="#">Clothing</a>
                      </li>
                      <li className="text-secondary hover:text-primary">
                        <a href="#">Equipment</a>
                      </li>
                      <li className="text-secondary hover:text-primary">
                        <a href="#">All New</a>
                      </li>
                    </ul>
                  </div>
                  {/* inner link */}

                  <div className="flex flex-col text-left">
                    <p className="pb-3 text-primary">New for Kids </p>
                    <ul>
                      <li className="text-secondary hover:text-primary">
                        <a href="#">Boys Shoes</a>
                      </li>
                      <li className="text-secondary hover:text-primary">
                        <a href="#">Boys Clothing</a>
                      </li>
                      <li className="text-secondary hover:text-primary">
                        <a href="#">Girls Shoes</a>
                      </li>
                      <li className="text-secondary hover:text-primary">
                        <a href="#">Girls Clothing</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
          {/* ----------------------------------- */}
          <motion.div
            className="flex "
            variants={container}
            initial="rest"
            whileHover="hover"
            animate="rest"
          >
            <div className="py-3 px-3  cursor-pointer border-b-2 border-transparent hover:border-primary ">
              <p>Men</p>
              <motion.div
                variants={divVariants}
                className="opacity-0 fixed hidden mt-[13.5px] z-10 w-full left-0 bg-white"
              >
                {/* inner link */}
                <div className="flex gap-36 justify-center  py-20">
                  <div className="flex flex-col  text-left">
                    <p className="pb-3 text-primary">New & featured</p>
                    <ul>
                      <li className="text-secondary hover:text-primary">
                        <a href="#">Memeber Exclusive Sale</a>
                      </li>
                      <li className="text-secondary hover:text-primary">
                        <a href="#">New Arrival</a>
                      </li>
                      <li className="text-secondary hover:text-primary">
                        <a href="#">Best of Air Max</a>
                      </li>
                      <li className="text-secondary hover:text-primary">
                        <a href="#">Back to School</a>
                      </li>
                      <li className="text-secondary hover:text-primary">
                        <a href="#">Backpacks</a>
                      </li>
                      <li className="text-secondary hover:text-primary">
                        <a href="#">Sale</a>
                      </li>
                    </ul>
                  </div>
                  {/* inner link */}
                  <div className="flex flex-col  text-left">
                    <p className="pb-3 text-primary">Shoes</p>
                    <ul>
                      <li className="text-secondary hover:text-primary">
                        <a href="#">New Arrival</a>
                      </li>
                      <li className="text-secondary hover:text-primary">
                        <a href="#">All Shoes</a>
                      </li>
                      <li className="text-secondary hover:text-primary">
                        <a href="#">Jordan</a>
                      </li>
                      <li className="text-secondary hover:text-primary">
                        <a href="#">Lifestyle</a>
                      </li>
                      <li className="text-secondary hover:text-primary">
                        <a href="#">Golf</a>
                      </li>
                      <li className="text-secondary hover:text-primary">
                        <a href="#">Soccer</a>
                      </li>
                      <li className="text-secondary hover:text-primary">
                        <a href="#">Nike SB</a>
                      </li>
                    </ul>
                  </div>
                  {/* Inner link */}
                  <div className="flex flex-col  text-left">
                    <p className="pb-3 text-primary">Clothing </p>
                    <ul>
                      <li className="text-secondary hover:text-primary">
                        <a href="#">New Arrivals</a>
                      </li>
                      <li className="text-secondary hover:text-primary">
                        <a href="#">All Clothing</a>
                      </li>
                      <li className="text-secondary hover:text-primary">
                        <a href="#">Best Sellers</a>
                      </li>
                      <li className="text-secondary hover:text-primary">
                        <a href="#">Tops & T-Shirts</a>
                      </li>

                      <li className="text-secondary hover:text-primary">
                        <a href="#">Polos</a>
                      </li>
                      <li className="text-secondary hover:text-primary">
                        <a href="#">Matching Sets</a>
                      </li>
                      <li className="text-secondary hover:text-primary">
                        <a href="#">Pants & Tights</a>
                      </li>
                      <li className="text-secondary hover:text-primary">
                        <a href="#">Jackets & Vests</a>
                      </li>
                    </ul>
                  </div>
                  {/* inner link */}

                  <div className="flex flex-col text-left">
                    <p className="pb-3 text-primary">New for Kids </p>
                    <ul>
                      <li className="text-secondary hover:text-primary">
                        <a href="#">Boys Shoes</a>
                      </li>
                      <li className="text-secondary hover:text-primary">
                        <a href="#">Boys Clothing</a>
                      </li>
                      <li className="text-secondary hover:text-primary">
                        <a href="#">Girls Shoes</a>
                      </li>
                      <li className="text-secondary hover:text-primary">
                        <a href="#">Girls Clothing</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
          {/* ---------------------------------- */}
          <motion.div
            variants={container}
            initial="rest"
            whileHover="hover"
            animate="rest"
            className="flex"
          >
            <div className="py-3 px-3 cursor-pointer border-b-2 border-transparent hover:border-primary ">
              <p>Women</p>
              <motion.div
                variants={divVariants}
                className="opacity-0 fixed hidden mt-[13.5px] z-10 w-full left-0 bg-white"
              >
                <div className="flex gap-36 justify-center  py-20">
                  <div className="flex flex-col  text-left">
                    <p className="pb-3 text-primary">New & featured</p>
                    <ul>
                      <li className="text-secondary hover:text-primary">
                        <a href="#">Memeber Exclusive Sale</a>
                      </li>
                      <li className="text-secondary hover:text-primary">
                        <a href="#">New Arrival</a>
                      </li>
                      <li className="text-secondary hover:text-primary">
                        <a href="#">Best of Air Max</a>
                      </li>
                      <li className="text-secondary hover:text-primary">
                        <a href="#">Back to School</a>
                      </li>
                      <li className="text-secondary hover:text-primary">
                        <a href="#">Backpacks</a>
                      </li>
                      <li className="text-secondary hover:text-primary">
                        <a href="#">Sale</a>
                      </li>
                    </ul>
                  </div>
                  {/* inner link */}
                  <div className="flex flex-col  text-left">
                    <p className="pb-3 text-primary">Shoes</p>
                    <ul>
                      <li className="text-secondary hover:text-primary">
                        <a href="#">New Arrival</a>
                      </li>
                      <li className="text-secondary hover:text-primary">
                        <a href="#">All Shoes</a>
                      </li>
                      <li className="text-secondary hover:text-primary">
                        <a href="#">Jordan</a>
                      </li>
                      <li className="text-secondary hover:text-primary">
                        <a href="#">Lifestyle</a>
                      </li>
                      <li className="text-secondary hover:text-primary">
                        <a href="#">Golf</a>
                      </li>
                      <li className="text-secondary hover:text-primary">
                        <a href="#">Soccer</a>
                      </li>
                      <li className="text-secondary hover:text-primary">
                        <a href="#">Nike SB</a>
                      </li>
                    </ul>
                  </div>
                  {/* Inner link */}
                  <div className="flex flex-col  text-left">
                    <p className="pb-3 text-primary">Clothing </p>
                    <ul>
                      <li className="text-secondary hover:text-primary">
                        <a href="#">New Arrivals</a>
                      </li>
                      <li className="text-secondary hover:text-primary">
                        <a href="#">All Clothing</a>
                      </li>
                      <li className="text-secondary hover:text-primary">
                        <a href="#">Best Sellers</a>
                      </li>
                      <li className="text-secondary hover:text-primary">
                        <a href="#">Tops & T-Shirts</a>
                      </li>

                      <li className="text-secondary hover:text-primary">
                        <a href="#">Polos</a>
                      </li>
                      <li className="text-secondary hover:text-primary">
                        <a href="#">Matching Sets</a>
                      </li>
                      <li className="text-secondary hover:text-primary">
                        <a href="#">Pants & Tights</a>
                      </li>
                      <li className="text-secondary hover:text-primary">
                        <a href="#">Jackets & Vests</a>
                      </li>
                    </ul>
                  </div>
                  {/* inner link */}

                  <div className="flex flex-col text-left">
                    <p className="pb-3 text-primary">New for Kids </p>
                    <ul>
                      <li className="text-secondary hover:text-primary">
                        <a href="#">Boys Shoes</a>
                      </li>
                      <li className="text-secondary hover:text-primary">
                        <a href="#">Boys Clothing</a>
                      </li>
                      <li className="text-secondary hover:text-primary">
                        <a href="#">Girls Shoes</a>
                      </li>
                      <li className="text-secondary hover:text-primary">
                        <a href="#">Girls Clothing</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
          {/* ---------------------------- */}
          <motion.div
            variants={container}
            initial="rest"
            whileHover="hover"
            animate="rest"
            className="flex"
          >
            <div className="py-3 px-3 cursor-pointer border-b-2 border-transparent hover:border-primary  ">
              <p>Kids</p>
              <motion.div
                variants={divVariants}
                className="border-y opacity-0 hidden mt-[13.3px] z-10 fixed w-full left-0 bg-white"
              >
                <div className="flex gap-36 justify-center  py-20">
                  <div className="flex flex-col  text-left">
                    <p className="pb-3 text-primary">New & featured</p>
                    <ul>
                      <li className="text-secondary hover:text-primary">
                        <a href="#">Memeber Exclusive Sale</a>
                      </li>
                      <li className="text-secondary hover:text-primary">
                        <a href="#">New Arrival</a>
                      </li>
                      <li className="text-secondary hover:text-primary">
                        <a href="#">Best of Air Max</a>
                      </li>
                      <li className="text-secondary hover:text-primary">
                        <a href="#">Back to School</a>
                      </li>
                      <li className="text-secondary hover:text-primary">
                        <a href="#">Backpacks</a>
                      </li>
                      <li className="text-secondary hover:text-primary">
                        <a href="#">Sale</a>
                      </li>
                    </ul>
                  </div>
                  {/* inner link */}
                  <div className="flex flex-col  text-left">
                    <p className="pb-3 text-primary">Shoes</p>
                    <ul>
                      <li className="text-secondary hover:text-primary">
                        <a href="#">New Arrival</a>
                      </li>
                      <li className="text-secondary hover:text-primary">
                        <a href="#">All Shoes</a>
                      </li>
                      <li className="text-secondary hover:text-primary">
                        <a href="#">Jordan</a>
                      </li>
                      <li className="text-secondary hover:text-primary">
                        <a href="#">Lifestyle</a>
                      </li>
                      <li className="text-secondary hover:text-primary">
                        <a href="#">Golf</a>
                      </li>
                      <li className="text-secondary hover:text-primary">
                        <a href="#">Soccer</a>
                      </li>
                      <li className="text-secondary hover:text-primary">
                        <a href="#">Nike SB</a>
                      </li>
                    </ul>
                  </div>
                  {/* Inner link */}
                  <div className="flex flex-col  text-left">
                    <p className="pb-3 text-primary">Clothing </p>
                    <ul>
                      <li className="text-secondary hover:text-primary">
                        <a href="#">New Arrivals</a>
                      </li>
                      <li className="text-secondary hover:text-primary">
                        <a href="#">All Clothing</a>
                      </li>
                      <li className="text-secondary hover:text-primary">
                        <a href="#">Best Sellers</a>
                      </li>
                      <li className="text-secondary hover:text-primary">
                        <a href="#">Tops & T-Shirts</a>
                      </li>

                      <li className="text-secondary hover:text-primary">
                        <a href="#">Polos</a>
                      </li>
                      <li className="text-secondary hover:text-primary">
                        <a href="#">Matching Sets</a>
                      </li>
                      <li className="text-secondary hover:text-primary">
                        <a href="#">Pants & Tights</a>
                      </li>
                      <li className="text-secondary hover:text-primary">
                        <a href="#">Jackets & Vests</a>
                      </li>
                    </ul>
                  </div>
                  {/* inner link */}

                  <div className="flex flex-col text-left">
                    <p className="pb-3 text-primary">New for Kids </p>
                    <ul>
                      <li className="text-secondary hover:text-primary">
                        <a href="#">Boys Shoes</a>
                      </li>
                      <li className="text-secondary hover:text-primary">
                        <a href="#">Boys Clothing</a>
                      </li>
                      <li className="text-secondary hover:text-primary">
                        <a href="#">Girls Shoes</a>
                      </li>
                      <li className="text-secondary hover:text-primary">
                        <a href="#">Girls Clothing</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <div className="flex items-center gap-3  w-full justify-end  ">
          <label className="hidden desktop:block relative">
            <Search className="absolute top-1.5 px-1 ml-1" />
            <input
              type="text"
              placeholder="Search"
              className="bg-custom-gray rounded-3xl outline-none py-2 pl-9 w-44"
            />
          </label>
          <Search className="desktop:hidden" />
          <Heart className="hidden desktop:block" />
          <Bag className="" />
          <div
            onClick={() => setSidebar(true)}
            className="hover:bg-custom-gray p-3 rounded-full cursor-pointer desktop:hidden "
          >
            <Hamburger className=" rounded-full  " />
          </div>
        </div>
      </nav>

      <Sidebar setSidebar={setSidebar} sidebar={sidebar} />
    </div>
  );
};

export default Navbar;
