import React from "react";
import "./TeamItem.css";
import { Container, Row, Col } from "react-bootstrap";
import teamdata from "../../teamdata";
import TeamItem from "./TeamItem";

const Team = () => {
  return (
    <>
      <Container>
        <h1 className="text-secondary text-center display-2 shadow">
          Our Team
        </h1>

        <Row className="d-flex flex-wrap justify-content-around my-2">
          {teamdata.map((td) => (
            <Col md={4}>
              <TeamItem teamdata={td} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Team;
