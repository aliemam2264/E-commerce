import React from "react";
import { assets } from "../assets/frontend_assets/assets";

const Hero = () => {
  return (
    <div className="border border-gray-400 flex flex-col sm:flex-row">
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
        <div className="flex flex-col gap-3">
          <div className="flex gap-2 items-center  text-[#414141]">
            <p className="h-[2px] w-8 md:w-11 bg-gray-500"></p>
            <h1 className="font-medium text-sm md:text-base">
              OUR BESTSELLERS
            </h1>
          </div>
          <div className="flex items-center text-3xl sm:py-3 lg:text-5xl  text-[#414141] latest">
            Latest Arrival
          </div>
          <div className="flex gap-2 items-center text-[#414141]">
            <h1 className="font-semibold text-sm md:text-base">SHOP NOW</h1>
            <p className="h-[1px] w-8 md:w-11 bg-gray-500"></p>
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
