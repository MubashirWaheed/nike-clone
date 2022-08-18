import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

import Join from "../components/Join";
import Sale from "../components/Sale";
import Slider from "../components/Slider";
import Hero from "../components/Hero";
import doIt from "../assets/images/nike-just-do-it.jpg";
import justDoIt2 from "../assets/images/jusDoIt2.webp";

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
        <div className="flex items-center justify-center flex-wrap">
          <img src={doIt} alt="test" />
          <img src={justDoIt2} alt="hello" />
        </div>
      </div>

      <Slider />
    </div>
  );
};

export default Home;
