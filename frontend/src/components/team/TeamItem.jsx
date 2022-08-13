import React from "react";
import "./TeamItem.css";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const TeamItem = ({ teamdata }) => {
  return (
    <>
      <Card className="box">
        <Card.Img className="img" variant="top" src={teamdata.image} />
        <Card.Body className="text-center">
          <Card.Title>{teamdata.name}</Card.Title>
          <Card.Text>{teamdata.role}</Card.Text>
          <Card.Link href={teamdata.github}>
            <FontAwesomeIcon
              icon={faGithub}
              style={{ height: "1.5rem", width: "1.5rem" }}
            ></FontAwesomeIcon>
          </Card.Link>
          <Card.Link href={teamdata.linkedin}>
            <FontAwesomeIcon
              icon={faLinkedin}
              style={{ height: "1.5rem", width: "1.5rem" }}
            ></FontAwesomeIcon>
          </Card.Link>
        </Card.Body>
      </Card>
    </>
  );
};

export default TeamItem;
