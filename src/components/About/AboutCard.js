import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi! I'm <span className="purple">Sairitik Naidu</span>, a{" "}
            <span className="purple">Backend-Focused Full-Stack Developer</span>{" "}
            based in <span className="purple">Nagpur, Maharashtra</span>.
            <br />
            <br />
            I'm currently working as an{" "}
            <span className="purple">Integration Developer</span> at{" "}
            <span className="purple">Cluematrix Technologies Pvt. Ltd.</span>,
            where I build production-grade REST APIs, microservices, and mobile
            apps across EdTech, FinTech, GovTech, and consumer platforms.
            <br />
            <br />
            I hold a{" "}
            <span className="purple">
              Master of Computer Applications (MCA)
            </span>{" "}
            from RTM Nagpur University (CGPA: 8.7/10) with{" "}
            <span className="purple">1.5 years of industry experience</span>. 
            Throughout my career, I've balanced corporate excellence with a passion for{" "}
            <span className="purple">
              Independent Freelance Development
            </span>{" "}
            and serving as a{" "}
            <span className="purple">1:1 Technical Mentor</span> for the developer community.
            <br />
            <br />
            Outside of coding, I enjoy:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Solving LeetCode problems (Medium/Hard DSA)
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring system design and distributed systems
            </li>
            <li className="about-activity">
              <ImPointRight /> Teaching and mentoring aspiring developers
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Build systems that are simple, scalable, and reliable."
          </p>
          <footer className="blockquote-footer">Sairitik Naidu</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
