import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Formik, Form, useField } from "formik";
import { Redirect } from "react-router-dom";
import SignUpValidationSchema from "../../components/helpers/getSignUpValidationSchema";
import { AuthContext } from "../../contexts/AuthContext";
import { FetchContext } from "../../contexts/FetchContext";
import styled from "styled-components";

const ProfileTextField = ({ ...props }) => {
  const [field] = useField(props);
  return (
    <div>
      <input className="text-input" {...field} {...props} />
    </div>
  );
};

const ProfileTextArea = ({ ...props }) => {
  const [field] = useField(props);
  return (
    <div>
      <textarea className="text-input" {...field} {...props} />
    </div>
  );
};

const LoginInput = styled(ProfileTextField)`
  background-color: rgb(255, 255, 255);
  box-shadow: none;
  color: rgb(34, 34, 34);
  display: block;
  font-size: 1rem;
  font-weight: 400;
  height: 3rem;
  letter-spacing: 0.012rem;
  word-spacing: 0.16rem;
  width: 100%;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(138, 138, 138);
  border-image: initial;
  border-radius: 5px;
  padding: 1rem;
  margin-bottom: 0.6rem;
  margin-right: 8px;

  ::placeholder {
    font-size: 1rem;
  }
`;

const TextArea = styled(ProfileTextArea)`
  background-color: rgb(255, 255, 255);
  box-shadow: none;
  color: rgb(34, 34, 34);
  display: block;
  font-size: 1rem;
  font-weight: 400;
  height: 6rem;
  letter-spacing: 0.012rem;
  word-spacing: 0.16rem;
  width: 100%;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(138, 138, 138);
  border-image: initial;
  border-radius: 5px;
  padding: 1rem;
  margin-bottom: 0.6rem;
  margin-right: 8px;

  ::placeholder {
    font-size: 1rem;
  }
`;

const SubmitButton = styled.button`
  padding: 0.25em 1em;
  display: block;
  background: none;
  background-color: #00a400;
  border: none;
  box-shadow: none;
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  height: 3rem;
  width: 100%;
  overflow: hidden;
  padding-left: 32px;
  padding-right: 32px;
  text-shadow: none;
  border-radius: 5px;
  transition: all 0.2s ease-out 0s;

  &:hover {
    border: 1px solid;
  }
`;

const ProfileForm = (props) => {
  const fetchContext = useContext(FetchContext);
  const authContext = useContext(AuthContext);
  const [profileSuccess, setProfileSuccess] = useState();
  const [profileError, setProfileError] = useState();
  const [profileLoading, setProfileLoading] = useState(false);
  const [redirectOnProfile, setRedirectOnProfile] = useState(false);

  return (
    <div className="profile-form">
      <Formik
        initialValues={{
          userName: "",
          bio: "",
          interests: "",
        }}
        onSubmit={async (values, actions) => {
          try {
            setProfileLoading(true);
            const userDto = {
              userName: values.userName,
              interests: values.interests,
            };

            const { data } = await fetchContext.authAxios.post(
              "/profile/",
              userDto
            );
            setProfileError(null);
            setRedirectOnProfile(true);
          } catch (error) {
            setProfileLoading(false);
            const { data } = error.response;
            setProfileError(data.message[0]);
            setProfileSuccess(null);
          }
        }}
      >
        <div>
          {redirectOnProfile && <Redirect to={`/account/profile-image`} />}
          {profileError ? (
            <div className="error-alert">{profileError}</div>
          ) : null}
          <Form>
            <div>
              <LoginInput name="userName" type="text" placeholder="Username" />
            </div>
            <div>
              <TextArea
                name="bio"
                id="bio"
                placeholder="Tell people something about yourself(bio)"
              ></TextArea>
            </div>
            <div>
              <LoginInput
                name="interests"
                type="text"
                placeholder="Interests"
              />
            </div>
            <div>
              <SubmitButton type="submit">Next</SubmitButton>
            </div>
          </Form>
        </div>
      </Formik>
    </div>
  );
};

export default ProfileForm;
