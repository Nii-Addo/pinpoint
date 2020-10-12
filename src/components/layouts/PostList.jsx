import React, { useContext } from "react";
import PropTypes from "prop-types";
import Post from "../../components/layouts/Post";
import { PostContext } from "../../contexts/PostContext";

const PostList = (props) => {
  const postContext = useContext(PostContext);
  return (
    <div>
      {postContext.posts.map((post) => {
        return <Post post={post} key={post._id} />;
      })}
    </div>
  );
};

export default PostList;
