import React from "react";
import { useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ProjectCard from "./ProjectCards";
import schneider from "../../Assets/Projects/Digital/Schneider Electric.png";
import pana from "../../Assets/Projects/Digital/Panasonic.png";
import tripbooking from "../../Assets/Projects/Digital/TripBooking.png";
import honda from "../../Assets/Projects/Digital/Honda.png";
import koc from "../../Assets/Projects/Digital/KOC.png";

function Projects(props) {

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
        {props.type === "home" ? (
          <>
            <h1 className="project-heading">
              MY <strong className="purple">PROJECTS </strong>
            </h1>
            <p style={{ color: "white" }}>
              Where my journey has begun.......
            </p>
          </>
        ) : (
          <h1 className="project-heading">
            MY OTHERS <strong className="purple">PROJECTS </strong>
          </h1>
        )}
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
          {radioValue === '1' ? (
            <Row>
              <Col md={4} className="project-container">
                <ProjectCard
                  imgPath={schneider}
                  title="Schneider Electric"
                  Link='/projects/schneider-electric'
                />
              </Col>
              <Col md={4} className="project-container">
                <ProjectCard
                  imgPath={pana}
                  title="Panasonic"
                  Link='/projects/panasonic'
                />
              </Col>
              <Col md={4} className="project-container">
                <ProjectCard
                  imgPath={tripbooking}
                  title="Trip Booking"
                  Link='/projects/trip-booking'
                />
              </Col>
              <Col md={8} className="project-container">
                <ProjectCard
                  imgPath={honda}
                  title="Honda"
                  Link='/projects/honda'
                />
              </Col>
              <Col md={4} className="project-container">
                <ProjectCard
                  imgPath={koc}
                  title="KOCA"
                  Link='/projects/koca'
                />
              </Col>
            </Row>
          ) : radioValue === '2' ? (
            <div>
              event
            </div>
          ) : radioValue === '3' ? (
            <div>
              braning
            </div>
          ) : radioValue === '4' ? (
            <div>
              more
            </div>
          ) : (
            <div>
              <h2>Không tìm thấy nội dung này !</h2>
            </div>
          )}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
