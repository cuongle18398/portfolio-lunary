import React from "react";
import { Container, Col, Image } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import Particle from "../Particle";
import Home2 from "./Home2";
import { CiCircleChevDown, CiCircleChevUp } from "react-icons/ci";
import Type from "./Type";

const scrollHandler = () => {
  var logo = document.getElementById('bg-logo');
  var bgimg = document.getElementById('bg-img');
  var lcloud = document.getElementById('lcloud');
  var rcloud = document.getElementById('rcloud');
  var leadup = document.getElementById('lead-up');
  var leaddown = document.getElementById('lead-down');

  if (window.scrollY > 100) {
    logo.classList.add('hide');
    bgimg.classList.add('hide');
    lcloud.classList.add('hide');
    rcloud.classList.add('hide');
    leadup.style.opacity = 1;
    leaddown.style.opacity = 0;
  } else {
    logo.classList.remove('hide');
    bgimg.classList.remove('hide');
    lcloud.classList.remove('hide');
    rcloud.classList.remove('hide');
    leadup.style.opacity = 0;
    leaddown.style.opacity = 1;
  }
};

window.addEventListener("scroll", scrollHandler);

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
              <div className="bg-img" id="bg-img">
                <div className="moon" id="moon"></div>
                <div className="myimg" id="myimg"></div>
              </div>
              <div className="corner cloud-left preload" id="lcloud"></div>
              <div className="corner cloud-right preload" id="rcloud"></div>
              <Col className="home-container home-header" >
                <div>
                  <br />
                  <h1 className="home-title">Hello</h1>
                  <h1 className="home-title behind">I am</h1>
                  <h1 className="home-title title"><span className="purple">THO</span> PHAM</h1>
                  <Type />
                </div>
              </Col>
              <div id="lead-down" className="bounce">
                <span class="icon-container" onClick={() => scrollDown()}>
                  <CiCircleChevDown style={iconstyle} />
                </span>
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
