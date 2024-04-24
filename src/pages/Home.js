import React, { Fragment } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Slider from "../components/Slider";
import FreshStories from "../components/FreshStories";
import TrendingPosts from "../components/TrendingPosts";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <Slider />
      <FreshStories />
      <TrendingPosts />
      <Footer />
    </Fragment>
  );
};

export default Home;
