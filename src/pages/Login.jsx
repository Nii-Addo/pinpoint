import React from "react";
import PropTypes from "prop-types";
import LoginForm from "../components/layouts/LoginForm";
import { StyledLink } from "../components/styledComponents/Divs";
import "../css/Login.css";

const LoginSignup = (props) => {
  return (
    <>
      <div className="d-flex flex-wrap login-page">
        <div className="login-logo-space">
          <img
            src="/icon.png"
            alt="Logo"
            className="img img-fluid login-logo"
          />
          <div className="intro-text">
            Connect to programmers around the world here{" "}
          </div>
        </div>

        <div className="login-mod">
          <div className="login">
            <LoginForm />
          </div>
          <div className="signup-link">
            <center>
              <div>
                Dont have an account?{" "}
                <StyledLink to="/accounts/signup">Sign up</StyledLink>
              </div>
            </center>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginSignup;
