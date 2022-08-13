import { React, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./About.css";

const About = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <>
      <Container fluid="md">
        <Row>
          <Col lg={6} md={12} sm={8}>
            <p className="about">
              The NFT Hacks, 24 Hours Online Hackathon is the perfect
              opportunity for you to flex your creative muscles and build an NFT
              based on one of several different themes. With a little time and
              effort, you could create an NFT that is truly unique and reflects
              your own personal style.
              <span className="ques"> So what are you waiting for?</span> Get
              hacking!
            </p>
          </Col>
          <Col lg={6} md={0} sm={0}>
            <img src="logo.png" alt="LOGO NFT" className="logo"></img>
          </Col>
        </Row>
        <Row>
          <Col className="center">
            <div
              class="apply-button"
              data-hackathon-slug="nfthacks"
              data-button-theme="light"
              style={{height: "44px", width: "312px"}}
            ></div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
