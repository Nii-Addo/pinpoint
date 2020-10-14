import React from "react";
import PropTypes from "prop-types";
import { CommentWrappper } from "../../components/styledComponents/Divs";

const Comment = (props) => {
  return (
    <CommentWrappper className="d-flex flex-wrap">
      <img
        src="images/pic.jpg"
        alt="user"
        className="img-fluid author-pic rounded-circle"
      />
      <div className="comment-body">
        <div>
          <div className="author-name">Nii</div>
        </div>
        gfhjkldsfhgfadshffhjkl;ljhgfds gfhjhkjlk;kjh kjghldfsajHGCSVDHF
        fghjlk;';kjhgfdfghjktyuhijokl;lkjhgfdsfghjkll;lkjhvc'
      </div>
      <div className="comment-actions">
        <div className="mr-4">
          <div className="d-flex flex wrap">
            Like <span className="ml-2">100</span>
          </div>
        </div>
        <div className="mr-2">
          <div>Reply</div>
        </div>
        <div className="date-posted">04/08/2018</div>
      </div>
    </CommentWrappper>
  );
};

export default Comment;
