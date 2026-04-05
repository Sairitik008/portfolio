import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-pro">
      <Container>
        <Row className="footer-top align-items-center">
          {/* Brand */}
          <Col md={4} className="footer-brand-col">
            <div className="footer-brand">
              <span className="brand-first">S</span>airitik
              <span className="brand-dot"> · </span>
              <span className="brand-role">Dev</span>
            </div>
            <p className="footer-tagline">
              Building scalable systems, one commit at a time.
            </p>
          </Col>

          {/* Quick Links */}
          <Col md={4} className="footer-links-col text-center">
            <h6 className="footer-section-title">Quick Links</h6>
            <ul className="footer-links-list">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/project">Projects</a></li>
              <li><a href="/resume">Resume</a></li>
            </ul>
          </Col>

          {/* Contact */}
          <Col md={4} className="footer-contact-col text-center text-md-end">
            <h6 className="footer-section-title">Get In Touch</h6>
            <a
              href="mailto:sairitiknaidu7@gmail.com"
              className="footer-email"
            >
              <HiMail /> sairitiknaidu7@gmail.com
            </a>
            <div className="footer-social-row">
              <a
                href="https://github.com/Sairitik008"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="footer-social-icon"
              >
                <AiFillGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/sairitiknaidu/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="footer-social-icon"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </Col>
        </Row>

        <div className="footer-divider" />

        {/* Bottom Bar */}
        <Row className="footer-bottom align-items-center">
          <Col md={6} className="text-center text-md-start">
            <p className="footer-copy">
              © {year} Sairitik Naidu. All Rights Reserved.
            </p>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <p className="footer-copy">
              Designed &amp; Developed by{" "}
              <span className="purple">Sairitik Naidu</span>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
