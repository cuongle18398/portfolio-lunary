import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import myImg from "../../Assets/Cover/Ava.png";
import Wtd from "../../Assets/Background/wtd.png";
import sao4 from "../../Assets/Background/sao4canh.svg"
import { Link } from "react-router-dom";
import Client from "./Client";
import Skill from "./Skills";

const scrollHandler = () => {
  var text = document.getElementById('about-text');
  var text2 = document.getElementById('about-text2');
  var imga = document.getElementById('img-a');
  var imgb = document.getElementById('img-b');

  if (window.scrollY > 300) {
    text.classList.remove('left-hide');
    imga.classList.remove('right-hide');
  } else {
    text.classList.add('left-hide');
    imga.classList.add('right-hide');
  }

  if (window.scrollY > 1000) {
    text2.classList.remove('right-hide');
    imgb.classList.remove('left-hide');
  } else {
    text2.classList.add('right-hide');
    imgb.classList.add('left-hide');
  }
};

window.addEventListener("scroll", scrollHandler);

const scrollToContact = () => {
  const section = document.getElementById('contact');
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

function Home2() {

  return (
    <Container fluid className="home-about-section alt-section" id="about">
      <Container>
        <Row>
          <Col md={6} className="home-about-description" id="about-text">
            <br />
            <br />
            <br />
            <h1 className="font-thin home-about-title">
              <img src={sao4} alt="sao4" /> WHO <span className="purple"> AM I </span> ?
            </h1>
            <p className="home-about-body">
              I’m a <b className="purple">passionate </b> & <b className="purple">creative</b> designer
              with strong focus on creating both visually <b className="purple">stunning designs</b>.
              <br />
            </p>
            <br />
            <Button className="home-button" onClick={() => scrollToContact()}>CONTACT WITH ME</Button>
          </Col>
          <Col md={6} className="myAvtar" id="img-a">
            <img src={myImg} className="img-fluid" alt="avatar" />
          </Col>
        </Row>

        <Row>
          <Col md={6} className="myAvtar" id="img-b">
            <img src={Wtd} className="img-fluid" alt="avatar" />
          </Col>
          <Col md={6} className="home-about-description" id="about-text2">
            <br />
            <br />
            <h1 className="font-thin home-about-title">
              <img src={sao4} alt="sao4" /> WHAT <span className="purple"> I DO </span> ?
            </h1>
            <p className="font-thin">I'm here to help you out with anything related to visual design, branding, or creating eye-catching illustrations. Just contact me anytime to talk about it.</p>
            <h2 className="home-do">Digital <b className="purple">Post</b></h2>
            <h2 className="home-do"><b className="purple">Layout</b> Design</h2>
            <h2 className="home-do"><b className="purple">Brandings</b> Design</h2>
            <h2 className="home-do"><b className="purple">Illus</b>trations</h2>
            <Link to='/project'>
              <Button className="home-button">CHECK MY PROJECTS</Button>
            </Link>
          </Col>
        </Row>

        {/* <Row>
          <Col md={6} className="home-about-description" id="skill" >
            <br />
            <h1 className="font-thin home-about-title">
              <img src={sao4} alt="sao4" /> MY TOP <span className="purple"> SKILLS </span>
            </h1>
            <br />
            <Skill />
          </Col>
          <Col md={6} className="home-about-description" id="client" >
            <br />
            <h1 className="font-thin home-about-title title-right">
              <img src={sao4} alt="sao4" /> AND MY <span className="purple"> CLIENTS </span>
            </h1>
            <br />
            <Client />
          </Col>
        </Row> */}
        {/* <Contact /> */}
      </Container>
    </Container >
  );
}
export default Home2;
