import React from "react";
import { Col, Row } from "react-bootstrap";
import SkillBar from 'react-skillbars';

const skills = [
    { type: 'Photoshop', level: 95 },
    { type: 'Illustrator', level: 90 },
    { type: 'AfterEffects', level: 80 },
    { type: 'Canva', level: 75 }
];

const colors = {
    bar: {
        hue: 300,
        saturation: 543,
        level: {
            minimum: 80,
            maximum: 100
        }
    },
    title: {
        text: "#fff",
        background: "#EF3F70"
    }
};


function Skill() {
    return (
        <Row style={{ justifyContent: "center" }}>
            <SkillBar skills={skills} colors={colors} height={50} symbolColor={'#EF3F70'} />
        </Row>
    );
}

export default Skill;
