import React, { Fragment } from "react";
import Slider from "../components/Slider";
import FreshStories from "../components/FreshStories";
import TrendingPosts from "../components/TrendingPosts";

const Home = () => {
  return (
    <Fragment>
      <Slider />
      <FreshStories />
      <TrendingPosts />
    </Fragment>
  );
};

export default Home;
