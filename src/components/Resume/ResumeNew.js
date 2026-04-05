import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Experience from "../About/Experience";
import { AiOutlineDownload } from "react-icons/ai";

// Local PDF from /public folder — used for in-page preview
const LOCAL_PDF = "/Sairitik_Naidu_Resume.pdf";

// Google Drive — used for download button
const DRIVE_DOWNLOAD_URL =
  "https://drive.google.com/uc?export=download&id=1zXVTQ9gFQGITzTngXDSk9ibghEoV8Y_E";

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />

        {/* ── Section 1: Professional Roadmap ── */}
        <Container>
          <Row className="justify-content-center" style={{ position: "relative" }}>
            <Col md={12} className="text-center">
              <h1 className="project-heading">
                Professional <strong className="purple">Roadmap</strong>
              </h1>
              <p className="resume-tagline">
                A timeline of my journey in Full-Stack development and Technical Training.
              </p>
            </Col>
          </Row>

          <Experience />
        </Container>

        {/* ── Section 2: Formal Document Preview ── */}
        <Container>
          <Row className="justify-content-center" style={{ position: "relative", paddingTop: "30px" }}>
             <Col md={12} className="text-center">
              <h1 className="project-heading">
                Formal <strong className="purple">Resume</strong>
              </h1>
            </Col>
          </Row>

          <Row style={{ justifyContent: "center", position: "relative", padding: "20px 0" }}>
            <Button
              variant="primary"
              href={DRIVE_DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{ maxWidth: "250px" }}
            >
              <AiOutlineDownload />
              &nbsp;Download Latest CV
            </Button>
          </Row>

          <Row className="resume-preview-row">
            <div className="resume-iframe-wrapper">
              <iframe
                src={LOCAL_PDF}
                title="Sairitik Naidu - Resume Preview"
                className="resume-iframe"
              />
            </div>
          </Row>

          <Row style={{ justifyContent: "center", position: "relative", padding: "40px 0" }}>
            <Button
              variant="primary"
              href={DRIVE_DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{ maxWidth: "250px" }}
            >
              <AiOutlineDownload />
              &nbsp;Download Latest CV
            </Button>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default ResumeNew;
