import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useDropzone } from "react-dropzone";
import { PostFetch } from "../../utilities/Fetch";
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
  const media = props.media;
  const setMedia = props.setMedia;

  const onDrop = useCallback((acceptedFiles) => {
    const media = acceptedFiles[0];
    let formData = new FormData();
    formData.append("media", media);
    const config = {
      headers: { "content-type": "multipart/form-data" },
    };
    PostFetch.post("/", formData, config).then((response) =>
      setMedia(response.data)
    );
  }, []);

  return (
    <Container className="container " tabindex="-1">
      <Row>
        <Col>
          <div className="form-group mb-4 mt-4">
            <StyledInput
              name="tittle"
              type="text"
              className="form-control"
              placeholder="tittle of your post"
            />
          </div>
          <div className="form-group mb-4">
            <StyledInput
              name="tags"
              type="text"
              className="form-control"
              placeholder="tags related to your post"
            />
          </div>
          <div className="form-group">
            <textarea
              name="description"
              id="description"
              cols="50"
              rows="5"
              placeholder="more description for your post"
            ></textarea>
          </div>
        </Col>
        <div className="border"></div>
        <Col>put image here</Col>
      </Row>
    </Container>
  );
};

export default ExtendedModalForm;
