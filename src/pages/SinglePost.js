import { Fragment } from "react";
import PostDetail from "../components/PostDetail";
import Comment from "../components/Comment";
import Header from "../components/Header";
import Footer from "../components/Footer";

const SinglePost = () => {
  return (
    <Fragment>
      <Header />
      <div className="single-post no-sidebar">
        <PostDetail />
        <Comment />
      </div>
      <Footer />
    </Fragment>
  );
};

export default SinglePost;
