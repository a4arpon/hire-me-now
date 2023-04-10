import React from "react";
import Category from "./Category";
import FeaturedJobs from "./FeaturedJobs";
import Hero from "./Hero";

const Home = () => {
  return (
    <div className="">
      <Hero />
      <Category />
      <FeaturedJobs />
    </div>
  );
};

export default Home;
