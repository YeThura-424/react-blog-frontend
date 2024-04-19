import React, { Fragment } from "react";
import Header from "../components/Header";
import Slider from "../components/Slider";
import FreshStories from "../components/FreshStories";
import TrendingPosts from "../components/TrendingPosts";
import Footer from "../components/Footer";

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
