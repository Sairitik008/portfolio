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
      {/* ── Hero Section ── */}
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row className="align-items-center">

            {/* Left Content */}
            <Col md={7} className="home-header">
              <div className="home-greeting">
                <span className="wave" role="img" aria-label="wave">👋🏻</span>
                &nbsp; Hello, World!
              </div>

              <h1 className="heading-name">
                I'm <strong className="main-name">Sairitik Naidu</strong>
              </h1>

              <div className="type-wrapper">
                <Type />
              </div>

              <p className="hero-tagline">
                Building scalable backends, seamless APIs &amp; full-stack
                experiences — from Nagpur to the cloud ☁️
              </p>



            </Col>

            {/* Right Illustration */}
            <Col md={5} className="text-center hero-img-col">
              <div className="hero-img-wrapper">
                <img
                  src={homeLogo}
                  alt="Developer illustration"
                  className="img-fluid hero-illustration"
                />
              </div>
            </Col>
          </Row>


        </Container>
      </Container>

      {/* About Preview Section */}
      <Home2 />

      {/* Connect Section */}
      <Container>
        <Row style={{ paddingTop: "40px", paddingBottom: "80px" }}>
          <Col md={12} className="home-about-social text-center">
            <h1>Let's <span className="purple">Connect</span></h1>
            <p>
              Open to opportunities in{" "}
              <span className="purple">Full-Stack &amp; Backend Development</span>
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
