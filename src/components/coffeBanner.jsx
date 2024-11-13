/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect, useRef } from "react";
import coffee from "../assets/coffee-mug.png";
import ReactPlayer from "react-player";

import "../coffe.css";

function CoffeBanner({ scrollPosition, theme }) {
  const [popUp, setPopUp] = useState(false);
  const videoUrl = `https://www.youtube.com/watch?v=M_iCO6DV0_c`;

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
      <div
        className={
          theme
            ? "container-coffe-dark color-text-white"
            : "container-coffe color-text-dark"
        }
      >
        <img src={coffee} className="coffee-img"></img>
        <h3 className="pa" ref={(el) => (boxesRef.current[0] = el)}>
          Let's chat.
        </h3>
        <p className="text1 pa" ref={(el) => (boxesRef.current[1] = el)}>
          want to see more work?
          <br className="d-mobile" /> talk about code?
          <br />
          Curious about the intriguing history <br className="d-mobile" />{" "}
          behind my journey into coding?
        </p>

        <a
          href="https://github.com/lucciii33"
          target="_blank"
          rel="noreferrer"
          className={
            !theme ? "a_tag-decoration-dark pa " : "a_tag-decoration pa"
          }
          ref={(el) => (boxesRef.current[2] = el)}
        >
          <span className="separation">Github</span>
        </a>
        <a
          href="https://www.linkedin.com/in/angelomaiele/"
          target="_blank"
          rel="noreferrer"
          className={
            !theme ? "a_tag-decoration-dark pa " : "a_tag-decoration pa"
          }
          ref={(el) => (boxesRef.current[3] = el)}
        >
          <span>Linkedin</span>
        </a>
        <p className="LastNews" onClick={() => setPopUp(!popUp)}>
          Last news
        </p>

        {popUp ? (
          <>
            <div className="overlay" onClick={() => setPopUp(false)}></div>
            <div className="popup">
              <div className="modal">
                <div>
                  <div className="xelement" onClick={() => setPopUp(false)}>
                    X
                  </div>
                  <ReactPlayer url={videoUrl} />
                  <p className="p-4">
                    This app has been made with ReactJs, Redux, Bootstrap for
                    the front end and Ruby for the backend
                  </p>
                </div>
              </div>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default CoffeBanner;
