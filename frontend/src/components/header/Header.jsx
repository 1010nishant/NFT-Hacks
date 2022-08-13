import React from "react";
import "./Header.css";
import { Navbar, Nav, Container } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <Navbar bg="secondary" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="/logo.png"
              className="d-inline-block align-top nav-img"
              alt="NFT logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#about" className="top">
                About
              </Nav.Link>
              <Nav.Link href="#timeline" className="top">
                Timeline
              </Nav.Link>
              <Nav.Link href="#theme" className="top">
                Theme
              </Nav.Link>
              <Nav.Link href="#sponsor" className="top">
                Sponsors
              </Nav.Link>
              <Nav.Link href="#team" className="top">
                Team
              </Nav.Link>
              <Nav.Link href="#faq" className="top">
                FAQ
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
