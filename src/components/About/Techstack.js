import React from "react";
import { Col, Row } from "react-bootstrap";

import Javascript from "../../Assets/TechIcons/Javascript.svg";
import Node from "../../Assets/TechIcons/Node.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import Python from "../../Assets/TechIcons/Python.svg";
import Java from "../../Assets/TechIcons/Java.svg";
import Mongo from "../../Assets/TechIcons/Mongo.svg";
import Postgresql from "../../Assets/TechIcons/Postgresql.svg";
import AWS from "../../Assets/TechIcons/AWS.svg";
import Docker from "../../Assets/TechIcons/Docker.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import Postman from "../../Assets/TechIcons/Postman.svg";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Primary Languages */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={Javascript} alt="JavaScript" className="tech-icon-images" />
        <div className="tech-icons-text">JavaScript</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Python} alt="Python" className="tech-icon-images" />
        <div className="tech-icons-text">Python</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Java} alt="Java" className="tech-icon-images" />
        <div className="tech-icons-text">Java</div>
      </Col>

      {/* Frontend */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={ReactIcon} alt="React.js" className="tech-icon-images" />
        <div className="tech-icons-text">React.js</div>
      </Col>

      {/* Backend */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={Node} alt="Node.js" className="tech-icon-images" />
        <div className="tech-icons-text">Node.js</div>
      </Col>

      {/* Databases */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={Mongo} alt="MongoDB" className="tech-icon-images" />
        <div className="tech-icons-text">MongoDB</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Postgresql} alt="PostgreSQL" className="tech-icon-images" />
        <div className="tech-icons-text">PostgreSQL</div>
      </Col>

      {/* Cloud & DevOps */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={AWS} alt="AWS" className="tech-icon-images" />
        <div className="tech-icons-text">AWS</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Docker} alt="Docker" className="tech-icon-images" />
        <div className="tech-icons-text">Docker</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Git} alt="Git" className="tech-icon-images" />
        <div className="tech-icons-text">Git</div>
      </Col>

      {/* Tools */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={Postman} alt="Postman" className="tech-icon-images" />
        <div className="tech-icons-text">Postman</div>
      </Col>
    </Row>
  );
}

export default Techstack;
