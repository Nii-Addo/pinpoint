import React from "react";
import PropTypes from "prop-types";
import SignUpForm from "../components/layouts/SignUpForm";
import { StyledLink } from "../components/styledComponents/Divs";
import "../css/SignUp.css";

const SignUp = (props) => {
  return (
    <div>
      <div className="signup-mod">
        <div>
          <SignUpForm />
        </div>
        <div className="login-link">
          <center>
            <div>
              Already have an account? <StyledLink to="/">Login</StyledLink>
            </div>
          </center>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
