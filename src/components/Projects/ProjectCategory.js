import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import { motion, AnimatePresence } from "framer-motion";

const ProjectCategory = (props) => {

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
                    </motion.div>
                </AnimatePresence>
            </Container>
        </Container>
    );
}

export default ProjectCategory;
