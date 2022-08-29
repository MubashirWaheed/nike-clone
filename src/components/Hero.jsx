import React from "react";

import hero from "../assets/images/hero.webp";
import heroMobile from "../assets/images/hero-mobile.webp";

const Hero = ({ width, tabletBP }) => {
  return (
    <div className="p-4 laptop:relative">
      <div className="flex items-center justify-center ">
        {width > tabletBP ? (
          <img src={hero} alt="hero " />
        ) : (
          <div>
            <img src={heroMobile} alt="hero" />
          </div>
        )}
      </div>
      <div className=" flex flex-col items-start  mt-3 laptop:absolute laptop:top-16 laptop:left-[5%] desktop:left-[10%]">

        <h1 className="text-start text-4xl font-extrabold tracking-tighter">
          SETS FOR SUCCESS
        </h1>
        <p className="text-start text-primary my-4 leading-6 font-sans">
          Matching sets that'll carry your year in effortless style
        </p>
        <div className="my-3">
          <button className="bg-primary text-white py-2 px-6 mr-2 rounded-3xl ">
            Shop
          </button>
          <button className="bg-primary text-white py-2 px-6 ml-2 rounded-3xl">
            Explore
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
