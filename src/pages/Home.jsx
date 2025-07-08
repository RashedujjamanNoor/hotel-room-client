import React from "react";
import Hero from "../components/Hero";
import FeaturedDestination from "../components/FeaturedDestination ";
import ExclusiveOffer from "../components/ExclusiveOffer";
import Testimonial from "../components/Testimonial";
import NewsLatter from "../components/NewsLatter";

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedDestination />
      <ExclusiveOffer />
      <Testimonial />
      <NewsLatter />
    </>
  );
};

export default Home;
