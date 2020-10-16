import React, { useContext } from "react";
import PropTypes from "prop-types";
import { AuthContext } from "../../contexts/AuthContext";
import "../../css/SideBar.css";

const SideBar = (props) => {
  const authContext = useContext(AuthContext);
  const {
    interests,
    userName,
    profileImage,
  } = authContext.authState.userInfo._doc.userProfile;
  return (
    <div>
      <div className="userName">@{userName}</div>
      <div className="interests">#{interests}</div>
    </div>
  );
};

export default SideBar;
