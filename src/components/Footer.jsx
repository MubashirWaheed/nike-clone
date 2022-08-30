import React, { useState } from "react";
import { ReactComponent as Twitter } from "../assets/icons/twitter.svg";
import { ReactComponent as Facebook } from "../assets/icons/facebook.svg";
import { ReactComponent as Youtube } from "../assets/icons/youtube.svg";
import { motion } from "framer-motion";

const divVariants = {
  rest: {
    height: 0,
    opacity: 0,
    transition: {
      duration: 0.5,
    },
    transitionEnd: {
      display: "none",
    },
  },
  show: {
    height: "auto",
    opacity: 1,
    display: "block",
    transition: {
      duration: 0.5,
    },
  },
};

const Footer = ({ width }) => {
  const [getHelp, setGetHelp] = useState(false);
  const [aboutNike, setAboutNike] = useState(false);

  const toggleDiv = () => {
    setGetHelp(!getHelp);
  };
  return (
    <footer className="bg-primary pb-4">
      <div className="tablet:flex tablet:justify-center tablet:gap-10 tablet:pt-7">
        <div className="text-start pl-5 py-3 mt-3 tablet:flex">
          <ul>
            <li className="py-2 uppercase text-white tracking-tighter font-semibold font-sans text-xs">
              <a href="#">Gift Cards</a>
            </li>
            <li className="py-2 uppercase text-white tracking-tighter font-semibold font-sans text-xs">
              <a href="#">Promotions</a>
            </li>
            <li className="py-2 uppercase text-white tracking-tighter font-semibold font-sans text-xs">
              <a href="#">Find a store</a>
            </li>
            <li className="py-2 uppercase text-white tracking-tighter font-semibold font-sans text-xs">
              <a href="#">Sign up for email</a>
            </li>
            <li className="py-2 uppercase text-white tracking-tighter font-semibold font-sans text-xs">
              <a href="#">Become a member</a>
            </li>
            <li className="py-2 uppercase text-white tracking-tighter font-semibold font-sans text-xs">
              <a href="#">Send us feedback</a>
            </li>
          </ul>
        </div>
        <div className="border-t border-gray-500 tablet:hidden"></div>
        <div className="px-5 ">
          <div className="flex justify-between  ">
            <p className="text-white mt-2">Get Help</p>
            <div className="tablet:hidden">
              <span
                className={`font-bold text-white cursor-pointer px-2 ${
                  getHelp ? "block" : "hidden"
                }`}
                onClick={toggleDiv}
              >
                -
              </span>
              <span
                className={`text-white cursor-pointer px-1 ${
                  getHelp ? "hidden" : "block"
                }`}
                onClick={toggleDiv}
              >
                +
              </span>
            </div>
          </div>

          <motion.div
            variants={width < 600 ? divVariants : undefined}
            animate={getHelp ? "show" : "rest"}
            key={width}
            className="text-start mt-5 hidden opacity-0 h-0 tablet:block tablet:h-auto tablet:opacity-70"
          >
            <ul className="">
              <li className="text-secondary">
                <a href="#">Order Status</a>
              </li>
              <li className="text-secondary">
                <a href="#">Shopping and Delivery</a>
              </li>
              <li className="text-secondary">
                <a href="#">Returns</a>
              </li>
              <li className="text-secondary">
                <a href="#">Payment Options</a>
              </li>
              <li className="text-secondary">
                <a href="#">Contant Us</a>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="px-5 mb-4">
          <div className="flex justify-between  ">
            <p className="text-white mt-2">About Nike</p>
            <div>
              <span
                className={`font-bold text-white cursor-pointer px-2 tablet:hidden ${
                  aboutNike ? "block" : "hidden"
                }`}
                onClick={() => setAboutNike(!aboutNike)}
              >
                -
              </span>
              <span
                className={`text-white cursor-pointer px-1 tablet:hidden ${
                  aboutNike ? "hidden" : "block"
                }`}
                onClick={() => setAboutNike(!aboutNike)}
              >
                +
              </span>
            </div>
          </div>
          <motion.div
            className="text-start mt-5 opacity-0 hidden h-0 tablet:block tablet:h-auto tablet:opacity-70"
            variants={width < 600 ? divVariants : ""}
            key={width}
            animate={aboutNike ? "show" : "rest"}
          >
            <ul>
              <li className="text-secondary">
                <a href="#">Order Status</a>
              </li>
              <li className="text-secondary">
                <a href="#">Shopping and Delivery</a>
              </li>
              <li className="text-secondary">
                <a href="#">Returns</a>
              </li>
              <li className="text-secondary">
                <a href="#">Payment Options</a>
              </li>
              <li className="text-secondary">
                <a href="#">Contant Us</a>
              </li>
            </ul>
          </motion.div>
        </div>
        {/* Socials */}
        <div className="flex px-4 gap-4 ">
          <a className="cursor-pointer" href="#">
            <Twitter />
          </a>
          <a className="cursor-pointer" href="#">
            <Facebook />
          </a>
          <a className="cursor-pointer" href="#">
            <Youtube />
          </a>
        </div>
      </div>
      <div className="tablet:flex justify-center">
        <p className="text-secondary px-4 text-start text-sm my-3">
          © 2022 Nike, Inc. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
