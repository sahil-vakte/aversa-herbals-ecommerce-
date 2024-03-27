import React from "react";
import "./AppNavbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BsCart4 } from "react-icons/bs";
import { RiUserFill } from "react-icons/ri";

import Aversalogo from "../../Assets/aversalogo.jpg";
import ProductPage from "../ProductPage/ProductPage";

import { Link } from "react-router-dom";

function AppNavbar() {
  return (
    <div className="fixed-navbar-classname">
      <Navbar
        collapseOnSelect
        expand="lg"
        style={{ paddingLeft: "20px", paddingRight: "20px" }}
      >
        {/* <Container> */}
        {/* <Navbar.Brand href="" > */}
        <img
          src={Aversalogo}
          alt=""
          style={{ height: "60px", width: "250px" }}
        />
        {/* </Navbar.Brand> */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="/*">Home</Nav.Link>
            <Nav.Link href="/products">Products</Nav.Link>
            <Nav.Link href="/wellnessresources">Wellness Resources</Nav.Link>
            <Nav.Link href="/about">About Aversa Herbals</Nav.Link>
            <Nav.Link href="/contact">Contact Us</Nav.Link> */}

            <Link className="nav-link" to="/*">
              Home
            </Link>
            <Nav.Link href="/Products">Products</Nav.Link>
            <Nav.Link href="/wellnessresources">Wellness Resources</Nav.Link>
            <Link to="/about" className="nav-link">
              About Aversa Herbals
            </Link>
            <Link to="/contact" className="nav-link">
              Contact US
            </Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">
              <BsCart4 className="nav-bar-icons" />
            </Nav.Link>
            <Nav.Link eventKey={2} href="/login">
              <RiUserFill className="nav-bar-icons" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        {/* </Container> */}
      </Navbar>
    </div>
  );
}

export default AppNavbar;
