import React from "react";

const Title = ({ text1, text2 }) => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-2">
        <h1 className="text-gray-500 font-medium">
          {text1} <span className="text-gray-700 font-medium">{text2}</span>
        </h1>
        <span className="sm:h-1 sm:w-12 bg-gray-700"></span>
      </div>
    </div>
  );
};

export default Title;
