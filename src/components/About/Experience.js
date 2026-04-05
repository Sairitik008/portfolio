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
            <p style={{ fontSize: "0.9em", color: "#94a3b8" }}>
              • Architected and deployed RESTful API integrations for an EdTech platform, significantly reducing manual data sync effort.<br />
              • Built Node.js backend for Solarpix (Solar energy management) with modular service layers for real-time reporting.<br />
              • Developed MERN-stack admin panel and React Native app for Turo Fitness platform.<br />
              • Delivered food delivery app (Sauji) end-to-end using MERN stack.<br />
              • Integrated GovTech workflows (Grampanchayat platform) using PHP and MySQL.
            </p>
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
            <p style={{ fontSize: "0.9em", color: "#94a3b8" }}>
              • Sales Forecasting Dashboards**: Real-time retail analytics with Python data pipelines and Power BI visualization.<br />
              • Electronics Marketplace**: Full MERN-stack platform with seller onboarding and SEO-optimized listings.<br />
              • Digital Visiting Card Platform**: NFC/QR-linked business cards with dynamic branding for multi-franchise owners.<br />
              • Mehendi Booking App**: React Native app with calendar scheduling and Razorpay payment integration.
            </p>
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
            <p style={{ fontSize: "0.9em", color: "#94a3b8" }}>
              • Delivered curricula for Python, Java, MERN Stack, and Data Analytics to students and professionals.<br />
              • Conducted coaching for DSA problem-solving and interview preparation.<br />
              • Built reusable coding exercises deepening knowledge in OOP and algorithms.
            </p>
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
