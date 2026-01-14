import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home() {
  return (
    <section>
      {/* Hero Section */}
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row className="align-items-center">
            {/* Left Content */}
            <Col md={7} className="home-header">
              <h1 className="heading">
                Hi There{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I&apos;m
                <strong className="main-name"> Sairitik Naidu</strong>
              </h1>

              <div style={{ paddingTop: 40, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            {/* Right Illustration */}
            <Col md={5} className="text-center">
              <img
                src={homeLogo}
                alt="developer illustration"
                className="img-fluid"
                style={{ maxHeight: "420px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>

      {/* About Preview Section */}
      <Home2 />

      {/* Social Links */}
      <Container>
        <Row style={{ paddingTop: "40px", paddingBottom: "80px" }}>
          <Col md={12} className="home-about-social text-center">
            <h1>Let’s Connect</h1>
            <p>
              Open to opportunities in{" "}
              <span className="purple">Backend & Full-Stack Development</span>
            </p>

            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Sairitik008"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="GitHub"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sairitiknaidu/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;
