import React from "react";
import { Col, Row } from "react-bootstrap";
import honda from '../../Assets/Client/honda.png'
import se from '../../Assets/Client/Logo SE.png'
import masan from '../../Assets/Client/masan.png'
import pnj from '../../Assets/Client/pnj.png'
import pana from '../../Assets/Client/pana_blue.png'
import sony from '../../Assets/Client/sony.png'

function Client() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="client-icons">
                <img src={honda} alt="honda" />
            </Col>
            <Col xs={4} md={2} className="client-icons">
                <img src={se} alt="se" />
            </Col>
            <Col xs={4} md={2} className="client-icons">
                <img src={masan} alt="masan" />
            </Col>
            <Col xs={4} md={2} className="client-icons">
                <img src={pnj} alt="pnj" />
            </Col>
            <Col xs={4} md={2} className="client-icons">
                <img src={pana} alt="pana" />
            </Col>
            <Col xs={4} md={2} className="client-icons">
                <img src={sony} alt="sony" />
            </Col>
        </Row>
    );
}

export default Client;
