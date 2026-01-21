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
              {lenguaje === "en" ? "Hello" : "Hola"}
            </h4>
            <img src={hand} className="hand-image"></img>
          </div>
          <div className="">
            {lenguaje === "en" ? (
              <div className="max-width-banner-1">
                <p
                  className={
                    !theme ? "text1 color-text-dark" : "text1 color-text-white"
                  }
                >
                  I&apos;m Angelo Maiele, a Madrid-based Senior QA Automation
                  Engineer with 5+ years of specialized experience in fintech,
                  delivering scalable test automation solutions and ensuring
                  product quality across the entire SDLC. I specialize in
                  building robust E2E and API test frameworks using
                  <span className="text-bold">
                    Cypress, Playwright, Jest, and Postman
                  </span>
                  , and integrating automated testing into modern
                  <span className="text-bold"> CI/CD pipelines</span>.
                </p>

                <p
                  className={
                    !theme ? "text1 color-text-dark" : "text1 color-text-white"
                  }
                >
                  I have a strong background in both frontend and backend
                  testing, validating
                  <span className="text-bold">
                    REST APIs, databases (PostgreSQL, MongoDB), and complex user
                    workflows
                  </span>
                  . With experience in full-stack development, like react,
                  python, ruby on rails, I bring a deep understanding of
                  application architecture that enables more effective test
                  design, improved test coverage, and faster release cycles.
                </p>
              </div>
            ) : (
              <div className="max-width-banner-1">
                <p
                  className={
                    !theme ? "text1 color-text-dark" : "text1 color-text-white"
                  }
                >
                  Soy Angelo Maiele, Senior QA Automation Engineer con base en
                  Madrid y más de 5 años de experiencia especializada en
                  fintech, desarrollando soluciones de automatización escalables
                  y asegurando la calidad del producto a lo largo de todo el
                  SDLC. Estoy especializado en la creación de frameworks de
                  pruebas E2E y API utilizando
                  <span className="text-bold">
                    Cypress, Playwright, Jest y Postman
                  </span>
                  , así como en la integración de pruebas automatizadas en
                  <span className="text-bold"> pipelines de CI/CD</span>.
                </p>

                <p
                  className={
                    !theme ? "text1 color-text-dark" : "text1 color-text-white"
                  }
                >
                  Tengo una sólida experiencia en testing frontend y backend,
                  validando
                  <span className="text-bold">
                    APIs REST, bases de datos (PostgreSQL, MongoDB) y flujos de
                    usuario complejos
                  </span>
                  . Además, mi experiencia como desarrollador full-stack en
                  react, python, ruby on rails me permite comprender la
                  arquitectura del código en profundidad, diseñar mejores tests,
                  aumentar la cobertura y reducir incidencias en producción.
                </p>
              </div>
            )}
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
                {lenguaje === "en" ? "Contact me" : "Contactame"}
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
