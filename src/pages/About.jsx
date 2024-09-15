import React from "react";
import { assets } from "../assets/frontend_assets/assets";
import Title from "../components/Title";
import Subscribe from "../components/Subscribe";

const About = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        {/* Title */}
        <div className="pt-8 text-center text-3xl">
          <Title text1="ABOUT" text2="US" />
        </div>

        {/* Image And Paragraph */}
        <div className="flex flex-col md:flex-row text-lg text-gray-600 gap-16 my-10">
          <img src={assets.about_img} className="w-full md:max-w-[450px]" />
          <div className="flex flex-col justify-center gap-6 md:w-2/4">
            <p>
              Forever was born out of a passion for innovation and a desire to
              revolutionize the way people shop online. Our journey began with a
              simple idea: to provide a platform where customers can easily
              discover, explore, and purchase a wide range of products from the
              comfort of their homes.
            </p>
            <p>
              Since our inception, we've worked tirelessly to curate a diverse
              selection of high-quality products that cater to every taste and
              preference. From fashion and beauty to electronics and home
              essentials, we offer an extensive collection sourced from trusted
              brands and suppliers.
            </p>
            <span className="text-gray-800 font-semibold">Our Mission</span>
            <p>
              Our mission at Forever is to empower customers with choice,
              convenience, and confidence. We're dedicated to providing a
              seamless shopping experience that exceeds expectations, from
              browsing and ordering to delivery and beyond.
            </p>
          </div>
        </div>

        {/* Why Choose Us? */}
        <div className="mt-16">
          <div className="inline-flex gap-2 items-center mb-3 text-xl py-4">
            <Title text1="WHY" text2="CHOOSE US" />
          </div>
          <div className="flex flex-col md:flex-row border-2 mb-20">
            <div className="flex flex-col items-center justify-center gap-5 px-10 md:px-16 py-8 sm:py-20 border-2">
              <h3 className="text-black font-semibold">Quality Assurance:</h3>
              <p className="text-gray-600">
                We meticulously select and vet each product to ensure it meets
                our stringent quality standards.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-5 px-10 md:px-16 py-8 sm:py-20 border-2">
              <h3 className="text-black font-semibold">Convenience:</h3>
              <p className="text-gray-600">
                With our user-friendly interface and hassle-free ordering
                process, shopping has never been easier.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-5 px-10 md:px-16 py-8 sm:py-20 border-2">
              <h3 className="text-black font-semibold">
                Exceptional Customer Service:
              </h3>
              <p className="text-gray-600">
                Our team of dedicated professionals is here to assist you the
                way, ensuring your satisfaction is our top priority.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Subscribe />
    </>
  );
};

export default About;
