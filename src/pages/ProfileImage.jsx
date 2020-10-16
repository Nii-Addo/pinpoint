import React, { useState, useCallback, useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useDropzone } from "react-dropzone";
import { Redirect } from "react-router-dom";
import { FetchContext } from "../contexts/FetchContext";
import { AuthContext } from "../contexts/AuthContext";
import { Link } from "react-router-dom";
const Container = styled.div`
  width: 50%;
  height: 27rem;
  padding-top: 1rem;
  margin-top: 3rem;
  background-color: var(--mainWhite);

  .dropzone-text {
    font-size: 1.2rem;
    line-height: 1rem;
    margin-bottom: 2rem;
    display: relative;
    margin-left: 15rem;
  }

  button {
    width: auto;
    height: 2.5rem;
    font-size: 1rem;
    display: relative;
    color: var(--mainWhite);
    border: none;
    background-color: var(--buttonPrimary);
    margin-left: 17rem;
    margin-bottom: 2rem;
  }

  .skip {
    width: 4rem;
    height: 2.5rem;
    font-size: 1.5rem;
    font-weight: 400;
    display: relative;
    padding-left: 0.5rem;
    border: none;
    color: white !important;
    background-color: var(--mainWhite);
    margin-left: 1rem;
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

const ProfileImage = (props) => {
  const fetchContext = useContext(FetchContext);
  const authContext = useContext(AuthContext);
  const [redirectOnProfileSetup, setRedirectOnProfileSetup] = useState(false);
  const [profileError, setProfileError] = useState("");
  const { _id } = authContext.profile;

  const onDrop = useCallback(
    (acceptedFiles) => {
      const profileImage = acceptedFiles[0];
      let formData = new FormData();
      formData.append("profileImage", profileImage);
      const config = {
        headers: { "content-type": "multipart/form-data" },
      };
      try {
        fetchContext.authAxios
          .post(`/profile/image/${_id}`, formData, config)
          .then((response) => {
            setProfileError("");
            setRedirectOnProfileSetup(true);
          });
      } catch (error) {
        setProfileError(error.message);
        setRedirectOnProfileSetup(false);
      }
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
    accept: "image/jpeg, image/png",
    maxFiles: 1,
    noClick: true,
    noKeyboard: true,
    onDrop,
  });
  return (
    <Container className="container ">
      {redirectOnProfileSetup && <Redirect to="/feed" />}
      <div className="text-title">Choose your profile picture</div>
      <FileDropZone {...getRootProps({ isDragAccept, isDragReject })}>
        <input {...getInputProps()} />
      </FileDropZone>
      <p className="dropzone-text">Drop your picture to upload</p>
      <button type="button" onClick={open}>
        Choose picture here
      </button>
      <div>
        <div className="skip">
          <Link to="/feed">skip</Link>
        </div>
      </div>
    </Container>
  );
};

export default ProfileImage;
