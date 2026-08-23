import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import myImg from "../../Assets/avatar.svg";
import myImg from "../../Assets/profile-pic.png";
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
              I'm a{" "}
              <b className="purple">Full-Stack Developer</b>{" "}
              with a focus on backend architecture. Over the past 1.5 years, I've built
              REST APIs, microservices, and mobile applications that are currently running in production.
              <br />
              <br />
              My core stack includes
              <i>
                <b className="purple">
                  {" "}
                  Node.js, Express.js, React.js, React Native, MongoDB, and MySQL{" "}
                </b>
              </i>
              — focused on clean architecture, reliable API contracts, and real-world deployment.
              <br />
              <br />
              I've shipped systems for
              <i>
                <b className="purple">
                  {" "}
                  EdTech, FinTech, GovTech, and retail apps
                </b>
              </i>
              , handling everything from payment gateway integrations to setting up cloud infrastructure on{" "}
              <b className="purple">AWS (EC2 & S3)</b>.
              <br />
              <br />
              Beyond corporate roles, I am an active{" "}
              <b className="purple">Freelance Developer</b> solving B2B challenges and a dedicated{" "}
              <b className="purple">Technical Mentor</b> on Topmate, helping 100+ students and professionals master modern tech stacks.
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
