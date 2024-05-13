import React, { Fragment } from "react";
import PostItem from "./PostItem";
import Pagination from "./Pagination";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../features/posts/postSlice";

const Posts = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state);

  console.log(data);
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
