import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

import Join from "../components/Join";
import Sale from "../components/Sale";
import Slider from "../components/Slider";
import Hero from "../components/Hero";
import Fall from "../components/Fall";
import Membership from "../components/Membership";
import Footer from "../components/Footer";
const Home = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const breakPoint = 960;
  const tabletBP = 600;

  useEffect(() => {
    const hanldeResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener("resize", hanldeResizeWindow);
    return () => {
      window.removeEventListener("resize", hanldeResizeWindow);
    };
  }, []);

  return (
    <div>
      <div>
        {width > breakPoint ? <Join /> : null}
        <Navbar />
        <Sale />
        <Hero width={width} tabletBP={tabletBP} />
        <Fall />
      </div>

      <Slider />
      <Membership />
      <Footer width={width} />
    </div>
  );
};

export default Home;
