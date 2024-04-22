import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Particle from "../Particle";
import { motion, AnimatePresence } from "framer-motion";

function importAll(r) {
    return r.keys().map(r);
}

const ProjectCategory = (props) => {

    const imageList = importAll(require.context('../../Assets/ProjectDetails/', false, /\.(png|jpe?g|svg|gif)$/));
    const section = props.section;

    return (
        <Container fluid className="project-detail-section">
            <Particle />
            <Container>
                <AnimatePresence>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <h1 className="project-heading">
                            <strong className="purple">{props.title}</strong>
                        </h1>
                        <br />
                        <br />
                        <div className="project-list">
                            {section.map((item, index) => (
                                <Row className="project-content">
                                    {imageList.map((image, index) => (
                                        image.includes(props.imgFilter) && image.includes(item) ? (
                                            <Col key={index} sm={12} md={12} lg={6} className="project-item">
                                                <img src={image} className="img-fluid" alt={`Project_img_${index}`} />
                                            </Col>
                                        ) : null
                                    ))}
                                </Row>
                            ))}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </Container>
        </Container>
    );
}

export default ProjectCategory;
