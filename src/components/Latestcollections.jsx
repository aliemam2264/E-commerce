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
      <div className="mt-16 flex flex-col items-center text-4xl">
        <Title text1="LATEST" text2="COLLECTIONS" />
        <div className="flex items-center justify-center m-6 text-lg">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the.
        </div>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 cursor-pointer">
        {data.map((el) => {
          return <Card obj={el} key={el.id} currency={currency} />;
        })}
      </div>
    </>
  );
};

export default Latestcollections;
