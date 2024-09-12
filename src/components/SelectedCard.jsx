import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/frontend_assets/assets";
import { AllData } from "../main";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Title from "./Title";
import Card from "./Card";
import { useParams } from "react-router-dom";

const SelectedCard = () => {
  const [data, setData] = useState([]);
  const [prod, setProd] = useState({});
  const { products, currency } = useContext(AllData);
  const { id } = useParams();

  const notify = () => toast("Select Product Size");

  useEffect(() => {
    setData(products.slice(16, 21));
    const prod = products.find((obj) => {
      return obj._id === id;
    });
    setProd(prod);
  }, [id]);

  return (
    <div>
      <div className="flex gap-12 pt-10 sm:gap-12 flex-col sm:flex-row">
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="w-full sm:w-[18.7%] flex sm:flex-col overflow-x-auto">
            <img
              src={prod.image}
              className="flex-shrink-0 w-[24%] sm:w-full sm:mb-3 cursor-pointer pr-2"
            />
          </div>
          <div className="w-full sm:w-[80%]">
            <img src={prod.image} className="w-full h-auto" />
          </div>
        </div>
        <div className="flex-1">
          <h1
            className="text-black font-medium mt-2
         text-2xl"
          >
            {prod.name}
          </h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} className="w-3.5" />
            <img src={assets.star_icon} className="w-3.5" />
            <img src={assets.star_icon} className="w-3.5" />
            <img src={assets.star_icon} className="w-3.5" />
            <img src={assets.star_dull_icon} className="w-3.5" />
            <p className="pl-2 font-[16px] text-black">(122)</p>
          </div>
          <p className="mt-5 font-medium text-3xl text-black">
            {prod.price}
            {currency}
          </p>
          <p className="w-2/3 mt-5 text-gray-500 font-medium text-lg">
            {prod.description}
          </p>
          <div className="flex flex-col gap-4 my-8">
            <p className="text-black text-[18px]">Select Size</p>
            <div className="flex gap-2">
              <button className="border bg-gray-100 py-2 px-4 focus:border-orange-500">
                S
              </button>
              <button className="border bg-gray-100 py-2 px-4 focus:border-orange-500">
                M
              </button>
              <button className="border bg-gray-100 py-2 px-4 focus:border-orange-500">
                L
              </button>
              <button className="border bg-gray-100 py-2 px-4 focus:border-orange-500">
                XL
              </button>
              <button className="border bg-gray-100 py-2 px-4 focus:border-orange-500">
                XXL
              </button>
            </div>
          </div>
          <button className="bg-black text-white py-3 px-8 active:bg-gray-700">
            ADD TO CART
          </button>
          <hr className="mt-8 sm:w-4/5" />
          <div className="flex flex-col mt-5 text-gray-500 gap-1">
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
        <ToastContainer />
      </div>
      <div>
        <div className="flex">
          <p className="border px-5 py-3 font-semibold">Description</p>
          <p className="border px-5 py-3 font-medium">Reviews (122)</p>
        </div>
        <div className="flex flex-col items-center gap-4 px-6 py-6 text-gray-500 border">
          <p>
            An e-commerce website is an online platform that facilitates the
            buying and selling of products or services over the internet. It
            serves as a virtual marketplace where businesses and individuals can
            showcase their products, interact with customers, and conduct
            transactions without the need for a physical presence. E-commerce
            websites have gained immense popularity due to their convenience,
            accessibility, and the global reach they offer.
          </p>
          <p>
            E-commerce websites typically display products or services along
            with detailed descriptions, images, prices, and any available
            variations (e.g., sizes, colors). Each product usually has its own
            dedicated page with relevant information.
          </p>
        </div>
      </div>
      <div className="flex flex-col mt-16">
        <Title text1="RELATED" text2="PRODUCTS" />
        <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 cursor-pointer">
          {data.map((el) => {
            return <Card obj={el} key={el.id} currency={currency} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default SelectedCard;
