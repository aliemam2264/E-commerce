import React from "react";
import Hero from "../components/Hero";
import Latestcollections from "../components/Latestcollections";
import Bestsellers from "../components/Bestsellers";
import Icons from "../components/Icons";
import Subscribe from "../components/Subscribe";

const Home = () => {
  return (
    <div>
      <Hero />
      <Latestcollections />
      <Bestsellers />
      <Icons />
      <Subscribe />
    </div>
  );
};

export default Home;
