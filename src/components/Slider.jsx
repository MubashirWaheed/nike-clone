import React, { useRef } from "react";
import { ReactComponent as PrevArrow } from "../assets/icons/prevArrow.svg";
import { ReactComponent as NextArrow } from "../assets/icons/nextArrow.svg";
import product1 from "../assets/images/product1.webp";
import product2 from "../assets/images/product2.webp";

const Slider = () => {
  const cardContainer = useRef(null);

  // how do I select the div in below the arrow?
  const slideRight = () => {
    const dimentions = cardContainer.current.getBoundingClientRect();
    const containerWidth = dimentions.width;
    cardContainer.current.scrollLeft += containerWidth;
  };

  const slideLeft = () => {
    const dimentions = cardContainer.current.getBoundingClientRect();
    const containerWidth = dimentions.width;
    cardContainer.current.scrollLeft -= containerWidth;
  };

  return (
    <div className="p-4 mt-6">
      {/* Header  */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="laptop:ml-[5%] desktop:ml-[8%] text-2xl text-primary">Popular Right Now</h1>
        <div className="flex justify-end laptop:mr-[5%]">
          <div
            onClick={slideLeft}
            className="bg-custom-gray p-3 cursor-pointer rounded-full"
          >
            <PrevArrow />
          </div>

          <div
            onClick={slideRight}
            className="bg-custom-gray p-3 cursor-pointer rounded-full"
          >
            <NextArrow />
          </div>
        </div>
      </div>

      {/*CARDS */}
      <div
        ref={cardContainer}
        className="flex overflow-x-auto scroll-smooth gap-3 snap-mandatory snap-x"
      >
        {/* bg-custom-gray */}
        <div className="w-[330px] min-w-[330px] laptop:w-128 laptop:min-w-128 snap-center">
          <img className="bg-custom-gray" src={product1} alt="product" />
          <div className="mt-4 text-start  flex justify-between">
            <p>Nike Air Force 1 '07 Premium</p>
            <p>$140</p>
          </div>
          <p className="text-start  text-secondary">Men's Shoes</p>
        </div>

        <div className="w-[330px] min-w-[330px] laptop:w-128 laptop:min-w-128 snap-center">
          <img src={product2} alt="product" />
          <div className="mt-4 text-start  flex justify-between">
            <p>Nike Air Force 1 '07 Premium</p>
            <p>$150</p>
          </div>
          <p className="text-start  text-secondary">Men's Shoes</p>
        </div>

        <div className="w-[330px] min-w-[330px] laptop:w-128 laptop:min-w-128 snap-center">
          <img src={product1} alt="product" />
          <div className="mt-4 text-start  flex justify-between">
            <p>Nike Air Force 1 '07 Premium</p>
            <p>$150</p>
          </div>
          <p className="text-start  text-secondary">Men's Shoes</p>
        </div>

        <div className="w-[330px] min-w-[330px] laptop:w-128 laptop:min-w-128 snap-center">
          <img src={product2} alt="product" />
          <div className="mt-4 text-start  flex justify-between">
            <p>Nike Air Force 1 '07 Premium</p>
            <p>$160</p>
          </div>
          <p className="text-start  text-secondary">Men's Shoes</p>
        </div>

        <div className="w-[330px] min-w-[330px] laptop:w-128 laptop:min-w-128 snap-center">
          <img src={product1} alt="product" />
          <div className="mt-4 text-start  flex justify-between">
            <p>Nike Air Force 1 '07 Premium</p>
            <p>$160</p>
          </div>
          <p className="text-start  text-secondary">Men's Shoes</p>
        </div>

        <div className="w-[330px] min-w-[330px] laptop:w-128 laptop:min-w-128 snap-center">
          <img src={product1} alt="product" />
          <div className="mt-4 text-start  flex justify-between">
            <p>Nike Air Force 1 '07 Premium</p>
            <p>$160</p>
          </div>
          <p className="text-start  text-secondary">Men's Shoes</p>
        </div>

        <div className="w-[330px] min-w-[330px] laptop:w-128 laptop:min-w-128 snap-center">
          <img src={product1} alt="product" />
          <div className="mt-4 text-start  flex justify-between">
            <p>Nike Air Force 1 '07 Premium</p>
            <p>$160</p>
          </div>
          <p className="text-start  text-secondary">Men's Shoes</p>
        </div>

        <div className="w-[330px] min-w-[330px] laptop:w-128 laptop:min-w-128 snap-center">
          <img src={product1} alt="product" />
          <div className="mt-4 text-start  flex justify-between">
            <p>Nike Air Force 1 '07 Premium</p>
            <p>$160</p>
          </div>
          <p className="text-start  text-secondary">Men's Shoes</p>
        </div>

        <div className="w-[330px] min-w-[330px] laptop:w-128 laptop:min-w-128 snap-center">
          <img src={product1} alt="product" />
          <div className="mt-4 text-start  flex justify-between">
            <p>Nike Air Force 1 '07 Premium</p>
            <p>$160</p>
          </div>
          <p className="text-start  text-secondary">Men's Shoes</p>
        </div>
      </div>
    </div>
  );
};

export default Slider;
