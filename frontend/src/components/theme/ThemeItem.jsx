import React from "react";
import { Card } from "react-bootstrap";
import "./theme.css";

const ThemeItem = ({ td }) => {
  return (
    <Card className="themeBox">
      <Card.Img variant="top" src={td.srcx} />
      <Card.Body>
        <Card.Title
          className="text-center text-info"
          style={{ fontSize: "1.6rem" }}
        >
          {td.name}
        </Card.Title>
      </Card.Body>
    </Card>
  );
};

export default ThemeItem;
