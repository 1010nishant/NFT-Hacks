import React from "react";
import "./logo.css";
import { Container, Row, Col } from "react-bootstrap";
import Logo from "../sponsors/Logo";
import { platinumsponsors, goldsponsors } from "../../sponsors";

const Sponsors = () => {
  return (
    <>
      <Container id="sponsor">
        <h1 className="text-primary text-center display-2  shead">
          Our Platinum Sponsors
        </h1>

        <Row justifycontent="center" alignitems="center">
          {platinumsponsors.map((ps) => (
            <Col
              justifycontent="center"
              alignitems="center"
              sm={12}
              lg={4}
              md={6}
              key={ps._id}
            >
              {" "}
              <Logo sponsor={ps} />{" "}
            </Col>
          ))}
        </Row>

        <h1 className="text-primary text-center display-2 shead">
          Our Gold Sponsors
        </h1>

        <Row justifycontent="center" alignitems="center">
          {goldsponsors.map((gs) => (
            <Col
              justifycontent="center"
              alignitems="center"
              sm={12}
              lg={4}
              md={6}
              key={gs._id}
            >
              {" "}
              <Logo sponsor={gs} />{" "}
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Sponsors;
