import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FetchContext } from "../../contexts/FetchContext";
import { ModalContext } from "../../contexts/ModalContext";
import { Redirect } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Container = styled.div`
  button {
    width: 8rem;
    height: 2.5rem;
    font-size: 1rem;
    color: var(--mainWhite);
    border: none;
    background-color: var(--buttonPrimary);
  }

  textarea {
    width: 100%;
  }
`;

const StyledInput = styled.input`
  appearance: none;
  background-color: rgb(255, 255, 255);
  box-shadow: none;
  color: rgb(34, 34, 34);
  display: block;
  font-family: "TT Norms", "TT Norms-fallback", proxima-nova, "Helvetica Neue",
    Verdana, Arial, Helvetica, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  height: 2rem;
  letter-spacing: 0.012rem;
  margin-bottom: 0px;
  word-spacing: 0.16rem;
  width: 100%;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(138, 138, 138);
  border-image: initial;
  border-radius: 2px;
  padding: 1rem;
`;

const ExtendedModalForm = (props) => {
  const fetchContext = useContext(FetchContext);
  const modalContext = useContext(ModalContext);
  const { _id, media } = props.media;
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");
  const [description, setDescription] = useState("");
  const [redirectOnSuccess, setRedirectOnSuccess] = useState(false);

  const handleTitleChange = (e: React.Event) => {
    setTitle(e.target.value);
  };

  const handleTagsChange = (e: React.Event) => {
    setTags(e.target.value);
  };

  const handleDescriptionChange = (e: React.Event) => {
    setDescription(e.target.value);
  };

  const submitExtendedModalForm = (e: React.Event) => {
    e.preventDefault();
    const postInfo = {
      title: title,
      tags: tags,
      description: description,
    };
    fetchContext.authAxios
      .post(`/posts/create/${_id}`, postInfo)
      .then((response) => {
        setRedirectOnSuccess(true);
        modalContext.closeModalHandler();
      });
  };

  return (
    <Container className="container " tabindex="-1">
      {redirectOnSuccess && <Redirect to="/channel" />}
      <Row>
        <Col>
          <form>
            <div className="form-group mb-4 mt-4">
              <StyledInput
                name="title"
                value={title}
                type="text"
                className="form-control"
                placeholder="title of your post"
                onChange={handleTitleChange}
              />
            </div>
            <div className="form-group mb-4">
              <StyledInput
                name="tags"
                value={tags}
                type="text"
                className="form-control"
                placeholder="tags related to your post"
                onChange={handleTagsChange}
              />
            </div>
            <div className="form-group">
              <textarea
                name="description"
                value={description}
                id="description"
                cols="50"
                rows="5"
                placeholder="more description for your post"
                onChange={handleDescriptionChange}
              ></textarea>
            </div>
            <div>
              <button type="submit" onClick={submitExtendedModalForm}>
                Post
              </button>
            </div>
          </form>
        </Col>
        <div className="border"></div>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default ExtendedModalForm;
