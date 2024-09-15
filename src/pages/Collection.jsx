import React, { useContext, useEffect, useState } from "react";
import { AllData } from "../main";
import Card from "../components/Card";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";

const Collection = () => {
  const [show, setShow] = useState(false);
  const [rotate, setRotate] = useState(false)
  const [data, setData] = useState([]);
  const { products, currency } = useContext(AllData);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubcategory] = useState([]);

  useEffect(() => {
    setData(products.slice(0, 52));
  }, []);

  useEffect(() => {
    let productsClone = [...products];
    if (category.length > 0) {
      productsClone = productsClone.filter((el) =>
        category.includes(el.category)
      );
    }
    if (subCategory.length > 0) {
      productsClone = productsClone.filter((el) =>
        subCategory.includes(el.subCategory)
      );
    }
    setData(productsClone);
  }, [category, subCategory]);

  function handleChange(e) {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((el) => el !== e.target.value));
    } else {
      setCategory([...category, e.target.value]);
    }
  }

  function handleSubcategory(e) {
    if (subCategory.includes(e.target.value)) {
      setSubcategory((prev) => prev.filter((el) => el !== e.target.value));
    } else {
      setSubcategory([...subCategory, e.target.value]);
    }
  }
  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 justify-between">
      {/* Filters */}
      <div className="min-w-60 hidden md:block gap-5">
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
            <input
              type="checkbox"
              value="Topwear"
              onChange={handleSubcategory}
            />
            Topwear
          </p>
          <p className="flex gap-2">
            <input
              type="checkbox"
              value="Bottomwear"
              onChange={handleSubcategory}
            />
            Bottomwear
          </p>
          <p className="flex gap-2">
            <input
              type="checkbox"
              value="Winterwear"
              onChange={handleSubcategory}
            />
            Winterwear
          </p>
        </div>
      </div>

      {/* Show Filters */}
      <div
        className="flex items-center my-2 text-xl gap-2 cursor-pointer mb-5 md:hidden"
        onClick={() => {
          setShow(!show);
          setRotate(!rotate)
        }}
      >
        <h3 className="text-black font-normal text-2xl">FILTERS</h3>
        <img src={assets.dropdown_icon} className={`h-3 ${rotate ? "rotate-90" : "rotate-0"}`} />
      </div>

      <div className={`md:hidden mb-10 ${show ? "block" : "hidden"}`}>
        {/* Categories */}
        <div className="border border-gray-300 pl-5 py-3">
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
            <input
              type="checkbox"
              value="Topwear"
              onChange={handleSubcategory}
            />
            Topwear
          </p>
          <p className="flex gap-2">
            <input
              type="checkbox"
              value="Bottomwear"
              onChange={handleSubcategory}
            />
            Bottomwear
          </p>
          <p className="flex gap-2">
            <input
              type="checkbox"
              value="Winterwear"
              onChange={handleSubcategory}
            />
            Winterwear
          </p>
        </div>
      </div>

      {/* Cards */}
      <div className="flex-1">
        <div className="flex mb-4 justify-between text-base sm:text-2xl">
          <div className="inline-flex gap-2 items-center mb-3">
            <Title text1="ALL" text2="COLLECTIONS" />
          </div>
          <select className="border-2 border-gray-300 text-sm px-2 h-11">
            <option value="relavent">Sort by: Relavent</option>
            <option value="low-high">Sort by: Low To High</option>
            <option value="high-low">Sort by: High To Low</option>
          </select>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 cursor-pointer">
          {data.map((el) => {
            return <Card obj={el} key={el.id} currency={currency} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Collection;
