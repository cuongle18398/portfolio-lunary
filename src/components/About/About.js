import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Exp from "../Experience/Experience";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import Client from "./Client";
import { motion, AnimatePresence } from "framer-motion";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Row style={{ justifyContent: "center", padding: "10px" }}>
              <Col
                md={7}
                style={{
                  justifyContent: "center",
                  paddingTop: "30px",
                  paddingBottom: "50px",
                }}
              >
                <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                  Know Who <strong className="purple">I'M</strong>
                </h1>
                <Aboutcard />
              </Col>
              <Col
                md={5}
                style={{ paddingTop: "120px", paddingBottom: "50px" }}
                className="about-img"
              >
                <img src={laptopImg} alt="about" className="img-fluid" />
              </Col>
            </Row>
            {/* <h1 className="project-heading">
              Professional <strong className="purple">Skillset </strong>
            </h1>
            <Techstack /> */}

            <h1 className="exp-heading">
              <strong className="purple">Experience </strong>
            </h1>
            <br />
            <Exp />
            <br />
            <br />
            <h1 className="project-heading">
              <strong className="purple">Tools</strong> I use
            </h1>
            <br />
            <Toolstack />
            <br />
            <br />
            <h1 className="project-heading">
              My <strong className="purple">Clients </strong>
            </h1>
            <br />
            <Client />
          </motion.div>
        </AnimatePresence>
      </Container>
    </Container>
  );
}

export default About;
