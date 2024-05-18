import React from "react";
import { Container, Col } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import Particle from "../Particle";
// import About from "./About";
import { CiCircleChevDown, CiCircleChevUp } from "react-icons/ci";
// import Type from "./Type";
import Contact from "./Contact";
import Projects from '../Projects/Projects'

const scrollHandler = () => {
  var bimg = document.getElementById('bg-img');
  var bg = document.getElementById('bg');
  var lcloud = document.getElementById('lcloud');
  var rcloud = document.getElementById('rcloud');
  var leadup = document.getElementById('lead-up');
  var leaddown = document.getElementById('lead-down');

  if (window.scrollY > 300) {
    bimg.classList.add('hide');
    bg.classList.add('hide');
    lcloud.classList.add('hide');
    rcloud.classList.add('hide');
    leadup.style.opacity = 1;
    leaddown.style.opacity = 0;
  } else {
    bimg.classList.remove('hide');
    bg.classList.remove('hide');
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
                {/* <div className="moon"></div> */}
                
              </div>
              <div className="corner cloud-left preload" id="lcloud"></div>
              <div className="corner cloud-right preload" id="rcloud"></div>
              <Col className="home-container home-header" id="bg">
                <div>
                  <h1 className="home-title">WELCOME</h1>
                  <h1 className="home-title sub">A <span className="purple"> passionate </span> & <span className="purple">creative</span> designer with strong focus on creating both visually <span className="purple">stunning  designs</span>. I'm here to solve your issues.</h1>
                  <br />
                </div>
                <div className="myimg"></div>
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
      {/* <About /> */}
      <Projects type="home" />
      <Contact />
    </section>
  );
}

export default Home;
