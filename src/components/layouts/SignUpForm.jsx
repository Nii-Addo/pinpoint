import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Formik, Form, useField } from "formik";
import { Redirect } from "react-router-dom";
import SignUpValidationSchema from "../../components/helpers/getSignUpValidationSchema";
import { AuthContext } from "../../contexts/AuthContext";
import { PublicFetch } from "../../utilities/Fetch";
import styled from "styled-components";

const LoginTextField = ({ ...props }) => {
  const [field] = useField(props);
  return (
    <div>
      <input className="text-input" {...field} {...props} />
    </div>
  );
};

const LoginInput = styled(LoginTextField)`
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

const SignUpForm = (props) => {
  const authContext = useContext(AuthContext);
  const [signupSuccess, setSignupSuccess] = useState();
  const [signupError, setSignupError] = useState();
  const [signupLoading, setSignupLoading] = useState(false);
  const [redirectOnSignup, setRedirectOnSignup] = useState(false);
  return (
    <div className="signup-form">
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          passwordConfirmation: "",
        }}
        validationSchema={SignUpValidationSchema}
        onSubmit={async (values, actions) => {
          try {
            setSignupLoading(true);
            const userDto = {
              firstName: values.firstName,
              lastName: values.lastName,
              email: values.email,
              phoneNumber: values.phoneNumber,
              password: values.password,
              passwordConfirmation: values.passwordConfirmation,
            };

            const { data } = await PublicFetch.post(
              "/accounts/register",
              userDto
            );
            authContext.setAuthState(data);
            setSignupSuccess(data.message);
            setSignupError(null);
            setRedirectOnSignup(true);
          } catch (error) {
            setSignupLoading(false);
            const { data } = error.response;
            setSignupError(data);
            setSignupSuccess(null);
          }
        }}
      >
        <div>
          {redirectOnSignup && <Redirect to="/account/profile" />}
          {signupError ? (
            <div className="error-alert">Problem signing up</div>
          ) : null}
          <Form>
            <div>
              <LoginInput
                name="firstName"
                type="text"
                placeholder="First name"
              />
            </div>
            <div>
              <LoginInput name="lastName" type="text" placeholder="Last name" />
            </div>
            <div>
              <LoginInput name="email" type="email" placeholder="Email" />
            </div>
            <div>
              <LoginInput
                name="password"
                type="password"
                placeholder="Password"
              />
            </div>
            <div>
              <LoginInput
                name="passwordConfirmation"
                type="password"
                placeholder="Confirm password"
              />
            </div>
            <div>
              <SubmitButton type="submit">Sign up</SubmitButton>
            </div>
          </Form>
        </div>
      </Formik>
    </div>
  );
};

export default SignUpForm;
