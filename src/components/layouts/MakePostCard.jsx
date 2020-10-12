import React from "react";
import PropTypes from "prop-types";
import { StyledMakePostCard } from "../../components/styledComponents/Divs";
import Button from "react-bootstrap/Button";

const MakePostCard = (props) => {
  return (
    <div>
      <StyledMakePostCard>
        <div className="make-post-text">Start a post</div>
        <div className="make-post-buttons d-flex justify-content-between">
          <Button>First one</Button>
          <Button>second one</Button>
        </div>
      </StyledMakePostCard>
    </div>
  );
};

export default MakePostCard;
