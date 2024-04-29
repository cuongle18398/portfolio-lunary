import React from "react";
import { useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ProjectCard from "./ProjectCards";
import socialpost from "../../Assets/Projects/Project-Bg/social-post.png";
import illu from "../../Assets/Projects/Project-Bg/illu.png";
import layout from "../../Assets/Projects/Project-Bg/layout.png";

function Projects() {

  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState('1');

  const radios = [
    { name: 'Digital', value: '1' },
    { name: 'Event', value: '2' },
    { name: 'Branding', value: '3' },
    { name: 'More', value: '4' },
  ];
  return (

    <Container fluid className="project-section" id="project">
      <Container>
        <h1 className="project-heading">
          MY <strong className="purple">PROJECTS </strong>
        </h1>
        <p style={{ color: "white" }}>
          Where my journey has begun.......
        </p>
        <ButtonGroup>
          {radios.map((radio, idx) => (
            <ToggleButton
              key={idx}
              id={`radio-${idx}`}
              type="radio"
              variant={'outline-light'}
              name="radio"
              value={radio.value}
              checked={radioValue === radio.value}
              onChange={(e) => setRadioValue(e.currentTarget.value)}
            >
              {radio.name}
            </ToggleButton>
          ))}
        </ButtonGroup>
        <br />
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
