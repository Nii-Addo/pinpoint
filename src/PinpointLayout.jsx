import React from "react";
import PropTypes from "prop-types";
import NavigationBar from "./components/layouts/NavigationBar";
import Row from "react-bootstrap/Row";
import "./css/Pinpoint.css";

const PinpointLayout = ({ children }) => {
  return (
    <div className="layout-mod">
      <div className="navigation-mod">
        <NavigationBar />
      </div>
      <Row>
        <div className="sidebar-mod">sidebar</div>
        <div className="content-mod">{children}</div>
      </Row>
    </div>
  );
};
export default PinpointLayout;
