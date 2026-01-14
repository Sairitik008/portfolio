import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

/* Using existing images as requested */
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import editor from "../../Assets/Projects/codeEditor.png";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import suicide from "../../Assets/Projects/suicide.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading text-center">
          My <strong className="purple">Projects</strong>
        </h1>

        <p className="text-center text-light mb-5">
          Selected real-world projects demonstrating my experience in backend,
          full-stack development, and system design.
        </p>

        <Row className="g-4 justify-content-center">
          {/* 1. E-Commerce */}
          <Col md={4} sm={6} className="d-flex">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="E-Commerce Platform"
              description="A full-stack e-commerce application featuring product listings, cart management, secure authentication, and order processing. Built with a scalable backend and a responsive frontend for real-world business use."
              ghLink="https://github.com/Sairitik008"
            />
          </Col>

          {/* 2. Twitter Clone – Django */}
          <Col md={4} sm={6} className="d-flex">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Twitter Clone (Django)"
              description="A social media platform inspired by Twitter, developed using Django. Includes user authentication, tweet creation, likes, follows, and a timeline feed with server-side rendering and REST APIs."
              ghLink="https://github.com/Sairitik008"
            />
          </Col>

          {/* 3. LMS – Spring Boot */}
          <Col md={4} sm={6} className="d-flex">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Learning Management System (Spring Boot)"
              description="A backend-driven LMS built with Java Spring Boot. Supports user roles, course management, enrollments, and RESTful APIs with secure authentication and database integration."
              ghLink="https://github.com/Sairitik008"
            />
          </Col>

          {/* 4. Fitness Website */}
          <Col md={4} sm={6} className="d-flex">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Turo Fitness – Landing Page"
              description="A modern and responsive fitness website landing page built using React. Focused on clean UI, performance optimization, and conversion-driven design."
              ghLink="https://github.com/Sairitik008"
            />
          </Col>

          {/* 5. AI Website */}
          <Col md={4} sm={6} className="d-flex">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="AI Product Landing Website"
              description="A professional landing website for an AI-based product. Designed to showcase features, use cases, and value proposition with a clean frontend architecture."
              ghLink="https://github.com/Sairitik008"
            />
          </Col>

          {/* 6. Solar Panel – MERN */}
          <Col md={4} sm={6} className="d-flex">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Solar Panel Installation Platform (MERN)"
              description="A MERN-stack web application for a solar installation company. Includes service listings, inquiry management, admin dashboard, and scalable backend APIs."
              ghLink="https://github.com/Sairitik008"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
