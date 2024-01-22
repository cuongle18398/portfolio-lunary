import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
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
              <Row>
                <Col md={7} className="home-header">
                  <h1 style={{ paddingBottom: 15 }} className="heading">
                    Hi There!{" "}
                    <span className="wave" role="img" aria-labelledby="wave">
                      👋🏻
                    </span>
                  </h1>

                  <h1 className="heading-name">
                    I'M
                    <strong className="main-name"> LUNARY</strong>
                  </h1>

                  <div style={{ padding: 50, textAlign: "left" }}>
                    <Type />
                  </div>
                </Col>

                <Col md={5} style={{ paddingBottom: 20 }}>
                  <img
                    src={homeLogo}
                    alt="home pic"
                    className="img-fluid"
                    style={{ maxHeight: "450px" }}
                  />
                </Col>
              </Row>
            </motion.div>
          </AnimatePresence>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
