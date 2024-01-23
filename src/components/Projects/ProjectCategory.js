import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import { motion, AnimatePresence } from "framer-motion";

function importAll(r) {
    return r.keys().map(r);
}

const ProjectCategory = (props) => {

    const imageList = importAll(require.context("../../Assets/ProjectDetails/Logo", false, /\.(png|jpe?g|svg)$/));

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
                        <div>
                            {imageList.map((image, index) => (
                                <img key={index} src={image} alt={`Gallery img ${index}`} />
                            ))}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </Container>
        </Container>
    );
}

export default ProjectCategory;
