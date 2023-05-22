import { useState } from "react";
import arrow2 from "../assets/arrow2.png"

import "../projects.css";

function WorkCard({
  title,
  description,
  time,
  mockup1,
  link,
  frontend,
  backend,
  scrollPosition
}) {
  return (
    <>
      <div className="separation">
        <div className="padding-letters">
          <h2>{title}</h2>
          <p className="text1">{description}</p>
        </div>

        <div className="workCard-image">
          <img src={mockup1} className="workCard-image"></img>
        </div>

        <div className="flex-2">
          <div>
            <h2>timeline</h2>
            <p className="text1">{time}</p>
            <h2>Lenguajes</h2>
            <p className="text1">
              <span className="bold">frontend: </span>
              {frontend} <br />
              <span  className="bold">backend: </span>
              {backend}
            </p>
          </div>

          <div className="max-width">
            <h2>overview</h2>
            <p className="text1">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.{" "}
            </p>
            <a href={link} target="_blank" className={scrollPosition < 2 ? "linkProject" : "linkProject2"}>
              check project<img src={arrow2} className="arrow2"></img>
            </a>
          </div>
        </div>
        <br />
        <br />
        <br />
      </div>
    </>
  );
}

export default WorkCard;
