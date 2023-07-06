import { useState, useEffect, useRef } from "react";
import coffee from "../assets/coffee-mug.png";
import ReactPlayer from 'react-player'

import "../coffe.css";

function CoffeBanner({ scrollPosition }) {
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
      <div className="container-coffe">
        <img src={coffee} className="coffee-img"></img>
        <h3 className="pa" ref={(el) => (boxesRef.current[0] = el)}>
          Let's chat.
        </h3>
        <p className="text1 pa" ref={(el) => (boxesRef.current[1] = el)}>
          want to see more work?
          <br className="d-mobile" /> talk about code?
          <br />
          tell me all about the <br className="d-mobile" />
          latest conspiracy theories?
        </p>

        <a
          href="https://github.com/lucciii33"
          target="_blank"
          className={
            scrollPosition < 2 ? "a_tag-decoration pa" : "a_tag-decoration2 pa"
          }
          ref={(el) => (boxesRef.current[2] = el)}
        >
          <span className="separation">Github</span>
        </a>
        <a
          href="https://www.linkedin.com/in/angelomaiele/"
          target="_blank"
          className={
            scrollPosition < 2 ? "a_tag-decoration pa" : "a_tag-decoration2 pa"
          }
          ref={(el) => (boxesRef.current[3] = el)}
        >
          <span>Linkedin</span>
        </a>
        <p onClick={() => setPopUp(!popUp)}>Last news</p>

        {popUp ? (
          <div className="popup">
            
            <div className="modal">
            <div className="xelement" onClick={() => setPopUp(false)}>X</div>
              <ReactPlayer url={videoUrl} />
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default CoffeBanner;
