import React from "react";

const Title = ({ text1, text2 }) => {
  return (
    <div className="inline-flex items-center mb-3">
      <div className="flex items-center gap-2">
        <h1 className="text-gray-500 font-medium">
          {text1} <span className="text-gray-700 font-medium">{text2}</span>
        </h1>
        <span className="h-[1px] sm:h-[2px] w-8 sm:w-12 bg-gray-700"></span>
      </div>
    </div>
  );
};

export default Title;
