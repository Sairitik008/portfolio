import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";

import "react-pdf/dist/esm/Page/AnnotationLayer.css";

/* ✅ PUBLIC resume path (file must be inside /public) */
const pdfUrl = "/Sairitik_Naidu_Resume.pdf";

/* PDF worker */
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(window.innerWidth);

  /* Handle responsive resize */
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* Responsive scaling */
  const scale = width > 992 ? 1.7 : width > 768 ? 1.2 : 0.6;

  /* ✅ BULLETPROOF DOWNLOAD HANDLER */
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Sairitik_Naidu_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Container fluid className="resume-section">
      {/* Particles must NOT block clicks */}
      <Particle />

      {/* Download Button (Top) */}
      <Row className="justify-content-center mb-4">
        <Button
          variant="primary"
          onClick={handleDownload}
          style={{ maxWidth: "250px" }}
          aria-label="Download Resume"
        >
          <AiOutlineDownload />
          &nbsp; Download Resume
        </Button>
      </Row>

      {/* Resume Preview */}
      <Row className="resume justify-content-center">
        <Document
          file={pdfUrl}
          loading="Loading resume..."
          className="d-flex justify-content-center"
        >
          <Page pageNumber={1} scale={scale} />
        </Document>
      </Row>

      {/* Download Button (Bottom) */}
      <Row className="justify-content-center mt-4">
        <Button
          variant="primary"
          onClick={handleDownload}
          style={{ maxWidth: "250px" }}
          aria-label="Download Resume"
        >
          <AiOutlineDownload />
          &nbsp; Download Resume
        </Button>
      </Row>
    </Container>
  );
}

export default ResumeNew;
