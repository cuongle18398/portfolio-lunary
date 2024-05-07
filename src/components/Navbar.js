import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/Cover/logongang.png";
import { Link, useNavigate } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiOutlineContacts
} from "react-icons/ai";

function NavBar() {
  const navigate = useNavigate();
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const [SectionToScroll, setSectionToScroll] = useState("");

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    console.log(section)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleOnNavClick = (section) => {
    if (window.location.pathname !== '/') {
      setSectionToScroll(section);
      navigate('/');
    } else {
      scrollToSection(section);
    }
  };

  useEffect(() => {
    if (SectionToScroll !== "") {
      setTimeout(() => scrollToSection(SectionToScroll), 150);
      setSectionToScroll(false);
    }
  }, [SectionToScroll]);


  function scrollHandler() {

    if (window.scrollY > 100) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand className="d-flex">
          <Nav.Link as={Link} to="/home" onClick={() => updateExpanded(false)}>
            <img src={logo} id="nav-logo" className="img-fluid logo" alt="brand" />
          </Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/home" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as="a"
                onClick={() => {
                  handleOnNavClick("about");
                  updateExpanded(false);
                }}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as="a"
                onClick={() => {
                  handleOnNavClick("project");
                  updateExpanded(false);
                }}
              >
                <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} /> Project
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as="a"
                onClick={() => {
                  handleOnNavClick("contact");
                  updateExpanded(false);
                }}
              >
                <AiOutlineContacts style={{ marginBottom: "2px" }} /> Contact
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
