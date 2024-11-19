import { useState, useEffect } from "react";
import hand from "./assets/victory.png";
import email from "./assets/email.png";
import arrow from "./assets/arrow.png";
import "./App.css";
import Projects from "./projects";
import CoffeBanner from "./components/coffeBanner";
import TitleChange from "./components/TitleChange";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [theme, setTheme] = useState(false);
  const [lenguaje, setLenguaje] = useState("en");
  console.log("lenguaje", lenguaje);

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

  const changeTheme = () => {
    setTheme(!theme);
  };

  const changeLenguaje = () => {
    setLenguaje((prev) => (prev === "en" ? "es" : "en"));
  };

  return (
    <>
      <div
        className={
          scrollPosition < 2
            ? theme
              ? "container-dark-them"
              : "container"
            : theme
            ? "container-2-dark-them"
            : "container2"
        }
      >
        <div className="rigth-position ">
          <div className="mar-rig-circle">
            <div
              className={
                !theme
                  ? "circle-icon flex-center-ali"
                  : "circle-icon-dark-them flex-center-ali"
              }
            >
              {!theme ? (
                <IoSunnyOutline className="icon-size" onClick={changeTheme} />
              ) : (
                <IoMoonOutline
                  className="icon-size-white"
                  onClick={changeTheme}
                />
              )}
            </div>
          </div>
          <div className="">
            <div
              className={
                !theme
                  ? "circle-icon flex-center-ali"
                  : "circle-icon-dark-them flex-center-ali"
              }
            >
              {lenguaje === "en" ? (
                <span
                  className="icon-size"
                  onClick={changeLenguaje}
                  role="img"
                  aria-label="USA"
                >
                  🇺🇸
                </span>
              ) : (
                <span
                  className="icon-size-white"
                  onClick={changeLenguaje}
                  role="img"
                  aria-label="Spain"
                >
                  🇪🇸
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="box1">
          <div className="flex">
            <h4
              className={
                !theme
                  ? "test bio color-text-dark"
                  : "test bio color-text-white"
              }
            >
              Hello
            </h4>
            <img src={hand} className="hand-image"></img>
          </div>
          <div className="">
            <div className="max-width-banner-1">
              <p
                className={
                  !theme ? "text1 color-text-dark" : "text1 color-text-white"
                }
              >
                I&apos;m Angelo Maiele, a Miami-based software engineer with 3+
                years of experience, specializing in full-stack development and
                UI/UX design. Proficient in{" "}
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
              <p
                className={
                  !theme ? "text1 color-text-dark" : "text1 color-text-white"
                }
              >
                With dual degrees in Computer Science and Hospitality
                Management, I excel in organizing teams and managing clients
                effectively. Explore my portfolio to witness the impactful
                projects I&apos;ve delivered.
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
              <h3
                className={
                  !theme ? "test2 color-text-dark" : "test2 color-text-white"
                }
              >
                Contact me
              </h3>
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
        <Projects
          scrollPosition={scrollPosition}
          theme={theme}
          lenguaje={lenguaje}
        />
        <CoffeBanner
          scrollPosition={scrollPosition}
          theme={theme}
          lenguaje={lenguaje}
        />
        <TitleChange />
      </div>
    </>
  );
}

export default App;
