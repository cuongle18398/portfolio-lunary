import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillBehanceCircle,
} from "react-icons/ai";
import { FaFacebook, FaGooglePlus } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Tho Pham</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year}</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://www.facebook.com/wendy.heosua"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>
            </li>
            <li className="social-icons">
              <a
                href=""
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGooglePlus />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.behance.net/thphm70/projects"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillBehanceCircle />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
