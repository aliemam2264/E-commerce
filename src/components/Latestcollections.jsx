import React, { useContext, useEffect, useState } from "react";
import Title from "./Title";
import Card from "./Card";
import { AllData } from "../main";

const Latestcollections = () => {
  const [data, setData] = useState([]);
  const { products, currency } = useContext(AllData);
  useEffect(() => {
    setData(products.slice(0, 10));
  }, []);

  return (
    <>
      <div className="mt-16 flex flex-col items-center text-3xl py-8">
        <Title text1="LATEST" text2="COLLECTIONS" />
        <div className="flex items-center justify-center w-3/4 m-auto text-xs sm:text-sm md:text-base">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the.
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 cursor-pointer">
        {data.map((el) => {
          return <Card obj={el} key={el.id} currency={currency} />;
        })}
      </div>
    </>
  );
};

export default Latestcollections;
