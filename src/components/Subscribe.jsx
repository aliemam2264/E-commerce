import React from "react";

const Subscribe = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-3 m-20">
        <h1 className="text-3xl text-black font-medium">
          Subscribe now & get 20% off
        </h1>
        <p className="text-gray-500 text-[16px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <div className="flex items-center justify-center w-full h-10 m-6">
          <input
            type="text"
            placeholder="Enter Your Email"
            className="h-14 border pl-4 w-96"
          />
          <button className="bg-black text-white cursor-pointer px-10 py-4">
            SUBSCRIBE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
