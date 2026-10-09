import { useState, useEffect } from "react";
import hand from "./assets/victory.png";
import email from "./assets/email.png";
import arrow from "./assets/arrow.png";
import "./App.css";
import Projects from "./projects";
import News from "./components/news";
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
                  Engineer and SDET with 6+ years of experience building
                  scalable quality engineering solutions across fintech,
                  AI-powered products, APIs, and complex distributed systems. I
                  specialize in end-to-end, API, backend, and AI/LLM testing
                  using
                  <span className="text-bold">
                    Playwright, Cypress, Jest, Postman/Newman, SQL, and k6
                  </span>
                  , plus mobile UI automation with
                  <span className="text-bold"> Maestro</span>.
                </p>

                <p
                  className={
                    !theme ? "text1 color-text-dark" : "text1 color-text-white"
                  }
                >
                  I design QA strategies and automation frameworks across the
                  entire SDLC —
                  <span className="text-bold">
                    CI/CD quality gates, GitHub Actions, scheduled regression
                    suites, Slack reporting, and load testing
                  </span>
                  — along with SQL-based data integrity and health checks for
                  APIs, SFTP, cron jobs, and ingestion pipelines. I also test AI
                  systems:
                  <span className="text-bold">
                    LLM evaluation with LangSmith, MCP servers, tool-calling, and
                    AI agents
                  </span>
                  . My full-stack background and security-focused exploratory
                  mindset help me find high-impact defects and work closely with
                  engineering teams.
                </p>
              </div>
            ) : (
              <div className="max-width-banner-1">
                <p
                  className={
                    !theme ? "text1 color-text-dark" : "text1 color-text-white"
                  }
                >
                  Soy Angelo Maiele, Senior QA Automation Engineer y SDET con
                  base en Madrid y más de 6 años de experiencia construyendo
                  soluciones escalables de quality engineering en fintech,
                  productos con IA, APIs y sistemas distribuidos complejos.
                  Estoy especializado en testing end-to-end, de API, backend e
                  IA/LLM con
                  <span className="text-bold">
                    Playwright, Cypress, Jest, Postman/Newman, SQL y k6
                  </span>
                  , además de automatización UI mobile con
                  <span className="text-bold"> Maestro</span>.
                </p>

                <p
                  className={
                    !theme ? "text1 color-text-dark" : "text1 color-text-white"
                  }
                >
                  Diseño estrategias de QA y frameworks de automatización en todo
                  el SDLC —
                  <span className="text-bold">
                    quality gates en CI/CD, GitHub Actions, suites de regresión
                    programadas, reportes en Slack y pruebas de carga
                  </span>
                  — junto con validación de integridad de datos vía SQL y health
                  checks para APIs, SFTP, cron jobs y pipelines de ingesta.
                  También pruebo sistemas de IA:
                  <span className="text-bold">
                    evaluación de LLMs con LangSmith, servidores MCP,
                    tool-calling y agentes de IA
                  </span>
                  . Mi background full-stack y mi mentalidad de testing
                  exploratorio y de seguridad me permiten encontrar defectos de
                  alto impacto y colaborar de cerca con ingeniería.
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
        <News theme={theme} lenguaje={lenguaje} />
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
