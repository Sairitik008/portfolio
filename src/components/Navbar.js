import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";



import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  useEffect(() => {
    function scrollHandler() {
      updateNavbar(window.scrollY >= 20);
    }
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        {/* Brand — Premium Text Logo */}
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center" style={{ textDecoration: "none" }}>
          <span style={{ color: "#818cf8", fontWeight: "800", fontSize: "1.3em", border: "2px solid #818cf8", padding: "2px 8px", borderRadius: "6px", marginRight: "10px", boxShadow: "0 0 10px rgba(129, 140, 248, 0.4)" }}>SN</span>
          <span style={{ color: "#f8fafc", fontWeight: "700", fontSize: "1.4em", letterSpacing: "1px" }}>Sairitik</span>
          <span style={{ color: "#94a3b8", fontWeight: "400", fontSize: "1.4em", marginLeft: "6px" }}>Naidu</span>
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => updateExpanded(expand ? false : "expanded")}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/about" onClick={() => updateExpanded(false)}>
                <AiOutlineUser /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/project" onClick={() => updateExpanded(false)}>
                <AiOutlineFundProjectionScreen /> Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/resume" onClick={() => updateExpanded(false)}>
                <CgFileDocument /> Resume
              </Nav.Link>
            </Nav.Item>

            {/* Social icons in navbar */}
            {/* <Nav.Item className="nav-social-item">
              <a
                href="https://github.com/Sairitik008"
                target="_blank"
                rel="noreferrer"
                className="nav-social-icon"
                aria-label="GitHub"
              >
                <AiFillGithub />
              </a>
            </Nav.Item>

            <Nav.Item className="nav-social-item">
              <a
                href="https://www.linkedin.com/in/sairitiknaidu/"
                target="_blank"
                rel="noreferrer"
                className="nav-social-icon"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </Nav.Item> */}

            {/* Hire Me Button */}
            <Nav.Item className="ms-2">
              <a
                href="mailto:sairitiknaidu7@gmail.com"
                className="hire-me-btn"
                style={{ whiteSpace: "nowrap" }}
              >
                Hire Me
              </a>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
