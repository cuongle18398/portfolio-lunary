import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaRegStar } from "react-icons/fa";
import { MdOutlineSchool, MdWorkOutline } from "react-icons/md";

const Exp = () => {
    return (
        <div>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgba(33, 150, 243, 0.6)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgba(33, 150, 243, 0.6)' }}
                    date="08/2022 - 11/2023"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<MdWorkOutline />}
                >
                    <h3 className="vertical-timeline-element-title">Graphic Designer</h3>
                    <h4 className="vertical-timeline-element-subtitle">Ionline Agency Corporation</h4>
                    <p>
                        Description here.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgba(33, 150, 243, 0.6)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgba(33, 150, 243, 0.6)' }}
                    date="05/2022 - 08/2022"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<MdWorkOutline />}
                >
                    <h3 className="vertical-timeline-element-title">Freelance Designer</h3>
                    <h4 className="vertical-timeline-element-subtitle">An Dat Vina Co., LTd</h4>
                    <p>
                        HQ Rainbowcube Project
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--school"
                    contentStyle={{ background: 'rgba(243, 150, 33, 0.6)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgba(243, 150, 33, 0.6)' }}
                    date="2016 - 2020"
                    iconStyle={{ background: 'rgb(243, 150, 33)', color: '#fff' }}
                    icon={<MdOutlineSchool />}
                >
                    <h3 className="vertical-timeline-element-title">Bachelor of Science</h3>
                    <h4 className="vertical-timeline-element-subtitle">University of Sience - VNUHCM</h4>
                    <p>
                        Description here.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                    icon={<FaRegStar />}
                />
            </VerticalTimeline>
        </div>
    )
}

export default Exp;