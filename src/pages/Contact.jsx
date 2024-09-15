import React from "react";
import { assets } from "../assets/frontend_assets/assets";
import Title from "../components/Title";
import Subscribe from "../components/Subscribe";

const Contact = () => {
  return (
    <>
      <div className="flex flex-col items-center mb-16">
        {/* Title */}
        <div className="pt-8 text-center text-3xl">
          <Title text1="CONTACT" text2="US" />
        </div>

        {/* Image And Paragraph */}
        <div className="flex flex-col md:flex-row text-lg text-gray-600 gap-16 my-10">
          <img src={assets.contact_img} className="w-full md:max-w-[450px]" />
          <div className="flex flex-col justify-center gap-6 md:w-2/4">
            <span className="text-gray-800 font-semibold">Our Store</span>
            <p className="text-gray-500">
              54709 Willms Station
              <br />
              Suite 350, Washington, USA
            </p>
            <p className="text-gray-500">
              Tel: (415) 555-0132 <br /> Email: admin@forever.com
            </p>
            <span className="text-gray-800 font-semibold text-xl">
              Careers at Forever
            </span>
            <p className="text-gray-500">
              Learn more about our teams and job openings.
            </p>
            <button className="w-48 border border-black px-8 py-4 hover:bg-black hover:text-white transation-all duration-500">
              Explore Jobs
            </button>
          </div>
        </div>
      </div>
      <Subscribe />
    </>
  );
};

export default Contact;
