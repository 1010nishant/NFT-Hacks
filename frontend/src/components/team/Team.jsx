import React from "react";
import "./TeamItem.css";
import { Container, Row, Col } from "react-bootstrap";
import teamdata from "../../teamdata";
import TeamItem from "./TeamItem";

const Team = () => {
  return (
    <>
      <Container className="head" id="team">
        <h1 className="text-primary text-center display-2">Our Team</h1>
        <Row justifycontent="center" alignitems="center">
          {teamdata.map((td) => (
            <Col
              justifycontent="center"
              alignitems="center"
              sm={12}
              lg={4}
              md={6}
              key={td._id}
            >
              <TeamItem teamdata={td} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Team;
