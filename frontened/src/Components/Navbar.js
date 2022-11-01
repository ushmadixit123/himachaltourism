import React from "react";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Components/Navbar.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import {
  Container,
  Popover,
  Table,
  Form,
  Button,
  Image,
  Nav,
  FormControl,
  Row,
  Col,
  NavDropdown,
} from "react-bootstrap";

function NavbarHead() {
  let authuser = localStorage.getItem("Key_Veriable");
  console.log(authuser);
  if (authuser === "ADMIN") {
    return (
      <Container bg="dark" style={{ maxWidth: "initial" }}>
        <Navbar
          collapseOnSelect
          expand="xl"
          bg="light"
          variant="light"
          style={{ paddingRight: "1rem", paddingLeft: "1rem" }}
        >
          <Navbar.Brand>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              <img
                alt=""
                src="https://png.pngtree.com/png-vector/20201224/ourlarge/pngtree-vector-cartoon-mountain-peak-logo-png-image_2594392.jpg"
                width="40"
                height="35"
                className="d-inline-block align-top"
              />{" "}
              Himachal Tourism
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link>
                <Link
                  to="/adminafterlogin"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  ADMIN
                </Link>
              </Nav.Link>
              {/* <Nav.Link>
                <Link
                  to="/displayall"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  DISPLAY ALL
                </Link>
              </Nav.Link> */}
              {/* <Nav.Link>
                <Link
                  to="/delete"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  DELETE
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  to="/search"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  SEARCH
                </Link>
              </Nav.Link> */}
              <Nav.Link>
                <Link
                  to="/manageuser"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  MANAGE USER
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  to="/logout"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  LOGOUT
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    );
  } else if (authuser === "USER") {
    return (
      <Container bg="dark" style={{ maxWidth: "initial" }}>
        <Navbar
          collapseOnSelect
          expand="xl"
          bg="light"
          variant="light"
          style={{ paddingRight: "1rem", paddingLeft: "1rem" }}
        >
          <Navbar.Brand>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              <img
                alt=""
                src="https://png.pngtree.com/png-vector/20201224/ourlarge/pngtree-vector-cartoon-mountain-peak-logo-png-image_2594392.jpg"
                width="40"
                height="35"
                className="d-inline-block align-top"
              />{" "}
              Himachal Tourism
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link>
                <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                  HOME
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  to="/stay"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  STAY
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  to="/topdestination"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  TOP DESTINATIONS
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  to="/aboutus"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  ABOUT US
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  to="/contactus"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  CONTACT US
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  to="/updateprofile"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  UPDATE PROFILE
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  to="/logout"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  LOGOUT
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    );
  } else {
    return (
      <Container bg="dark" style={{ maxWidth: "initial" }}>
        <Navbar
          collapseOnSelect
          expand="xl"
          bg="light"
          variant="light"
          style={{ paddingRight: "1rem", paddingLeft: "1rem" }}
        >
          <Navbar.Brand>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              <img
                alt=""
                src="https://png.pngtree.com/png-vector/20201224/ourlarge/pngtree-vector-cartoon-mountain-peak-logo-png-image_2594392.jpg"
                width="40"
                height="35"
                className="d-inline-block align-top"
              />{" "}
              Himachal Tourism
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link>
                <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                  HOME
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  to="/signup"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  SIGNUP
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  to="/login"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  LOGIN
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  to="/topdestination"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  TOP DESTINATIONS
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  to="/aboutus"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  ABOUT US
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  to="/contactus"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  CONTACT US
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  to="/admin"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  ADMIN
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    );
  }
}

export default NavbarHead;
