import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: "#0a0c10", padding: "80px 0 40px", color: "#94a3b8", borderTop: "1px solid rgba(255, 255, 255, 0.05)", boxShadow: "0 -4px 20px rgba(0,0,0,0.4)" }}>
      <Container>
        <Row className="mb-5">
          {/* Main Brand Column (Widest) */}
          <Col md={6} className="mb-4 mb-md-0 text-start">
            <h3 style={{ color: "#f8fafc", fontWeight: "600", marginBottom: "12px", fontSize: "1.8rem" }}>
              Sairitik Naidu
            </h3>
            <p style={{ maxWidth: "400px", lineHeight: "1.6", fontSize: "1rem", margin: 0 }}>
              Full-stack developer building scalable web applications and technical solutions.
            </p>
          </Col>

          {/* Navigation Column */}
          <Col md={3} className="mb-4 mb-md-0 text-start">
            <h6 style={{ color: "#94a3b8", fontSize: "0.85rem", fontWeight: "600", letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: "20px" }}>
              Navigation
            </h6>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li style={{ marginBottom: "12px" }}><a href="/" style={{ color: "#94a3b8", textDecoration: "none", transition: "color 0.2s" }} onMouseOver={e => e.target.style.color = '#f8fafc'} onMouseOut={e => e.target.style.color = '#94a3b8'}>Home</a></li>
              <li style={{ marginBottom: "12px" }}><a href="/about" style={{ color: "#94a3b8", textDecoration: "none", transition: "color 0.2s" }} onMouseOver={e => e.target.style.color = '#f8fafc'} onMouseOut={e => e.target.style.color = '#94a3b8'}>About</a></li>
              <li style={{ marginBottom: "12px" }}><a href="/project" style={{ color: "#94a3b8", textDecoration: "none", transition: "color 0.2s" }} onMouseOver={e => e.target.style.color = '#f8fafc'} onMouseOut={e => e.target.style.color = '#94a3b8'}>Projects</a></li>
              <li style={{ marginBottom: "12px" }}><a href="/resume" style={{ color: "#94a3b8", textDecoration: "none", transition: "color 0.2s" }} onMouseOver={e => e.target.style.color = '#f8fafc'} onMouseOut={e => e.target.style.color = '#94a3b8'}>Resume</a></li>
            </ul>
          </Col>

          {/* Contact Column */}
          <Col md={3} className="text-start">
            <h6 style={{ color: "#94a3b8", fontSize: "0.85rem", fontWeight: "600", letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: "20px" }}>
              Contact
            </h6>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li style={{ marginBottom: "12px", display: "flex", alignItems: "center" }}>
                <AiOutlineMail style={{ fontSize: "18px", marginRight: "10px" }} />
                <a href="mailto:sairitiknaidu7@gmail.com" style={{ color: "#94a3b8", textDecoration: "none", transition: "color 0.2s" }} onMouseOver={e => e.target.style.color = '#f8fafc'} onMouseOut={e => e.target.style.color = '#94a3b8'}>
                  Email
                </a>
              </li>
              <li style={{ marginBottom: "12px", display: "flex", alignItems: "center" }}>
                <FaGithub style={{ fontSize: "18px", marginRight: "10px" }} />
                <a href="https://github.com/Sairitik008" target="_blank" rel="noreferrer" style={{ color: "#94a3b8", textDecoration: "none", transition: "color 0.2s" }} onMouseOver={e => e.target.style.color = '#f8fafc'} onMouseOut={e => e.target.style.color = '#94a3b8'}>
                  GitHub
                </a>
              </li>
              <li style={{ marginBottom: "12px", display: "flex", alignItems: "center" }}>
                <FaLinkedinIn style={{ fontSize: "18px", marginRight: "10px" }} />
                <a href="https://www.linkedin.com/in/sairitiknaidu/" target="_blank" rel="noreferrer" style={{ color: "#94a3b8", textDecoration: "none", transition: "color 0.2s" }} onMouseOver={e => e.target.style.color = '#f8fafc'} onMouseOut={e => e.target.style.color = '#94a3b8'}>
                  LinkedIn
                </a>
              </li>
            </ul>
          </Col>
        </Row>

        {/* Bottom Bar */}
        <div style={{ borderTop: "1px solid rgba(255, 255, 255, 0.1)", paddingTop: "25px" }}>
          <Row>
            <Col md={6} className="text-start mb-2 mb-md-0">
              <p style={{ margin: 0, fontSize: "0.9rem", color: "#64748b" }}>
                &copy; {year} Sairitik Naidu. All rights reserved.
              </p>
            </Col>
            <Col md={6} className="text-start text-md-end">
              <p style={{ margin: 0, fontSize: "0.9rem", color: "#64748b" }}>
                Designed &amp; developed by Sairitik Naidu
              </p>
            </Col>
          </Row>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
