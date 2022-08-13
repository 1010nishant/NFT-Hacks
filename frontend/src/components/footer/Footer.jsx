import { React, useEffect } from "react";
import "./Footer.css";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
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
      <div className="d-flex justify-content-center my-5">
        <div
          class="apply-button"
          data-hackathon-slug="nfthacks"
          data-button-theme="light"
          style={{ height: "44px", width: "312px" }}
        ></div>
      </div>
      <footer>
        <Container fluid className="footer">
          <div>
            <span>Copywrite &copy; Social</span>
          </div>
          <div>
            Connect with Us{" "}
            <a href="https://www.linkedin.com/company/getsocialnow/">
              <FontAwesomeIcon
                icon={faLinkedin}
                style={{ height: "1rem", width: "1rem", color: "lightblue" }}
              ></FontAwesomeIcon>
            </a>
            {"  "}
            <a href="https://getsocialnow.co/">
              <FontAwesomeIcon
                icon={faLink}
                style={{ height: "1rem", width: "1rem", color: "lightblue" }}
              ></FontAwesomeIcon>
            </a>
          </div>
          <div className="dev">
            <a href="https://www.linkedin.com/in/ritika-bhatt-748a621a8">
              Made with ❤️
            </a>
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
