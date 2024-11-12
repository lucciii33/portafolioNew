import { useState, useEffect } from "react";
import hand from "./assets/victory.png";
import email from "./assets/email.png";
import arrow from "./assets/arrow.png";
import "./App.css";
import Projects from "./projects";
import CoffeBanner from "./components/coffeBanner";
import TitleChange from "./components/TitleChange";

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  console.log(scrollPosition);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (scrollPosition < 5) {
    console.log("menor a 5 deberia ser rojo");
  } else {
    console.log("mayor a 5 deberia ser azul");
  }

  return (
    <>
      <div className={scrollPosition < 2 ? "container" : "container2"}>
        <div className="box1">
          <div className="flex">
            <h4 className="test bio">Hello</h4>
            <img src={hand} className="hand-image"></img>
          </div>
          <div className="">
            <div className="max-width-banner-1">
              <p className="text1">
                I'm Angelo Maiele, a Miami-based software engineer with 3+ years
                of experience, specializing in full-stack development and UI/UX
                design. Proficient in{" "}
                <span className="text-bold">
                  {" "}
                  HTML, CSS, JavaScript, React.js, Next.js, Node.js, Python,
                  Ruby, and Rails{" "}
                </span>
                , I create seamless user experiences for complex systems. My
                expertise also includes databases like{" "}
                <span className="text-bold">PostgreSQL and MongoDB </span>, and
                softwares like{" "}
                <span className="text-bold">
                  photoshop, figma and ilustrator
                </span>
                .
              </p>
              <p className="text1">
                With dual degrees in Computer Science and Hospitality
                Management, I excel in organizing teams and managing clients
                effectively. Explore my portfolio to witness the impactful
                projects I've delivered.
              </p>
            </div>
          </div>
          <div className="flex top-margin no-decoration">
            <a
              className={
                scrollPosition < 2
                  ? "under-border no-decoration"
                  : "under-border-red no-decoration"
              }
              href="https://www.linkedin.com/in/angelo-maiele-68626333/details/experience/"
              target="_blank"
              rel="noreferrer"
            >
              <h3 className="test2">Contact me</h3>
              <img src={email} className="hand-image"></img>
            </a>
          </div>
        </div>

        <div className="box2">
          <div
            className={scrollPosition < 2 ? "circle-hover" : "circle-hover2"}
          >
            <a href="#projects-main">
              <img src={arrow} className="arrow-image"></img>
            </a>
          </div>
        </div>
        <Projects scrollPosition={scrollPosition} />
        <CoffeBanner scrollPosition={scrollPosition} />
        <TitleChange />
      </div>
    </>
  );
}

export default App;
