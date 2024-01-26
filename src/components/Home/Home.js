import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import { CiCircleChevDown, CiCircleChevUp } from "react-icons/ci";
import bglogo from "../../Assets/Background/mylogo.png"



window.addEventListener('scroll', function () {
  var section = document.getElementById('home-header');
  var leadup = document.getElementById('lead-up');
  var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollPosition > 100) {
    section.style.opacity = 0;
    leadup.style.opacity = 1;
  } else {
    section.style.opacity = 1;
    leadup.style.opacity = 0;
  }
});


const scrollDown = () => {
  const targetElement = document.getElementById('about');
  // Scroll đến phần tử mục tiêu
  targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

const scrollUp = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}


const Home = () => {

  const iconstyle = { color: "white", fontSize: "2.5em" }

  return (
    <section>
      <Container fluid id="home">
        <Particle />
        <Container className="home-content">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="corner moon preload"></div>
              <div className="corner cloud-left preload"></div>
              <div id="home-header">
                <Col md={12} className="home-header" >
                  <Image className="home-bg" src={bglogo} alt="home-bg" />

                </Col>
                <div id="lead-down" className="bounce">
                  <span class="icon-container" onClick={() => scrollDown()}>
                    <CiCircleChevDown style={iconstyle} />
                  </span>
                </div>
              </div>
              <div id="lead-up" className="bounce">
                <span class="icon-container" onClick={() => scrollUp()}>
                  <CiCircleChevUp style={iconstyle} />
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
