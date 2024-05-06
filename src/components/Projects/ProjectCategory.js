import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Particle from "../Particle";
import { motion, AnimatePresence } from "framer-motion";
import Projects from "./Projects";
import Contact from "../Home/Contact";

function importAll(r) {
    return r.keys().map(r);
}

const ProjectCategory = (props) => {

    const imageList = importAll(require.context('../../Assets/ProjectDetails/', false, /\.(png|jpe?g|svg|gif)$/));
    const section = props.section;

    return (
        <>
            <Container fluid className="project-detail-section">
                <Particle />
                <Container>
                    <AnimatePresence>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <br />
                            <br />
                            <div className="project-list">
                                <div>
                                    <h1 className="project-title">
                                        <strong>{props.title}</strong> <span> {'-'} </span> {props.subTitle}
                                    </h1>
                                    <Row className="project-content">
                                        {imageList.map((image, index) => (
                                            image.includes(props.imgFilter) && image.includes(props.subTitle) && image.includes("C4") ? (
                                                <Col key={index} sm={12} md={12} lg={4} className="project-item">
                                                    <img src={image} className="img-fluid" alt={`Project_img_${index}`} />
                                                </Col>
                                            ) : image.includes(props.imgFilter) && image.includes(props.subTitle) && image.includes("C6") ? (
                                                <Col key={index} sm={12} md={12} lg={6} className="project-item">
                                                    <img src={image} className="img-fluid" alt={`Project_img_${index}`} />
                                                </Col>
                                            ) : image.includes(props.imgFilter) && image.includes(props.subTitle) && image.includes("C8") ? (
                                                <Col key={index} sm={12} md={12} lg={8} className="project-item">
                                                    <img src={image} className="img-fluid" alt={`Project_img_${index}`} />
                                                </Col>
                                            ) : null
                                        ))}
                                    </Row>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </Container>
                <Projects type="detail" />
            </Container>
            <Contact />
        </>
    );
}

export default ProjectCategory;
