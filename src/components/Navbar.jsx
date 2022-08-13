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
      <nav>
        <div>
          <Logo fill="#111" />
        </div>
        <div className="flex">
          <ul className="flex flex-row gap-3">
            <li>
              <a href="#">New & Featured</a>
              {/* use grid for div below  */}
              <div className="hidden">
                <div>
                  <p>New & Featured</p>
                  <li>
                    <a href="#">Shop All New Arrivals</a>
                    <a href="#">Best of Air Max</a>
                  </li>
                </div>
                <div>
                  <p>New for Men</p>
                  <li>
                    <a href="#">Shop All New Arrivals</a>
                    <a href="#">Best of Air Max</a>
                  </li>
                </div>
                <div>
                  <p>New for Women</p>
                  <li>
                    <a href="#">Shop All New Arrivals</a>
                    <a href="#">Best of Air Max</a>
                  </li>
                </div>
                <div>
                  <p>New for Kids</p>
                  <div>
                    <a href="#">Shop All New Arrivals</a>
                    <a href="#">Best of Air Max</a>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <a href="#">Men</a>
              <div className="hidden">
                <div>
                  <p>New & Featured</p>
                  <a href="#">Shop All New Arrivals</a>
                  <a href="#">Best of Air Max</a>
                </div>
                <div>
                  <p>Shoes</p>
                  <a href="#"></a>
                  <a href="#"></a>
                  <a href="#"></a>
                  <a href="#"></a>
                </div>
                <div>
                  <p>Clothing</p>
                  <a href=""></a>
                  <a href=""></a>
                  <a href=""></a>
                  <a href=""></a>
                </div>
                <div>
                  <p>Shop Collection</p>
                  <a href=""></a>
                  <a href=""></a>
                  <a href=""></a>
                  <a href=""></a>
                </div>
                <div>
                  <p>Product Advice</p>
                  <a href=""></a>
                  <a href=""></a>
                  <a href=""></a>
                  <a href=""></a>
                  <a href=""></a>
                </div>
              </div>
            </li>

            <li>
              <a href="#">Women</a>
              <div className="hidden">
                <div>
                  <p>New & Featured</p>
                  <a href="#">Shop All New Arrivals</a>
                  <a href="#">Best of Air Max</a>
                </div>
                <div>
                  <p>Shoes</p>
                  <a href="#"></a>
                  <a href="#"></a>
                  <a href="#"></a>
                  <a href="#"></a>
                </div>
                <div>
                  <p>Clothing</p>
                  <a href=""></a>
                  <a href=""></a>
                  <a href=""></a>
                  <a href=""></a>
                </div>
                <div>
                  <p>Shop Collection</p>
                  <a href=""></a>
                  <a href=""></a>
                  <a href=""></a>
                  <a href=""></a>
                </div>
                <div>
                  <p>Product Advice</p>
                  <a href=""></a>
                  <a href=""></a>
                  <a href=""></a>
                  <a href=""></a>
                  <a href=""></a>
                </div>
              </div>
            </li>

            <li>
              <a href="#">Kids</a>
              <div className="hidden">
                <div>
                  <p>New & Featured</p>
                  <a href="#">Shop All New Arrivals</a>
                  <a href="#">Best of Air Max</a>
                </div>
                <div>
                  <p>Shoes</p>
                  <a href="#"></a>
                  <a href="#"></a>
                  <a href="#"></a>
                  <a href="#"></a>
                </div>
                <div>
                  <p>Clothing</p>
                  <a href=""></a>
                  <a href=""></a>
                  <a href=""></a>
                  <a href=""></a>
                </div>
                <div>
                  <p>Shop Collection</p>
                  <a href=""></a>
                  <a href=""></a>
                  <a href=""></a>
                  <a href=""></a>
                </div>
                <div>
                  <p>Product Advice</p>
                  <a href=""></a>
                  <a href=""></a>
                  <a href=""></a>
                  <a href=""></a>
                  <a href=""></a>
                </div>
              </div>
            </li>

            <li>
              <a href="#">Sale</a>
              <div className="hidden">
                <div>
                  <p>New & Featured</p>
                  <a href="#">Shop All New Arrivals</a>
                  <a href="#">Best of Air Max</a>
                </div>
                <div>
                  <p>Shoes</p>
                  <a href="#"></a>
                  <a href="#"></a>
                  <a href="#"></a>
                  <a href="#"></a>
                </div>
                <div>
                  <p>Clothing</p>
                  <a href=""></a>
                  <a href=""></a>
                  <a href=""></a>
                  <a href=""></a>
                </div>
                <div>
                  <p>Shop Collection</p>
                  <a href=""></a>
                  <a href=""></a>
                  <a href=""></a>
                  <a href=""></a>
                </div>
                <div>
                  <p>Product Advice</p>
                  <a href=""></a>
                  <a href=""></a>
                  <a href=""></a>
                  <a href=""></a>
                  <a href=""></a>
                </div>
              </div>
            </li>

            <li>
              <a href="#">Back to School</a>
              <div className="hidden">
                <div>
                  <p>New & Featured</p>
                  <a href="#">Shop All New Arrivals</a>
                  <a href="#">Best of Air Max</a>
                </div>
                <div>
                  <p>Shoes</p>
                  <a href="#"></a>
                  <a href="#"></a>
                  <a href="#"></a>
                  <a href="#"></a>
                </div>
                <div>
                  <p>Clothing</p>
                  <a href=""></a>
                  <a href=""></a>
                  <a href=""></a>
                  <a href=""></a>
                </div>
                <div>
                  <p>Shop Collection</p>
                  <a href=""></a>
                  <a href=""></a>
                  <a href=""></a>
                  <a href=""></a>
                </div>
                <div>
                  <p>Product Advice</p>
                  <a href=""></a>
                  <a href=""></a>
                  <a href=""></a>
                  <a href=""></a>
                  <a href=""></a>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="flex items-center ">
          <Search />
          <Heart />
          <Bag />
          {/* conditional rendering for  this  */}
          <Hamburger />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
