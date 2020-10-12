import React from "react";
import PropTypes from "prop-types";
import Comment from "../../components/layouts/Comment";

const CommentList = (props) => {
  const comments = props.comments;
  return (
    <div>
      {comments.map((comment) => {
        return <Comment key={comment} />;
      })}
    </div>
  );
};

export default CommentList;
