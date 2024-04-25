import React, { Fragment } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BreadCrumb from "../components/BreadCrumb";
import Posts from "../components/Posts";
import SideBar from "../components/SideBar";

const Category = () => {
  return (
    <Fragment>
      <Header />
      <BreadCrumb />
      <section className="blog-section">
        <div className="container">
          <div className="row">
            <Posts />
            <SideBar />
          </div>
        </div>
      </section>
      <Footer />
    </Fragment>
  );
};

export default Category;
