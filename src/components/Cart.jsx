import React, { useContext } from "react";
import { assets } from "../assets/frontend_assets/assets";
import Title from "./Title";
import c2 from "./c2.png";

const Cart = () => {
  return (
    <div className="mt-14">
      {/* Title */}
      <div className="text-3xl mb-3">
        <Title text1="YOUR" text2="CART" />
      </div>

      {/* Item Details */}
      <div className="mt-8 border-t border-b text-gray-700 flex justify-between items-center py-4">
        <div className="flex items-start gap-6">
          <img src={c2} className="w-16 sm:w-20" />
          <div className="flex flex-col">
            <h1 className="text-xl font-medium">
              Women Zip-Front Relaxed Fit Jacket
            </h1>
            <div className="flex gap-5 items-center mt-3">
              <p className="font-medium text-xl">$65</p>
              <button className="border bg-gray-100 py-2 px-4">S</button>
            </div>
          </div>
        </div>
        <input
          type="number"
          min="1"
          value="1"
          className="border max-w-10 sm:max-w-20 sm:px-2 py-1"
        />
        <img src={assets.bin_icon} className="w-4 sm:w-5 mr-4 cursor-pointer" />
      </div>

      {/* Cart Total */}
      <div className="flex justify-end my-20">
        <div className="mt-20 w-full sm:w-[450px]">
          <div className="text-3xl mb-3">
            <Title text1="CART" text2="TOTALS" />
          </div>
          <div className="flex flex-col gap-2 mt-2">
            <div className="flex justify-between">
              <p className="text-black">Subtotal</p>
              <p className="text-black">$ 136.00</p>
            </div>
            <hr />
            <div className="flex justify-between">
              <p className="text-black">Shipping Fee</p>
              <p className="text-black">$ 10.00</p>
            </div>
            <hr />
            <div className="font-bold flex justify-between">
              <p className="text-black">Total</p>
              <p className="text-black">$ 146.00</p>
            </div>
          </div>
          <div className="w-ful text-end">
            <button className="bg-black text-white px-8 py-3 my-8">
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
