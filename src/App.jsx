import { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";
import Runner from "./components/Runner";
import Work from "./components/Work";
import TitleChange from "./components/TitleChange";
import Reveal from "./components/Reveal";
import { content, LINKS } from "./content";

const TOOLS = [
  "Playwright", "Cypress", "Maestro", "k6", "Postman", "Newman", "Jest", "SQL",
  "LangSmith", "MCP", "GitHub Actions", "Claude", "React", "Node.js", "Rails", "FastAPI",
];

/** Splits the headline into words that rise in one after another. */
function AnimatedTitle({ text }) {
  return (
    <h1 aria-label={text}>
      {text.split(" ").map((word, i) => (
        <Fragment key={`${word}-${i}`}>
          {i > 0 && " "}
          <span className="w" aria-hidden="true">
            <span style={{ "--i": i }}>{word}</span>
          </span>
        </Fragment>
      ))}
    </h1>
  );
}

AnimatedTitle.propTypes = { text: PropTypes.string.isRequired };

const read = (key) => {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
};
const write = (key, value) => {
  try {
    localStorage.setItem(key, value);
  } catch {
    /* storage unavailable: preference just won't persist */
  }
};

const initialLang = () => {
  const saved = read("lang");
  return saved === "es" ? "es" : "en";
};

function App() {
  const [lang, setLang] = useState(initialLang);
  const [theme, setTheme] = useState(
    () => document.documentElement.getAttribute("data-theme") || "dark"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    write("theme", next);
  };

  const toggleLang = () => {
    const next = lang === "en" ? "es" : "en";
    setLang(next);
    write("lang", next);
  };

  const t = content[lang];

  return (
    <>
      <a className="skip" href="#top">
        {lang === "es" ? "Saltar al contenido" : "Skip to content"}
      </a>

      <header className="topbar">
        <div className="wrap topbar-inner">
          <a className="wordmark" href="#top">
            Angelo Maiele
          </a>
          <nav className="nav" aria-label="Main">
            <a href="#work">{t.nav.work}</a>
            <a href="#toolkit">{t.nav.toolkit}</a>
            <a href="#contact">{t.nav.contact}</a>
          </nav>
          <div className="controls">
            <button
              type="button"
              className="ctrl"
              onClick={toggleLang}
              aria-label={t.langLabel}
              title={t.langLabel}
            >
              {lang === "en" ? "ES" : "EN"}
            </button>
            <button
              type="button"
              className="ctrl"
              onClick={toggleTheme}
              aria-label={t.themeLabel[theme]}
              title={t.themeLabel[theme]}
            >
              {theme === "dark" ? <IoSunnyOutline /> : <IoMoonOutline />}
            </button>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-glow" aria-hidden="true" />
          <div className="wrap hero-grid">
            <div className="hero-text">
              <AnimatedTitle key={lang} text={t.hero.title} />
              <p className="hero-role">{t.hero.role}</p>
              <p className="hero-bio">{t.hero.bio}</p>
              <div className="btn-row">
                <a className="btn btn-primary" href={LINKS.linkedin} target="_blank" rel="noreferrer">
                  {t.hero.primary}
                </a>
                <a className="btn btn-ghost" href={LINKS.github} target="_blank" rel="noreferrer">
                  {t.hero.secondary}
                </a>
              </div>
            </div>
            <Runner t={t.runner} />
          </div>
        </section>

        <aside className="newsline">
          <div className="wrap newsline-inner">
            <span className="newsline-dot" aria-hidden="true" />
            <time dateTime="2026-10">{t.news.date}</time>
            <p>
              {t.news.text}{" "}
              <a href={LINKS.aieraNews} target="_blank" rel="noreferrer">
                {t.news.link}
              </a>
            </p>
          </div>
        </aside>

        <Work t={t.work} />

        <div className="marquee" aria-hidden="true">
          <div className="marquee-track">
            {[...TOOLS, ...TOOLS].map((tool, i) => (
              <span key={i}>{tool}</span>
            ))}
          </div>
        </div>

        <section className="toolkit section" id="toolkit" aria-labelledby="toolkit-heading">
          <div className="wrap">
            <header className="section-head">
              <Reveal as="h2" id="toolkit-heading">
                {t.toolkit.heading}
              </Reveal>
              <Reveal as="p" delay={1} className="section-intro">
                {t.toolkit.intro}
              </Reveal>
            </header>
            <dl className="toolkit-grid">
              {t.toolkit.groups.map((g, i) => (
                <Reveal key={g.name} delay={i % 3} className="toolkit-group">
                  <dt>{g.name}</dt>
                  {g.items.map((item) => (
                    <dd key={item}>{item}</dd>
                  ))}
                </Reveal>
              ))}
            </dl>
          </div>
        </section>

        <section className="contact" id="contact" aria-labelledby="contact-heading">
          <div className="wrap">
            <Reveal as="h2" id="contact-heading">
              {t.contact.heading}
            </Reveal>
            <Reveal as="p" delay={1} className="contact-text">
              {t.contact.text}
            </Reveal>
            <Reveal delay={2} className="btn-row">
              <a className="btn btn-invert" href={LINKS.linkedin} target="_blank" rel="noreferrer">
                {t.contact.primary}
              </a>
              <a className="btn btn-invert-ghost" href={LINKS.github} target="_blank" rel="noreferrer">
                {t.contact.secondary}
              </a>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap">
          <p>
            © {new Date().getFullYear()} {t.contact.footer}
          </p>
        </div>
      </footer>

      <TitleChange />
    </>
  );
}

export default App;
