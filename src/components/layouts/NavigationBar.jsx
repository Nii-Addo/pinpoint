import React, { useContext } from "react";
import PropTypes from "prop-types";
import { AuthContext } from "../../contexts/AuthContext";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
import Searchbox from "../../components/layouts/Searchbox";
import MakePostDropDown from "../../components/layouts/MakePostDropDown";
import "../../css/NavigationBar.css";

const NavigationBar = (props) => {
  const authContext = useContext(AuthContext);
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      fixed="top"
      className="navigationbar-mod"
    >
      <Navbar.Brand
        as={NavLink}
        to="/feed"
        className="navigation-logo centered"
      >
        <img src="/icon.png" alt="" className="img img-fluid" />
      </Navbar.Brand>

      <div className="searchbar-mod centered">
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </div>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="navigation-center">
          <Nav.Link as={NavLink} to="/feed" className="navigation-link-item">
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/hacks" className="navigation-link-item">
            Hacks
          </Nav.Link>
        </Nav>
        <Nav className="navigation-right">
          <Nav.Link className="navigation-alt">
            <MakePostDropDown />
          </Nav.Link>
          <Nav.Link className="navigation-alts">Messaging</Nav.Link>
          <Nav.Link className="navigation-alts" onClick={authContext.logout}>
            Logout
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
