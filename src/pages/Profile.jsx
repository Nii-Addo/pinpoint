import React from "react";
import PropTypes from "prop-types";
import ProfileForm from "../components/layouts/ProfileForm";
import "../css/Profile.css";

const Profile = (props) => {
  return (
    <div className="profile-mod">
      <div>
        <ProfileForm />
      </div>
    </div>
  );
};

export default Profile;
