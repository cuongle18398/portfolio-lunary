import React from "react";
import { Col, Row } from "react-bootstrap";

function importAll(r) {
    return r.keys().map(r);
}

const ProjectDetail = (props) => {

    const imageList = importAll(require.context('../../Assets/ProjectDetails/', false, /\.(png|jpe?g|svg|gif)$/));

    return (
        <Row className="project-content">
            <h1>Hello wor</h1>
            {/* {imageList.map((image, index) => (
                image.includes(props.imgFilter) && image.includes(props.sectionitem) ? (
                    <Col key={index} sm={12} md={12} lg={6} className="project-item">
                        <img src={image} className="img-fluid" alt={`Project_img_${index}`} />
                    </Col>
                ) : null
            ))} */}
        </Row>
    )

}

export default ProjectDetail;