import React, { useState } from "react";
import PropTypes from "prop-types";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import styled from "styled-components";

const StyledCommentInputField = styled.div`
  appearance: none;
  background-color: rgb(255, 255, 255);
  box-shadow: none;
  color: rgb(34, 34, 34);
  display: block;
  font-family: "TT Norms", "TT Norms-fallback", proxima-nova, "Helvetica Neue",
    Verdana, Arial, Helvetica, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  min-height: 0.5rem;
  letter-spacing: 0.012rem;
  margin-bottom: 0px;
  word-spacing: 0.16rem;
  width: 90%;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(138, 138, 138);
  border-image: initial;
  border-radius: 2px;
  padding: 1rem;
  margin-bottom: 4px;
`;

const EditableDiv = styled.div`
  appearance: none;
  background-color: rgb(255, 255, 255);
  box-shadow: none;
  color: rgb(34, 34, 34);
  display: block;
  font-size: 1rem;
  font-weight: 400;
  min-height: 2rem;
  letter-spacing: 0.012rem;
  margin-bottom: 0px;
  word-spacing: 0.16rem;
  width: 90%;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(138, 138, 138);
  border-image: initial;
  border-radius: 2px;
  padding: 0.1rem;
  margin-bottom: 4px;

  span {
    outline: 0 !important;
  }
`;
const CommentBox = ({ props }) => {
  const [comment, setComment] = useState();

  const handleComment = (e: React.Event) => {
    setComment(e.target.value);
    console.log(e.target.value);
  };

  const submitComment = (e: React.Event) => {
    e.preventDefault();
    alert(JSON.stringify(comment, null, 2));
  };
  return (
    <>
      <form>
        <EditableDiv>
          <textarea name="content" id="" cols="50" rows="1"></textarea>
        </EditableDiv>
        <button type="submit" onClick={submitComment} hidden="true"></button>
      </form>
    </>
  );
};

export default CommentBox;
/*
<EditableDiv>
  <span
    contenteditable="true"
    name="comment"
    onChange={handleComment}
    onKeyDown={handleComment}
  ></span>
</EditableDiv>


<StyledCommentInputField
name="comment"
onChange={handleComment}

><StyledCommentInputField/>
*/
