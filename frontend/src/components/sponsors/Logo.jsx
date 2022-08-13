import React from "react";
import "./logo.css";

const Logo = ({ sponsor }) => {
  return (
    <>
      <div className="Sponsor">
        <a href={sponsor.link} rel="noreferrer" target="_blank">
          {" "}
          <img src={sponsor.image} alt={sponsor.name}></img>{" "}
        </a>
      </div>
    </>
  );
};

export default Logo;
