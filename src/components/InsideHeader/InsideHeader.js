import React, { useContext } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import logo from "../../resources/icons/logo.png";
import "./InsideHeader.css";

const InsideHeader = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <div className="container">
      <Navbar bg="lightgrey" variant="light">
        <Navbar.Brand href="">
          <Link to="/home">
            <img src={logo} alt="volunteer-network" srcSet="" />
          </Link>
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="">Home</Nav.Link>
          <Nav.Link href="">Donation</Nav.Link>
          <Nav.Link href="">Events</Nav.Link>
          <Nav.Link href="">Blog</Nav.Link>
          <Navbar.Text>
            Signed in as: <storng>{loggedInUser.name}</storng>
          </Navbar.Text>
        </Nav>
      </Navbar>
    </div>
  );
};

export default InsideHeader;
