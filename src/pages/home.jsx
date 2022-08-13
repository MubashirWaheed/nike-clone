import React from "react";
import Navbar from "../components/Navbar";
import hero from "../assets/images/hero.webp";
import doIt from "../assets/images/nike-just-do-it.jpg";

const Home = () => {
  return (
    <div>
      <div>
        <h1 className="text-3xl text-secondary">Home</h1>
        <h2 className="">Check font</h2>
        <Navbar />
        <div className="flex items-center justify-center">
          <img src={hero} alt="hero " />
        </div>
        <img src={doIt} alt="test" />
      </div>
    </div>
  );
};

export default Home;
