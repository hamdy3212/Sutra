import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { auth } from "../Config/Config";
import { useHistory } from "react-router-dom";

const Navbar2 = ({ user }) => {
  const history = useHistory();
  const handleLogout = () => {
    auth.signOut().then(() => {
      history.push("/");
    });
  };
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="/">Sutra</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="ml-auto">
          <Nav className="ml-auto">
            {/* {!user && (
              <>
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/login">Login</Nav.Link>
              </>
            )} */}
            {user && (
              <Nav className="me-auto">
                <Nav.Link href="/"> {user}</Nav.Link>
                <Nav.Link
                  className="btn btn-success mx-md-3"
                  style={{ color: "white" }}
                  href="/additem"
                >
                  Add new item
                </Nav.Link>
                <Nav.Link
                  className="btn btn-danger"
                  style={{ color: "white" }}
                  href="/"
                  onClick={handleLogout}
                >
                  LOGOUT
                </Nav.Link>
              </Nav>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbar2;
