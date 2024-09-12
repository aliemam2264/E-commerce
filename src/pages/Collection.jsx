import React, { useContext, useEffect, useState } from "react";
import { AllData } from "../main";
import Card from "../components/Card";
import Title from "../components/Title";

const Collection = () => {
  const [data, setData] = useState([]);
  const { products, currency } = useContext(AllData);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    setData(products.slice(0, 52));
  }, []);

  useEffect(() => {
    const productsClone = [...products];
    if (data.length > 0) {
      setData(productsClone.filter((el) => category.includes(el.category)));
    }
  }, [category]);

  function handleChange(e) {
    onChange = { handleChange };
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((el) => el !== e.target.value));
    } else {
      setCategory([...category, e.target.value]);
    }
  }
  return (
    <div className="flex justify-between my-16">
      {/* Filters */}
      <div className="min-w-60 hidden sm:block">
        <h3 className="text-black font-normal text-2xl mb-5">FILTERS</h3>

        {/* Categories */}
        <div className="border border-gray-300 pl-5 py-3 mt-6">
          <h3 className="text-black font-medium text-l mb-3">CATEGORIES</h3>
          <p className="flex gap-2">
            <input type="checkbox" value="Men" onChange={handleChange} />
            Men
          </p>
          <p className="flex gap-2">
            <input type="checkbox" value="Women" onChange={handleChange} />
            Women
          </p>
          <p className="flex gap-2">
            <input type="checkbox" value="Kids" onChange={handleChange} />
            Kids
          </p>
        </div>

        {/* Type */}
        <div className="border border-gray-300 pl-5 py-3 mt-6">
          <h3 className="text-black font-medium text-l mb-3">TYPE</h3>
          <p className="flex gap-2">
            <input type="checkbox" value="Topwear" onChange={handleChange} />
            Topwear
          </p>
          <p className="flex gap-2">
            <input type="checkbox" value="Bottomwear" onChange={handleChange} />
            Bottomwear
          </p>
          <p className="flex gap-2">
            <input type="checkbox" value="Winterwear" onChange={handleChange} />
            Winterwear
          </p>
        </div>
      </div>

      {/* Cards */}
      <div className="w-3/4">
        <div className="flex items-start mb-4 justify-between text-base h-auto">
          <div className="text-2xl">
            <Title text1="ALL" text2="COLLECTIONS" />
          </div>
          <select className="border-2 border-gray-300 px-2 h-11">
            <option value="relavent">Sort by: Relavent</option>
            <option value="low-high">Sort by: Low To High</option>
            <option value="high-low">Sort by: High To Low</option>
          </select>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 cursor-pointer">
          {data.map((el) => {
            return <Card obj={el} key={el.id} currency={currency} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Collection;
