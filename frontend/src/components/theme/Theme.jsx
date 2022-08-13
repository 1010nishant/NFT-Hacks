import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import themedata from "../../themedata";
import ThemeItem from "./ThemeItem";

const Theme = () => {
  return (
    <>
      <Container id="theme">
        <h1 className="text-primary text-center display-2  shead">Themes</h1>
        <Row>
          {themedata.map((td) => (
            <Col lg={4} md={6} key={td._id}>
              <ThemeItem td={td} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Theme;
