import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import myImg from "../../Assets/Cover/Ava.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillBehanceCircle,
} from "react-icons/ai";
import { FaFacebook, FaGooglePlus } from "react-icons/fa";


const scrollHandler = () => {
  var text = document.getElementById('about-text');
  var text2 = document.getElementById('about-text2');

  if (window.scrollY > 100 && window.scrollY < 1200) {
    text.classList.remove('left-hide');
  } else {
    text.classList.add('left-hide');
  }

  if (window.scrollY > 1000) {
    text2.classList.remove('right-hide');
  } else {
    text2.classList.add('right-hide');
  }
};

window.addEventListener("scroll", scrollHandler);

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={7} className="home-about-description" id="about-text">
            <br />
            <br />
            <br />
            <br />
            <h1 style={{ fontSize: "2.6em" }}>
              WHO <span className="purple"> AM I </span> ?
            </h1>
            <p className="home-about-body">
              I’m a <b className="purple">passionate </b> & <b className="purple">creative</b> designer with strong focus on creating both visually <b className="purple">stunning  designs</b>
              <br />
            </p>
            <br />
            <Button className="home-button">CONTACT WITH ME</Button>
          </Col>
          <Col md={5} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>

        <Row>
          <Col md={5} className="myAvtar">
            {/* <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt> */}
          </Col>
          <Col md={7} className="home-about-description" id="about-text2">
            <br />
            <br />
            <br />
            <br />
            <h1 style={{ fontSize: "2.6em" }}>
              WHAT <span className="purple"> I DO </span> ?
            </h1>
            <p>I'm here to help you out with anything related to visual design, branding, or creating eye-catching illustrations. Just contact me anytime to talk about it.</p>
            <br />
            <h2>Digital <b className="purple">Post</b></h2>
            <br />
            <h2><b className="purple">Layout</b> Design</h2>
            <br />
            <h2><b className="purple">Brandings</b> Design</h2>
            <br />
            <h2><b className="purple">Illustrations</b></h2>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <br />
            <br />
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/wendy.heosua"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaGooglePlus />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.behance.net/thphm70/projects"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillBehanceCircle />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
