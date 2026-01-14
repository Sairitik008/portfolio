import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi! I’m <span className="purple">Sairitik Naidu</span>, a{" "}
            <span className="purple">Java Backend & Integration Developer</span>{" "}
            based in <span className="purple">Nagpur, Maharashtra</span>.
            <br />
            <br />
            I am currently working as an{" "}
            <span className="purple">Integration Developer</span> at{" "}
            <span className="purple">
              Cluematrix Technologies Pvt. Ltd.
            </span>
            , where I work on backend systems, REST API integrations, payment
            gateways, and service-based architectures.
            <br />
            <br />
            I hold a{" "}
            <span className="purple">Master of Computer Applications (MCA)</span>{" "}
            degree and have hands-on experience with{" "}
            <span className="purple">
              Java, Spring Boot, REST APIs, Node.js, React.js, and databases
            </span>
            .
            <br />
            <br />
            Apart from development, I enjoy:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Solving real-world technical problems
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning new backend & system design concepts
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring modern web technologies
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            “Build systems that are simple, scalable, and reliable.”
          </p>
          <footer className="blockquote-footer">Sairitik Naidu</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
