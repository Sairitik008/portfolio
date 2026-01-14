import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row className="align-items-center">
          {/* About Text */}
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>

            <p className="home-about-body">
              I’m a <b className="purple">Java Backend & Integration Developer</b>{" "}
              with hands-on experience in building and integrating scalable
              systems across web and service-based platforms.
              <br />
              <br />
              I primarily work with
              <i>
                <b className="purple">
                  {" "}
                  Java, Spring Boot, REST APIs, Node.js, and MongoDB/MySQL{" "}
                </b>
              </i>
              , focusing on clean architecture, performance, and reliable data
              flow.
              <br />
              <br />
              I have practical experience integrating
              <i>
                <b className="purple">
                  {" "}
                  third-party APIs, payment gateways, and service-based
                  components
                </b>
              </i>
              , and I enjoy understanding how different systems communicate and
              scale together.
              <br />
              <br />
              Along with backend development, I also build user interfaces using
              modern frontend tools like
              <i>
                <b className="purple"> React.js </b>
              </i>
              , enabling me to contribute across the full stack when required.
            </p>
          </Col>

          {/* Avatar */}
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="Developer avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
