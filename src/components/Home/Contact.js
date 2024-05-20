import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import {
    AiFillBehanceCircle,
} from "react-icons/ai";
import { FaFacebook, FaGooglePlus } from "react-icons/fa";
import pdf from "../../Assets/CV/CV_THOPHAM_design_2024.pdf";
import { AiOutlineDownload } from "react-icons/ai";


function Contact() {

    return (
        <Container fluid className="home-contact-section" id="contact">
            <Container>
                <Row id="contact">
                    <Col md={12} className="home-contact-social contact">
                        <br />
                        <h1>FIND ME ON</h1>
                        <p>
                            Feel free to <span className="purple">connect </span>with me
                        </p>
                        <Button
                            variant="primary"
                            href={pdf}
                            target="_blank"
                            style={{ maxWidth: "250px" }}
                        >
                            <AiOutlineDownload />
                            &nbsp;Download My CV
                        </Button>
                        <br />
                        <ul className="home-about-social-links">
                            <li className="social-icons">
                                <a
                                    href="https://www.facebook.com/wendy.heosua"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <FaFacebook />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href=""
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <FaGooglePlus />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://www.behance.net/thphm70/projects"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <AiFillBehanceCircle />
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}
export default Contact;
