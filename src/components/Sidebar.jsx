import React from "react";

import { ReactComponent as Close } from "../assets/icons/close.svg";
import { useTransition, animated } from "react-spring";

const Sidebar = ({ setSidebar, sidebar }) => {
  // using react spring transition hook: https://react-spring.dev/hooks/use-transition#mountunmount-single-component-reveals
  const transition = useTransition(sidebar, {
    from: { x: 2000, opacity: 0 },
    enter: { x: 0, opacity: 1 },
    leave: { x: 2000, opacity: 0 },
    config: { duration: 800 },
    // config: { mass: 1, tension: 100, friction: 30 },
  });

  return transition(
    (styles, item) =>
      item && (
        <animated.div
          style={styles}
          className={"h-full w-72 bg-custom-gray fixed top-0 right-0 "}
        >
          <span
            className="flex justify-end cursor-pointer "
            onClick={() => setSidebar(!sidebar)}
          >
            <Close />
          </span>
        </animated.div>
      )
  );
};

export default Sidebar;
