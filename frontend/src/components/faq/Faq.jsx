import React from "react";
import { Accordion, Container } from "react-bootstrap";
import faqdata from "../../faqdata";
import Accord from "./Accord";

const Faq = () => {
  return (
    <>
      <Container id="faq">
        <h1 className="text-primary text-center display-2  shead" style={{ marginBottom:"4rem"}} >FAQs</h1>
        <Accordion>
          {faqdata.map((q) => (
            <Accord key={q._id} q={q} />
          ))}
        </Accordion>
      </Container>
    </>
  );
};

export default Faq;
