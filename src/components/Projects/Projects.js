import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import socialpost from "../../Assets/Projects/Project-Bg/social-post.png";
import illu from "../../Assets/Projects/Project-Bg/illu.png";
import layout from "../../Assets/Projects/Project-Bg/layout.png";
import logo from "../../Assets/Projects/Project-Bg/logo.png";
import package_ from "../../Assets/Projects/Project-Bg/package.png";
import stationery from "../../Assets/Projects/Project-Bg/stationery.png";

function Projects() {
  return (

    <Container fluid className="project-section" id="project">
      <Container>
        <h1 className="project-heading">
          MY RECENT <strong className="purple">WORKS </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <br />
        <Row>
          <Col md={6} className="project-container">
            <ProjectCard
              imgPath={socialpost}
              title="SOCIAL POST"
              Link='/socialposts'
            />
          </Col>
          <Col md={6} className="project-container">
            <ProjectCard
              imgPath={illu}
              title="ILLUSTRATION"
              Link='/illustration'
            />
          </Col>
          <Col md={6} className="project-container">
            <ProjectCard
              imgPath={layout}
              title="LAYOUT"
              Link='/layout'
            />
          </Col>
          <Col md={6} className="project-container">
            <ProjectCard
              imgPath={logo}
              title="LOGO"
              Link='/logo'
            />
          </Col>
          <Col md={6} className="project-container">
            <ProjectCard
              imgPath={package_}
              title="PACKAGE"
              Link='/package'
            />
          </Col>
          <Col md={6} className="project-container">
            <ProjectCard
              imgPath={stationery}
              title="STATIONERY"
              Link='/stationery'
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
