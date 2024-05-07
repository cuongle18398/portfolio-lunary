import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Particle from "../Particle";
import { motion, AnimatePresence } from "framer-motion";
import Projects from "./Projects";
import Contact from "../Home/Contact";

function importAll(r) {
    return r.keys().map(r);
}

const ProjectDetails2 = (props) => {

    const imageList = importAll(require.context('../../Assets/ProjectDetails/', false, /\.(png|jpe?g|svg|gif)$/));
    const section = props.section

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
                                    <section className="project-section-title">
                                        <h1 className="project-title center">
                                            <strong>{props.title}</strong>
                                        </h1>
                                        <h2 className="project-subtitle">
                                            {props.subTitle}
                                        </h2>
                                        <h3 className="project-date">
                                            {props.subDateTime}
                                        </h3>
                                    </section>
                                    <section className="project-section-intro">
                                        {props.intro}
                                    </section>
                                    {section.map((item, index) => (
                                        <>
                                            <h3 className="project-section-subtitle">
                                                <strong>{item}</strong>
                                            </h3>
                                            <Row className="project-content-alt">
                                                {imageList.map((image, index) => (
                                                    image.includes(props.imgFilter) && image.includes(props.imgFilterSub) && image.includes(item) && image.includes("C4") ? (
                                                        <Col key={index} sm={12} md={12} lg={4} className="project-item">
                                                            <img src={image} className="img-fluid" alt={`Project_img_${index}`} />
                                                        </Col>
                                                    ) : image.includes(props.imgFilter) && image.includes(props.imgFilterSub) && image.includes(item) && image.includes("C6") ? (
                                                        <Col key={index} sm={12} md={12} lg={6} className="project-item">
                                                            <img src={image} className="img-fluid" alt={`Project_img_${index}`} />
                                                        </Col>
                                                    ) : image.includes(props.imgFilter) && image.includes(props.imgFilterSub) && image.includes(item) && image.includes("C8") ? (
                                                        <Col key={index} sm={12} md={12} lg={8} className="project-item">
                                                            <img src={image} className="img-fluid" alt={`Project_img_${index}`} />
                                                        </Col>
                                                    ) : image.includes(props.imgFilter) && image.includes(props.imgFilterSub) && image.includes(item) && image.includes("C10") ? (
                                                        <Col key={index} sm={12} md={12} lg={10} className="project-item">
                                                            <img src={image} className="img-fluid" alt={`Project_img_${index}`} />
                                                        </Col>
                                                    ) : image.includes(props.imgFilter) && image.includes(props.imgFilterSub) && image.includes(item) && image.includes("C12") ? (
                                                        <Col key={index} sm={12} md={12} lg={12} className="project-item">
                                                            <img src={image} className="img-fluid" alt={`Project_img_${index}`} />
                                                        </Col>
                                                    ) : null
                                                ))}
                                            </Row>
                                        </>
                                    ))}
                                    <section className="project-author">
                                        {props.author}
                                    </section>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </Container>
                <Projects type="detail" title={props.imgFilter} />
            </Container>
            <Contact />
        </>
    );
}

export default ProjectDetails2;
