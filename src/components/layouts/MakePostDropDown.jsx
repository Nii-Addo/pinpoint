import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ModalContext } from "../../contexts/ModalContext";
import { useHistory } from "react-router-dom";

const StyledDropDown = styled.div`
  position: relative;
  display: inline-block;
`;

const CreatePostButton = styled.button`
  background-color: var(--warmGray);
  height: 2.2rem;
  width: 5rem;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  border-radius: 6px;
  text-align: center;
  padding: 0.4rem 0.5rem;
`;

const Content = styled.div`
  position: relative;
  background-color: var(--mainWhite);
  min-width: 15rem;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;

  a {
    text-decoration: none;
    color: var(--textDark);
  }
  .dropdown-item {
    height: 3.5rem;
    margin-bottom: 6px;

    &:hover {
      background-color: var(--elementHover);
    }

    h6 {
      font-size: 1rem;
    }

    div {
      font-size: 0.8rem;
    }
  }
`;

const MakePostDropDown = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const modalContext = useContext(ModalContext);
  const history = useHistory();

  const toggleOpen = () => {
    if (isOpen === true) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  const createVideoPost = () => {
    modalContext.openModalHandler();
    history.push("/channel");
  };

  const contentClass = `dropdown-menu${isOpen ? " show" : ""}`;
  return (
    <div>
      <StyledDropDown className="dropdown" onClick={toggleOpen}>
        <CreatePostButton
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
        >
          Create
        </CreatePostButton>
        <Content className={contentClass} aria-labelledby="dropdownMenuButton">
          <div className="dropdown-item" onClick={createVideoPost}>
            <h6>Video</h6>
            <div>Share a video to feed</div>
          </div>
          <div className="dropdown-item">
            <h6>Challenge</h6>
            <div>Post challenges that test people's skills</div>
          </div>
        </Content>
      </StyledDropDown>
    </div>
  );
};

export default MakePostDropDown;
