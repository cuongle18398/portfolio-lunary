import React from "react";
import Slider from "react-slick";
import { Col, Row } from "react-bootstrap";
import honda from '../../Assets/Client/honda.png'
import se from '../../Assets/Client/Logo SE.png'
import masan from '../../Assets/Client/masan.png'
import pnj from '../../Assets/Client/pnj.png'
import pana from '../../Assets/Client/pana_blue.png'
import sony from '../../Assets/Client/sony.png'

function Client() {


    const settings = {
        infinite: true,
        speed: 500,
        autoplaySpeed: 2000,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: false,
        vertical: true,
        verticalSwiping: true
    };

    return (
        <Row style={{ justifyContent: "center" }}>
            <div className="slider-container">
                <Slider {...settings}>
                    <Col xs={6} md={3} className="client-icons-container">
                        <div className="client-icons">
                            <img src={honda} alt="honda" />
                        </div>
                    </Col>
                    <Col xs={6} md={3} className="client-icons-container">
                        <div className="client-icons">
                            <img src={se} alt="se" />
                        </div>
                    </Col>
                    <Col xs={6} md={3} className="client-icons-container">
                        <div className="client-icons">
                            <img src={pnj} alt="pnj" />
                        </div>
                    </Col>
                    <Col xs={6} md={3} className="client-icons-container">
                        <div className="client-icons">
                            <img src={masan} alt="masan" />
                        </div>
                    </Col>
                    <Col xs={6} md={3} className="client-icons-container">
                        <div className="client-icons">
                            <img src={pana} alt="pana" />
                        </div>
                    </Col>
                    <Col xs={6} md={3} className="client-icons-container">
                        <div className="client-icons">
                            <img src={sony} alt="sony" />
                        </div>
                    </Col>
                </Slider>
            </div>
        </Row>
    );
}

export default Client;
