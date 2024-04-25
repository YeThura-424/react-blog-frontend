import React, { Fragment } from "react";
import PostItem from "./PostItem";
import Pagination from "./Pagination";
const Posts = () => {
  return (
    <Fragment>
      <div className="col-lg-8">
        <div className="blog-box list-style">
          <PostItem />
          <Pagination />
        </div>
      </div>
    </Fragment>
  );
};

export default Posts;
