import { useEffect, useRef } from "react";
import arrow2 from "../assets/Arrow2.png";

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
}) {
  const boxesRef = useRef([]);

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

  return (
    <>
      <div className="separation margin-auto" id="animatedText">
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
              timeline
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
            <h2 ref={(el) => (boxesRef.current[6] = el)}>overview</h2>
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
