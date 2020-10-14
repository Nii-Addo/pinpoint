import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Formik, Form, useField } from "formik";
import { StyledLink } from "../../components/styledComponents/Divs";
import SignInValidationSchema from "../../components/helpers/getSignInValidationSchema";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { PublicFetch } from "../../utilities/Fetch";
import styled from "styled-components";
import "../../css/Login.css";

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

const LoginForm = (props) => {
  const authContext = useContext(AuthContext);
  const [loginSuccess, setLoginSuccess] = useState();
  const [loginError, setLoginError] = useState();
  const [loginLoading, setLoginLoading] = useState(false);
  const [redirectOnLogin, setRedirectOnLogin] = useState(false);
  return (
    <div className="login-form">
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={SignInValidationSchema}
        onSubmit={async (values, actions) => {
          try {
            const userDto = {
              email: values.email,
              password: values.password,
            };

            setLoginLoading(true);
            const { data } = await PublicFetch.post("/accounts/login", userDto);
            authContext.setAuthState(data);
            setLoginSuccess(data.message);
            setLoginError(null);
            setRedirectOnLogin(true);
          } catch (error) {
            setLoginLoading(false);
            const { data } = error.response;
            setLoginError(data.message);
            setLoginSuccess(null);
          }
        }}
      >
        <div>
          {redirectOnLogin && <Redirect to="/feed" />}
          {loginError ? <div className="error-alert">{loginError}</div> : null}
          <Form>
            <div>
              <LoginInput name="email" type="email" placeholder="email" />
            </div>
            <div>
              <LoginInput
                name="password"
                type="password"
                placeholder="password"
              />
            </div>
            <div>
              <SubmitButton type="submit">Submit</SubmitButton>
            </div>
          </Form>
        </div>
      </Formik>
      <div className="divider mt-4"></div>
      <center>
        <div className="forgot-password-link">
          <StyledLink to="/passwordreset">Forgot password?</StyledLink>
        </div>
      </center>
    </div>
  );
};

export default LoginForm;
