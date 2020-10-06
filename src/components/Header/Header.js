import React from "react";
import {  Button, Nav, Navbar  } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../resources/icons/logo.png";
import "./Header.css";



const Header = () => {
  return (
    
    <div className="container">
 

<Navbar bg="" variant="light">
    <Navbar.Brand href="#home">
      <Link to="/home">
            <img
              className="logo"
              src={logo}
              alt="volunteer-network"
              srcSet=""
            />
      </Link>
    </Navbar.Brand>
    <Nav className="mr-auto">
          
          <Nav.Link href="">
            <Link to="/login">
            <Nav.Link href="#">Home</Nav.Link>
            </Link>
          </Nav.Link>
          <Nav.Link href="">
            <Link to="/login">
            <Nav.Link href="#">Donation</Nav.Link>
            </Link>
          </Nav.Link>
          <Nav.Link href="">
            <Link to="/login">
            <Nav.Link href="#">Events</Nav.Link>
            </Link>
          </Nav.Link>
          <Nav.Link href="">
            <Link to="/login">
            <Nav.Link href="#">Blog</Nav.Link>
            </Link>
          </Nav.Link>
    </Nav>
    <Nav.Link href="">
        <Link to="/login">
        <Button variant="outline-primary">Register</Button>
        </Link>
    </Nav.Link>
    <Nav.Link href="">
        <Link to="/admin">
        <Button className="px-2" variant="outline-info">Admin</Button>
        </Link>
    </Nav.Link>

  </Navbar>


    </div>
  );
};

export default Header;
