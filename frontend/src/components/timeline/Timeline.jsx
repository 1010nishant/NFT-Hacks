import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import timeline from "../../timeline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { Container } from "react-bootstrap";

const Timeline = () => {
  return (
    <>
      <Container id="timeline" style={{ marginBottom: "2rem" }}>
        <h1 className="text-primary text-center display-2  shead">Timeline</h1>
        <VerticalTimeline lineColor="black">
          {timeline.map((time) => (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#B789FC", color: "black" }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(183, 137, 252)",
              }}
              date={time.date}
              iconStyle={{ background: "#B789FC", color: "black" }}
              icon={<FontAwesomeIcon icon={faRocket}></FontAwesomeIcon>}
              key={time._id}
            >
              <h3 className="vertical-timeline-element-subtitle">
                {time.title}
              </h3>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </Container>
    </>
  );
};

export default Timeline;
