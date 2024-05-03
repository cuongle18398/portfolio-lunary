import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { Link } from "react-router-dom";

function ProjectCards(props) {

  return (
    <Card className="project-card-view" style={{
      backgroundImage: `url("${props.imgPath}")`,
    }}>
      <div className="cards-content">
        <Card.Body>
          <Card.Img variant="top" src={props.imgPath} alt="card-img" />
        </Card.Body>
        <Card.Footer>
          <h2>{props.title}</h2>
          <Link to={props.Link}>
            <Button variant="primary">
              <CgWebsite /> &nbsp;
              Read More
            </Button>
          </Link>
        </Card.Footer>
      </div>
    </Card >
  );
}
export default ProjectCards;
