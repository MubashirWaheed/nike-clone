import React from "react";
import { ReactComponent as Athlete } from "../assets/icons/athlete.svg";
import { ReactComponent as Arrow } from "../assets/icons/arrow.svg";

const Join = () => {
  return (
    <div className="bg-custom-gray flex justify-between">
      <div className="flex gap-4">
        <Athlete />
        <Arrow />
      </div>
      <div>
        <p>Help | Join Us | Sign In</p>
      </div>
    </div>
  );
};

export default Join;
