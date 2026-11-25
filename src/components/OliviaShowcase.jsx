import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import oliviaImg from "../assets/work/oliviatools.jpg";
import { LINKS } from "../content";
import { useInView, prefersReducedMotion } from "../hooks/useInView";
import Reveal from "./Reveal";

const LINE_MS = 430; // time between console lines
const HOLD_MS = 2600; // pause on a finished demo before moving on

const MARKS = {
  cmd: "$",
  info: "→",
  pass: "✓",
  fail: "✗",
  note: "◆",
  done: "●",
  doneFail: "●",
};

function OliviaShowcase({ t }) {
  const demos = t.demos;
  const reduced = prefersReducedMotion();
  const [active, setActive] = useState(0);
  const [shown, setShown] = useState(0);
  const [auto, setAuto] = useState(!reduced);
  const [consoleRef, inView] = useInView({ threshold: 0.35, rootMargin: "0px", once: false });
  const tabRefs = useRef([]);

  const demo = demos[active];
  const total = demo.lines.length;
  const visible = reduced ? total : shown;

  // Play the active demo line by line while it is on screen.
  useEffect(() => {
    if (reduced || !inView) return undefined;
    let i = 0;
    setShown(0);
    const id = setInterval(() => {
      i += 1;
      setShown(i);
      if (i >= total) clearInterval(id);
    }, LINE_MS);
    return () => clearInterval(id);
  }, [active, inView, reduced, total]);

  // Move to the next demo after a pause, until someone picks a tab.
  useEffect(() => {
    if (!auto || !inView || shown < total) return undefined;
    const id = setTimeout(() => setActive((a) => (a + 1) % demos.length), HOLD_MS);
    return () => clearTimeout(id);
  }, [auto, inView, shown, total, demos.length]);

  const select = (i) => {
    setAuto(false);
    setActive(i);
  };

  const onTabKey = (e, i) => {
    const dir = e.key === "ArrowDown" || e.key === "ArrowRight" ? 1 : e.key === "ArrowUp" || e.key === "ArrowLeft" ? -1 : 0;
    if (!dir) return;
    e.preventDefault();
    const next = (i + dir + demos.length) % demos.length;
    select(next);
    tabRefs.current[next]?.focus();
  };

  const cycleMs = total * LINE_MS + HOLD_MS;

  return (
    <article className="feature feature-olivia">
      <div className="olivia-grid">
        <Reveal className="feature-text">
          <p className="feature-kind">
            {t.kind}, {t.year}
          </p>
          <h3 className="feature-title">OliviaTools</h3>
          <p className="olivia-lead">{t.lead}</p>
          <p className="feature-summary">{t.summary}</p>

          <div className="olivia-tabs" role="tablist" aria-label={t.tabsLabel} aria-orientation="vertical">
            {demos.map((d, i) => {
              const selected = i === active;
              return (
                <button
                  key={d.id}
                  ref={(el) => (tabRefs.current[i] = el)}
                  type="button"
                  role="tab"
                  id={`olivia-tab-${d.id}`}
                  aria-selected={selected}
                  aria-controls="olivia-panel"
                  tabIndex={selected ? 0 : -1}
                  className={`olivia-tab${selected ? " is-active" : ""}`}
                  onClick={() => select(i)}
                  onKeyDown={(e) => onTabKey(e, i)}
                >
                  <span className="olivia-tab-name">{d.tab}</span>
                  <span className="olivia-tab-desc">{d.desc}</span>
                  {selected && auto && (
                    <span
                      key={`${active}-${inView}`}
                      className={`olivia-tab-progress${inView ? "" : " is-paused"}`}
                      style={{ animationDuration: `${cycleMs}ms` }}
                      aria-hidden="true"
                    />
                  )}
                </button>
              );
            })}
          </div>

          <a className="btn btn-primary" href={LINKS.olivia} target="_blank" rel="noreferrer">
            {t.cta}
          </a>
        </Reveal>

        <Reveal delay={2} className="olivia-stage">
          <div
            ref={consoleRef}
            className="console"
            role="tabpanel"
            id="olivia-panel"
            aria-labelledby={`olivia-tab-${demo.id}`}
          >
            <div className="console-bar">
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span className="console-title">{demo.window}</span>
              <span className={`console-status${visible >= total ? " is-done" : ""}`} aria-hidden="true">
                {visible >= total ? t.finished : t.running}
              </span>
            </div>
            <ol className="console-body" key={`${demo.id}`}>
              {demo.lines.map((line, i) => (
                <li
                  key={i}
                  className={`cl cl-${line.k}${i < visible ? " is-shown" : ""}`}
                >
                  <span className="cl-mark" aria-hidden="true">
                    {MARKS[line.k]}
                  </span>
                  <span className="cl-text">{line.text}</span>
                  {line.meta && <span className="cl-meta">{line.meta}</span>}
                </li>
              ))}
              {visible < total && !reduced && (
                <li className="cl cl-caret is-shown" aria-hidden="true">
                  <span className="caret" />
                </li>
              )}
            </ol>
          </div>
          <p className="console-note">{t.demoNote}</p>
        </Reveal>
      </div>

      <Reveal as="a" delay={1} className="feature-shot olivia-shot" href={LINKS.olivia} target="_blank" rel="noreferrer" tabIndex={-1} aria-hidden="true">
        <span className="shot-chrome">
          <span />
          <span />
          <span />
          <span className="shot-url">oliviatools.co</span>
        </span>
        <img src={oliviaImg} alt="" width="1440" height="900" loading="lazy" />
      </Reveal>
    </article>
  );
}

OliviaShowcase.propTypes = {
  t: PropTypes.object.isRequired,
};

export default OliviaShowcase;
