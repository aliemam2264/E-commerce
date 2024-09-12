import React, { useState } from "react";
import { assets } from "../assets/frontend_assets/assets";
import { NavLink, useNavigate } from "react-router-dom";

const Nav = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  let x = 0;
  return (
    <div className="flex p-4  items-center justify-between font-semibold text-[14px]">
      <img
        src={assets.logo}
        className="cursor-pointer w-36"
        onClick={() => {
          navigate("/");
        }}
      />
      <ul className="hidden sm:flex gap-5">
        <NavLink to="/" className="flex flex-col items-center">
          <h2>HOME</h2>
          <div className="h-[1.5px] bg-gray-700 w-1/2 hidden"></div>
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center">
          <h2>COLLECTION</h2>
          <div className="h-[1.5px] bg-gray-700 w-1/2 hidden"></div>
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center">
          <h2>ABOUT</h2>
          <div className="h-[1.5px] bg-gray-700 w-1/2 hidden"></div>
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center">
          <h2>CONTACT</h2>
          <div className="h-[1.5px] bg-gray-700 w-1/2 hidden"></div>
        </NavLink>
      </ul>
      <div className="flex gap-6 items-center cursor-pointer">
        <img src={assets.search_icon} className="w-5" />
        <img
          src={assets.profile_icon}
          className="w-5"
          onClick={() => {
            navigate("/login");
          }}
        />
        <div
          className="relative"
          onClick={() => {
            navigate("/cart");
          }}
        >
          <img src={assets.cart_icon} className="w-5" />
          <span
            className="
          flex items-center justify-center bg-black rounded-full absolute right-[-5px] bottom-[-5px] w-4 h-4 text-[12px] text-white"
          >
            {x}
          </span>
        </div>
        <img
          src={assets.menu_icon}
          className="w-5 sm:hidden"
          onClick={() => setShow(true)}
        />
      </div>
      <div
        className={` absolute top-0 right-0 bottom-0 overflow-hidden bg-white flex-col transition-all  text-gray-600 ${
          show ? "w-full" : "w-0"
        } `}
      >
        <div
          className="flex items-center p-4 gap-2 cursor-pointer"
          onClick={() => setShow(false)}
        >
          <img src={assets.dropdown_icon} className="w-4" />
          <p>Back</p>
        </div>
        <ul className=" flex flex-col gap-8">
          <NavLink to="/" className="flex flex-col items-center">
            <h2>HOME</h2>
            <div className="h-[1.5px] bg-gray-700 w-1/2 hidden"></div>
          </NavLink>
          <NavLink to="/collection" className="flex flex-col items-center">
            <h2>COLLECTION</h2>
            <div className="h-[1.5px] bg-gray-700 w-1/2 hidden"></div>
          </NavLink>
          <NavLink to="/about" className="flex flex-col items-center">
            <h2>ABOUT</h2>
            <div className="h-[1.5px] bg-gray-700 w-1/2 hidden"></div>
          </NavLink>
          <NavLink to="/contact" className="flex flex-col items-center">
            <h2>CONTACT</h2>
            <div className="h-[1.5px] bg-gray-700 w-1/2 hidden"></div>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
