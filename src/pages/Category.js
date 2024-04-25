import React, { Fragment } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BreadCrumb from "../components/BreadCrumb";
import Posts from "../components/Posts";

const Category = () => {
  return (
    <Fragment>
      <Header />
      <section class="blog-section">
        <div class="container">
          <div class="row">
            <BreadCrumb />
            <Posts />
          </div>
        </div>
      </section>
      <Footer />
    </Fragment>
  );
};

export default Category;
