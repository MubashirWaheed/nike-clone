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

  return transition(
    (styles, item) =>
      item && (
        <animated.div
          style={styles}
          className="h-full w-72 bg-custom-gray fixed top-0 right-0 "
        >
          <div>
            <div className=" flex justify-end ">
              <span
                className="inline-block px-3  cursor-pointer mt-5 mr-5 "
                onClick={() => {
                  setSidebar(!sidebar);
                }}
              >
                <Close />
              </span>
            </div>

            {/* Categories div */}
            <div className="mt-4 px-7" style={spring}>
              <ul>
                <li className=" cursor-pointer py-2 ">
                  <a
                    className="text-primary flex justify-between font-sans text-2xl "
                    href="#"
                  >
                    New & Featured
                    <Arrow />
                  </a>
                </li>
                <li className=" cursor-pointer py-2">
                  <a
                    className="text-primary flex justify-between font-sans text-2xl"
                    href="#"
                  >
                    Men
                    <Arrow />
                  </a>
                </li>
                <li className=" cursor-pointer py-2">
                  <a
                    className="text-primary flex justify-between font-sans text-2xl"
                    href="#"
                  >
                    Women
                    <Arrow />
                  </a>
                </li>
                <li className=" cursor-pointer py-2">
                  <a
                    className="text-primary flex justify-between font-sans text-2xl"
                    href="#"
                  >
                    Kids
                    <Arrow />
                  </a>
                </li>
                <li className=" cursor-pointer py-2">
                  <a
                    className="text-primary flex justify-between font-sans text-2xl"
                    href="#"
                  >
                    Back to School
                    <Arrow />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </animated.div>
      )
  );
};

export default Sidebar;
