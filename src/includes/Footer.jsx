import React from "react";
import { assets } from "../assets/frontend_assets/assets";

const Footer = () => {
  return (
    <>
      <div className=" flex xs:flex-col justify-around p-5 mt-40 md:flex-row">
        <div className="w-1/3">
          <img src={assets.logo} className="w-32 mb-5" />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div>
          <h1 className="text-black text-xl font-semibold mb-5">COMPANY</h1>
          <ul className="flex flex-col gap-1">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privecy Policy</li>
          </ul>
        </div>
        <div>
          <h1 className="text-black text-xl font-semibold mb-5">
            GET IN TOUCH
          </h1>
          <ul className="flex flex-col gap-1">
            <li>+1-000-000-0000</li>
            <li>greatstackdev@gmail.com</li>
            <li>Instagram</li>
          </ul>
        </div>
      </div>

      <div className="m-5 flex flex-col text-center">
        <hr />
        <p className="pt-5 text-black ">
          Copyright 2024@ greatstack.dev - All Right Reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
