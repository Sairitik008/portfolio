import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Button from "react-bootstrap/Button";
import { HiOutlineLightBulb } from "react-icons/hi";

/* Improved, meaningful image naming */
import ecommerce from "../../Assets/Projects/chatify.png";
import twitter from "../../Assets/Projects/blog.png";
import lms from "../../Assets/Projects/codeEditor.png";
import fitness from "../../Assets/Projects/leaf.png";
import ai from "../../Assets/Projects/emotion.png";
import solar from "../../Assets/Projects/suicide.png";
import sauji from "../../Assets/Projects/sauji.png";
import mehendi from "../../Assets/Projects/banner.png";
import retailer from "../../Assets/Projects/marketplace.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        {/* ── Section 1: Core Projects (Restored) ── */}
        <h1 className="project-heading text-center">
          My <strong className="purple">Projects</strong>
        </h1>
        <p className="text-center text-light mb-5">
          Selected real-world projects highlighting my expertise in full-stack and backend development.
        </p>

        <Row className="g-4 justify-content-center">
          {/* 1. E-Commerce */}
          <Col md={4} sm={6} className="d-flex">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="E-Commerce Platform"
              description="A full-stack e-commerce application featuring product listings, cart management, secure authentication, and order processing. Built with a scalable backend and a responsive frontend for real-world business use."
              ghLink="https://github.com/Sairitik008/E-commerce-Web-App"
            />
          </Col>

          {/* 2. Twitter Clone – Django */}
          <Col md={4} sm={6} className="d-flex">
            <ProjectCard
              imgPath={twitter}
              isBlog={false}
              title="Twitter Clone (Django)"
              description="A social media platform inspired by Twitter, developed using Django. Includes user authentication, tweet creation, likes, follows, and a timeline feed with server-side rendering and REST APIs."
              ghLink="https://github.com/Sairitik008/resolveiq"
            />
          </Col>

          {/* 3. LMS – Spring Boot */}
          <Col md={4} sm={6} className="d-flex">
            <ProjectCard
              imgPath={lms}
              isBlog={false}
              title="Learning Management System (Spring Boot)"
              description="A backend-driven LMS built with Java Spring Boot. Supports user roles, course management, enrollments, and RESTful APIs with secure authentication and database integration."
              ghLink="https://github.com/Sairitik008/LMS-cloud-sai"
            />
          </Col>

          {/* 4. Fitness Website */}
          <Col md={4} sm={6} className="d-flex">
            <ProjectCard
              imgPath={fitness}
              isBlog={false}
              title="Turo Fitness – Landing Page"
              description="A modern and responsive fitness website landing page built using React. Focused on clean UI, performance optimization, and conversion-driven design."
              ghLink="https://github.com/Sairitik008/Turo-fitness-website"
            />
          </Col>

          {/* 5. AI Website */}
          <Col md={4} sm={6} className="d-flex">
            <ProjectCard
              imgPath={ai}
              isBlog={false}
              title="AI Product Landing Website"
              description="A professional landing website for an AI-based product. Designed to showcase features, use cases, and value proposition with a clean frontend architecture."
              ghLink="https://github.com/Sairitik008/AI-production-landing-page"
            />
          </Col>

          {/* 6. Solar Panel – MERN */}
          <Col md={4} sm={6} className="d-flex">
            <ProjectCard
              imgPath={solar}
              isBlog={false}
              title="Solar Panel Installation Platform (MERN)"
              description="A MERN-stack web application for a solar installation company. Includes service listings, inquiry management, admin dashboard, and scalable backend APIs."
              ghLink="https://github.com/Sairitik008/solarpix-master"
            />
          </Col>
        </Row>

        {/* ── Section 2: Industry & Independent Deliverables ── */}
        <h1 className="project-heading text-center pt-5 mt-5">
          Industry & <strong className="purple">Independent</strong> Work
        </h1>
        <p className="text-center text-light mb-5">
          Professional deliverables and custom freelance solutions.
        </p>

        <Row className="g-4 justify-content-center">
          {/* PROFESSIONAL Sauji */}
          <Col md={4} sm={6} className="d-flex">
            <ProjectCard
              imgPath={sauji}
              isBlog={false}
              title="Sauji (Food Delivery)"
              description="[🔒 Confidential Industry Project] MERN-stack food delivery platform: order lifecycle management, real-time tracking endpoints, and restaurant admin dashboard."
            />
          </Col>

          {/* PROFESSIONAL Solarpix Node */}
          <Col md={4} sm={6} className="d-flex">
            <ProjectCard
              imgPath={solar}
              isBlog={false}
              title="Solarpix (Node SaaS)"
              description="[🔒 Confidential Industry Project] Node.js backend for solar energy SaaS; device telemetry ingestion, alert thresholds, and client reporting API."
            />
          </Col>

          {/* FREELANCE Retailer Platform */}
          <Col md={4} sm={6} className="d-flex">
            <ProjectCard
              imgPath={retailer}
              isBlog={false}
              title="Retailer Platform (Marketplace)"
              description="Full MERN-stack marketplace for electronics with specialized seller onboarding, SEO-optimized listing pages, and advanced product search."
              ghLink="https://github.com/Sairitik008/E-commerce-Web-App"
            />
          </Col>
        </Row>

        {/* ── Freelance CTA Banner ── */}
        <Row className="freelance-cta-row">
          <Col md={12} className="text-center">
            <div className="freelance-cta-card">
              <h3>Looking for a <span className="purple">Professional Partner</span> for your next project?</h3>
              <p>I'm available for freelance opportunities, API architecture, and mentoring.</p>
              <Button
                variant="primary"
                href="https://topmate.io/sairitik_naidu10/"
                target="_blank"
                style={{ maxWidth: "250px", marginTop: "15px" }}
              >
                <HiOutlineLightBulb /> &nbsp;Hire/Consult Now
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
