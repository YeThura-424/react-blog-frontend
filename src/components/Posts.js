import React, { Fragment, useEffect } from "react";
import PostItem from "./PostItem";
import Pagination from "./Pagination";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../features/posts/postSlice";

const Posts = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  // console.log("abo", data);
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <Fragment>
      <div className="col-lg-8">
        <div className="blog-box list-style">
          <PostItem posts={data} />
          <Pagination />
        </div>
      </div>
    </Fragment>
  );
};

export default Posts;
