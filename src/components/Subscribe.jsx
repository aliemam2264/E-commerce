import React from "react";

const Subscribe = () => {
  return (
    <div className="text-center flex flex-col items-center">
      <h1 className="text-2xl text-black font-medium">
        Subscribe now & get 20% off
      </h1>
      <p className="text-gray-500 mt-3">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <form className="flex items-center border max-auto my-6 w-full sm:w-1/2 pl-3">
        <input
          type="text"
          placeholder="Enter Your Email"
          className="w-full sm:flex-1 h-14 pl-4 outline-none"
        />
        <button className="bg-black text-white cursor-pointer px-10 py-4">
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default Subscribe;
