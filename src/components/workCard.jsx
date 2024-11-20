import { useEffect, useRef } from "react";
import arrow2 from "../assets/Arrow2.png";
import PropTypes from "prop-types";

import "../projects.css";

function WorkCard({
  title,
  description,
  time,
  mockup1,
  link,
  frontend,
  backend,
  scrollPosition,
  theme,
  lenguaje,
}) {
  const boxesRef = useRef([]);

  console.log("lenguaje desde la carta", lenguaje);

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        } else {
          entry.target.classList.remove("animate");
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.8,
    };

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );

    boxesRef.current.forEach((box) => {
      observer.observe(box);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  console.log("themeeee from card", theme);

  return (
    <>
      <div
        className={
          theme
            ? "separation margin-auto color-text-white"
            : "separation margin-auto color-text-dark"
        }
        id="animatedText"
      >
        <div className="padding-letters">
          <h2 className="pa" ref={(el) => (boxesRef.current[0] = el)}>
            {title}
          </h2>
          <p className="text1 pa" ref={(el) => (boxesRef.current[1] = el)}>
            {/* {description} */}
          </p>
        </div>

        <div className="workCard-image">
          <img src={mockup1} className="workCard-image"></img>
        </div>

        <div className="flex-2">
          <div>
            <h2 className="pa" ref={(el) => (boxesRef.current[2] = el)}>
              {lenguaje === "en" ? "timeline" : "Tiempo del Projecto"}
            </h2>
            <p className="text1 pa" ref={(el) => (boxesRef.current[3] = el)}>
              {time}
            </p>
            <h2 ref={(el) => (boxesRef.current[4] = el)}>Lenguajes</h2>
            <p
              className="text1 pa m-test"
              ref={(el) => (boxesRef.current[5] = el)}
            >
              <span className="bold pa">frontend: </span>
              {frontend} <br />
              <span className="bold pa">backend: </span>
              {backend}
            </p>
          </div>

          <div className="max-width mar-left">
            <h2 ref={(el) => (boxesRef.current[6] = el)}>
              {lenguaje === "en" ? "Overview" : "Intro"}
            </h2>
            <p className="text1 pa" ref={(el) => (boxesRef.current[7] = el)}>
              {" "}
              {description}.{" "}
            </p>
            <a
              href={link}
              target="_blank"
              className={
                scrollPosition < 2 ? "linkProject pa" : "linkProject2 pa"
              }
              ref={(el) => (boxesRef.current[8] = el)}
              rel="noreferrer"
            >
              {lenguaje === "en" ? "Check project" : "Mira el projecto"}
              <img src={arrow2} className="arrow2"></img>
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

WorkCard.propTypes = {
  description: PropTypes.string,
  time: PropTypes.string,
  mockup1: PropTypes.string,
  link: PropTypes.string,
  frontend: PropTypes.string,
  backend: PropTypes.string,
  scrollPosition: PropTypes.number,
  title: PropTypes.string,
  theme: PropTypes.bool.isRequired,
  lenguaje: PropTypes.string,
};

export default WorkCard;
