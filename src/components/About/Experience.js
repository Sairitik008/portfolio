import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdWork, MdSchool } from "react-icons/md";

function Experience() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col md={12}>
        <VerticalTimeline lineColor="#6366f1">
          {/* Integration Developer */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgba(23, 25, 35, 0.65)", color: "#fff", border: "1px solid rgba(255, 255, 255, 0.08)", boxShadow: "0 10px 30px rgba(0,0,0,0.3)" }}
            contentArrowStyle={{ borderRight: "7px solid  rgba(23, 25, 35, 0.65)" }}
            date="Nov 2024 - Mar 2026"
            iconStyle={{ background: "#6366f1", color: "#fff" }}
            icon={<MdWork />}
          >
            <h3 className="vertical-timeline-element-title purple">
              Integration Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Cluematrix Technologies Pvt. Ltd., Nagpur
            </h4>
            <ul style={{ listStyleType: "disc", paddingLeft: "20px", fontSize: "0.9em", color: "#94a3b8", textAlign: "left" }}>
              <li style={{ marginBottom: "8px" }}>Worked on backend API integrations for an EdTech platform, cutting down a ton of manual data entry for the client.</li>
              <li style={{ marginBottom: "8px" }}>Built the Node.js backend for Solarpix to track solar device health and generate real-time client reports.</li>
              <li style={{ marginBottom: "8px" }}>Set up the admin dashboard and React Native app workflows for Turo Fitness.</li>
              <li style={{ marginBottom: "8px" }}>Handled full-stack development for the Sauji food delivery app using React and Node.</li>
              <li>Built local government tracking tools (Grampanchayat platform) using PHP and MySQL.</li>
            </ul>
          </VerticalTimelineElement>

          {/* Freelance & Independent Developer */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgba(23, 25, 35, 0.65)", color: "#fff", border: "1px solid rgba(255, 255, 255, 0.08)", boxShadow: "0 10px 30px rgba(0,0,0,0.3)" }}
            contentArrowStyle={{ borderRight: "7px solid  rgba(23, 25, 35, 0.65)" }}
            date="2021 - Present"
            iconStyle={{ background: "#a855f7", color: "#fff" }}
            icon={<MdWork />}
          >
            <h3 className="vertical-timeline-element-title purple">
              Freelance & Independent Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Remote / On-site
            </h4>
            <ul style={{ listStyleType: "disc", paddingLeft: "20px", fontSize: "0.9em", color: "#94a3b8", textAlign: "left" }}>
              <li style={{ marginBottom: "8px" }}><strong>Sales Dashboards:</strong> Designed internal Python pipelines and Power BI charts for retail clients to visualize their revenue.</li>
              <li style={{ marginBottom: "8px" }}><strong>Electronics Marketplace:</strong> Built a custom MERN platform featuring specialized tools for sellers to manage their store listings.</li>
              <li style={{ marginBottom: "8px" }}><strong>Digital Visiting Cards:</strong> Created an NFC-integrated portal for franchise owners to update their digital profiles on the fly.</li>
              <li><strong>Mehendi Booking:</strong> Built a calendar scheduling app in React Native integrated directly with Razorpay checkouts.</li>
            </ul>
          </VerticalTimelineElement>

          {/* Technical Trainer */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgba(23, 25, 35, 0.65)", color: "#fff", border: "1px solid rgba(255, 255, 255, 0.08)", boxShadow: "0 10px 30px rgba(0,0,0,0.3)" }}
            contentArrowStyle={{ borderRight: "7px solid  rgba(23, 25, 35, 0.65)" }}
            date="Jun 2021 - Dec 2023"
            iconStyle={{ background: "#818cf8", color: "#fff" }}
            icon={<MdWork />}
          >
            <h3 className="vertical-timeline-element-title purple">
              Technical Trainer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Disha Computer, Nagpur
            </h4>
            <ul style={{ listStyleType: "disc", paddingLeft: "20px", fontSize: "0.9em", color: "#94a3b8", textAlign: "left" }}>
              <li style={{ marginBottom: "8px" }}>Taught Python, Java, and MERN stack development to university students and career switchers.</li>
              <li style={{ marginBottom: "8px" }}>Hosted 1-on-1 coaching sessions focused on Data Structures and Algorithms for technical interview prep.</li>
              <li>Put together practical coding assignments to help students actually understand OOP concepts instead of just memorizing them.</li>
            </ul>
          </VerticalTimelineElement>

          {/* Education - MCA */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            iconStyle={{ background: "#6366f1", color: "#fff" }}
            icon={<MdSchool />}
            date="2022 - 2024"
          >
            <h3 className="vertical-timeline-element-title purple">
              Master of Computer Applications (MCA)
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              RTM Nagpur University
            </h4>
            <p>CGPA: 8.7 / 10</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </Col>
    </Row>
  );
}

export default Experience;
