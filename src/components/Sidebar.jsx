import React, { useState } from "react";
import { ReactComponent as Close } from "../assets/icons/close.svg";
import { ReactComponent as Arrow } from "../assets/icons/nextArrow.svg";
import { ReactComponent as BackArrow } from "../assets/icons/prevArrow.svg";
import { useTransition, useSpring, animated } from "react-spring";

const Sidebar = ({ setSidebar, sidebar }) => {
  // using react spring transition hook: https://react-spring.dev/hooks/use-transition#mountunmount-single-component-reveals
  const transition = useTransition(sidebar, {
    from: { x: 800, opacity: 0 },
    enter: { x: 0, opacity: 1 },
    leave: { x: 800, opacity: 0 },
    config: { duration: 800 },
    // config: { mass: 1, tension: 100, friction: 30 },
  });
  const [spring, api] = useSpring(() => ({
    // from: { x: 0, opacity: 1 },
    from: { x: 0, opacity: 1 },
  }));

  const handleClick = () => {
    console.log("div clicked");
    api.start({
      from: {
        x: 0,
        opacity: 1,
      },
      to: {
        opacity: 0,
        x: -299,
      },
    });
  };

  return transition(
    (styles, item) =>
      item && (
        <animated.div
          style={styles}
          className="h-full w-72 bg-custom-gray fixed top-0 right-0 "
        >
          <div>
            <span
              className="inline-block bg-red-100 cursor-pointer "
              onClick={() => {
                setSidebar(!sidebar);
              }}
            >
              <Close />
            </span>
            {/* Categories div */}

            <animated.div className="mt-4" style={spring} onClick={handleClick}>
              <span className="bg-red-200 flex justify-between cursor-pointer">
                New & Featured
                <Arrow />
              </span>
              <span className="bg-red-200 flex justify-between">
                Men
                <Arrow />
              </span>
              <span className="bg-red-200 flex justify-between">
                Women
                <Arrow />
              </span>
              <span className="bg-red-200 flex justify-between">
                Kids
                <Arrow />
              </span>
            </animated.div>
          </div>

          {/* Links Div */}
          {/* <animated.div
            style={props}
            className="h-full z-20 w-72 bg-green-300 fixed top-0 right-0"
          >
            <span className="cursor-pointer">
              <BackArrow />
              <p>All</p>
            </span>
          </animated.div> */}
        </animated.div>
      )
  );
};

export default Sidebar;
