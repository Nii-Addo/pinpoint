import React, { useState, useCallback, useContext, useRef } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useDropzone } from "react-dropzone";
import { FetchContext } from "../../contexts/FetchContext";
import ProgressBar from "react-bootstrap/ProgressBar";

const Container = styled.div`
  .dropzone-text {
    font-size: 1.2rem;
    line-height: 1rem;
    margin-bottom: 2rem;
    display: relative;
    left: 38%;
  }

  button {
    width: 8rem;
    height: 2.5rem;
    font-size: 1rem;
    display: relative;
    left: 30%;
    color: var(--mainWhite);
    border: none;
    background-color: var(--buttonPrimary);
    margin-bottom: 2rem;
  }
`;

const FileDropZone = styled.div`
  flex: 1;
  display: flex;
  width: 10rem;
  height: 10rem;
  align-items: center;
  position: relative;
  left: 42%;
  border: 2px solid;
  border-radius: 6px;
  border-color: ${(props) => getColor(props)};
  background-color: var(--warmGray);
  color: #bdbdbd;
  outline: none;
  transition: border 0.24s ease-in-out;
  margin-top: 3rem;
  margin-bottom: 0.5rem;
`;

const getColor = (props) => {
  if (props.isDragAccept) {
    return "#00e676";
  }
  if (props.isDragReject) {
    return "#ff1744";
  }
  return "#eeeeee";
};

const ModalForm = (props) => {
  const fetchContext = useContext(FetchContext);
  const setMedia = props.setMedia;

  const onDrop = useCallback(
    (acceptedFiles) => {
      const media = acceptedFiles[0];
      let formData = new FormData();
      formData.append("media", media);
      const config = {
        headers: { "content-type": "multipart/form-data" },
      };

      var options = {
        onUploadProgress: (progressEvent) => {
          const percentCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          console.log(`${percentCompleted}`);
        },
      };

      fetchContext.authAxios
        .post("/posts/", formData, config, options)
        .then((response) => setMedia(response.data));
    },
    [fetchContext.authAxios]
  );

  const {
    getRootProps,
    getInputProps,
    isDragAccept,
    isDragReject,
    acceptedFiles,
    open,
  } = useDropzone({
    accept: "video/*",
    maxFiles: 1,
    noClick: true,
    noKeyboard: true,
    onDrop,
  });
  return (
    <Container className="container " tabindex="-1">
      <FileDropZone {...getRootProps({ isDragAccept, isDragReject })}>
        <input {...getInputProps()} />
      </FileDropZone>
      <p className="dropzone-text">Drag and drop video files to upload.</p>
      <button type="button" onClick={open}>
        Select Files
      </button>
    </Container>
  );
};

export default ModalForm;
/*
<div>
  <ProgressBar animated now={60} label={`${60}%`} />
</div>
  */
