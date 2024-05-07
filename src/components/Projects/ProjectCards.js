import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
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
          <h3>{props.title}</h3>
          <Link to={props.Link}>
            <Button variant="primary" className="font-thin">
              <strong>Read More</strong>
            </Button>
          </Link>
        </Card.Footer>
      </div>
    </Card >
  );
}
export default ProjectCards;
