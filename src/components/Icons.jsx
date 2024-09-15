import React from "react";
import { assets } from "../assets/frontend_assets/assets";
const Icons = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base">
      <div className="flex flex-col items-center justify-center gap-2 m-auto mb-5">
        <img src={assets.exchange_icon} />
        <h1 className="text-1xl font-bold">Easy Exchange Policy</h1>
        <p className="text-gray-500 text-[16px]">
          We offer hassle free exchange policy
        </p>
      </div>

      <div className="flex flex-col items-center justify-center gap-2 m-auto mb-5">
        <img src={assets.quality_icon} />
        <h1 className="text-1xl font-bold">7 Days Return Policy</h1>
        <p className="text-gray-500 text-[16px]">
          We provide 7 days free return policy
        </p>
      </div>

      <div className="flex flex-col items-center justify-center gap-2 m-auto mb-5">
        <img src={assets.support_img} />
        <h1 className="text-1xl font-bold">Best customer support</h1>
        <p className="text-gray-500 text-[16px]">
          we provide 24/7 customer support
        </p>
      </div>
    </div>
  );
};

export default Icons;
