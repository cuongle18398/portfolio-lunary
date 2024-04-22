import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import socialpost from "../../Assets/Projects/Project-Bg/social-post.png";
import illu from "../../Assets/Projects/Project-Bg/illu.png";
import layout from "../../Assets/Projects/Project-Bg/layout.png";

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
              title="Social Post"
              Link='/socialposts'
            />
          </Col>
          <Col md={6} className="project-container">
            <ProjectCard
              imgPath={illu}
              title="Event"
              Link='/event'
            />
          </Col>
          <Col md={6} className="project-container">
            <ProjectCard
              imgPath={illu}
              title="Illustration"
              Link='/illustration'
            />
          </Col>
          <Col md={6} className="project-container">
            <ProjectCard
              imgPath={layout}
              title="Branding"
              Link='/branding'
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
