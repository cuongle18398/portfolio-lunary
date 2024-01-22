import React from "react";
import Card from "react-bootstrap/Card";
import { ImBook } from "react-icons/im";
import { SiYourtraveldottv } from "react-icons/si";
import { IoGameControllerOutline } from "react-icons/io5";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Lunary </span>, a
            <span className="purple"> Vietnamese</span> illustrator in <span className="purple"> Ho Chi Minh.</span>
            <br />
            I create colorful characters using big bold shapes and strong lines.
            <br />
            Originally an illustrator, I spent around two years in the animation industry before switching disciplines to focus on Design work.
            <br />
            <br />
          </p>
          <ul>
            <li className="about-activity">
              <ImBook /> Reading
            </li>
            <li className="about-activity">
              <SiYourtraveldottv /> Travelling
            </li>
            <li className="about-activity">
              <IoGameControllerOutline /> Playing Games
            </li>
          </ul>

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Lunary</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
