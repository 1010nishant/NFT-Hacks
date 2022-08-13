import React from "react";
import { Accordion } from "react-bootstrap";

const Accord = ({ q }) => {
  return (
    <Accordion.Item eventKey={q._id}>
      <Accordion.Header>{q.question}</Accordion.Header>
      <Accordion.Body>{q.answer}</Accordion.Body>
    </Accordion.Item>
  );
};

export default Accord;
