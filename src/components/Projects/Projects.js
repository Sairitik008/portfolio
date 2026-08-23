import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Button from "react-bootstrap/Button";
import { HiOutlineLightBulb } from "react-icons/hi";

/* Improved, meaningful image naming */
import ecommerce from "../../Assets/Projects/ecommerce_mockup.png";
import twitter from "../../Assets/Projects/twitter_clone_mockup.png";
import lms from "../../Assets/Projects/lms_mockup.png";
import fitness from "../../Assets/Projects/fitness_mockup.png";
import ai from "../../Assets/Projects/ai_landing_mockup.png";
import solar from "../../Assets/Projects/solar_panel_mockup.png";
import sauji from "../../Assets/Projects/sauji.png";
import retailer from "../../Assets/Projects/retailer_mockup.png";
import saloon from "../../Assets/Projects/saloon_mockup.png";
import deloitte from "../../Assets/Projects/deloitte_dashboard_mockup.png";

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
          Here are a few applications and tools I've built recently.
        </p>

        <Row className="g-4 justify-content-center">
          {/* 1. E-Commerce */}
          <Col md={4} sm={6} className="d-flex">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="E-Commerce Platform"
              description="A custom e-commerce storefront I built from scratch to handle product catalogs, shopping carts, and secure checkout. I focused on ensuring the backend API and database could handle concurrent traffic smoothly."
              ghLink="https://github.com/Sairitik008/E-commerce-Web-App"
            />
          </Col>

          {/* 2. Twitter Clone – Django */}
          <Col md={4} sm={6} className="d-flex">
            <ProjectCard
              imgPath={twitter}
              isBlog={false}
              title="Twitter Clone (Django)"
              description="A social media feed application I developed in Django. It replicates core Twitter features like user authentication, creating posts, and following other users, all connected to a RESTful backend."
              ghLink="https://github.com/Sairitik008/resolveiq"
            />
          </Col>

          {/* 3. LMS – Spring Boot */}
          <Col md={4} sm={6} className="d-flex">
            <ProjectCard
              imgPath={lms}
              isBlog={false}
              title="Learning Management System"
              description="A backend-focused learning management platform created with Java and Spring Boot. It manages student enrollments, course data, and secure role-based access for instructors."
              ghLink="https://github.com/Sairitik008/LMS-cloud-sai"
            />
          </Col>

          {/* 4. Fitness Website */}
          <Col md={4} sm={6} className="d-flex">
            <ProjectCard
              imgPath={fitness}
              isBlog={false}
              title="Turo Fitness"
              description="A responsive landing page I designed for a local fitness brand. I used React to create a fast, engaging UI that looks great on mobile phones as well as large desktop monitors."
              ghLink="https://github.com/Sairitik008/Turo-fitness-website"
            />
          </Col>

          {/* 5. AI Website */}
          <Col md={4} sm={6} className="d-flex">
            <ProjectCard
              imgPath={ai}
              isBlog={false}
              title="AI Landing Page"
              description="A concept landing page for a futuristic AI tool. I experimented with modern web design trends like dark mode and subtle visual animations to make the features stand out."
              ghLink="https://github.com/Sairitik008/AI-production-landing-page"
            />
          </Col>

          {/* 6. Solar Panel – MERN */}
          <Col md={4} sm={6} className="d-flex">
            <ProjectCard
              imgPath={solar}
              isBlog={false}
              title="Solar Panel Platform"
              description="A web portal I built for a solar installation company using the MERN stack. It handles customer inquiries, service tracking, and gives the team a clean dashboard to manage operations."
              ghLink="https://github.com/Sairitik008/solarpix-master"
            />
          </Col>

          {/* 7. Saloon Booking */}
          <Col md={4} sm={6} className="d-flex">
            <ProjectCard
              imgPath={saloon}
              isBlog={false}
              title="Glow Beauty Salon"
              description="A modern frontend landing page I built for a beauty salon using React, Vite, and Tailwind CSS. It features a fully responsive layout, optimized SEO tags, and a modular component structure."
              ghLink="https://github.com/Sairitik008/saloon-landing-page"
              demoLink="https://saloon-eight-taupe.vercel.app/"
            />
          </Col>

          {/* 8. Deloitte Analytics Dashboard */}
          <Col md={4} sm={6} className="d-flex">
            <ProjectCard
              imgPath={deloitte}
              isBlog={false}
              title="Deloitte Sales Analytics"
              description="A complex B2B sales forecasting data dashboard. I developed this to visualize extensive pipeline metrics and revenue projections, turning raw data into actionable insights for stakeholders."
              ghLink="https://github.com/Sairitik008/deloitte-sales-forecasting-analytics"
            />
          </Col>
        </Row>

        {/* ── Section 2: Industry & Independent Deliverables ── */}
        <h1 className="project-heading text-center pt-5 mt-5">
          Industry & <strong className="purple">Independent</strong> Work
        </h1>
        <p className="text-center text-light mb-5">
          Professional contract deliverables and freelance projects.
        </p>

        <Row className="g-4 justify-content-center">
          {/* PROFESSIONAL Sauji */}
          <Col md={4} sm={6} className="d-flex">
            <ProjectCard
              imgPath={sauji}
              isBlog={false}
              title="Sauji (Food Delivery)"
              description="[🔒 Confidential] A MERN-stack food delivery platform I contributed to. I worked on order lifecycle management, real-time tracking endpoints, and an admin dashboard for restaurant owners."
            />
          </Col>

          {/* PROFESSIONAL Solarpix Node */}
          <Col md={4} sm={6} className="d-flex">
            <ProjectCard
              imgPath={solar}
              isBlog={false}
              title="Solarpix API Engine"
              description="[🔒 Confidential] A Node.js backend for a solar energy service. I implemented device telemetry ingestion, automated alert thresholds, and the client reporting API."
            />
          </Col>

          {/* FREELANCE Retailer Platform */}
          <Col md={4} sm={6} className="d-flex">
            <ProjectCard
              imgPath={retailer}
              isBlog={false}
              title="Retailer Marketplace"
              description="A freelance MERN-stack marketplace I built for electronics vendors. I focused on seller onboarding flows, search functionality, and optimizing the listing pages."
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
