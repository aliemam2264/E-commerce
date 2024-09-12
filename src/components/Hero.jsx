import React from "react";
import { assets } from "../assets/frontend_assets/assets";

const Hero = () => {
  return (
    <div className="border border-gray-400 flex flex-col sm:flex-row w-full items-center">
      <div className="sm:w-1/2 flex flex-col items-center justify-center">
        <div className="flex flex-col gap-3">
          <div className="flex gap-2 items-center text-lg  text-[#414141]">
            <p className="h-0.5 w-9 bg-gray-500"></p>
            <h1>OUR BESTSELLERS</h1>
          </div>
          <div className="flex items-center text-7xl  text-[#414141] latest">
            Latest Arrival
          </div>
          <div className="flex gap-2 items-center text-lg  text-[#414141]">
            <h1>SHOP NOW</h1>
            <p className="h-0.5 w-9 bg-gray-500"></p>
          </div>
        </div>
      </div>

      <div className="sm:w-1/2">
        <img src={assets.hero_img} />
      </div>
    </div>
  );
};

export default Hero;
