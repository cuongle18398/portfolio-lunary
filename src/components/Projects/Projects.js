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
import shopee from "../../Assets/Projects/Event/Event_mainpage_02_C4.png";
import hpo from "../../Assets/Projects/Event/Event_mainpage_03_C4.jpg";
import pfizer from "../../Assets/Projects/Event/Event_mainpage_04_C8.png";
import rayno from "../../Assets/Projects/Event/Event_mainpage_05_C4.jpg";

function Projects(props) {

  const scrollHandler = () => {
    var project = document.getElementById('project');

    if (props.type !== "home") {
      project.classList.add('hide');
    }

  }

  window.addEventListener("scroll", scrollHandler);

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
            <p className="font-thin" style={{ color: "white", fontSize: "16px" }}>
              <strong>Where my journey has begun.......</strong>
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
                  Link='/digital/schneider-electric'
                />
              </Col>
              <Col md={4} className="project-container">
                <ProjectCard
                  imgPath={pana}
                  title="Panasonic"
                  Link='/digital/panasonic'
                />
              </Col>
              <Col md={4} className="project-container">
                <ProjectCard
                  imgPath={tripbooking}
                  title="Trip Booking"
                  Link='/digital/trip-booking'
                />
              </Col>
              <Col md={8} className="project-container">
                <ProjectCard
                  imgPath={honda}
                  title="Honda"
                  Link='/digital/honda'
                />
              </Col>
              <Col md={4} className="project-container">
                <ProjectCard
                  imgPath={koc}
                  title="KOCA"
                  Link='/digital/koca'
                />
              </Col>
            </Row>
          ) : radioValue === '2' ? (
            <Row>
              <Col md={4} className="project-container">
                <ProjectCard
                  imgPath={schneider}
                  title="Schneider Electric"
                  Link='/event/schneider-electric'
                />
              </Col>
              <Col md={4} className="project-container">
                <ProjectCard
                  imgPath={shopee}
                  title="Shopee"
                  Link='/event/shopee'
                />
              </Col>
              <Col md={4} className="project-container">
                <ProjectCard
                  imgPath={hpo}
                  title="VAN XUAN GROUP"
                  Link='/event/van-xuan-group'
                />
              </Col>
              <Col md={8} className="project-container">
                <ProjectCard
                  imgPath={pfizer}
                  title="PFIZER - Aspergillosis"
                  Link='/event/pfizer-aspergillosis'
                />
              </Col>
              <Col md={4} className="project-container">
                <ProjectCard
                  imgPath={rayno}
                  title="VIETMAP RAYNO"
                  Link='/event/vietmap-rayno'
                />
              </Col>
            </Row>
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
