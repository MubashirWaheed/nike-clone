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
    <div>
      {/* Header  */}
      <div className="flex items-center justify-between">
        <h1>Popular Right Now</h1>
        <div className="flex justify-end">
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
        className="flex overflow-x-auto scroll-smooth bg-lime-100 snap-mandatory snap-x"
      >
        <div className="m-5 bg-custom-gray p-5 w-128 min-w-128 snap-center">
          <img className="" src={product1} alt="product" />
          <div>
            <p>Nike Air Force 1 '07 Premium</p>
            <p>$140</p>
          </div>
          <p>Men's Shoes</p>
        </div>

        <div className="m-5 bg-custom-gray p-5 min-w-128 snap-center">
          <img src={product2} alt="product" />
          <div>
            <p>Nike Air Force 1 '07 Premium</p>
            <p>$150</p>
          </div>
          <p>Men's Shoes</p>
        </div>

        <div className="m-5 bg-custom-gray p-5 min-w-128 snap-center">
          <img src={product1} alt="product" />
          <div>
            <p>Nike Air Force 1 '07 Premium</p>
            <p>$150</p>
          </div>
          <p>Men's Shoes</p>
        </div>

        <div className="m-5 bg-custom-gray p-5 min-w-128 snap-center">
          <img src={product2} alt="product" />
          <div>
            <p>Nike Air Force 1 '07 Premium</p>
            <p>$160</p>
          </div>
          <p>Men's Shoes</p>
        </div>

        <div className="m-5 bg-custom-gray p-5 min-w-128 snap-center">
          <img src={product1} alt="product" />
          <div>
            <p>Nike Air Force 1 '07 Premium</p>
            <p>$160</p>
          </div>
          <p>Men's Shoes</p>
        </div>

        <div className="m-5 bg-custom-gray p-5 min-w-128 snap-center">
          <img src={product1} alt="product" />
          <div>
            <p>Nike Air Force 1 '07 Premium</p>
            <p>$160</p>
          </div>
          <p>Men's Shoes</p>
        </div>

        <div className="m-5 bg-custom-gray p-5 min-w-128 snap-center">
          <img src={product1} alt="product" />
          <div>
            <p>Nike Air Force 1 '07 Premium</p>
            <p>$160</p>
          </div>
          <p>Men's Shoes</p>
        </div>

        <div className="m-5 bg-custom-gray p-5 min-w-128 snap-center">
          <img src={product1} alt="product" />
          <div>
            <p>Nike Air Force 1 '07 Premium</p>
            <p>$160</p>
          </div>
          <p>Men's Shoes</p>
        </div>

        <div className="m-5 bg-custom-gray p-5 min-w-128 snap-center">
          <img src={product1} alt="product" />
          <div>
            <p>Nike Air Force 1 '07 Premium</p>
            <p>$160</p>
          </div>
          <p>Men's Shoes</p>
        </div>
      </div>
    </div>
  );
};

export default Slider;
