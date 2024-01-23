import React from "react";
import { Container } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import Slider from "react-slick";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import socialpost from "../../Assets/Projects/Project-Bg/social-post.png";
import illu from "../../Assets/Projects/Project-Bg/illu.png";
import layout from "../../Assets/Projects/Project-Bg/layout.png";
import logo from "../../Assets/Projects/Project-Bg/logo.png";
import package_ from "../../Assets/Projects/Project-Bg/package.png";
import stationery from "../../Assets/Projects/Project-Bg/stationery.png";

function Projects() {
  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 2
  };
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <h1 className="project-heading">
              My Recent <strong className="purple">Works </strong>
            </h1>
            <p style={{ color: "white" }}>
              Here are a few projects I've worked on recently.
            </p>
            <br />
            <br />
            <Slider {...settings}>
              <ProjectCard
                imgPath={socialpost}
                title="SOCIAL POST"
                Link='/socialposts'
              />
              <ProjectCard
                imgPath={illu}
                title="ILLUSTRATION"
                Link='/illustration'
              />
              <ProjectCard
                imgPath={layout}
                title="LAYOUT"
                Link='/layout'
              />
              <ProjectCard
                imgPath={logo}
                title="LOGO"
                Link='/logo'
              />
              <ProjectCard
                imgPath={package_}
                title="PACKAGE"
                Link='/package'
              />
              <ProjectCard
                imgPath={stationery}
                title="STATIONERY"
                Link='/stationery'
              />
            </Slider>
            <br />
            <br />
            <br />
          </motion.div>
        </AnimatePresence>
      </Container>
    </Container >
  );
}

export default Projects;
