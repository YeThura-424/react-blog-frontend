import { Fragment } from "react";
import PostDetail from "../components/PostDetail";
import Comment from "../components/Comment";

const SinglePost = () => {
  return (
    <Fragment>
      <div class="single-post no-sidebar">
        <PostDetail />
        <Comment />
      </div>
    </Fragment>
  );
};

export default SinglePost;
